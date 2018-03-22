import {KeyedStaticCollection} from "../../../app/keyed-static-collection";
import {EventGroup, RankingEvent} from "../../../app/ranking-event";
import {BU12_RATING, BU14_RATING, BU16_RATING, BU18_RATING,
        GU12_RATING, GU14_RATING, GU16_RATING, GU18_RATING} from "../../ratings";
const DOMESTIC_FINISH_POSITIONS: number[] = [1,2,3,4,5,6,8,12,16,24,32,48,64];

const NATIONAL_BOYS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      "_cdn_nat_b_eg_", DOMESTIC_FINISH_POSITIONS,
      [
        new RankingEvent("_BU18_", BU18_RATING),
        new RankingEvent("_BU16_", BU16_RATING),
        new RankingEvent("_BU14_", BU14_RATING),
        new RankingEvent("_BU12_", BU12_RATING),
      ]
    )
  });
const NATIONAL_GIRLS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      "_cdn_nat_g_eg_", DOMESTIC_FINISH_POSITIONS,
      [
        new RankingEvent("_GU18_", GU18_RATING),
        new RankingEvent("_GU16_", GU16_RATING),
        new RankingEvent("_GU14_", GU14_RATING),
        new RankingEvent("_GU12_", GU12_RATING),
      ]
    )
  });
export const JUNIOR_NATIONAL_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_jr_nat_eg_', DOMESTIC_FINISH_POSITIONS,
      [],
      [
       NATIONAL_BOYS_EVENT_GROUP,
       NATIONAL_GIRLS_EVENT_GROUP,
      ]
    )
  });
