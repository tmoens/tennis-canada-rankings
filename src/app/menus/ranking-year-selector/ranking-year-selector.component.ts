import { Component, OnInit } from '@angular/core';
import {AppState} from "../../utils/app-state";
import {RankingYears} from "../../utils/ranking-years";

@Component({
  selector: 'app-ranking-year-selector',
  templateUrl: './ranking-year-selector.component.html',
  styleUrls: ['./ranking-year-selector.component.css']
})
export class RankingYearSelectorComponent implements OnInit {

  constructor(public appState: AppState,
              public rankingYears: RankingYears) {};

  ngOnInit() {
  }

}

