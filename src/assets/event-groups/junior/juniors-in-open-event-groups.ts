import {KeyedStaticCollection} from '../../../app/utils/keyed-static-collection';
import {Rating} from '../../../app/utils/rating';
import {EventGroup, EventGroupType, RankingEvent} from '../../../app/utils/ranking-event';
import {JUNIOR_FEMALE_PRO_CG, JUNIOR_MALE_PRO_CG} from '../../concepts/junior-concepts';

/**
 * This file contains information on how to convert results for Canadian Juniors playing
 * in various types of international tournaments to canadian ranking points.
 *
 * Note that from 2013 to 2018, this was done in a somewhat complex way which involved
 * rating the external event type and then converting the results accordingly.
 *
 * Starting in 2019 all of this changed. We moved to a system that simply uses an
 * "exchange rate" to convert external point awards to canadian junior point awards.
 * So there are exchange rate for ATP, WTA, and ITF points to junior points.
 *
 * Consequently, the bulk of what is in the file is not relevant after 2018
 * but is kept for historical purposes.  In fact, the rankings website will
 * still accurately show what the conversions were prior in 2018 and earlier.
 */

// Conversion from Junior Girls nationals to ITF $25,000
// ITF 25,000 are rated at .96 times Junior Grand slams, which are rated at 11.5 times
// the U18 National Girls championship.
// To normalize to WTA points, we divide by 50 - the number of an ITF $25,000 is worth.
// (0.96 * 11.5) is really 11.04;
const u18ToWTAConversion = 11 / 50;

// The ratings for juniors in open events was unchanged from 2013 until covid when
// adult participation in Open events dropped and juniors were getting to0 rich
// playing open.
const JR_IN_OPEN_EG: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_jr_in_domestic_open_eg_',
      [
        new RankingEvent('_jr_open_w_', new Rating(.36)),
        new RankingEvent('_jr_open_m_', new Rating(1.6667)),
      ]
    ),
    '2022': new EventGroup(
      '_jr_in_domestic_open_eg_',
      [
        new RankingEvent('_jr_open_w_', new Rating(.2)),
        new RankingEvent('_jr_open_m_', new Rating(.5)),
      ]
    ),
  });

let eg: EventGroup;
eg = new EventGroup(
  '_WTA_eg_',
  [
    new RankingEvent('_WTA_Grand_Slam_', new Rating(2000 * u18ToWTAConversion)),
    new RankingEvent('_WTA_Champs_', new Rating(1500 * u18ToWTAConversion)),
    new RankingEvent('_WTA_Elite_', new Rating(700 * u18ToWTAConversion)),
    new RankingEvent('_WTA_Premier*_', new Rating(1000 * u18ToWTAConversion)),
    new RankingEvent('_WTA_Premier_5_', new Rating(900 * u18ToWTAConversion)),
    new RankingEvent('_WTA_Premier_12_', new Rating(470 * u18ToWTAConversion)),
    new RankingEvent('_WTA_280_', new Rating(280 * u18ToWTAConversion)),
    new RankingEvent('_WTA_$125K_Series_', new Rating(160 * u18ToWTAConversion)),
  ]);
eg.groupType = EventGroupType.JR_IN_WOMENS_PRO;
eg.conceptGroup = JUNIOR_FEMALE_PRO_CG;
const WTA_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': eg
  });

eg = new EventGroup(
  '_WITF_eg_',
  [
    new RankingEvent('_ITF_$100K_+H_', new Rating(150 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$100K_', new Rating(140 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$80K_+H_', new Rating(130 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$80K_', new Rating(115 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$60K_+H_', new Rating(100 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$60K_', new Rating(80 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$25K_', new Rating(50 * u18ToWTAConversion)),
    new RankingEvent('_ITF_$15K_', new Rating(12 * u18ToWTAConversion)),
  ]);
eg.groupType = EventGroupType.JR_IN_WOMENS_PRO;
eg.conceptGroup = JUNIOR_FEMALE_PRO_CG;
const WITF_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': eg
  });

// Conversion from Junior Boys nationals to ATP Futures 10,000
// Futures 10,000 are rated at 1.3 times Junior Grand slams, which are rated at 12 times
// the U18 National Boys championship.
// To normalize to ATP points, we divide by 18 - the number of ATP points a Futures 10,000 is worth.
const u18ToATPConversion = (1.3 * 12) / 18;

eg = new EventGroup(
  '_ATP_eg_',
  [
    new RankingEvent('_ATP_Grand_Slam_', new Rating(2000 * u18ToATPConversion)),
    new RankingEvent('_ATP_Final_', new Rating(1500 * u18ToATPConversion)),
    new RankingEvent('_ATP_1000_', new Rating(1000 * u18ToATPConversion)),
    new RankingEvent('_ATP_500_', new Rating(500 * u18ToATPConversion)),
    new RankingEvent('_ATP_250_', new Rating(250 * u18ToATPConversion)),
    new RankingEvent('_Ch_150_+H_', new Rating(125 * u18ToATPConversion)),
    new RankingEvent('_Ch_150_', new Rating(110 * u18ToATPConversion)),
    new RankingEvent('_Ch_125_+H_', new Rating(110 * u18ToATPConversion)),
    new RankingEvent('_Ch_125_', new Rating(100 * u18ToATPConversion)),
  ]);
eg.groupType = EventGroupType.JR_IN_MENS_PRO;
eg.conceptGroup = JUNIOR_MALE_PRO_CG;
const ATP_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': eg
  });

eg = new EventGroup(
  '_ATP2_eg_',
  [
    new RankingEvent('_Ch_100_+H_', new Rating(100 * u18ToATPConversion)),
    new RankingEvent('_Ch_100_', new Rating(90 * u18ToATPConversion)),
    new RankingEvent('_Ch_75_+H_', new Rating(90 * u18ToATPConversion)),
    new RankingEvent('_Ch_75_', new Rating(80 * u18ToATPConversion)),
    new RankingEvent('_Ch_50_+H_', new Rating(80 * u18ToATPConversion)),
    new RankingEvent('_Futures_25_', new Rating(27 * u18ToATPConversion)),
    new RankingEvent('_Futures_15_', new Rating(18 * u18ToATPConversion)),
    new RankingEvent('_Cdn_Open_', new Rating(1.666667)),
  ]);
eg.groupType = EventGroupType.JR_IN_MENS_PRO;
eg.conceptGroup = JUNIOR_MALE_PRO_CG;
const ATP2_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': eg
  });

export const JUNIORS_IN_PROS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_jr_in_open_eg_',
      [],
      [
        WTA_EVENT_GROUP,
        WITF_EVENT_GROUP,
        ATP_EVENT_GROUP,
        ATP2_EVENT_GROUP,
        JR_IN_OPEN_EG,
      ]
    ),
    '2019': new EventGroup(
      '_jr_in_domestic_open_eg_',
      [],
      [
        JR_IN_OPEN_EG,
      ]
    ),
  });
