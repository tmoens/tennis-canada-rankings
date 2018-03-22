export class RankingConcept {
  constructor(public rankingGroupName: string,
              public conceptGroupName: string,
              public headerTextToken: string,
              public detailTextTokens: string[],
              public readMoreConceptGroupName: string = null,
              public readMoreTextToken: string = null,
              public readmoreTitleToken: string = null,
              ) {
  };
}
