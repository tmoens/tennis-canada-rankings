import {Concept, ConceptGroup} from "../../../app/utils/concept";
export const LB = "__lb__";

// ------------------ Generic Point Calculation Dialog -----
// Used for all of the ranking groups
export const POINT_CALCULATION_CG: ConceptGroup = new ConceptGroup('_DPC_title_');
POINT_CALCULATION_CG.addConcept(new Concept(
  '_SE_Point_Awards_', ['_SE_Point_Awards_Detail_']));
POINT_CALCULATION_CG.addConcept(new Concept(
  '_Choice_of_60_Percent_', ['_C60P_Detail_']));
POINT_CALCULATION_CG.addConcept(new Concept(
  '_SE_Consolations_', ['_SE_Consolations_Detail_']));
POINT_CALCULATION_CG.addConcept(new Concept(
  '_Other_Draw_Types_', ['_Other_Draw_Types_Detail_']));
POINT_CALCULATION_CG.addConcept(new Concept(
  '_View_Other_Point_Awards_', ['_View_Other_Point_Awards_Detail_'],));
POINT_CALCULATION_CG.addConcept(new Concept(
  '_DPC_Formula_', ['_DPC_Formula_Detail_', LB, '_DPC_Formula_Itself_']));

export const POINT_CALC_C = new Concept('_point_award_calc_',
  ['_point_calc_synopsis_', '_point_calc_rm_']);
POINT_CALC_C.expansionGroup = POINT_CALCULATION_CG;

export const ROLLING_52_C = new Concept(
  '_rolling_52_weeks_', ['_rolling_52_weeks_detail_']);
export const RANKING_ELIGIBILITY_C = new Concept(
  '_Rankings_Eligibility_', ['_Rankings_Eligibility_Detail_'])
 export const FIRST_ROUND_BYES_C = new Concept(
  '_First_Round_Byes_', ['_First_Round_Byes_Synopsis_']);
