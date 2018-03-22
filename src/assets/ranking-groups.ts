import {KeyedStaticCollection} from "../app/keyed-static-collection";
import {RankingGroup} from "../app/ranking-group";
import {
  ADULT_RANKING_CATEGORIES,
  JUNIOR_RANKING_CATEGORIES,
  OPEN_RANKING_CATEGORIES,
  SENIOR_RANKING_CATEGORIES,
  WHEELCHAIR_RANKING_CATEGORIES
} from "./rankings-categories";

import {SENIOR_EVENT_GROUP} from "./event-groups/senior-event-group";
import {JUNIORS_IN_PROS_EVENT_GROUP} from "./event-groups/junior/juniors-in-open-event-groups";
import {JUNIOR_INTERNATIONAL_GROUP} from "./event-groups/junior/junior-international-event-groups";
import {JUNIOR_REGIONAL_GROUP} from "./event-groups/junior/junior-provincial-event-groups";
import {JUNIOR_NATIONAL_GROUP} from "./event-groups/junior/junior-national-event-groups";
import {OPEN_EVENT_GROUP} from "./event-groups/open-event-group";
import {ADULT_EVENT_GROUP} from "./event-groups/adult-event-group";
import { WHEELCHAIR_EVENT_GROUP } from "./event-groups/wheelchair-event-group";

export const RANKING_GROUPS: KeyedStaticCollection<RankingGroup> =
  new KeyedStaticCollection<RankingGroup>(
    {
      '_Adult_': new RankingGroup('_Adult_', '127', 1,
        ADULT_RANKING_CATEGORIES,
        [
          {name: 'kc', title: '_KCT_Title_'},
          {name: 'other', title: '_Other_Concepts_Title_'}
        ],
        [ADULT_EVENT_GROUP]),
      '_Junior_': new RankingGroup('_Junior_', '143', 10000,
        JUNIOR_RANKING_CATEGORIES,
        [
          {name: 'kc', title: '_KCT_Title_'},
          {name: 'rap', title: '_RAP_Title_'},
          {name: 're', title: '_Ranked_Events_'}
        ],
        [
          JUNIORS_IN_PROS_EVENT_GROUP,
          JUNIOR_INTERNATIONAL_GROUP,
          JUNIOR_REGIONAL_GROUP,
          JUNIOR_NATIONAL_GROUP,
        ]),
      '_Open_': new RankingGroup('_Open_', '127', 1,
        OPEN_RANKING_CATEGORIES,
        [
          {name: 'kc', title: '_KCT_Title_'},
          {name: 'other', title: '_Other_Concepts_Title_'}
        ],
        [OPEN_EVENT_GROUP]),
      '_Senior_': new RankingGroup('_Senior_', '144', 1,
        SENIOR_RANKING_CATEGORIES,
        [
          {name: 'esr', title: '_ESR_Tab_Title_'},
          {name: 'kc', title: '_KCT_Title_'},
          {name: 'other', title: '_Other_Concepts_Title_'}
        ],
        [SENIOR_EVENT_GROUP],),
      '_Wheelchair_': new RankingGroup('_Wheelchair_', '174', 1,
        WHEELCHAIR_RANKING_CATEGORIES,
        [
          {name: 'kc', title: '_KCT_Title_'},
          {name: 'other', title: '_Other_Concepts_Title_'}
        ],
        [WHEELCHAIR_EVENT_GROUP],)
    });
