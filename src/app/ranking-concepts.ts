import {Injectable} from '@angular/core';
import {RankingConcept} from "./ranking-concept";
import {CONCEPTS} from "../assets/ranking-concepts";

export interface RankingConceptGroup {
  name: string;
  title: string;
}

/*
  This is just a static database of concept groups with a single function to
  look up a bunch of concepts based on two keys.
*/
@Injectable()
export class RankingConcepts {
  getConceptsByName(rankingGroupName:string, conceptGroupName:string): RankingConcept[] {
    // return CONCEPTS.filter(c => c.rankingGroupName === rankingGroupName && c.conceptGroupName === conceptGroupName);
    let concepts:RankingConcept[] = [];
    concepts = CONCEPTS.filter(c => c.rankingGroupName === rankingGroupName && c.conceptGroupName === conceptGroupName);
    if (concepts.length == 0 ) {
      concepts = CONCEPTS.filter(c => c.rankingGroupName === "_Generic_" && c.conceptGroupName === conceptGroupName);
    }
    return concepts;
  }
}
