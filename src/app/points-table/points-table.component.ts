import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventGroup} from "../ranking-event";
import { Rating } from "../rating";
import { FinishPositionLabeler } from "../finish-positions";
import { AppState } from "../app-state";
import { DrawSizeRating } from "../draw-size-rating";
import { EventStructureDialog } from "../event-structure-dialog/event-structure.component";
import { MatDialog } from "@angular/material";

// The round over round reduction in points.  So, finalist gets .6 of winner,
// semifinalist gets .6 of finalist and so on.
const r = .6;

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {
  @Input() eg: EventGroup;
  @Input() ratingFactor:number;
  @Input() year;
  @Input() isJuniorRegional:boolean;

  // For calculating ranking points.  Ratings are expressed as a factor of
  // the baseline. The baseline differs between ranking groups, so we make
  // a note of the baseline points of the selected ranking group.
  baselinePoints:number;

  // The Magic Finishing Position - the user can enter whatever finish
  // position she wants in order to see points for unusual finishing
  // positions. For example, with sufficient playoffs, a player could
  // finish 23rd in a draw with 52 players.
  magicFP:number;

  // The Magic Draw size - the user can see the points allocation for any
  // arbitrary draw size
  magicDS: number;

  // Some points tables have events on the top row, others have draw sizes
  // This distinguishes the two cases
  isDrawSizeTable:boolean;

  // And if it is a draw size table, we need to know the draw size at which the
  // winner gets 100% of the rated points.
  baseDrawSize: number;

  constructor(public appState: AppState,
              public fpLabeler: FinishPositionLabeler,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.eg) {
      // The points table component uses draw size variant if there is exactly one RankedEvent
      // in rankedEvents AND that event has a drawSizeRating.
      this.isDrawSizeTable = false;
      if (this.eg.rankingEvents.length == 1 &&
        this.eg.rankingEvents[0].drawSizeRating) {
        this.isDrawSizeTable = true;
        let drawSizeRating: DrawSizeRating = this.eg.rankingEvents[0].drawSizeRating;
        this.baseDrawSize = drawSizeRating.baseDrawSize;
        // for the "Magic" draw size choose double the largest draw size to display
        this.magicDS = 2 * drawSizeRating.displayedDrawSizes[drawSizeRating.displayedDrawSizes.length - 1];
      }

      // For the "Magic" finishing position choose double the
      // finishing last finishing position for the eventGroup.
      this.magicFP = 2 * this.eg.finishPositionsToDisplay[this.eg.finishPositionsToDisplay.length - 1];


      // Fetch the baseline points from the selected ranking group.
      if (this.appState.selectedRankingGroup) {
        this.baselinePoints = this.appState.selectedRankingGroup.baselinePoints;
      }
    }
  }

  // Point calculation for most events
  calc(eventRating:Rating, fp:number):number {
    return this.baselinePoints *
      this.ratingFactor *
      eventRating.getRating(this.year) *
      Math.pow(r, Math.log2(fp));
  }

  /**
   * Point calculation for draw-size events
   *
   * A tournament where drawSize = baseDrawSize has a ratings adjustment factor of 1
   * Larger draws - higher adjustment factor.  Smaller draws - lower adjustment.
   * The following formula makes it so that the winner points in a draw of 16 are the same as
   * runner up points in a draw of 32.
   */
  ds_calc(drawSize, eventRating:Rating, fp:number):number {
    let dsAdjustment = Math.pow(r,Math.log(this.baseDrawSize)/Math.log(2) - Math.log(drawSize)/Math.log(2));
    return this.calc(eventRating,fp) * dsAdjustment;
  }

  onShowEventStructureDialog() {
    let dialogRef = this.dialog.open(EventStructureDialog, {
      width: '800px',
      data: {eventGroup: this.eg}
    })
  }
}
