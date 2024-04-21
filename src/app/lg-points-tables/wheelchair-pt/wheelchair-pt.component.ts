/**
 * Large screen points table for wheelchair events.
 *
 * Simple table - the columns are various draw sizes.
 * There is also a selector for which type of WC event to show.
 */
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RankingGroup} from '../../utils/ranking-group';
import {AppState} from '../../utils/app-state';
import {FinishPositionLabeler} from '../../utils/finish-positions';
import {EventGroup, RankingEvent} from '../../utils/ranking-event';
import {arrayInsert} from '../../utils/arrayInsert';
import {WHEELCHAIR_EVENT_GROUP} from '../../../assets/event-groups/wheelchair-event-group';
import {Subscription} from 'rxjs';


const r = .6;

@Component({
  selector: 'app-wheelchair-pt',
  templateUrl: './wheelchair-pt.component.html',
  styleUrls: ['./wheelchair-pt.component.scss']
})
export class WheelchairPtComponent implements OnInit, OnDestroy {
  selectedEventGroup: EventGroup;
  subGroups: EventGroup[];
  selectedSubGroup: EventGroup;
  selectedEvent: RankingEvent;
  drawSizes: number[] = [2, 3, 4, 5, 6, 7, 8, 12, 16];
  finishPositions: number[] = [1, 2, 3, 4, 5, 6, 8, 12, 16];
  headerRow: any[];
  headerColumn: any[];
  customDrawSize = 4;
  customFinishPosition = 4;
  pointsTable: any[];
  year: string;
  @Input() rankingGroup: RankingGroup;

  constructor(public appState: AppState,
              public fpLabeler: FinishPositionLabeler) {
  }

  // The subscription to the year change and province change events
  yearChangeSubscription: Subscription;

  ngOnInit() {
    this.yearChangeSubscription = this.appState.selectedRankingYear$.subscribe(_ => {
      this.onRankingYearChange();
    });
  }

  ngOnDestroy(): void {
    this.yearChangeSubscription.unsubscribe();
  }

  onRankingYearChange() {
    const year = this.appState.selectedRankingYear;
    // Wheelchair has exactly one event group
    this.selectedEventGroup = WHEELCHAIR_EVENT_GROUP.getVersion(year);
    // There are several sub-groups, each with one event only.
    this.subGroups = this.selectedEventGroup.subGroups.map(eg =>
      eg.getVersion(this.appState.selectedRankingYear));

    // In wheelchair there is a separate sub event group for every type of event.
    this.selectedSubGroup = this.subGroups[0];
    this.buildPointsTable();
  }

  onSelectSubGroup(sg: EventGroup) {
    this.selectedSubGroup = sg;
    this.buildPointsTable();
  }

  buildPointsTable() {
    // In wheelchair, every subgroup has only one event
    this.selectedEvent = this.selectedSubGroup.rankingEvents[0];
    const rating: number = this.selectedEvent.rating.getRating(this.appState.selectedRankingYear);
    const baseDrawSize = this.selectedEvent.getBaseDrawSize();
    const drawSizes: number[] = arrayInsert(this.drawSizes, this.customDrawSize);
    const fps: number[] = arrayInsert(this.finishPositions, this.customFinishPosition);

    this.headerRow = this.buildHeaderRow(drawSizes);
    this.headerColumn = [];
    const table = [];
    for (const fp of fps) {
      if (fp <= this.customDrawSize) {
        this.headerColumn.push(this.fpLabeler.getLabel(fp));
        table.push(this.buildPointsTableRow(drawSizes, rating, baseDrawSize, fp));
      }
    }
    this.pointsTable = table;
  }

  buildHeaderRow(drawSizes: number[]): string[] {
    const row = [];
    for (const ds of drawSizes) {
      if (ds <= this.customDrawSize) {
        row.push(ds.toString());
      }
    }
    return row;
  }

  buildPointsTableRow(drawSizes: number[], rating: number, baseDrawSize: number, fp: number): any {
    const row: any[] = [];
    for (const ds of drawSizes) {
      if (ds <= this.customDrawSize) {
        if (fp > ds) {
          row.push('');
        } else {
          if (ds === this.customDrawSize || fp === this.customFinishPosition) {
            row.push({value: this.calcPoints(rating, baseDrawSize, fp, ds), special: true});
          } else {
            row.push({value: this.calcPoints(rating, baseDrawSize, fp, ds)});
          }
        }
      }
    }
    return row;
  }

  calcPoints(basePoints: number, baseDrawSize: number, fp: number, drawSize: number) {
    return basePoints * Math.pow(r, Math.log2(fp)) *
      (Math.pow(r, Math.log(baseDrawSize) / Math.log(2) - Math.log(drawSize) / Math.log(2)));
  }
}
