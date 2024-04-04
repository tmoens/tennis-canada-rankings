import {Concept} from '../../app/utils/concept';
import {FIRST_ROUND_BYES_C, LB, POINT_CALC_C, RANKING_ELIGIBILITY_C, ROLLING_52_C} from './generic-concepts';
import {ConceptGroup} from '../../app/utils/conceptGroup';

// ================== Open Rankings ========================
// ------------------ Open Key Concepts --------------------
export const OPEN_KEY_CONCEPTS_CG = new ConceptGroup('_KCT_Title_');
OPEN_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Open_Ranking_Scope_', ['_Open_Ranking_Scope_Detail_']));
OPEN_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Open_Event_Ratings_', ['_Open_Event_Ratings_Synopsis_'
  ], 2013, 2021));
OPEN_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Open_Event_Ratings_', ['_Open_Event_Ratings_Synopsis_2022_'
  ], 2022));
OPEN_KEY_CONCEPTS_CG.addConcept(POINT_CALC_C);
OPEN_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Pro_Points_', [
    '_Pro_Points_Detail_1_', LB,
    '_Pro_Points_Detail_2_', LB,
    '_Pro_Points_Detail_3_'
  ], 2013, 2018));
OPEN_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Pro_Points_', [
    '_Pro_Points_Detail_1_', LB,
    '_Pro_Points_Detail_2_', LB,
    '_Pro_Points_Detail_4_'
  ], 2019, 2021));
OPEN_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_Pro_Points_', [
    '_Pro_Points_Detail_1_', LB,
    '_Pro_Points_Detail_2_', LB,
  ], 2022));
OPEN_KEY_CONCEPTS_CG.addConcept(RANKING_ELIGIBILITY_C);

// ------------------ Open Other Concepts -----------------
export const OPEN_OTHER_CG = new ConceptGroup('_Other_Concepts_Title_');
OPEN_OTHER_CG.addConcept(ROLLING_52_C);
OPEN_OTHER_CG.addConcept(new Concept(
  '_open_num_events_', ['_open_num_events_detail_']));
OPEN_OTHER_CG.addConcept(new Concept(
  '_Open_Draw_Size_', ['_Open_Draw_Size_Detail_']));
OPEN_OTHER_CG.addConcept(new Concept(
  '_Open_Events_And_Juniors_', ['_Open_Events_And_Juniors_Detail_']));
OPEN_OTHER_CG.addConcept(FIRST_ROUND_BYES_C);

