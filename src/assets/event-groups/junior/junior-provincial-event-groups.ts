import {EventGroup, RankingEvent} from "../../../app/utils/ranking-event";
import {KeyedStaticCollection} from "../../../app/utils/keyed-static-collection";
import {Rating} from "../../../app/utils/rating";

// ============== Events Supported in the Atlantics =====================
const ATL_5_STAR: RankingEvent = new RankingEvent(
  '_ATL_5_star_',
  new Rating(1));
const ATL_4_STAR: RankingEvent = new RankingEvent(
  '_ATL_4_star_',
  new Rating(0.6));
const ATL_3_STAR: RankingEvent = new RankingEvent(
  '_ATL_3_star_',
  new Rating(0.1296));
const ATL_2_STAR: RankingEvent = new RankingEvent(
  '_ATL_2_star_',
  new Rating(0.046656));
const ATL_3_5_STAR_2018: RankingEvent = new RankingEvent(
  '_ATL_3-5_star_2018_',
  new Rating(0.216));
const ATL_3_STAR_2018: RankingEvent = new RankingEvent(
  '_ATL_3_star_2018_',
  new Rating(0.07776));
const ATL_2_STAR_2018: RankingEvent = new RankingEvent(
  '_ATL_2_star_2018_',
  new Rating(0.046656));


export const ATL_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_ATL_",
      [ATL_5_STAR, ATL_4_STAR, ATL_3_STAR, ATL_2_STAR, ]
    ),
    '2018': new EventGroup("_ATL_",
      [
        ATL_5_STAR,
        ATL_4_STAR,
        ATL_3_5_STAR_2018,
        ATL_3_STAR_2018,
        ATL_2_STAR_2018
      ]
    ),
  });
export const NB_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_NB_",
      [ATL_5_STAR, ATL_4_STAR, ATL_3_STAR, ATL_2_STAR, ]
    ),
    '2018': new EventGroup("_NB_",
      [
        ATL_5_STAR,
        ATL_4_STAR,
        ATL_3_5_STAR_2018,
        ATL_3_STAR_2018,
        ATL_2_STAR_2018
      ]
    ),
  });
export const NL_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_NL_",
      [ATL_5_STAR, ATL_4_STAR, ATL_3_STAR, ATL_2_STAR, ]
    ),
    '2018': new EventGroup("_NL_",
      [
        ATL_5_STAR,
        ATL_4_STAR,
        ATL_3_5_STAR_2018,
        ATL_3_STAR_2018,
        ATL_2_STAR_2018
      ]
    ),
  });
export const NS_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_NS_",
      [ATL_5_STAR, ATL_4_STAR, ATL_3_STAR, ATL_2_STAR, ]
    ),
    '2018': new EventGroup("_NS_",
      [
        ATL_5_STAR,
        ATL_4_STAR,
        ATL_3_5_STAR_2018,
        ATL_3_STAR_2018,
        ATL_2_STAR_2018
      ]
    ),
  });
export const PE_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_PE_",
      [ATL_5_STAR, ATL_4_STAR, ATL_3_STAR, ATL_2_STAR, ]
    ),
    '2018': new EventGroup("_PE_",
      [
        ATL_5_STAR,
        ATL_4_STAR,
        ATL_3_5_STAR_2018,
        ATL_3_STAR_2018,
        ATL_2_STAR_2018
      ]
    ),
  });

// ============== Events Supported in the Alberta =====================
const AB_5_STAR: RankingEvent = new RankingEvent(
  '_AB_5_star_',
  new Rating(1));
const AB_4_STAR: RankingEvent = new RankingEvent(
  '_AB_4_star_',
  new Rating(0.6));
const AB_3_5_STAR: RankingEvent = new RankingEvent(
  '_AB_3-5_star_',
  new Rating(0.216));
const AB_3_STAR: RankingEvent = new RankingEvent(
  '_AB_3_star_',
  new Rating(0.07776));
const AB_2_STAR: RankingEvent = new RankingEvent(
  '_AB_2_star_',
  new Rating(0.046656));
const AB_4_STAR_2019: RankingEvent = new RankingEvent(
  '_AB_4_star_2019_',
  new Rating(0.6));
const AB_3_5_STAR_2019: RankingEvent = new RankingEvent(
  '_AB_3-5_star_2019_',
  new Rating(0.216));
const AB_3_STAR_2019: RankingEvent = new RankingEvent(
  '_AB_3_star_2019_',
  new Rating(0.07776));
const AB_2_STAR_2019: RankingEvent = new RankingEvent(
  '_AB_2_star_2019_',
  new Rating(0.046656));


export const AB_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_AB_",
      [AB_5_STAR, AB_4_STAR, AB_3_5_STAR, AB_3_STAR, AB_2_STAR,]
    ),
    '2019': new EventGroup("_AB_",
      [AB_5_STAR, AB_4_STAR_2019, AB_3_5_STAR_2019, AB_3_STAR_2019, AB_2_STAR_2019,]
    ),
  });

// ============== Events Supported in the BC =====================
const BC_5_STAR: RankingEvent = new RankingEvent(
  '_BC_5_star_',
  new Rating(1));
const BC_4_STAR: RankingEvent = new RankingEvent(
  '_BC_4_star_',
  new Rating(0.6));
const BC_3_5_STAR: RankingEvent = new RankingEvent(
  '_BC_3-5_star_',
  new Rating(0.216));
const BC_3_STAR: RankingEvent = new RankingEvent(
  '_BC_3_star_',
  new Rating(0.1296));
const BC_2_STAR: RankingEvent = new RankingEvent(
  '_BC_2_star_',
  new Rating(0.046656));
const BC_3_STAR_2018: RankingEvent = new RankingEvent(
  '_BC_3_star_2018_',
  new Rating(0.07776));
const BC_2_STAR_2018: RankingEvent = new RankingEvent(
  '_BC_2_star_2018_',
  new Rating(0.046656));


export const BC_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_BC_",
      [BC_5_STAR, BC_4_STAR, BC_3_STAR, BC_2_STAR,]
    ),
    '2017': new EventGroup("_BC_",
      [BC_5_STAR, BC_4_STAR, BC_3_5_STAR, BC_3_STAR, BC_2_STAR,]
    ),
    '2018': new EventGroup("_BC_",
      [BC_5_STAR, BC_4_STAR, BC_3_5_STAR, BC_3_STAR_2018, BC_2_STAR_2018,
      ]
    ),
  });

// ============== Events Supported in MB and Sask =====================
const PR_5_STAR: RankingEvent = new RankingEvent(
  '_PR_5_star_',
  new Rating(1));
const PR_4_STAR: RankingEvent = new RankingEvent(
  '_PR_4_star_',
  new Rating(0.6));
const SK_CHALLENGER: RankingEvent = new RankingEvent(
  '_SK_3_star_',
  new Rating(0.1296));

export const MB_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_MB_",
      [PR_5_STAR, PR_4_STAR,]
    ),

  });

export const SK_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_SK_",
      [PR_5_STAR, PR_4_STAR, SK_CHALLENGER,
      ]
    ),
  });

// ============== Events Supported in ON =====================
const ON_5_STAR: RankingEvent = new RankingEvent(
  '_ON_5_star_',
  new Rating(1));
const ON_4_STAR: RankingEvent = new RankingEvent(
  '_ON_4_star_',
  new Rating(0.6));
const ON_3_5_STAR: RankingEvent = new RankingEvent(
  '_ON_3-5_star_',
  new Rating(0.216));
const ON_3_STAR: RankingEvent = new RankingEvent(
  '_ON_3_star_',
  new Rating(0.07776));
const ON_2_STAR: RankingEvent = new RankingEvent(
  '_ON_2_star_',
  new Rating(0.027994));
const ON_2_STAR_2018: RankingEvent = new RankingEvent(
  '_ON_2_star_2018_',
  new Rating(0.046656));


export const ON_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_ON_",
      [ON_5_STAR, ON_4_STAR, ON_3_5_STAR, ON_3_STAR, ON_2_STAR,]
    ),
    '2018': new EventGroup("_ON_",
      [ON_5_STAR, ON_4_STAR, ON_3_5_STAR, ON_3_STAR, ON_2_STAR_2018,]
    ),
  });

// ============== Events Supported in the Quebec =====================
const QC_5_STAR: RankingEvent = new RankingEvent(
  '_QC_5_star_',
  new Rating(1));
const QC_4_STAR: RankingEvent = new RankingEvent(
  '_QC_4_star_',
  new Rating(0.6));
const QC_3_5_STAR: RankingEvent = new RankingEvent(
  '_QC_3-5_star_',
  new Rating(0.216));
const QC_3_STAR: RankingEvent = new RankingEvent(
  '_QC_3_star_',
  new Rating(0.1296));
const QC_2_STAR: RankingEvent = new RankingEvent(
  '_QC_2_star_',
  new Rating(0.046656));
const QC_3_STAR_2018: RankingEvent = new RankingEvent(
  '_QC_3_star_2018_',
  new Rating(0.07776));
const QC_2_STAR_2018: RankingEvent = new RankingEvent(
  '_QC_2_star_2018_',
  new Rating(0.046656));


export const QC_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_QC_",
      [QC_5_STAR, QC_4_STAR, QC_3_5_STAR, QC_3_STAR, QC_2_STAR,
      ]
    ),
    '2018': new EventGroup("_QC_",
      [QC_5_STAR, QC_4_STAR, QC_3_5_STAR, QC_3_STAR_2018, QC_2_STAR_2018,]
    ),
  });


// ============== Events Supported in Canada =====================
const CAN_NATIONALS: RankingEvent = new RankingEvent(
  '_CAN_Nationals_',
  new Rating(1));
const BC_NJOS: RankingEvent = new RankingEvent(
  '_BC_JOS_',
  new Rating(0.216));
const ON_NJOS: RankingEvent = new RankingEvent(
  '_ON_JOS_',
  new Rating(0.3828));
const QC_NJOS: RankingEvent = new RankingEvent(
  '_QC_JOS_',
  new Rating(0.216));


export const CAN_JUNIOR_EVENT_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup("_CAN_",
      [CAN_NATIONALS, BC_NJOS, ON_NJOS, QC_NJOS,]
    ),
  });

// This one is SPECIAL.  Really just a place holder for the per-province
// event groups.
export const JUNIOR_REGIONAL_GROUP: KeyedStaticCollection<EventGroup> =
  new KeyedStaticCollection<EventGroup>({
    '2013': new EventGroup(
      '_jr_regional_eg_',
      [],
      [
        CAN_JUNIOR_EVENT_GROUP,
        AB_JUNIOR_EVENT_GROUP,
        BC_JUNIOR_EVENT_GROUP,
        MB_JUNIOR_EVENT_GROUP,
        NB_JUNIOR_EVENT_GROUP,
        NL_JUNIOR_EVENT_GROUP,
        NS_JUNIOR_EVENT_GROUP,
        ON_JUNIOR_EVENT_GROUP,
        PE_JUNIOR_EVENT_GROUP,
        QC_JUNIOR_EVENT_GROUP,
        SK_JUNIOR_EVENT_GROUP,
      ]
    )
  });
