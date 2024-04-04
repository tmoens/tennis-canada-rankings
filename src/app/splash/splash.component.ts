import {Component} from '@angular/core';
import {AppState} from '../utils/app-state';
import {RANKING_GROUPS} from '../../assets/ranking-groups';
import {RankingGroup} from '../utils/ranking-group';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  lang: string;
  rankingGroups: RankingGroup[] = RANKING_GROUPS;

  constructor(public appState: AppState) {
    this.appState.selectedLanguage$.subscribe(l => {
        this.lang = l.prefix;
      }
    );
  }
}
