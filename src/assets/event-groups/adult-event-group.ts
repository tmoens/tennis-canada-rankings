import {KeyedStaticCollection} from '../../app/utils/keyed-static-collection';
import {Rating} from '../../app/utils/rating';
import {EventGroup, RankingEvent} from '../../app/utils/ranking-event';

export const ADULT_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_adult_eg_',
      [
        new RankingEvent(
          'adult_event',
          new Rating(1000),
          16),
      ]
    )
  });
