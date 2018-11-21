import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Province } from './utils/province';
import { RankingGroup} from './utils/ranking-group';
import { RankingYears } from './utils/ranking-years';
import { KeyedStaticCollection } from './utils/keyed-static-collection';
import { AppState } from './utils/app-state';

import { PROVINCES } from '../assets/provinces/province-data';
import { RANKING_GROUPS } from '../assets/ranking-groups';
import {ENGLISH, FRENCH} from './utils/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RogersRankings';
  rankingGroups: RankingGroup[];
  provinces: KeyedStaticCollection<Province>;
  sideMenuOpen: boolean;

  constructor(public translate: TranslateService,
              public rankingYears: RankingYears,
              public appState: AppState) {
    // Initialize state;
    this.appState.selectLanguage(ENGLISH);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.appState.selectedLanguage.prefix);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.appState.selectedLanguage.prefix);

    this.provinces = PROVINCES;
    // start by selecting the "Canada" province
    this.appState.selectProvince(this.provinces.getItem('_CAN_'));

    // by default select whatever ranking group is first.
    this.rankingGroups = RANKING_GROUPS;
    this.appState.selectRankingGroup(RANKING_GROUPS[0]);
    this.sideMenuOpen = false;
  }


  onLanguageChange() {
    if (this.appState.selectedLanguage.fr) {
      this.appState.selectLanguage(ENGLISH);
    } else {
      this.appState.selectLanguage(FRENCH);
    }
    this.translate.use(this.appState.selectedLanguage.prefix);
  }
}
