/**
 * Large screen points table for seniors events.  Works perfectly for Open events too.
 *
 * Super simple table - the columns are various levles of seniors events.
 */
import {Component, Input, OnInit} from '@angular/core';
import {EventGroup, RankingEvent} from "../../utils/ranking-event";
import {AppState} from "../../utils/app-state";
import {FinishPositionLabeler} from "../../utils/finish-positions";
import {RankingGroup} from "../../utils/ranking-group";
import {arrayInsert} from "../../utils/arrayInsert";

const   finishPositions: number[] = [1,2,3,4,5,8,16,32];
const r = .6;

@Component({
  selector: 'app-senior-pt',
  templateUrl: './senior-pt.component.html',
  styleUrls: ['./senior-pt.component.css']
})
export class SeniorPtComponent implements OnInit {
  @Input() rankingGroup: RankingGroup;
  selectedEventGroup: EventGroup;
  selectedEvent: RankingEvent;
  headerRow: any[];
  headerColumn: any[];
  customFinishPosition: number = 4;
  pointsTable: any[];
  constructor(public appState: AppState,
              public fpLabeler: FinishPositionLabeler) {
  }

  ngOnInit() {
    this.buildPointsTable();
    this.appState.selectedRankingYear$.subscribe( _ => this.buildPointsTable());
  }

  buildPointsTable() {
    const year: string = this.appState.selectedRankingYear;
    // Seniors have has exactly one event group
    this.selectedEventGroup = this.rankingGroup.eventGroups[0].getVersion(year);
    let fps: number[] = arrayInsert(finishPositions, this.customFinishPosition);

    this.headerRow = this.buildHeaderRow();
    this.headerColumn = [];
    let table = [];
    for (const fp of fps) {
      this.headerColumn.push(this.fpLabeler.getLabel(fp));
      const row: any[] = [];
      for (const e of this.selectedEventGroup.rankingEvents) {
        if (fp === this.customFinishPosition) {
          row.push({value: this.calcPoints(fp, e.rating.getRating(year)), special: true});
        } else {
          row.push({value: this.calcPoints(fp, e.rating.getRating(year))});
        }
      }
      table.push(row);
    }
    this.pointsTable = table;
  }

  buildHeaderRow(): string[] {
    const row = [];
    for (const  e of this.selectedEventGroup.rankingEvents) {
      row.push( e.name + 'abbrv_');
    }
    return row;
  }


  calcPoints( fp: number,  rating: number) {
    return rating * Math.pow(r, Math.log2(fp));
  }

}
