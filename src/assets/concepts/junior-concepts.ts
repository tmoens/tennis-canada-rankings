import {Concept, ConceptGroup} from '../../app/utils/concept';
import {LB, POINT_CALC_C, RANKING_ELIGIBILITY_C, ROLLING_52_C} from './generic-concepts';
let c: Concept;

// ================== Junior Rankings =======================
// ------------------ Junior Combined Category Rationale ----------------------
export const JUNIOR_COMBINED_CAT_CG = new ConceptGroup('_Combined_Category_Rationale_');
JUNIOR_COMBINED_CAT_CG.addConcept(new Concept(
  null, ['_CC_D_1_', LB, '_CC_D_2_', LB, '_CC_D_3_', LB,
    '_CC_D_4_', LB, '_CC_D_5_', LB, '_CC_D_6_', LB, '_CC_D_7_', LB, '_Play_Up_Exception_'
  ]));
// ------------------ Junior Five Events Rationale ----------
export const JUNIOR_NUM_EVENTS_CG = new ConceptGroup('_jr_num_events_rationale_');
JUNIOR_NUM_EVENTS_CG.addConcept(new Concept(
  '_jr_num_events_play_opportunities_', ['_jr_num_events_play_opportunities_detail_']));
JUNIOR_NUM_EVENTS_CG.addConcept(new Concept(
  '_jr_num_events_quality_', ['_jr_num_events_quality_detail_']));

// ------------------ Junior Key Concepts -------------------
export const JUNIOR_KEY_CONCEPTS_CG = new ConceptGroup('_KCT_Title_');
JUNIOR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_point_awards_', ['_point_award_details_']));
c = new Concept(
  '_Combined_Categories_',
  ['_CC_Detail_', '_CC_Rationale_RM_']);
c.expansionGroup = JUNIOR_COMBINED_CAT_CG;
JUNIOR_KEY_CONCEPTS_CG.addConcept(c);
JUNIOR_KEY_CONCEPTS_CG.addConcept(ROLLING_52_C);
c = new Concept('_junior_num_events_',
  ['_junior_num_events_detail_', '_junior_num_events_rm_']);
c.expansionGroup = JUNIOR_NUM_EVENTS_CG;
JUNIOR_KEY_CONCEPTS_CG.addConcept(c);
JUNIOR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_National_and_Regional_Rankings_', ['_NRR_Details_']));
JUNIOR_KEY_CONCEPTS_CG.addConcept(RANKING_ELIGIBILITY_C);

// ------------------ Junior National age category ----------------
export const JUNIOR_AGE_CATEGORY_CG = new ConceptGroup('_National_Age_Category_Ratings_');
JUNIOR_AGE_CATEGORY_CG.addConcept(new Concept(
  '_BU16_Rating_', ['_BU16_Rating_Details_1_']));
JUNIOR_AGE_CATEGORY_CG.addConcept(new Concept(
  '_Other_AG_Ratings_', ['_Other_AG_Rating_Details_']));
JUNIOR_AGE_CATEGORY_CG.addConcept(new Concept(
  '_Boys_vs_Girls_', ['_Boys_vs_Girls_Details_']));

// ------------------ Junior Domestic First Round Losses ----------------
export const JUNIOR_DOMESTIC_FRL_CG = new ConceptGroup('_RLFBWD_');
JUNIOR_DOMESTIC_FRL_CG.addConcept(new Concept(
  '_RLFBWD_Domestic_Title_', []));
JUNIOR_DOMESTIC_FRL_CG.addConcept(new Concept(
  '_FR_Participation_Required_', ['_FR_PR_Details_']));
JUNIOR_DOMESTIC_FRL_CG.addConcept(new Concept(
  '_FRL_', ['_FRL_Domestic_']));
JUNIOR_DOMESTIC_FRL_CG.addConcept(new Concept(
  '_First_Round_Byes_', ['_FRBWD_Domestic_']));
JUNIOR_DOMESTIC_FRL_CG.addConcept(new Concept(
  '_Second_Round_Byes_', ['_SRBWD_Domestic_']));
JUNIOR_DOMESTIC_FRL_CG.addConcept(new Concept(
  '_Retirement_', ['_Retirement_Details_']));

// ------------------ Junior Domestic First Round Losses - when playing up ----
export const JUNIOR_PLAY_UP_FRL_CG = new ConceptGroup('_RLFBWD_');
JUNIOR_PLAY_UP_FRL_CG.addConcept(new Concept(
  '_RLFBWD_Domestic_PU_Title_', []));
JUNIOR_PLAY_UP_FRL_CG.addConcept(new Concept(
  '_Win_Required_PU_', ['_Win_Required_PU_Details_']));
JUNIOR_PLAY_UP_FRL_CG.addConcept(new Concept(
  '_FRL_', ['_FRL_Domestic_PU_']));
JUNIOR_PLAY_UP_FRL_CG.addConcept(new Concept(
  '_First_Round_Byes_', ['_FRBWD_Domestic_PU_']));
JUNIOR_PLAY_UP_FRL_CG.addConcept(new Concept(
  '_Second_Round_Byes_', ['_SRBWD_Domestic_PU_']));
JUNIOR_PLAY_UP_FRL_CG.addConcept(new Concept(
  '_Retirement_', ['_Retirement_Details_']));

// ------------------ Junior International First Round Losses ----------------
export const JUNIOR_INTL_FRL_CG = new ConceptGroup('_RLFBWD_');
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_RLFBWD_International_Title_', []));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_FR_ITF_title_2019_', ['_FR_ITF_detail_2019_1_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_FR_Participation_Required_', ['_FR_PR_Details_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_FRL_', ['_FRL_International_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_FRL_Exceptions_', ['_FRL_Exception_1_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  null, ['_FRL_Exception_2_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  null, ['_FRL_Exception_3_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_First_Round_Byes_', ['_FRBWD_International_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_Second_Round_Byes_', ['_SRBWD_International_']));
JUNIOR_INTL_FRL_CG.addConcept(new Concept(
  '_Retirement_', ['_Retirement_Details_']));

// ------------------ Junior Ratings and Point Awards Concepts ----
export const JUNIOR_RATINGS_CG = new ConceptGroup('_RAP_Title_');
JUNIOR_RATINGS_CG.addConcept(new Concept(   '_Points_Benchmark_', ['_PB_Details_']));
JUNIOR_RATINGS_CG.addConcept(new Concept(   '_Rating_',
  ['_Rating_Detail_1_']));
JUNIOR_RATINGS_CG.addConcept(POINT_CALC_C);
c = new Concept(
  '_National_Age_Category_Ratings_',
  ['_NACR_Detials_', '_NACR_rm_']);
c.expansionGroup = JUNIOR_AGE_CATEGORY_CG;
JUNIOR_RATINGS_CG.addConcept(c);
JUNIOR_RATINGS_CG.addConcept(new Concept(
  '_Draw_Size_', ['_Draw_Size_Details_']));
c = new Concept(   '_RLFBWD_', ['_RLFBWD_Domestic_rm_']);
c.expansionGroup = JUNIOR_DOMESTIC_FRL_CG;
JUNIOR_RATINGS_CG.addConcept(c);
c = new Concept(   null, ['_RLFBWD_Domestic_PU_rm_']);
c.expansionGroup = JUNIOR_PLAY_UP_FRL_CG;
JUNIOR_RATINGS_CG.addConcept(c);
c = new Concept(   null, ['_RLFBWD_Intl_rm_']);
c.expansionGroup = JUNIOR_INTL_FRL_CG;
JUNIOR_RATINGS_CG.addConcept(c);


// ------------------ National Junior Open Series Points ---------------
export const JUNIOR_NAT_SERIES_CG = new ConceptGroup('_NJOS_Point_Awards_');
JUNIOR_NAT_SERIES_CG.addConcept(new Concept(   '_NJOS_PA_ON_', ['_NJOS_PA_ON_Detail_']));
JUNIOR_NAT_SERIES_CG.addConcept(new Concept(   '_NJOS_PA_QC_', ['_NJOS_PA_QC_Detail_']));
JUNIOR_NAT_SERIES_CG.addConcept(new Concept(   '_NJOS_PA_BC_', ['_NJOS_PA_BC_Detail_']));

// ------------------ Junior Provincial Strength Factor ---------------
export const JUNIOR_PSF_CG = new ConceptGroup('_Regional_Strength_Factors_Title_');
JUNIOR_PSF_CG.addConcept(new Concept(   '_Regional_Strength_Factors_Title_',
  ['_RSF_Details_1_', LB, '_RSF_Details_2_', LB, '_RSF_Details_3'],
  2013, 2018));
JUNIOR_PSF_CG.addConcept(new Concept(   '_Regional_Strength_Factors_Title_',
  ['_RSF_Details_1_', LB, '_RSF_Details_2019_2_', LB,
    '_RSF_Details_2019_3_', LB, '_RSF_Details_2019_4_'],
  2019));
JUNIOR_PSF_CG.addConcept(new Concept(   '_Strength_Factor_Calculation_',
  ['_SFC_Step1_', LB, '_SFC_Step1_Details_', LB, '_SFC_Step1_Example_', LB,
  '_SFC_Step2_', LB, '_SFC_Step2_Details_1_', LB, '_SFC_Step2_Details_2_', LB,
  '_SFC_Step2_Example_2_', LB, '_SFC_Step2_Example_2_', LB, '_SFC_Step2_More_', LB,
  '_SFC_Step3_', LB, '_SFC_Step3_Details_', LB, '_SFC_Step3_Example_'],
  2013, 2018));
JUNIOR_PSF_CG.addConcept(new Concept(   '_Strength_Factor_Calculation_',
  [    '_sfc_detail_2019_1', LB, '_sfc_detail_2019_2', LB, '_sfc_detail_2019_3', LB,
    '_sfc_detail_2019_4', LB, '_sfc_detail_2019_5', LB, '_sfc_detail_2019_6', LB,
    '_sfc_detail_2019_7', LB, '_sfc_detail_2019_8', LB, '_sfc_detail_2019_9', LB,
    '_sfc_detail_2019_10', LB, '_sfc_detail_2019_11', LB, '_sfc_detail_2019_12', LB,
    '_sfc_detail_2019_13' , LB, '_sfc_detail_2019_14'],
  2019));
  JUNIOR_PSF_CG.addConcept(new Concept(   '_Strength_Factor_Recalculation_',
  ['_SFR_Details_'],
  2013, 2018));

// ------------------ Junior Combined Events ----------------------
export const JUNIOR_COMBINED_AG_EVENTS_CG = new ConceptGroup('_Combined_Events_Title_');
JUNIOR_COMBINED_AG_EVENTS_CG.addConcept(new Concept(
  '_Combined_Events_Title_', [
    '_Combined_Events_Detail_', LB, '_Combined_Events_Detail_1_', LB,
    '_Combined_Events_Condition_1_', LB, '_Combined_Events_Condition_2_', LB,
    '_Combined_Events_Condition_3_', LB, '_Combined_Events_Detail_2_', LB
  ]));

// ------------------ Junior Multi Age-Group Events -------------------
export const JUNIOR_MULTI_AG_EVENTS_CG = new ConceptGroup('_multi_agegroup_events_');
JUNIOR_MULTI_AG_EVENTS_CG.addConcept(new Concept(
  '_multi_agegroup_events_', [
    '_multi_agegroup_events_detail_1_', LB, '_multi_agegroup_events_detail_2_', LB,
    '_multi_agegroup_events_condition_1_', LB, '_multi_agegroup_events_condition_2_', LB,
    '_multi_agegroup_events_condition_3_'
  ]));

// ------------------ Junior Canadian Open events ----------------------
export const JUNIOR_CDN_OPEN_CG = new ConceptGroup('_Open_Events_Dialog_Title_');
JUNIOR_CDN_OPEN_CG.addConcept(new Concept(   '_Major_Open_Events_', ['_MOE_Details_1_']));
JUNIOR_CDN_OPEN_CG.addConcept(new Concept(   null, ['_MOE_Details_2_']));
JUNIOR_CDN_OPEN_CG.addConcept(new Concept(   '_Open_Event_Rating_', ['_OER_Details_21_'], 2013, 2021));
JUNIOR_CDN_OPEN_CG.addConcept(new Concept(   null, ['_OER_Details_2_'], 2013, 2021));
JUNIOR_CDN_OPEN_CG.addConcept(new Concept(   '_Open_Event_Rating_', ['_OER_Details_21_2022_'], 2022));
JUNIOR_CDN_OPEN_CG.addConcept(new Concept(   null, ['_OER_Details_2_2022_'], 2022));


// ------------------ Junior Domestic Events Concepts ----------------------
export const JUNIOR_DOMESTIC_EVENT_CG = new ConceptGroup('_Domestic_Events_');
JUNIOR_DOMESTIC_EVENT_CG.addConcept(new Concept(
  '_National_Championships_', ['_NJE_Details_']));
c = new Concept('_National_Junior_Open_Series_', ['_NJOS_Details_', '_NJOS_rm_']);
c.expansionGroup = JUNIOR_NAT_SERIES_CG;
JUNIOR_DOMESTIC_EVENT_CG.addConcept(c);
JUNIOR_DOMESTIC_EVENT_CG.addConcept(new Concept(
  '_Provincial_Events_', ['_Provincial_Events_Details_1_']));
c = new Concept(   null,
  ['_Provincial_Events_Details_2_', '_Provincial_Strength_Factor_RM_']);
c.expansionGroup = JUNIOR_PSF_CG;
JUNIOR_DOMESTIC_EVENT_CG.addConcept(c);
// TODO MAP of provincial events.
JUNIOR_DOMESTIC_EVENT_CG.addConcept(new Concept(   null,
  ['_Provincial_Events_Details_3_', '_Provincial_Events_Details_4_'],
  2013, 2018));
JUNIOR_DOMESTIC_EVENT_CG.addConcept(new Concept(   null,
  ['_Provincial_Events_Details_3_'],
  2019));

c = new Concept(   '_Combined_Events_Title_',
  ['_Combined_Events_Detail_', '_combined_events_rm_'], 2013, 2018);
c.expansionGroup = JUNIOR_COMBINED_AG_EVENTS_CG;
JUNIOR_DOMESTIC_EVENT_CG.addConcept(c);

c = new Concept(   '_multi_agegroup_events_',
  ['_multi_agegroup_events_detail_', '_multi_agegroup_events_rm_'], 2019);
c.expansionGroup = JUNIOR_MULTI_AG_EVENTS_CG;
JUNIOR_DOMESTIC_EVENT_CG.addConcept(c);

c = new Concept(   '_Canadian_Open_Events_',
  ['_Canadian_Open_Event_Details_', LB, '_Canadian_Open_rm_'],  );
c.expansionGroup = JUNIOR_CDN_OPEN_CG;
JUNIOR_DOMESTIC_EVENT_CG.addConcept(c);


// ------------------ Junior International Events ----------------------
// Used 2013 to 2018
export const JUNIOR_INTL_EVENTS_CG = new ConceptGroup('_International_Junior_Events_');
JUNIOR_INTL_EVENTS_CG.addConcept(new Concept(null, ['_IJE_Rating_']));
JUNIOR_INTL_EVENTS_CG.addConcept(new Concept(
  '_IJE_Player_Data_', ['_IJE_Player_Data_Detail_']));
JUNIOR_INTL_EVENTS_CG.addConcept(new Concept(
  '_IJE_Sanctioning_Body_', ['_IJE_SB_Details_', '_IJE_SB_Details_2_']));
JUNIOR_INTL_EVENTS_CG.addConcept(new Concept(
  '_IJE_First_Round_Loss_', ['_IJE_FRL_Details_']));
JUNIOR_INTL_EVENTS_CG.addConcept(new Concept(
  '_IJE_Underrating_', ['_IJE_Underrating_Detail_']));
JUNIOR_INTL_EVENTS_CG.addConcept(new Concept(
  '_IJE_No_Qualifying_Points_', ['_IJE_No_Qualifying_Points_Detail_']));

// ------------------ USTA and Tennis Europe Events ----------------------
// Used after 2018
export const USTA_TE_EVENTS_CG = new ConceptGroup('_USTA_TE_events_');
USTA_TE_EVENTS_CG.addConcept(new Concept('_TBD_', ['_TBD_']));

// ------------------ Junior in Men's Pro events ----------------------
// Used 2013 to 2018
export const JUNIOR_MALE_PRO_CG = new ConceptGroup('_Male_Professional_Events_Title_');
JUNIOR_MALE_PRO_CG.addConcept(new Concept(   '_Futures_15K_', ['_Futures_15K_Details_']));
JUNIOR_MALE_PRO_CG.addConcept(new Concept(   '_ATP_15K+_', ['_ATP_15K+_Details_']));
JUNIOR_MALE_PRO_CG.addConcept(new Concept(   '_Futures_25K_Example_', ['_Futures_25k_Details_']));
JUNIOR_MALE_PRO_CG.addConcept(new Concept(   '_Challenger_50K_Example_', ['_Challenger_50K_Details_']));
JUNIOR_MALE_PRO_CG.addConcept(new Concept(   '_ATP_500_Example_', ['_ATP_500_Details_']));
JUNIOR_MALE_PRO_CG.addConcept(new Concept(   '_Data_Note_', ['_Data_Note_Details_']));

// ------------------ Junior in Women's Pro events ----------------------
// Used 2013 to 2018
export const JUNIOR_FEMALE_PRO_CG = new ConceptGroup('_Female_Professional_Events_Title_');
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   '_ITF_25K_Benchmark_', ['_ITF_25K_Details_1_']));
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   null, ['_ITF_25K_Details_2_']));
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   null, ['_ITF_25K_Details_3_']));
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   '_Other_ITF_And_WTA_Events_', ['_Other_ITF_And_WTA_Events_Details_']));
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   '_ITF_15K_Example_', ['_ITF_15K_Example_Details_']));
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   '_WTA_International_Example_', ['_WTA_International_Example_Details_']));
JUNIOR_FEMALE_PRO_CG.addConcept(new Concept(   '_WTA_Data_Note_', ['_WTA_Data_Note_Details_']));

// ------------------ Exchange rates ----------------------
// Used after 2018
const EXCHANGE_RATE_CG = new ConceptGroup('_exchange_rate_');
EXCHANGE_RATE_CG.addConcept(new Concept('_er_methodology_',
  ['_er_methodology_detail_'], 2019));
EXCHANGE_RATE_CG.addConcept(new Concept('_er_player_pool_',
  ['_er_player_pool_detail_', LB, '_er_player_pool_example_'], 2019));
EXCHANGE_RATE_CG.addConcept(new Concept('_er_average_points_per_play_',
  ['_er_average_points_per_play_detail_', LB,
    '_er_average_points_per_play_example_1_', LB, '_er_average_points_per_play_example_2_'], 2019));
EXCHANGE_RATE_CG.addConcept(new Concept('_er_rate_',
  ['_er_rate_detail_', LB, '_er_rate_example_'], 2019));
EXCHANGE_RATE_CG.addConcept(new Concept('_er_adjustment_',
  ['_er_adjustment_detail_', '_er_adjustment_example_'], 2019));
EXCHANGE_RATE_CG.addConcept(new Concept('_indirect_exchange_rate_',
  ['_indirect_exchange_rate_detail_'], 2019));

// ------------------ Other Events Concepts ----------------------
export const JUNIOR_OTHER_EVENT_CG = new ConceptGroup('_international_events_');
c = new Concept(
  '_International_Junior_Events_', [
    '_IJE_Details_', LB, '_IJE_Details_2_', '_IJE_RM_'], 2013, 2018);
c.expansionGroup = JUNIOR_INTL_EVENTS_CG;
JUNIOR_OTHER_EVENT_CG.addConcept(c);
c = new Concept(
  '_USTA_TE_events_', [
    '_IJE_Details_', LB, '_IJE_Details_2_'], 2019);
c.expansionGroup = USTA_TE_EVENTS_CG;
JUNIOR_OTHER_EVENT_CG.addConcept(c);
c = new Concept(   '_Open_Events_',
  ['_Open_Event_Details_', LB, '_Canadian_Open_rm_'], 2013, 2018 );
c.expansionGroup = JUNIOR_CDN_OPEN_CG;
JUNIOR_OTHER_EVENT_CG.addConcept(c);
c = new Concept(   null, ['_Male_Pro_rm_'], 2013, 2018);
c.expansionGroup = JUNIOR_MALE_PRO_CG;
JUNIOR_OTHER_EVENT_CG.addConcept(c);
c = new Concept(   null, ['_Female_Pro_rm_'], 2013, 2018);
c.expansionGroup = JUNIOR_FEMALE_PRO_CG;
JUNIOR_OTHER_EVENT_CG.addConcept(c);
c = new Concept( '_exchange_rate_approach_', [
  '_exchange_rate_approach_detail_', '_exchange_rate_approach_rm_', LB,
  '_boys_ITF_ER_', LB, '_girls_ITF_ER_', LB,
  '_mens_TT_ER_', LB, '_womens_TT_ER_', LB,
  '_ATP_ER_', LB, '_WTA_ER_'], 2019);
c.expansionGroup = EXCHANGE_RATE_CG;
JUNIOR_OTHER_EVENT_CG.addConcept(c);
