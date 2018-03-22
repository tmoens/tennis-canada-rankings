import {Injectable} from '@angular/core';
import { AppState} from "./app-state";

// Ranking years are of type string on purpose. The reason is that
// KeyedStaticCollections are necessarily keyed by strings and many of the
// ones we use are keyed by year. So we have to talk abou thte year as a string.
@Injectable()
export class RankingYears {
  rankingYears: string[] = [];
  constructor(public appState: AppState) {
    let thisYear = (new Date()).getFullYear();
    for (let y = thisYear; y > 2012; y--) {
      this.rankingYears.push(y.toString());
    }
    this.appState.selectRankingYear(this.rankingYears[0]);
  }
}

