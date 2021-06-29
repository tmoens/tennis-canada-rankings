import {EventGroup} from './ranking-event';
import {Province} from './province';
import {RankingCategory} from './ranking-category';
import {KeyedStaticCollection} from './keyed-static-collection';
import {ConceptGroup} from './concept';

export class RankingGroup {
  constructor(public name: string,
              public vrId: string,
              public baselinePoints: number,
              public rankingCategories: RankingCategory[],
              public conceptGroups: ConceptGroup[],
              public eventGroups: KeyedStaticCollection<EventGroup>[]) {
  }

  getURL(p: Province): string {
    return 'https://' + p.vrSite + '/ranking/ranking.aspx?rid=' + this.vrId;
  }

  getLogoPath(langPrefix: string): string {
    return 'assets/images/RankingGroups/' + langPrefix + '/' + this.name + '.png';
  }
}

