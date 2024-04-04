import {KeyedStaticCollection} from '../../app/utils/keyed-static-collection';
import {Rating} from '../../app/utils/rating';
import {EventGroup, RankingEvent} from '../../app/utils/ranking-event';

const NATIONAL_CHAMPS_MEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_m_nationals_eg_',
      [
        new RankingEvent(null, new Rating(500), 16),
      ]
    )
  });
const NATIONAL_CHAMPS_W_Q_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_wq_nationals_eg_',
      [
        new RankingEvent(null, new Rating(500), 8),
      ]
    )
  });
const PROV_CHAMPS_MEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_m_prov_champs_eg_',
      [
        new RankingEvent('PC_M', new Rating(180), 16),
      ])
  });
const PROV_CHAMPS_W_Q_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_wq_prov_champs_eg_',
      [
        new RankingEvent(null, new Rating(180), 4),
      ]
    )
  });

const PROV_OTHER_MEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_m_prov_eg_',
      [
        new RankingEvent(null, new Rating(108), 6),
      ]
    )
  });
const PROV_OTHER_W_Q_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_wq_prov_eg_',
      [
        new RankingEvent(null, new Rating(108), 4)
      ]
    )
  });

export const WHEELCHAIR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_events_eg_',
      [],
      [
        NATIONAL_CHAMPS_MEN_EVENT_GROUP,
        NATIONAL_CHAMPS_W_Q_EVENT_GROUP,
        PROV_CHAMPS_MEN_EVENT_GROUP,
        PROV_CHAMPS_W_Q_EVENT_GROUP,
        PROV_OTHER_MEN_EVENT_GROUP,
        PROV_OTHER_W_Q_EVENT_GROUP,
      ]
    )
  });
