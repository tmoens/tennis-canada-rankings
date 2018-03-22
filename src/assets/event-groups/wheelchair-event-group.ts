import {KeyedStaticCollection} from "../../app/keyed-static-collection";
import {Rating} from "../../app/rating";
import {EventGroup, RankingEvent} from "../../app/ranking-event";
import { DrawSizeRating } from "../../app/draw-size-rating";

const DEFAULT_DISPLAY_DRAW_SIZES: number[] = [2,3,4,5,6,8,12];
const DEFAULT_DISPLAY_FINISH_POSITIONS: number[] = [1,2,3,4,5,6,8,12,16];

const NATIONAL_CHAMPS_MEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_m_nationals_eg_', DEFAULT_DISPLAY_FINISH_POSITIONS,
      [
        new RankingEvent(
          null,
          new Rating(500),
          new DrawSizeRating(16, DEFAULT_DISPLAY_DRAW_SIZES)
        ),
      ]
    )
  });
const NATIONAL_CHAMPS_W_Q_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_wq_nationals_eg_', DEFAULT_DISPLAY_FINISH_POSITIONS,
      [
        new RankingEvent(
          null,
          new Rating(500),
          new DrawSizeRating(8, DEFAULT_DISPLAY_DRAW_SIZES)
        ),
      ]
    )
  });
const PROV_CHAMPS_MEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_m_prov_champs_eg_', DEFAULT_DISPLAY_FINISH_POSITIONS,
      [
        new RankingEvent(
          "PC_M",
          new Rating(180),
          new DrawSizeRating(16, DEFAULT_DISPLAY_DRAW_SIZES)
        ),
      ]
    )
  });
const PROV_CHAMPS_W_Q_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_wq_prov_champs_eg_',  DEFAULT_DISPLAY_FINISH_POSITIONS,
      [
        new RankingEvent(
          null,
          new Rating(180),
          new DrawSizeRating (4, DEFAULT_DISPLAY_DRAW_SIZES)
        ),
      ]
    )
  });

const PROV_OTHER_MEN_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_m_prov_eg_', DEFAULT_DISPLAY_FINISH_POSITIONS,
      [
        new RankingEvent(
          null,
          new Rating(108),
          new DrawSizeRating(16, DEFAULT_DISPLAY_DRAW_SIZES)
        ),
      ]
    )
  });
const PROV_OTHER_W_Q_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_wq_prov_eg_', DEFAULT_DISPLAY_FINISH_POSITIONS,
      [
        new RankingEvent(
          null,
          new Rating(108),
          new DrawSizeRating(4, DEFAULT_DISPLAY_DRAW_SIZES)
        ),
      ]
    )
  });

export const WHEELCHAIR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_wc_events_eg_', DEFAULT_DISPLAY_FINISH_POSITIONS,
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
