import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../fetch-service";
import {Observable} from "rxjs";
import {AppState} from "../../utils/app-state";
import {RankingCategory} from "../../utils/ranking-category";

@Component({
  selector: 'app-ranking-history',
  templateUrl: './ranking-history.component.html',
  styleUrls: ['./ranking-history.component.scss']
})

export class RankingHistoryComponent implements OnInit {
  rl: RankingsListDTO;
  rl$: Observable<RankingsListDTO>;
  test: string = "nothing yet";
  columnsToDisplay: string[];
  effectiveDate: Date;
  allCategories: any[];
  selectedRankingCategory: RankingCategory;

  nationalFocus: boolean; // as opposed to a provincial focus
  constructor(private fetchService: FetchService,
              private state: AppState,
  ) { }

  ngOnInit() {
    this.effectiveDate = new Date();
    // Watch for changes to the the selected province
    // in which case we reset the event selector
    this.state.selectedProvince$.subscribe(_ => {
      this.fetchRankingList();
    });
  }

  onCategorySelected(c: RankingCategory) {
    this.selectedRankingCategory = c;
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
    this.rl$ = this.fetchService.fetchRankings(this.selectedRankingCategory,
      this.effectiveDate,
      this.state.selectedProvince);
    this.rl$.subscribe(data => {
      this.rl = data;
      this.test = JSON.stringify(this.rl.publication);
    });
  }
}
