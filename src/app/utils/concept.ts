/*
 * A concept is simply a title, a bunch of text and an optional
 * subGroup of concepts which are used to expand on the base concept.
 *
 * Because we do translation, we are dealing with tokens here - not textual strings.
 *
 * By default - the concept comes into play in 2013 and is good forever.
 * But it can be added later with a "validFrom" year.
 * And it can be deprecated by adding a "validUntil" year.
 */

import {ConceptGroup} from './conceptGroup';

export class Concept {
  private _expansionGroup: ConceptGroup;

  constructor(
    public _headerTextToken: string,
    public _detailTextTokens: string[],
    public _validFrom: number = 2013,
    public _validUntil: number = 9999,
  ) {
  }

  get headerTextToken(): string {
    return this._headerTextToken;
  }

  get detailTextTokens(): string[] {
    return this._detailTextTokens;
  }

  get validFrom(): number {
    return this._validFrom;
  }

  get validUntil(): number {
    return this._validUntil;
  }

  get expansionGroup(): ConceptGroup {
    return this._expansionGroup;
  }

  set expansionGroup(value: ConceptGroup) {
    this._expansionGroup = value;
  }

  isValid(year: number): boolean {
    return year >= this.validFrom && year <= this.validUntil;
  }
}


