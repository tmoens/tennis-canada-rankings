import {EventGroup, RankingEvent} from '../../../app/utils/ranking-event';
import {KeyedStaticCollection} from '../../../app/utils/keyed-static-collection';
import {
  BU12_RATING,
  BU14_RATING,
  BU16_RATING,
  BU18_RATING,
  GU12_RATING,
  GU14_RATING,
  GU16_RATING,
  GU18_RATING
} from '../../ratings';

// ============== Events Supported in Canada =====================
export const CAN_NATIONAL_BOYS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup('_Boys_',
      [
        new RankingEvent('_U18_Boys_', BU18_RATING),
        new RankingEvent('_U16_Boys_', BU16_RATING),
        new RankingEvent('_U14_Boys_', BU14_RATING),
        new RankingEvent('_U12_Boys_', BU12_RATING),
      ]
    ),
  });
export const CAN_NATIONAL_GIRLS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup('_Girls_',
      [
        new RankingEvent('_U18_Girls_', GU18_RATING),
        new RankingEvent('_U16_Girls_', GU16_RATING),
        new RankingEvent('_U14_Girls_', GU14_RATING),
        new RankingEvent('_U12_Girls_', GU12_RATING),
      ]
    ),
  });

export const JUNIOR_NATIONALS_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_National_Championships_',
      [],
      [
        CAN_NATIONAL_BOYS_EVENT_GROUP,
        CAN_NATIONAL_GIRLS_EVENT_GROUP,
      ]
    )
  });
