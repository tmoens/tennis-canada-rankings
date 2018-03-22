import {Rating} from "./rating";

// This can have more attributes later.  this is all i need for now.

export class AgeGroup {
  constructor(public name:string,
              public gender: string,
              public rating: Rating) {}
}
