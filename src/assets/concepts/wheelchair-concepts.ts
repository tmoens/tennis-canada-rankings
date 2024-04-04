import {Concept} from '../../app/utils/concept';
import {FIRST_ROUND_BYES_C, LB, RANKING_ELIGIBILITY_C, ROLLING_52_C} from './generic-concepts';
import {ConceptGroup} from '../../app/utils/conceptGroup';

// ================== Wheelchair Rankings =======================
// ------------------ Wheelchair Key Concepts -------------------
export const WHEELCHAIR_KEY_CONCEPTS_CG = new ConceptGroup('_KCT_Title_');
WHEELCHAIR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_wc_rankings_scope_', ['_wc_rankings_scope_1_', LB, '_wc_rankings_scope_2_']));
WHEELCHAIR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_wc_itf_events_', ['_wc_itf_events_1_']));
WHEELCHAIR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_wc_ratings_', ['_wc_ratings_1_']));
WHEELCHAIR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_wc_level_nationals_', ['_wc_level_nationals_1_', LB, '_wc_level_nationals_2_']));
WHEELCHAIR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_wc_level_provincial_championships_',
  ['_wc_level_provincial_championships_1_', LB, '_wc_level_provincial_championships_2_']));
WHEELCHAIR_KEY_CONCEPTS_CG.addConcept(new Concept(
  '_wc_level_provincial_',
  ['_wc_level_provincial_1_', LB, '_wc_level_provincial_2_']));

// ------------------ Wheelchair Other Concepts -----------------
export const WHEELCHAIR_OTHER_CG = new ConceptGroup('_Other_Concepts_Title_');
WHEELCHAIR_OTHER_CG.addConcept(ROLLING_52_C);
WHEELCHAIR_OTHER_CG.addConcept(new Concept(
  '_wc_num_events_', ['_wc_num_events_detail_']));
WHEELCHAIR_OTHER_CG.addConcept(new Concept(
  '_wc_draw_size_', ['_wc_draw_size_1_']));
WHEELCHAIR_OTHER_CG.addConcept(RANKING_ELIGIBILITY_C);
WHEELCHAIR_OTHER_CG.addConcept(new Concept(
  '_wc_rank_publishing_', ['_wc_rank_publishing_1_']));
WHEELCHAIR_OTHER_CG.addConcept(FIRST_ROUND_BYES_C);

