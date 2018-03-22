import { KeyedStaticCollection } from "./keyed-static-collection";
import { Rating } from "./rating";
import { DrawSizeRating } from "./draw-size-rating";

/*
  A ranking event is any type of event which is supported by Tennis Canada Rankings.
  These range from Under 12 mixed doubles in Newfoundland to the men's singles
  final at Roland Garos.

  All RankingEvents have ratings which indicate their strength relative to other
  events in the same ranking group (junior/senior/adulat/wheelchair/open).
*/

export class RankingEvent {
  constructor(
    public name: string,
    public rating: Rating,
    public drawSizeRating:DrawSizeRating = null) {};
}

/*
 A EventGroup is just a named group of RankedEvents or a named group of EventGroups
 (which in turn is a named group of events or groups)
 The grouping just helps with coherent presentation in the rankings web site.

 Note: If an event has a DrawSize Rating, it should be the only event in the EventGroup
 This is because the points table columns can be *either* one column per event in the group
 *or* one column per draw size.
*/
export class EventGroup{
  constructor(
    public name: string,
    public finishPositionsToDisplay: number[] = [1,2,3,4,8,16,32],
    public rankingEvents:  RankingEvent[] = [],
    public subGroups: KeyedStaticCollection<EventGroup>[] = []) {
  }

  hasSubGroups():boolean {
    return this.subGroups.length > 0;
  }

  hasRankingEvents():boolean {
    return this.rankingEvents.length > 0;
  }

  setFinishPositionsToDisplay(fps:number[]) {
    this.finishPositionsToDisplay = fps;
  }

}








