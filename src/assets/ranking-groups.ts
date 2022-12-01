import {KeyedStaticCollection} from '../app/utils/keyed-static-collection';
import {RankingGroup} from '../app/utils/ranking-group';
import {
  ADULT_RANKING_CATEGORIES,
  JUNIOR_RANKING_CATEGORIES,
  OPEN_RANKING_CATEGORIES,
  SENIOR_RANKING_CATEGORIES,
  WHEELCHAIR_RANKING_CATEGORIES
} from './rankings-categories';

import {SENIOR_EVENT_GROUP} from './event-groups/senior-event-group';
import {JUNIORS_IN_PROS_EVENT_GROUP} from './event-groups/junior/juniors-in-open-event-groups';
import {JUNIOR_INTERNATIONAL_GROUP} from './event-groups/junior/junior-international-event-groups';
import {JUNIOR_REGIONAL_GROUP} from './event-groups/junior/junior-provincial-event-groups';
import {OPEN_EVENT_GROUP} from './event-groups/open-event-group';
import {ADULT_EVENT_GROUP} from './event-groups/adult-event-group';
import {WHEELCHAIR_EVENT_GROUP} from './event-groups/wheelchair-event-group';
import {
  JUNIOR_DOMESTIC_EVENT_CG,
  JUNIOR_KEY_CONCEPTS_CG,
  JUNIOR_OTHER_EVENT_CG,
  JUNIOR_RATINGS_CG,
} from './concepts/junior-concepts';
import {ADULT_KEY_CONCEPTS_CG, ADULT_OTHER_CG} from './concepts/adult-concepts';
import {OPEN_KEY_CONCEPTS_CG, OPEN_OTHER_CG} from './concepts/open-concepts';
import {SENIOR_KEY_CONCEPTS_CG, SENIOR_OTHER_CG, SENIOR_RATINGS_AND_POINTS_GC} from './concepts/senior-concepts';
import {WHEELCHAIR_KEY_CONCEPTS_CG, WHEELCHAIR_OTHER_CG} from './concepts/wheelchair-concepts';
import {JUNIOR_NATIONALS_GROUP} from './event-groups/junior/junior-national-event-groups';

export const RANKING_GROUPS = [
  new RankingGroup('_Junior_', '143', 10000,
    JUNIOR_RANKING_CATEGORIES,
    [JUNIOR_KEY_CONCEPTS_CG, JUNIOR_RATINGS_CG, JUNIOR_DOMESTIC_EVENT_CG, JUNIOR_OTHER_EVENT_CG],
    [
      JUNIOR_NATIONALS_GROUP,
      JUNIOR_REGIONAL_GROUP,
      JUNIORS_IN_PROS_EVENT_GROUP,
      JUNIOR_INTERNATIONAL_GROUP,
    ]),
  new RankingGroup('_Open_', '127', 1,
    OPEN_RANKING_CATEGORIES,
    [OPEN_KEY_CONCEPTS_CG, OPEN_OTHER_CG],
    [OPEN_EVENT_GROUP]),
  new RankingGroup('_Adult_', '127', 1,
    ADULT_RANKING_CATEGORIES,
    [ADULT_KEY_CONCEPTS_CG, ADULT_OTHER_CG],
    [ADULT_EVENT_GROUP]),
  new RankingGroup('_Senior_', '144', 1,
    SENIOR_RANKING_CATEGORIES,
    [SENIOR_KEY_CONCEPTS_CG, SENIOR_OTHER_CG, SENIOR_RATINGS_AND_POINTS_GC],
    [SENIOR_EVENT_GROUP], ),
  new RankingGroup('_Wheelchair_', '174', 1,
    WHEELCHAIR_RANKING_CATEGORIES,
    [WHEELCHAIR_KEY_CONCEPTS_CG, WHEELCHAIR_OTHER_CG],
    [WHEELCHAIR_EVENT_GROUP], ),
];
