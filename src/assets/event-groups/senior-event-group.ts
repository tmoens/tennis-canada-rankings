import {KeyedStaticCollection} from "../../app/utils/keyed-static-collection";
import {Rating} from "../../app/utils/rating";
import {EventGroup, RankingEvent} from "../../app/utils/ranking-event";

export const SENIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      "_senior_eg_",
      [
        new RankingEvent("_s_nationals_", new Rating(1500)),
        new RankingEvent("_s_national_indoor_", new Rating(600)),
        new RankingEvent("_s_itf_", new Rating(400)),
        new RankingEvent("_s_prov_tier_1_", new Rating(400)),
        new RankingEvent("_s_prov_tier_2_", new Rating(150)),
      ]
    ),
    '2019': new EventGroup(
      "_senior_eg_",
      [
        new RankingEvent("_s_nationals_", new Rating(1500)),
        new RankingEvent("_s_national_indoor_", new Rating(600)),
        new RankingEvent("_s_prov_tier_1_2019_", new Rating(450)),
        new RankingEvent("_s_prov_tier_2_2019_", new Rating(300)),
        new RankingEvent("_s_prov_tier_3_2019_", new Rating(150)),
      ]
    )
  });
