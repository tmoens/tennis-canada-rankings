/**
 * Large screen points table for adults.
 * 1000 points for a win at draw size 16.
 *
 * Super simple table - the columns are various draw sizes.
 */

import {Component, Input, OnInit} from '@angular/core';
import {RankingGroup} from "../../utils/ranking-group";
import {FinishPositionLabeler} from "../../utils/finish-positions";
import {AppState} from "../../utils/app-state";
import {ADULT_EVENT_GROUP} from "../../../assets/event-groups/adult-event-group";
import {EventGroup, RankingEvent} from "../../utils/ranking-event";
import {arrayInsert} from "../../utils/arrayInsert";
import {Subscription} from 'rxjs';

const r = .6;

@Component({
  selector: 'app-adult-pt',
  templateUrl: './adult-pt.component.html',
  styleUrls: ['./adult-pt.component.css']
})
export class AdultPtComponent implements OnInit {
  eg: EventGroup;
  selectedEvent: RankingEvent;
  drawSizes: number[] = [2, 4, 8, 16, 32, 64];
  finishPositions: number[] = [1,2,3,4,6,8,12,16,32,64,128];
  headerRow: any[];
  headerColumn: any[];
  customDrawSize: number = 16;
  customFinishPosition: number = 16;
  pointsTable: any[];
  year: string;
  @Input() rankingGroup: RankingGroup;

  // The subscription to the year change events
  yearChangeSubscription: Subscription;

  constructor(public appState: AppState,
              public fpLabeler: FinishPositionLabeler) {
  }

  ngOnInit() {
    this.eg = ADULT_EVENT_GROUP.getVersion(this.appState.selectedRankingYear);
    this.selectedEvent = this.eg.rankingEvents[0];
    this.buildPointsTable();
    this.yearChangeSubscription = this.appState.selectedRankingYear$.subscribe( _ => {
      this.buildPointsTable()
    });
  }

  ngOnDestroy(): void {
    this.yearChangeSubscription.unsubscribe();
  }

  buildPointsTable() {
    let rating: number = this.selectedEvent.rating.getRating(this.appState.selectedRankingYear);
    let baseDrawSize = this.selectedEvent.getBaseDrawSize();
    let drawSizes: number[] = arrayInsert(this.drawSizes, this.customDrawSize);
    let fps: number[] = arrayInsert(this.finishPositions, this.customFinishPosition);

    this.headerRow = this.buildHeaderRow(drawSizes);
    this.headerColumn = [];
    let table = [];
    for (const fp of fps) {
      this.headerColumn.push(this.fpLabeler.getLabel(fp));
      if (this.customFinishPosition == fp) {
        table.push(this.buildPointsTableRow(drawSizes, rating, baseDrawSize, fp));
      } else {
        table.push(this.buildPointsTableRow(drawSizes, rating, baseDrawSize, fp));
      }

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
