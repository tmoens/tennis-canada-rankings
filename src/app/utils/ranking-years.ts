import {Injectable} from '@angular/core';
import { AppState} from "./app-state";

/*
  This is just a list of years (as strings) going from this year back
  to when the system started (2013).  Well, if it is getting near this year
  we actually add next year to the list too.
 */

// Note: Ranking years are of type string on purpose. The reason is that
// KeyedStaticCollections are necessarily keyed by strings and many of the
// ones we use are keyed by year. So we have to talk about the year as a string.

@Injectable()
export class RankingYears {
  rankingYears: string[] = [];
  constructor(public appState: AppState) {
    const d = (new Date());
    let thisYear: number = d.getFullYear();
    let startYear: number = thisYear;

    // add next year come October (month 9 according to Date)
    if (d.getMonth() >= 9) startYear = startYear + 1;

    for (let y = startYear; y > 2012; y--) {
      this.rankingYears.push(y.toString());
    }
    this.appState.selectRankingYear(thisYear.toString());
  }
}

