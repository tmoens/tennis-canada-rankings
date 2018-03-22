import  {RankingConcept} from "../app/ranking-concept";

export const CONCEPTS: RankingConcept[] = [
  // ============= Generic Concepts (non ranking group specific) ======
  // ------------------ Generic Detailed point calculation dialog -----
  new RankingConcept(
    '_Generic_', 'pfp',
    '_SE_Point_Awards_',
    ['_SE_Point_Awards_Detail_']
  ),
  new RankingConcept(
    '_Generic_', 'pfp',
    '_Choice_of_60_Percent_',
    ['_C60P_Detail_']
  ),
  new RankingConcept(
    '_Generic_', 'pfp',
    '_SE_Consolations_',
    ['_SE_Consolations_Detail_']
  ),
  new RankingConcept(
    '_Generic_', 'pfp',
    '_Other_Draw_Types_',
    ['_Other_Draw_Types_Detail_']
  ),
  new RankingConcept(
    '_Generic_', 'pfp',
    '_View_Other_Point_Awards_',
    ['_View_Other_Point_Awards_Detail_']
  ),
  new RankingConcept(
    '_Generic_', 'pfp',
    '_DPC_Formula_',
    ['_DPC_Formula_Detail_']
  ),
  new RankingConcept(
    '_Generic_', 'pfp',
    null,
    ['_DPC_Formula_Itself_']
  ),

  // ================== Adult Rankings =======================
  // ------------------ Adult Key Concepts -------------------
  new RankingConcept(
    '_Adult_', 'kc',
    '_Adult_Ranking_Scope_',
    ['_Adult_Ranking_Scope_Detail_']
  ),
  new RankingConcept(
    '_Adult_', 'kc',
    '_Adult_Ranking_Focus_',
    ['_Adult_Ranking_Focus_Detail_']
  ),
  new RankingConcept(
    '_Adult_', 'kc',
    '_Adult_Ratings_',
    ['_Adult_Ratings_Synopsis_', '_Adult_Ratings_RM_'],
    'adult_ds_rating', '_read_more_',
    "_Adult_Ratings_Draw_Size_"
  ),
  new RankingConcept(
    '_Adult_', 'kc',
    '_Separate_Categories_',
    ['_SC_Synopsis_', '_SC_RM_'],
    'a_sep_cat', '_read_more_',
    '_Separate_Categories_'
  ),
  new RankingConcept(
    '_Adult_', 'kc',
    '_PFP_',
    ['_PFP_Synopsis_', '_DPC_rm_'],
    'pfp', '_read_more_',
    '_DPC_title_'
  ),

  // ------------------ Adult draw size rating dialog -----
  new RankingConcept(
    '_Adult_', 'adult_ds_rating',
    null,
    ['_Adult_Ratings_Details_1_']
  ),
  new RankingConcept(
    '_Adult_', 'adult_ds_rating',
    null,
    ['_Adult_Ratings_Details_2_']
  ),


  // ------------------ Adult separate categories dialog -----
  new RankingConcept(
    '_Adult_', 'a_sep_cat',
    null,
    ['_SC_D_1_']
  ),
  new RankingConcept(
    '_Adult_', 'a_sep_cat',
    null,
    ['_SC_D_2_']
  ),
  new RankingConcept(
    '_Adult_', 'a_sep_cat',
    null,
    ['_SC_D_3_']
  ),
  new RankingConcept(
    '_Adult_', 'a_sep_cat',
    null,
    ['_SC_D_4_']
  ),
  new RankingConcept(
    '_Adult_', 'a_sep_cat',
    null,
    ['_SC_D_5_']
  ),

  // ------------------ Adult Other Concepts -----------------
  new RankingConcept(
    '_Adult_', 'other',
    '_rolling_52_weeks_',
    ['_rolling_52_weeks_detail_'],
  ),
  new RankingConcept(
    '_Adult_', 'other',
    '_three_events_',
    ['_three_events_detail_'],
  ),
  new RankingConcept(
    '_Adult_', 'other',
    '_Rankings_Eligibility_',
    ['_Rankings_Eligibility_Detail_']
  ),
  new RankingConcept(
    '_Adult_', 'other',
    '_Adult_Events_And_Juniors_',
    ['_Adult_Events_And_Juniors_Detail_']
  ),
  new RankingConcept(
    '_Adult_', 'other',
    '_First_Round_Byes_',
    ['_First_Round_Byes_Synopsis_']
  ),

  // ------------------ Adult three events dialog ---------
  new RankingConcept(
    '_Adult_', '3events',
    '_TE_D_Quality_',
    ['_TE_D_Quality_Details_']
  ),



  // ================== Senior Rankings =======================
  // ------------------ Senior Event Structure -------------------
  // TODO hopefully just generate this tab.
  new RankingConcept(
    '_Senior_', 'esr',
    '_ESR_',
    ['_senior_eg_description_']
  ),
  new RankingConcept(
    '_Senior_', 'esr',
    '_s_nationals_',
    ['_s_nationals_description_']
  ),
  new RankingConcept(
    '_Senior_', 'esr',
    '_s_national_indoor_',
    ['_s_national_indoor_description_']
  ),
  new RankingConcept(
    '_Senior_', 'esr',
    '_s_itf_',
    ['_s_itf_description_']
  ),
  new RankingConcept(
    '_Senior_', 'esr',
    '_s_prov_tier_1_',
    ['_s_prov_tier_1_description_']
  ),
  new RankingConcept(
    '_Senior_', 'esr',
    '_s_prov_tier_2_',
    ['_s_prov_tier_2_description_']
  ),
  new RankingConcept(
    '_Senior_', 'esr',
    '_International_Events_',
    ['_International_Events_Details_']
  ),

  // ------------------ Senior Key Concepts -------------------
  new RankingConcept(
    '_Senior_', 'kc',
    '_Senior_Ranking_Scope_',
    ['_Senior_Ranking_Scope_Detail_']
  ),
  new RankingConcept(
    '_Senior_', 'kc',
    null,
    ['_Senior_Ranking_Scope_Detail_1_']
  ),
  new RankingConcept(
    '_Senior_', 'kc',
    '_PFP_',
    ['_PFP_Synopsis_', '_DPC_rm_'],
    'pfp', '_read_more_',
    '_DPC_title_'
  ),
  new RankingConcept(
    '_Senior_', 'kc',
    '_Ranked_Categories_',
    ['_Ranked_Categories_Synopsis_']
  ),
  new RankingConcept(
    '_Senior_', 'kc',
    '_Seniors_Draw_Size_',
    ['_Seniors_Draw_Size_Synopsis_']
  ),
  new RankingConcept(
    '_Senior_', 'kc',
    '_Rankings_Eligibility_',
    ['_Rankings_Eligibility_Detail_']
  ),
  new RankingConcept(
    '_Senior_', 'kc',
    '_National_Team_Selection_',
    ['_National_Team_Selection_Detail_']
  ),

  // ------------------ Senior Other Concepts -----------------
  new RankingConcept(
    '_Senior_', 'other',
    '_Playing_Down_',
    ['_Playing_Down_Detail_']
  ),
  new RankingConcept(
    '_Senior_', 'other',
    '_Aging_Up_',
    ['_Aging_Up_Detail_1_']
  ),
  new RankingConcept(
    '_Senior_', 'other',
    '_rolling_52_weeks_',
    ['_rolling_52_weeks_detail_'],
  ),
  new RankingConcept(
    '_Senior_', 'other',
    '_three_events_',
    ['_three_events_detail_'],
  ),
  new RankingConcept(
    '_Senior_', 'other',
    '_First_Round_Byes_',
    ['_First_Round_Byes_Synopsis_']
  ),
  new RankingConcept(
    '_Senior_', 'other',
    '_Senior_And_Other_Rankings_',
    ['_Senior_And_Other_Rankings_Detail_']
  ),

  // ------------------ Senior three events dialog ---------
  new RankingConcept(
    '_Senior_', '3events',
    '_TE_D_Quality_',
    ['_TE_D_Quality_Details_']
  ),

  // ================== Open Rankings ========================
  // ------------------ Open Key Concepts --------------------
  new RankingConcept(
    '_Open_', 'kc',
    '_Open_Ranking_Scope_',
    ['_Open_Ranking_Scope_Detail_']
  ),
  new RankingConcept(
    '_Open_', 'kc',
    '_Open_Event_Ratings_',
    ['_Open_Event_Ratings_Synopsis_']
  ),
  new RankingConcept(
    '_Open_', 'kc',
    '_PFP_',
    ['_PFP_Synopsis_', '_DPC_rm_'],
    'pfp', '_read_more_',
    '_DPC_title_'
  ),
  new RankingConcept(
    '_Open_', 'kc',
    '_Pro_Points_',
    ['_Pro_Points_Detail_1_']
  ),
  new RankingConcept(
    '_Open_', 'kc',
    null,
    ['_Pro_Points_Detail_2_']
  ),
  new RankingConcept(
    '_Open_', 'kc',
    null,
    ['_Pro_Points_Detail_3_']
  ),
  new RankingConcept(
    '_Open_', 'kc',
    '_Rankings_Eligibility_',
    ['_Rankings_Eligibility_Detail_']
  ),

  // ------------------ Open Other Concepts -----------------
  new RankingConcept(
    '_Open_', 'other',
    '_rolling_52_weeks_',
    ['_rolling_52_weeks_detail_'],
  ),
  new RankingConcept(
    '_Open_', 'other',
    '_three_events_',
    ['_three_events_detail_'],
  ),
  new RankingConcept(
    '_Open_', 'other',
    '_Open_Draw_Size_',
    ['_Open_Draw_Size_Detail_']
  ),
  new RankingConcept(
    '_Open_', 'other',
    '_Open_Events_And_Juniors_',
    ['_Open_Events_And_Juniors_Detail_']
  ),
  new RankingConcept(
    '_Open_', 'other',
    '_First_Round_Byes_',
    ['_First_Round_Byes_Synopsis_']
  ),

  // ------------------ Open three events dialog ---------
  new RankingConcept(
    '_Open_', '3events',
    '_TE_D_Quality_',
    ['_TE_D_Quality_Details_']
  ),

  // ================== Wheelchair Rankings =======================
  // ------------------ Wheelchair Key Concepts -------------------
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_rankings_scope_',
    ['_wc_rankings_scope_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    null,
    ['_wc_rankings_scope_2_']
  ),
  // TODO Actually link to the calendar
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_event_calendar_',
    ['_wc_event_calendar_1_', '_wc_event_calendar_2_', '_wc_event_calendar_3_', 'TBD']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_itf_events_',
    ['_wc_itf_events_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_ratings_',
    ['_wc_ratings_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_level_nationals_',
    ['_wc_level_nationals_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    null,
    ['_wc_level_nationals_2_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_level_provincial_championships_',
    ['_wc_level_provincial_championships_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    null,
    ['_wc_level_provincial_championships_2_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    '_wc_level_provincial_',
    ['_wc_level_provincial_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'kc',
    null,
    ['_wc_level_provincial_2_']
  ),

  // ------------------ Wheelchair Other Concepts -----------------
  new RankingConcept(
    '_Wheelchair_', 'other',
    '_rolling_52_weeks_',
    ['_rolling_52_weeks_detail_'],
  ),
  new RankingConcept(
    '_Wheelchair_', 'other',
    '_three_events_',
    ['_three_events_detail_'],
  ),
  new RankingConcept(
    '_Wheelchair_', 'other',
    '_wc_draw_size_',
    ['_wc_draw_size_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'other',
    '_wc_eligibility_',
    ['_wc_eligibility_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'other',
    '_wc_rank_publishing_',
    ['_wc_rank_publishing_1_']
  ),
  new RankingConcept(
    '_Wheelchair_', 'other',
    '_wc_first_round_',
    ['_wc_first_round_1_']
  ),

  // ================== Junior Rankings =======================
  // ------------------ Junior Key Concepts -------------------
  new RankingConcept(
    '_Junior_', 'kc',
    '_Points_for_Progress_',
    ['_PFP_Detail_']
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    '_Combined_Categories_',
    ['_CC_Detail_']
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    null,
    [],
    'ccr', '_Combined_Category_Rationale_',
    '_Combined_Category_Rationale_'
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    '_Rolling_52_Weeks_',
    ['_R52W_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    null,
    [],
    'five_events', '_Five_Event_Rationale_',
    '_Five_Event_Rationale_'
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    '_Strength_Based_Ratings_',
    ['_SBR_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    '_National_and_Regional_Rankings_',
    ['_NRR_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    '_Draw_Size_',
    ['_Draw_Size_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'kc',
    '_Rankings_Eligibility_',
    ['_Rankings_Eligibility_Detail_']
  ),

  // ------------------ Junior Combined Category Rationale ----------------------
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_1_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_2_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_3_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_4_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_5_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_6_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_7_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_CC_D_8_']
  ),
  new RankingConcept(
    '_Junior_', 'ccr',
    null,
    ['_Play_Up_Exception_']
  ),

  // ------------------ Junior Five Events Rationale ----------------------
  new RankingConcept(
    '_Junior_', 'five_events',
    '_FE_D_Play_Opportunities_',
    ['_FE_D_PO_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'five_events',
    '_FE_D_Quality_',
    ['_FE_D_Quality_Details_']
  ),

  // ------------------ Junior Ratings and Point Awards Concepts ----
  new RankingConcept(
    '_Junior_', 'rap',
    '_Points_Benchmark_',
    ['_PB_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    '_Rating_',
    ['_Rating_Detail_1_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    null,
    ['_Rating_Detail_2_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    '_Points_for_rounds_reached_',
    ['_PRR_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    null,
    ['_PRR_Details_2_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    null,
    ['_DPC_rm_'],
    'pfp', '_read_more_',
    '_DPC_title_'
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    '_National_Age_Category_Ratings_',
    ['_NACR_Detials_'],
    'nacr', '_Read_more_',
    '_National_Age_Category_Rating_Title_'
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    '_National_and_Regional_Rankings_',
    ['_NRR_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    '_Singles_and_Doubles_',
    ['_SD_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    '_RLFBWD_',
    ['_RLFBWD_Domestic_'],
    'rlfbwd_d', '_read_more_',
    "_RLFBWD_"
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    null,
    ['_RLFBWD_Domestic_PU_'],
    'rlfbwd_dpu', '_read_more_',
    "_RLFBWD_"
  ),
  new RankingConcept(
    '_Junior_', 'rap',
    null,
    ['_RLFBWD_Intl_'],
    'rlfbwd_int', '_read_more_',
    "_RLFBWD_"
  ),

  // ------------------ Junior 60% Rationale ------------------------
  new RankingConcept(
    '_Junior_', 'sixty_percent',
    '_Points_Per_Round_',
    ['_PPR_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'sixty_percent',
    '_Choice_of_60_Percent_',
    ['_C60P_Details_']
  ),

  // ------------------ Junior Detailed point calculations  ------------
  new RankingConcept(
    '_Junior_', 'dpc',
    null,
    ['_DPC_1_']
  ),
  new RankingConcept(
    '_Junior_', 'dpc',
    null,
    ['_DPC_2_']
  ),
  new RankingConcept(
    '_Junior_', 'dpc',
    null,
    ['_DPC_3_']
  ),
  new RankingConcept(
    '_Junior_', 'dpc',
    null,
    ['_DPC_4_']
  ),
  new RankingConcept(
    '_Junior_', 'dpc',
    null,
    ['_DPC_Points_']
  ),

  // ------------------ Junior National age category ----------------
  new RankingConcept(
    '_Junior_', 'nacr',
    '_BU16_Rating_',
    ['_BU16_Rating_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 'nacr',
    '_Other_AG_Ratings_',
    ['_Other_AG_Rating_Details']
  ),
  new RankingConcept(
    '_Junior_', 'nacr',
    '_Boys_vs_Girls_',
    ['_Boys_vs_Girls_Details_']
  ),

  // ------------------ Junior Domestic First Round Losses ----------------
  new RankingConcept(
    '_Junior_', 'rlfbwd_d',
    '_RLFBWD_Domestic_Title_',
    []
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_d',
    '_FR_Participation_Required_',
    ['_FR_PR_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_d',
    '_FRL_',
    ['_FRL_Domestic_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_d',
    '_First_Round_Byes_',
    ['_FRBWD_Domestic_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_d',
    '_Second_Round_Byes_',
    ['_SRBWD_Domestic_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_d',
    '_Retirement_',
    ['_Retirement_Details_']
  ),

  // ------------------ Junior Domestic First Round Losses - when playing up ----
  new RankingConcept(
    '_Junior_', 'rlfbwd_dpu',
    '_RLFBWD_Domestic_PU_Title_',
    []
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_dpu',
    '_Win_Required_PU_',
    ['_Win_Required_PU_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_dpu',
    '_FRL_',
    ['_FRL_Domestic_PU_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_dpu',
    '_First_Round_Byes_',
    ['_FRBWD_Domestic_PU_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_dpu',
    '_Second_Round_Byes_',
    ['_SRBWD_Domestic_PU_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_dpu',
    '_Retirement_',
    ['_Retirement_Details_']
  ),

  // ------------------ Junior International First Round Losses ----------------
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_RLFBWD_International_Title_',
    []
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_FR_Participation_Required_',
    ['_FR_PR_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_FRL_',
    ['_FRL_International_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_FRL_Exceptions_',
    ['_FRL_Exception_1_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    null,
    ['_FRL_Exception_2_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    null,
    ['_FRL_Exception_3_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_First_Round_Byes_',
    ['_FRBWD_International_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_Second_Round_Byes_',
    ['_SRBWD_International_']
  ),
  new RankingConcept(
    '_Junior_', 'rlfbwd_int',
    '_Retirement_',
    ['_Retirement_Details_']
  ),

  // ------------------ Junior Events Concepts ----------------------
  new RankingConcept(
    '_Junior_', 're',
    '_National_Junior_Events_',
    ['_NJE_Detials_']
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    ['_NJOS_Details_'],
    'njos', '_Read_more_',
    '_NJOS_Point_Awards_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    '_Provincial_Events_',
    ['_Provincial_Events_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    ['_Provincial_Events_Details_2_'],
    'psf', '_Provincial_Strength_Factor_RM_',
    '_Regional_Strength_Factors_Title_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    ['_Provincial_Events_Details_3_', '_Provincial_Events_Details_4_'],
    'event_grades', '_Read_more_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    ['_Combined_Events_Detail_'],
    'ced', '_Read_more_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    '_International_Junior_Events_',
    ['_IJE_Details_']
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    ['_IJE_Details_2_'],
    'ije', '_IJE_RM_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    '_Open_Events_',
    ['_Open_Event_Details_']
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    [],
    'coevents', '_RM_Canadian_Open_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    [],
    'mpevents', '_RM_Male_Pro_'
  ),
  new RankingConcept(
    '_Junior_', 're',
    null,
    [],
    'fpevents', '_RM_Female_Pro_'
  ),

  // ------------------ National Junior Open Series Points ---------------
  new RankingConcept(
    '_Junior_', 'njos',
    '_NJOS_PA_ON_',
    ['_NJOS_PA_ON_Detail_']
  ),
  new RankingConcept(
    '_Junior_', 'njos',
    '_NJOS_PA_QC_',
    ['_NJOS_PA_QC_Detail_']
  ),
  new RankingConcept(
    '_Junior_', 'njos',
    '_NJOS_PA_BC_',
    ['_NJOS_PA_BC_Detail_']
  ),

  // ------------------ Junior Provincial Strength Factor ---------------
  new RankingConcept(
    '_Junior_', 'psf',
    '_Regional_Strength_Factors_Title_',
    ['_RSF_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_RSF_Details_2_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_RSF_Details_3']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    '_Strength_Factor_Calculation_',
    ['_SFC_Step1_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step1_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step1_Example_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step2_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step2_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step2_Details_2_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step2_Example_1_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step2_Example_2_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step2_More_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step3_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step3_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    null,
    ['_SFC_Step3_Example_']
  ),
  new RankingConcept(
    '_Junior_', 'psf',
    '_Strength_Factor_Recalculation_',
    ['_SFR_Details_']
  ),

  // ------------------ Junior Combined Events ----------------------
  new RankingConcept(
    '_Junior_', 'ced',
    '_Combined_Events_Title_',
    ['_Combined_Events_Detail_', '_Combined_Events_Detail_1_']
  ),
  new RankingConcept(
    '_Junior_', 'ced',
    null,
    ['_Combined_Events_Detail_', '_Combined_Events_Condition_1_']
  ),
  new RankingConcept(
    '_Junior_', 'ced',
    null,
    ['_Combined_Events_Detail_', '_Combined_Events_Condition_2_']
  ),
  new RankingConcept(
    '_Junior_', 'ced',
    null,
    ['_Combined_Events_Detail_', '_Combined_Events_Condition_3_']
  ),
  new RankingConcept(
    '_Junior_', 'ced',
    null,
    ['_Combined_Events_Detail_', '_Combined_Events_Detail_2_']
  ),

  // ------------------ Junior International Events ----------------------
  new RankingConcept(
    '_Junior_', 'ije',
    '_IJE_Player_Data_',
    ['_IJE_Player_Data_Detail_']
  ),
  new RankingConcept(
    '_Junior_', 'ije',
    '_IJE_Sanctioning_Body_',
    ['_IJE_SB_Details_', '_IJE_SB_Details_2_']
  ),
  new RankingConcept(
    '_Junior_', 'ije',
    '_IJE_First_Round_Loss_',
    ['_IJE_FRL_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'ije',
    '_IJE_Underrating_',
    ['_IJE_Underrating_Detail_']
  ),
  new RankingConcept(
    '_Junior_', 'ije',
    '_IJE_No_Qualifying_Points_',
    ['_IJE_No_Qualifying_Points_Detail_']
  ),

  // ------------------ Junior Canadian Open events ----------------------
  new RankingConcept(
    '_Junior_', 'coevents',
    '_Major_Open_Events_',
    ['_MOE_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 'coevents',
    null,
    ['_MOE_Details_2_']
  ),
  new RankingConcept(
    '_Junior_', 'coevents',
    '_Open_Event_Rating_',
    ['_OER_Details_21_']
  ),
  new RankingConcept(
    '_Junior_', 'coevents',
    null,
    ['_OER_Details_2_']
  ),

  // ------------------ Junior in Men's Pro events ----------------------
  new RankingConcept(
    '_Junior_', 'mpevents',
    '_Futures_15K_',
    ['_Futures_15K_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'mpevents',
    '_ATP_15K',
    ['_ATP_15K+_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'mpevents',
    '_Futures_25K_Example_',
    ['_Futures_25k_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'mpevents',
    '_Challenger_50K_Example_',
    ['_Challenger_50K_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'mpevents',
    '_ATP_500_Example_',
    ['_ATP_500_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'mpevents',
    '_Data_Note_',
    ['_Data_Note_Details_']
  ),

  // ------------------ Junior in Women's Pro events ----------------------
  new RankingConcept(
    '_Junior_', 'wpevents',
    '_ITF_25K_Benchmark_',
    ['_ITF_25K_Details_1_']
  ),
  new RankingConcept(
    '_Junior_', 'wpevents',
    null,
    ['_ITF_25K_Details_2_']
  ),
  new RankingConcept(
    '_Junior_', 'wpevents',
    null,
    ['_ITF_25K_Details_3_']
  ),
  new RankingConcept(
    '_Junior_', 'wpevents',
    '_Other_ITF_And_WTA_Events_',
    ['_Other_ITF_And_WTA_Events_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'wpevents',
    '_ITF_15K_Example_',
    ['_ITF_15K_Example_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'wpevents',
    '_WTA_International_Example_',
    ['_WTA_International_Example_Details_']
  ),
  new RankingConcept(
    '_Junior_', 'wpevents',
    '_WTA_Dat\'_Junior_\'a_Note_',
    ['_WTA_Data_Note_Details_']
  ),
];
