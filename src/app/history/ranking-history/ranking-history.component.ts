import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../fetch-service";
import {Observable} from "rxjs";
import {
  JUNIOR_STRICT_CATEGORIES,
  JUNIOR_RANKING_CATEGORIES,
  ADULT_RANKING_CATEGORIES,
  SENIOR_RANKING_CATEGORIES,
  OPEN_RANKING_CATEGORIES,
  WHEELCHAIR_RANKING_CATEGORIES,
} from "../../../assets/rankings-categories";
import {AppState} from "../../utils/app-state";
import {RankingEvent} from "../../utils/ranking-event";
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
    this.allCategories= [
      {name: '_Junior_', list: JUNIOR_RANKING_CATEGORIES},
      {name: '_Adult_', list: ADULT_RANKING_CATEGORIES},
      {name: '_Open_', list: OPEN_RANKING_CATEGORIES},
      {name: '_Senior_', list: SENIOR_RANKING_CATEGORIES},
      {name: '_Wheelchair_', list: WHEELCHAIR_RANKING_CATEGORIES},
    ]
    this.effectiveDate = new Date();
    this.selectedRankingCategory = JUNIOR_RANKING_CATEGORIES[0];
    // Watch for changes to the the selected ranking group or ranking year
    // in which case we reset the event selector
    this.state.selectedProvince$.subscribe(_ => {
      this.fetchRankingList();
    });
  }

  onCategorySelected(c: RankingCategory) {
    if (c == this.selectedRankingCategory) return;
    this.selectedRankingCategory = c;
    this.fetchRankingList();
  }

  fetchRankingList(){
    if (this.state.selectedProvince.isCanada()) {
      this.nationalFocus = true;
      this.columnsToDisplay = ['nationalRank', 'name', 'province', 'points'];
    } else {
      this.nationalFocus = false;
      this.columnsToDisplay = ['nationalRank', 'provincialRank', 'name', 'province', 'points'];
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
