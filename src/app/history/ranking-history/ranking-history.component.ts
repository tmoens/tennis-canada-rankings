import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../fetch-service";
import {Observable} from "rxjs";
import {AppState} from "../../utils/app-state";
import {RankingCategory} from "../../utils/ranking-category";
import {FormControl} from "@angular/forms";
import * as moment from 'moment';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {TC_DATE_FORMATS} from "../../utils/dateFormats";

@Component({
  selector: 'app-ranking-history',
  templateUrl: './ranking-history.component.html',
  styleUrls: ['./ranking-history.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: TC_DATE_FORMATS},
  ]
})

export class RankingHistoryComponent implements OnInit {
  rl: RankingsListDTO;
  rl$: Observable<RankingsListDTO>;
  columnsToDisplay: string[];
  effectiveDateFC: FormControl;
  beginningOfTime: Date;
  today: Date;

  selectedRankingCategory: RankingCategory;
  waiting: boolean = false;

  nationalFocus: boolean; // as opposed to a provincial focus
  constructor(private fetchService: FetchService,
              private state: AppState,
  ) {
    this.today = new Date();
    this.effectiveDateFC = new FormControl(moment());
  }

  ngOnInit() {
    // Watch for changes to the the selected province
    // in which case we reset the event selector
    this.state.selectedProvince$.subscribe(_ => {
      this.fetchRankingList();
      this.beginningOfTime = new Date('2014-01-01');
    });
  }

  onCategorySelected(c: RankingCategory) {
    this.selectedRankingCategory = c;
    this.fetchRankingList();
  }

  onDateChange() {
    this.fetchRankingList();
  }
  fetchRankingList(){
    if (!this.selectedRankingCategory) return;
    if (this.state.selectedProvince.isCanada()) {
      this.nationalFocus = true;
      this.columnsToDisplay = ['nationalRank', 'name', 'YOB', 'province', 'points'];
    } else {
      this.nationalFocus = false;
      this.columnsToDisplay = ['nationalRank', 'provincialRank', 'name', 'YOB', 'province', 'points'];
    }
    this.waiting = true;
    this.rl$ = this.fetchService.fetchRankings(this.selectedRankingCategory,
      this.effectiveDateFC.value.format("YYYY-MM-DD"),
      this.state.selectedProvince);
    this.rl$.subscribe(data => {
      this.rl = data;
      this.waiting = false;
    });
  }
}
