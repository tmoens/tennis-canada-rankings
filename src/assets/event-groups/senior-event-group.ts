import {KeyedStaticCollection} from "../../app/keyed-static-collection";
import {Rating} from "../../app/rating";
import {EventGroup, RankingEvent} from "../../app/ranking-event";

export const SENIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      "_senior_eg_",
      [1, 2, 3, 4, 8, 16],
      [
        new RankingEvent("_s_nationals_", new Rating(1500)),
        new RankingEvent("_s_national_indoor_", new Rating(600)),
        new RankingEvent("_s_itf_", new Rating(400)),
        new RankingEvent("_s_prov_tier_1_", new Rating(400)),
        new RankingEvent("_s_prov_tier_2_", new Rating(150)),
      ]
    )
  });
