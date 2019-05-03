import {KeyedStaticCollection} from '../../../app/utils/keyed-static-collection';
import {Rating} from '../../../app/utils/rating';
import {EventGroup, RankingEvent} from '../../../app/utils/ranking-event';


const INTERNATIONAL_U18_BOYS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U18_b_int_eg_',
      [
        new RankingEvent('_ITF_GS_', new Rating(12.5)),
        new RankingEvent('_ITF_A+_', new Rating(11)),
        new RankingEvent('_ITF_A_', new Rating(8.8)),
        new RankingEvent('_ITF_B_', new Rating(3.25)),
        new RankingEvent('_ITF_G1_', new Rating(5)),
        new RankingEvent('_ITF_G2_', new Rating(3)),
        new RankingEvent('_ITF_G3_', new Rating(2.2)),
        new RankingEvent('_ITF_G4_', new Rating(1)),
        new RankingEvent('_ITF_G5_', new Rating(0.6)),
      ]
    )
  });

const INTERNATIONAL_U18_GIRLS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U18_g_int_eg_',
      [
        new RankingEvent('_ITF_GS_', new Rating(11.5)),
        new RankingEvent('_ITF_A+_', new Rating(9)),
        new RankingEvent('_ITF_A_', new Rating(8.5)),
        new RankingEvent('_ITF_B_', new Rating(3)),
        new RankingEvent('_ITF_G1_', new Rating(4.75)),
        new RankingEvent('_ITF_G2_', new Rating(2.85)),
        new RankingEvent('_ITF_G3_', new Rating(2.1)),
        new RankingEvent('_ITF_G4_', new Rating(0.93)),
        new RankingEvent('_ITF_G5_', new Rating(0.56)),
      ]
    )
  });

const INTERNATIONAL_U16_BOYS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U16_b_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(2.3)),
        new RankingEvent('_TE_Ctgy1_', new Rating(2)),
        new RankingEvent('_Eddie_Herr_', new Rating(2)),
      ]
    ),
    '2019': new EventGroup(
      '_U16_b_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(2.3)),
        new RankingEvent('_Eddie_Herr_', new Rating(2)),
        new RankingEvent('_TE_Ctgy1_', new Rating(1)),
      ]
    )

  });

const INTERNATIONAL_U16_GIRLS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U16_g_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(2.3)),
        new RankingEvent('_TE_Ctgy1_', new Rating(2)),
        new RankingEvent('_Eddie_Herr_', new Rating(2)),
      ]
    ),
    '2019': new EventGroup(
      '_U16_g_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(2.3)),
        new RankingEvent('_Eddie_Herr_', new Rating(2)),
        new RankingEvent('_TE_Ctgy1_', new Rating(1)),
      ]
    )
  });

const INTERNATIONAL_U14_BOYS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U14_b_int_eg_',
      [
        new RankingEvent('_U14_T1_', new Rating(0.6)),
        new RankingEvent('_U14_T2_', new Rating(0.5)),
        new RankingEvent('_TE_Ctgy2_', new Rating(0.1)),
        new RankingEvent('_TE_Ctgy3_', new Rating(0.07)),
      ]
    ),
    '2019': new EventGroup(
      '_U14_b_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(0.52)),
        new RankingEvent('_Eddie_Herr_', new Rating(0.21)),
        new RankingEvent('_TE_Ctgy1A_U14_', new Rating(0.52)),
        new RankingEvent('_TE_Ctgy1B_U14_', new Rating(0.16)),
        new RankingEvent('_TE_Ctgy2_', new Rating(0.09)),
      ]
    )
  });

const INTERNATIONAL_U14_GIRLS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U14_g_int_eg_',
      [
        new RankingEvent('_U14_T1_', new Rating(1.4)),
        new RankingEvent('_U14_T2_', new Rating(0.9)),
        new RankingEvent('_TE_Ctgy2_', new Rating(0.18)),
        new RankingEvent('_TE_Ctgy3_', new Rating(0.07)),
      ]
    ),
    '2019': new EventGroup(
      '_U14_g_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(0.74)),
        new RankingEvent('_Eddie_Herr_', new Rating(0.36)),
        new RankingEvent('_TE_Ctgy1A_U14_', new Rating(0.74)),
        new RankingEvent('_TE_Ctgy1B_U14_', new Rating(0.27)),
        new RankingEvent('_TE_Ctgy2_', new Rating(0.13)),
      ]
    )
  });

const INTERNATIONAL_U12_BOYS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U12_b_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(0.17)),
        new RankingEvent('_Eddie_Herr_', new Rating(0.106)),
        new RankingEvent('_TE_Ctgy3_', new Rating(0.023)),
      ]
    ),
    '2019': new EventGroup(
      '_U12_b_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(0.17)),
        new RankingEvent('_Eddie_Herr_', new Rating(0.106)),
        new RankingEvent('_TE_Ctgy1A_U12_', new Rating(0.106)),
        new RankingEvent('_TE_Ctgy1B_U12_', new Rating(0.025)),
      ]
    )
  });

const INTERNATIONAL_U12_GIRLS_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_U12_g_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(0.17)),
        new RankingEvent('_Eddie_Herr_', new Rating(0.106)),
        new RankingEvent('_TE_Ctgy3_', new Rating(0.23)),
      ]
    ),
    '2019': new EventGroup(
      '_U12_g_int_eg_',
      [
        new RankingEvent('_Orange_Bowl_', new Rating(0.17)),
        new RankingEvent('_Eddie_Herr_', new Rating(0.106)),
        new RankingEvent('_TE_Ctgy1A_U12_', new Rating(0.106)),
        new RankingEvent('_TE_Ctgy1B_U12_', new Rating(0.05)),
      ]
    )
  });

export const JUNIOR_INTERNATIONAL_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_jr_int_eg_',
      [],
      [
        INTERNATIONAL_U18_BOYS_EVENT_GROUP,
        INTERNATIONAL_U18_GIRLS_EVENT_GROUP,
        INTERNATIONAL_U16_BOYS_EVENT_GROUP,
        INTERNATIONAL_U16_GIRLS_EVENT_GROUP,
        INTERNATIONAL_U14_BOYS_EVENT_GROUP,
        INTERNATIONAL_U14_GIRLS_EVENT_GROUP,
        INTERNATIONAL_U12_BOYS_EVENT_GROUP,
        INTERNATIONAL_U12_GIRLS_EVENT_GROUP,
      ]
    ),
    '2019': new EventGroup(
      '_jr_int_eg_',
      [],
      [
        INTERNATIONAL_U16_BOYS_EVENT_GROUP,
        INTERNATIONAL_U16_GIRLS_EVENT_GROUP,
        INTERNATIONAL_U14_BOYS_EVENT_GROUP,
        INTERNATIONAL_U14_GIRLS_EVENT_GROUP,
        INTERNATIONAL_U12_BOYS_EVENT_GROUP,
        INTERNATIONAL_U12_GIRLS_EVENT_GROUP,
      ]
    )

  });
