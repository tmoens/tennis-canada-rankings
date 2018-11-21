import {Concept, ConceptGroup} from "../../app/utils/concept";
import {FIRST_ROUND_BYES_C, LB, POINT_CALC_C, RANKING_ELIGIBILITY_C, ROLLING_52_C} from "./generic-concepts";
let c: Concept;
// ================== Adult Rankings =======================
// ------------------ Adult Draw Size Dialog ---------------
const ADULT_DRAW_SIZE_CG: ConceptGroup = new ConceptGroup('_Draw_Size_');
ADULT_DRAW_SIZE_CG.addConcept(new Concept(null, ['_adult_draw_size_detail_1_']));
ADULT_DRAW_SIZE_CG.addConcept(new Concept(null, ['_adult_draw_size_detail_2_']));

// ------------------ Adult separate categories dialog -----
const SEP_CATEGORY_CG: ConceptGroup = new ConceptGroup('_Separate_Categories_');
SEP_CATEGORY_CG.addConcept(new Concept(null, [
  '_SC_D_1_', LB, '_SC_D_2_', LB, '_SC_D_3_', LB, '_SC_D_4_', LB, '_SC_D_5_']));

// ------------------ Adult Key Concepts -------------------
export const ADULT_KEY_CONCEPTS_CG = new ConceptGroup('_KCT_Title_');
ADULT_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Adult_Ranking_Scope_',
  ['_Adult_Ranking_Scope_Detail_']));

ADULT_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Adult_Ranking_Focus_',
  ['_Adult_Ranking_Focus_Detail_']));
c = new Concept(
  '_Adult_Ratings_',
  ['_Adult_Ratings_Synopsis_', '_Adult_Ratings_RM_']);
c.expansionGroup = ADULT_DRAW_SIZE_CG;
ADULT_KEY_CONCEPTS_CG.addConcept(c);
c = new Concept(
  '_Separate_Categories_',
  ['_SC_Synopsis_', '_SC_RM_']);
c.expansionGroup = SEP_CATEGORY_CG;
ADULT_KEY_CONCEPTS_CG.addConcept(POINT_CALC_C);
ADULT_KEY_CONCEPTS_CG.addConcept(c);

// ------------------ Adult Other Concepts -----------------
export const ADULT_OTHER_CG = new ConceptGroup('_Other_Concepts_Title_');
ADULT_OTHER_CG.addConcept(ROLLING_52_C);
ADULT_OTHER_CG.addConcept(new Concept(
  '_adult_num_events_',
  ['_adult_num_events_detail_']));
ADULT_OTHER_CG.addConcept(RANKING_ELIGIBILITY_C);
ADULT_OTHER_CG.addConcept(new Concept(
  '_Adult_Events_And_Juniors_',
  ['_Adult_Events_And_Juniors_Detail_']));
ADULT_OTHER_CG.addConcept(FIRST_ROUND_BYES_C);


