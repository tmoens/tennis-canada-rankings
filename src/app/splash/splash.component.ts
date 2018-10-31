import { Component, OnInit } from '@angular/core';
import {AppState} from "../utils/app-state";
import {RANKING_GROUPS} from "../../assets/ranking-groups";
import {KeyedStaticCollection} from "../utils/keyed-static-collection";
import {RankingGroup} from "../utils/ranking-group";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  lang:string;
  rankingGroups: KeyedStaticCollection<RankingGroup>;

  constructor(public appState: AppState,) {
    this.rankingGroups = RANKING_GROUPS;
    this.appState.selectedLanguage$.subscribe( l => {
      this.lang = l.prefix;
      }
    )
  }

  ngOnInit() {
  }


}
