/**
 * This is a single column points table designed to fit on a phone.
 * It shows the point awards for a single type event.
 */
import {Component, OnInit, Input, OnDestroy, OnChanges} from '@angular/core';
import {EventGroup, RankingEvent} from '../../utils/ranking-event';
import {FinishPositionLabeler} from '../../utils/finish-positions';
import {AppState} from '../../utils/app-state';
import {AgeGroup} from '../../age-group';
import {Province} from '../../utils/province';
import {MIN_JR_REGIONAL_DRAW_SIZE} from '../../../assets/event-groups/junior/junior-provincial-event-groups';
import {Subscription} from 'rxjs';

// The round over round reduction in points.  So, finalist gets .6 of winner,
// semifinalist gets .6 of finalist and so on.
const r = .6;
const baselineFPs = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128];

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit, OnDestroy, OnChanges {
  @Input() eventGroup: EventGroup;
  @Input() eventSubGroup: EventGroup;
  @Input() event: RankingEvent;
  @Input() ageGroup: AgeGroup;
  @Input() drawSize = 128;
  @Input() province: Province;
  @Input() isJuniorRegional = true;
  @Input() magicFP = 5;
  @Input() smallDrawSize = 8;

  // For the mat-table display
  pointTable: any[];
  displayedColumns: string[] = ['shortLabel', 'points'];

  // For calculating ranking points.  Ratings are expressed as a factor of
  // the baseline. The baseline differs between ranking groups, so we make
  // a note of the baseline points of the selected ranking group.
  baselinePoints: number;

  // The Magic Finishing Position - the user can enter whatever finish
  // position she wants in order to see points for unusual finishing
  // positions. For example, with sufficient playoffs, a player could
  // finish 23rd in a draw with 52 players.

  // The rating of the event in question with all factors built in
  rating: number;

  // are we using the event group or the subgroup
  egInUse: EventGroup;

  // The subscription to the year change and province change events
  yearChangeSubscription: Subscription;
  year: string;

  constructor(
    public appState: AppState,
    public fpLabeler: FinishPositionLabeler,
  ) {
    this.yearChangeSubscription = this.appState.selectedRankingYear$.subscribe(y => {
      this.year = y;
      this.ngOnChanges();
    });
  }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnDestroy(): void {
    this.yearChangeSubscription.unsubscribe();
  }

  // Whenever one of the inputs changes...
  ngOnChanges() {
    // are we using the event group or the subgroup
    this.egInUse = (this.eventSubGroup) ? this.eventSubGroup : this.eventGroup;

    // Calculate the rating of the event in question
    let rating = 1;
    // use the event's rating.
    if (this.event) {
      rating = rating * this.event.rating.getRating(this.year);
      if (this.isJuniorRegional) {
        if (this.ageGroup) {
          rating = rating * this.ageGroup.rating.getRating(this.year);
          if (this.ageGroup.gender === 'M') {
            rating = rating * this.province.boysRating.getRating(this.year);
          } else {
            rating = rating * this.province.girlsRating.getRating(this.year);
          }
          if (this.smallDrawSize < MIN_JR_REGIONAL_DRAW_SIZE) {
            rating = rating * this.smallDrawSize / MIN_JR_REGIONAL_DRAW_SIZE;
          }
        }
      }

      /**
       * rating adjustment for draw-size events
       *
       * A tournament where drawSize = baseDrawSize has a ratings adjustment factor of 1
       * Larger draws - higher adjustment factor.  Smaller draws - lower adjustment.
       * The following formula makes it so that the winner points in a draw of 16 are the same as
       * runner-up points in a draw of 32.
       */
      if (this.event.baseDrawSize) {
        rating = rating *
          (Math.pow(r, Math.log(this.event.baseDrawSize) / Math.log(2) -
            Math.log(this.drawSize) / Math.log(2)));
      }
    }

    // Fetch the baseline points from the selected ranking group.
    if (this.appState.selectedRankingGroup) {
      this.baselinePoints = this.appState.selectedRankingGroup.baselinePoints;
    }
    this.rating = rating;

    // now build an array to use as the data source of the table
    const table = [];
    for (const fp of this.fpsToDisplay(this.drawSize, this.magicFP, this.smallDrawSize)) {
      table.push({
        longLabel: this.fpLabeler.getLabelLong(fp),
        shortLabel: this.fpLabeler.getLabel(fp),
        points: this.calc(fp)
      });
    }
    this.pointTable = table;
  }


  calc(fp: number): number {
    return this.baselinePoints *
      this.rating *
      Math.pow(r, Math.log2(fp));
  }

  fpsToDisplay(drawSize: number, magicFP: number, smallDrawSize: number): number[] {
    if (this.isJuniorRegional && smallDrawSize < MIN_JR_REGIONAL_DRAW_SIZE) {
      drawSize = smallDrawSize;
    }
    const list = [];
    let prevFP = 0;
    for (const fp of baselineFPs) {
      if (magicFP > prevFP && magicFP < fp && magicFP < drawSize) {
        list.push(this.magicFP);
      }
      if (fp < drawSize) {
        list.push(fp);
        prevFP = fp;
      } else {
        list.push(drawSize);
        break;
      }
    }
    return list;
  }
}
