import {Concept} from './concept';

export class ConceptGroup {
  private _concepts: Concept[] = [];

  constructor(
    private _headerTextToken: string = null,
  ) {
  }

  addConcept(concept: Concept) {
    this.concepts.push(concept);
  }

  get headerTextToken(): string {
    return this._headerTextToken;
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
