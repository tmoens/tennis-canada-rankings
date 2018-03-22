import {KeyedStaticCollection} from "../../app/keyed-static-collection";
import {Rating} from "../../app/rating";
import {EventGroup, RankingEvent} from "../../app/ranking-event";
import { LARGE_DRAWS_SIZES } from "../../app/draw-size-rating";

export const ADULT_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_adult_eg_',
      [1, 2, 3, 4, 8, 16, 32],
      [
        new RankingEvent(
          "adult_event",
          new Rating(1000), LARGE_DRAWS_SIZES),
      ]
    ),
    // The 2017 version is (almost) the same as the 2013 version but it is here just to
    // illustrate how to introduce a new version.  It also helps test versioning
    // because 2013 to 2016 points tables will not show quite the same finishing positions.
    '2017': new EventGroup(
      '_adult_eg_',
      [1, 2, 3, 4, 8, 16, 32, 64],
      [
        new RankingEvent(
          "adult_event",
          new Rating(1000), LARGE_DRAWS_SIZES),
      ]
    )
  });
