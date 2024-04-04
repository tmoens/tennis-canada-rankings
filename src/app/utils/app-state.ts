import {Injectable} from '@angular/core';
import {RankingGroup} from './ranking-group';
import {Province} from './province';
import {EventGroup} from './ranking-event';
import {Language} from './language';
import {BehaviorSubject} from 'rxjs';

// The app state just keeps track of the user's current focus.

@Injectable()
export class AppState {
  public selectedRankingGroup: RankingGroup = null;
  public selectedRankingGroup$: BehaviorSubject<RankingGroup>;
  public selectedRankingYear: string;
  public selectedRankingYear$: BehaviorSubject<string>;
  public selectedProvince: Province;
  public selectedProvince$: BehaviorSubject<Province>;
  public selectedEventGroup: EventGroup;
  public selectedEventGroup$: BehaviorSubject<EventGroup>;
  public selectedLanguage: Language;
  public selectedLanguage$: BehaviorSubject<Language>;

  constructor() {
    this.selectedProvince$ = new BehaviorSubject(null as Province);
    this.selectedRankingYear$ = new BehaviorSubject(null);
    this.selectedEventGroup$ = new BehaviorSubject(null as EventGroup);
    this.selectedRankingGroup$ = new BehaviorSubject(null as RankingGroup);
    this.selectedLanguage$ = new BehaviorSubject(null as Language);
  }

  selectRankingGroup(rankingGroup: RankingGroup) {
    this.selectedRankingGroup = rankingGroup;
    this.selectedRankingGroup$.next(rankingGroup);
  }

  selectRankingYear(rankingYear: string) {
    this.selectedRankingYear = rankingYear;
    this.selectedRankingYear$.next(rankingYear);
  }

  selectProvince(p: Province) {
    this.selectedProvince = p;
    this.selectedProvince$.next(p);
  }

  selectEventGroup(eg: EventGroup) {
    this.selectedEventGroup = eg;
    this.selectedEventGroup$.next(eg);
  }

  selectLanguage(l: Language) {
    this.selectedLanguage = l;
    this.selectedLanguage$.next(l);
  }
}
