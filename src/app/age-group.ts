import {Rating} from './utils/rating';

// This can have more attributes later.

export class AgeGroup {
  constructor(public name: string,
              public gender: string,
              public rating: Rating) {}
}
