import { KeyedStaticCollection } from './keyed-static-collection';
import { Rating } from './rating';
import {ConceptGroup} from './concept';

/*
  A ranking event is any type of event which is supported by Tennis Canada Rankings.
  These range from Under 12 mixed doubles in Newfoundland to the men's singles
  final at Roland Garos.

  All RankingEvents have ratings which indicate their strength relative to other
  events in the same ranking group (junior/senior/adult/wheelchair/open).
*/

export class RankingEvent {
  constructor(
    public name: string,
    public rating: Rating,
    public baseDrawSize?: number) {}

  getBaseDrawSize(): number {
    return (this.baseDrawSize) ? this.baseDrawSize : 0;
  }
}

export enum EventGroupType {
  NONE,
  JR_IN_WOMENS_PRO,
  JR_IN_MENS_PRO,
  JR_IN_OPEN,
  JR_REGIONAL,
}

/*
 A EventGroup is just a named group of RankedEvents or a named group of EventGroups
 (which in turn is a named group of events or groups)
 The grouping just helps with coherent presentation in the rankings web site.
*/
export class EventGroup {
  private _groupType: EventGroupType = EventGroupType.NONE;
  private _conceptGroup: ConceptGroup = null;
  constructor(
    public name: string,
    public rankingEvents:  RankingEvent[] = [],
    public subGroups: KeyedStaticCollection<EventGroup>[] = []) {
  }

  numSubGroups(): boolean {
    return this.subGroups.length > 0;
  }

  hasRankingEvents(): boolean {
    return this.rankingEvents.length > 0;
  }
  get groupType(): EventGroupType {
    return this._groupType;
  }

  set groupType(value: EventGroupType) {
    this._groupType = value;
  }

  get conceptGroup(): ConceptGroup {
    return this._conceptGroup;
  }

  set conceptGroup(value: ConceptGroup) {
    this._conceptGroup = value;
  }
}








