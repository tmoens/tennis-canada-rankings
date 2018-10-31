/*
  A rating is just a multiplier that affects the "value" or the
  "winner points" for an event.  Ratings are applied to:
  events: ATP 500 is rated higher than ATP 250
  provinces: ON is rated higher than BC (for junior tournaments)
  agegroups: U16 is rated lower than U18
  gender: National junior boys and girls events are rated differently

  Usually a rating is just a number, that is the "defaultRating"

  But, because ratings may change year over year, a rating can have a
  separate value per year.  For example, Provincial ratings are re-set
  every year based on how the juniors from each province perform at nationals.
  The year over year ratings are called the annualRatings.

  Note: when editing an annualRating, you only need to add a rating value
  for the years in which the rating actually changes.  The values of the rating
  for the intervening years is inferred.

*/

import { KeyedStaticCollection } from "./keyed-static-collection";

export class Rating {
  defaultRating: number;
  annualRatings?:  KeyedStaticCollection<number>;

  constructor(defaultRating:number,
              annualRatings?:  KeyedStaticCollection<number>) {
    this.defaultRating = defaultRating;
    if (annualRatings) {
      this.annualRatings = annualRatings;
    }
  }

  // What is the value of this rating for a particular year?
  // If we have a specific rating value for that year, great use it.
  // If we have a value for an earlier year, use that.
  // If we have no value for an earlier year, use the default.
  getRating(year:string):number {
    if (this.annualRatings) {
      let v = this.annualRatings.getVersion(year);
      if (v) return v;
    }
    return this.defaultRating;
  }
}

/*
  The following two ratings are effectively equivalent
  since we only deal with years since 2013.
  They both describe a rating that had a value of 0.6 from 2013 to 2016
  which changed to 0.52 in 2017 and has remained there since.
  export const V1: Rating = new Rating(0.6,
    new KeyedStaticCollection<number>({'2017': 0.52}));
  export const V2: Rating = new Rating(9999999,
    new KeyedStaticCollection<number>({'2013': 0.6, '2017': 0.52}));
*/
