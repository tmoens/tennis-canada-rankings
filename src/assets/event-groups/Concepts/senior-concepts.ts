import {Concept, ConceptGroup} from "../../../app/concept";
import {LB, POINT_CALC_C, RANKING_ELIGIBILITY_C, ROLLING_52_C} from "./generic-concepts";

// ================== Senior Rankings =======================
// ------------------ Senior Key Concepts -------------------
export const SENIOR_KEY_CONCEPTS_CG = new ConceptGroup('_KCT_Title_');
SENIOR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Senior_Ranking_Scope_', [
    '_Senior_Ranking_Scope_Detail_', LB, '_Senior_Ranking_Scope_Detail_1_'
  ]));
SENIOR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Ranked_Categories_', ['_Ranked_Categories_Synopsis_']));
SENIOR_KEY_CONCEPTS_CG.addConcept(RANKING_ELIGIBILITY_C);
SENIOR_KEY_CONCEPTS_CG.addConcept(new Concept(   
  '_National_Team_Selection_', ['_National_Team_Selection_Detail_']));

// ------------------ Senior Event Structure -------------------
export const SENIOR_RATINGS_AND_POINTS_GC = new ConceptGroup('_RAP_Title_');
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_nationals_', ['_s_nationals_description_']));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_national_indoor_', ['_s_national_indoor_description_']));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_itf_', ['_s_itf_description_'], 2013, 2018));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_prov_tier_1_', ['_s_prov_tier_1_description_'], 2013, 2018));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_prov_tier_1_2019_',
  ['_s_prov_tier_1_description_2019_'], 2019));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_prov_tier_2_', ['_s_prov_tier_2_description_'], 2013, 2018));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_prov_tier_2_2019_',
  ['_s_prov_tier_2_description_2019_'], 2019));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_s_prov_tier_3_2019_',
  ['_s_prov_tier_3_description_2019_'], 2019));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_International_Events_', ['_International_Events_Details_']));
SENIOR_RATINGS_AND_POINTS_GC.addConcept(POINT_CALC_C);
SENIOR_RATINGS_AND_POINTS_GC.addConcept(new Concept(
  '_Seniors_Draw_Size_', ['_Seniors_Draw_Size_Synopsis_']));

// // ------------------ Senior Other Concepts -----------------
export const SENIOR_OTHER_CG = new ConceptGroup('_Other_Concepts_Title_');
SENIOR_OTHER_CG.addConcept(new Concept(
  '_Playing_Down_', ['_Playing_Down_Detail_']));
SENIOR_OTHER_CG.addConcept(new Concept(
  '_Aging_Up_', ['_Aging_Up_Detail_1_']));
SENIOR_OTHER_CG.addConcept(ROLLING_52_C);
SENIOR_OTHER_CG.addConcept(new Concept(
  '_senior_num_events_', ['_senior_num_events_detail_']));
SENIOR_OTHER_CG.addConcept(new Concept(
  '_First_Round_Byes_', ['_First_Round_Byes_Synopsis_']));
SENIOR_OTHER_CG.addConcept(new Concept(
  '_Senior_And_Other_Rankings_', ['_Senior_And_Other_Rankings_Detail_']));

