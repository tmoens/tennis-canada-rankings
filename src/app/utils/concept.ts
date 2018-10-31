/*
 * A concept is simply a title, a bunch of text and an optional
 * subGroup of concepts which are used to expand on the base concept.
 *
 * Because we do translation, we are dealing with tokens her - not
 * the actual textual strings.
 *
 * By default - the concept comes into play in 2013 and is good forever.
 * But it can come in later and be deprecated.
 */

export class Concept {
  private _expansionGroup: ConceptGroup;
  constructor(
    public _headerTextToken: string,
    public _detailTextTokens: string[],
    public _validFrom: number = 2013,
    public _validUntil: number = 9999,
  ) {
  };
  get headerTextToken(): string {
    return this._headerTextToken;
  }

  set headerTextToken(value: string) {
    this._headerTextToken = value;
  }

  get detailTextTokens(): string[] {
    return this._detailTextTokens;
  }

  set detailTextTokens(value: string[]) {
    this._detailTextTokens = value;
  }

  get validFrom(): number {
    return this._validFrom;
  }

  set validFrom(value: number) {
    this._validFrom = value;
  }

  get validUntil(): number {
    return this._validUntil;
  }

  set validUntil(value: number) {
    this._validUntil = value;
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


export class ConceptGroup {
  private _concepts: Concept[] = [];
  constructor(
    private _headerTextToken: string = null,
    private _detailTextTokens: string[] = [],
    private _validFrom: number = 2013,
    private _validUntil: number = 9999,
  ) {};

  addConcept(concept:Concept) {
    this.concepts.push(concept);
  }

  get headerTextToken(): string {
    return this._headerTextToken;
  }

  set headerTextToken(value: string) {
    this._headerTextToken = value;
  }

  get detailTextTokens(): string[] {
    return this._detailTextTokens;
  }

  set detailTextTokens(value: string[]) {
    this._detailTextTokens = value;
  }

  get validFrom(): number {
    return this._validFrom;
  }

  set validFrom(value: number) {
    this._validFrom = value;
  }

  get validUntil(): number {
    return this._validUntil;
  }

  set validUntil(value: number) {
    this._validUntil = value;
  }

  get concepts(): Concept[] {
    return this._concepts;
  }

  set concepts(value: Concept[]) {
    this._concepts = value;
  }

  getValidConcepts(year: number) {
    return this._concepts.filter(concept => concept.isValid(year));
  }
}

