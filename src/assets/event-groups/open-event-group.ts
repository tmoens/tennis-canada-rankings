import {KeyedStaticCollection} from "../../app/keyed-static-collection";
import {Rating} from "../../app/rating";
import {EventGroup, RankingEvent} from "../../app/ranking-event";

export const OPEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_open_eg_',
      [
        new RankingEvent("_o_m1000_", new Rating(1000)),
        new RankingEvent("_o_m350_", new Rating(350)),
        new RankingEvent("_o_m200_", new Rating(200)),
        new RankingEvent("_o_m100_", new Rating(100)),
        new RankingEvent("_o_w1000_", new Rating(1000)),
        new RankingEvent("_o_w350_", new Rating(350)),
        new RankingEvent("_o_w100_", new Rating(100))
      ]
    )
  });
