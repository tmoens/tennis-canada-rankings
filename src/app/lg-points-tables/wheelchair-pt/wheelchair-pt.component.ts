/**
 * Large screen points table for wheelchair events.
 *
 * Simple table - the columns are various draw sizes.
 * There is also a selector for which type of WC event to show.
 */
import {Component, Input, OnInit} from '@angular/core';
import {RankingGroup} from "../../utils/ranking-group";
import {AppState} from "../../utils/app-state";
import {FinishPositionLabeler} from "../../utils/finish-positions";
import {EventGroup, RankingEvent} from "../../utils/ranking-event";
import {arrayInsert} from "../../utils/arrayInsert";
import {WHEELCHAIR_EVENT_GROUP} from "../../../assets/event-groups/wheelchair-event-group";


const r = .6;

@Component({
  selector: 'app-wheelchair-pt',
  templateUrl: './wheelchair-pt.component.html',
  styleUrls: ['./wheelchair-pt.component.css']
})
export class WheelchairPtComponent implements OnInit {
  selectedEventGroup: EventGroup;
  subGroups: EventGroup[];
  selectedSubGroup: EventGroup;
  selectedEvent: RankingEvent;
  drawSizes: number[] = [2,3,4,5,6,7,8,12,16];
  finishPositions: number[] = [1,2,3,4,5,6,12,16];
  headerRow: any[];
  headerColumn: any[];
  customDrawSize: number = 4;
  customFinishPosition: number = 4;
  pointsTable: any[];
  year: string;
  @Input() rankingGroup: RankingGroup;
  constructor(public appState: AppState,
              public fpLabeler: FinishPositionLabeler) {
  }

  ngOnInit() {
    this.buildPointsTable();
    this.appState.selectedRankingYear$.subscribe( _ => this.buildPointsTable());
  }

  onSelectSubGroup(sg: EventGroup) {
    this.selectedSubGroup = sg;
    this.selectedEvent = sg.rankingEvents[0];
    this.buildPointsTable();
  }

  buildPointsTable() {
    let wheelchairEventGroup = WHEELCHAIR_EVENT_GROUP;
    let year = this.appState.selectedRankingYear
    // Wheelchair has exactly one event group
    this.selectedEventGroup = wheelchairEventGroup.getVersion(year);
    // There are several sub-groups, each with one event only.
    this.subGroups = this.selectedEventGroup.subGroups.map(eg =>
      eg.getVersion(this.appState.selectedRankingYear));

    // In wheelchair there is a separate sub event group for every type of event.
    this.selectedSubGroup = this.subGroups[0];

    // this is the event
    this.selectedEvent = this.selectedSubGroup.rankingEvents[0];
// In wheelchair every event group has just one event.
    let rating: number = this.selectedEvent.rating.getRating(year);
    let baseDrawSize = this.selectedEvent.getBaseDrawSize();
    let drawSizes: number[] = arrayInsert(this.drawSizes, this.customDrawSize);
    let fps: number[] = arrayInsert(this.finishPositions, this.customFinishPosition);

    this.headerRow = this.buildHeaderRow(drawSizes);
    this.headerColumn = [];
    let table = [];
    for (const fp of fps) {
      this.headerColumn.push(this.fpLabeler.getLabel(fp));
      table.push(this.buildPointsTableRow(drawSizes, rating, baseDrawSize, fp));
    }
    this.pointsTable = table;
  }

  buildHeaderRow(drawSizes: number[]): string[] {
    const row = [];
    for (const ds of drawSizes) {
      row.push( ds.toString());
    }
    return row;
  }

  buildPointsTableRow(drawSizes: number[], rating: number, baseDrawSize: number, fp: number): any {
    const row: any[] = [];
    for (const ds of drawSizes) {
      if (fp > ds) {
        row.push('');
      } else {
        if (ds == this.customDrawSize || fp == this.customFinishPosition) {
          row.push({value: this.calcPoints(rating, baseDrawSize, fp, ds), special: true});
        } else {
          row.push({value: this.calcPoints(rating, baseDrawSize, fp, ds)});
        }
      }
    }
    return row;
  }

  calcPoints(basePoints: number, baseDrawSize: number, fp: number,  drawSize: number) {
    return basePoints * Math.pow(r, Math.log2(fp)) *
      (Math.pow(r,Math.log(baseDrawSize)/Math.log(2) - Math.log(drawSize)/Math.log(2)))
  }
}
