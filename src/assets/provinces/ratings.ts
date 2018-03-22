import {Rating} from "../../app/rating";
import {KeyedStaticCollection} from "../../app/keyed-static-collection";

// These are the provincial rating factors.  They are grouped for easy annual editing.
// We do not do separate ratings for each atlantic province, but rather one for the
// whole region.

export const ATLANTICS_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.101,
    2016: 0.101,
    2017: 0.0556,
    2018: 0.0572,
  }));
export const ATLANTICS_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.101,
    2016: 0.100,
    2017: 0.050,
    2018: 0.050,
  }));
export const AB_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.145,
    2014: 0.153,
    2015: 0.164,
    2016: 0.151,
    2017: 0.092,
    2018: 0.070,
  }));
export const AB_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.126,
    2014: 0.128,
    2015: 0.132,
    2016: 0.124,
    2017: 0.083,
    2018: 0.092,
  }));
export const BC_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.225,
    2014: 0.213,
    2015: 0.217,
    2016: 0.214,
    2017: 0.175,
    2018: 0.183,
  }));
export const BC_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.178,
    2014: 0.207,
    2015: 0.213,
    2016: 0.194,
    2017: 0.139,
    2018: 0.148,
  }));
export const MB_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.102,
    2016: 0.101,
    2017: 0.0524,
    2018: 0.0516,
  }));
export const MB_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.1,
    2014: 0.1,
    2015: 0.1,
    2016: 0.101,
    2017: 0.0556,
    2018: 0.058,
  }));
export const ON_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.49,
    2014: 0.498,
    2015: 0.524,
    2016: 0.588,
    2017: 0.497,
    2018: 0.486,
  }));
export const ON_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.719,
    2014: 0.708,
    2015: 0.690,
    2016: 0.686,
    2017: 0.638,
    2018: 0.639,
  }));
export const QC_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.439,
    2014: 0.432,
    2015: 0.392,
    2016: 0.365,
    2017: 0.379,
    2018: 0.403,
  }));
export const QC_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.276,
    2014: 0.256,
    2015: 0.264,
    2016: 0.300,
    2017: 0.285,
    2018: 0.263,
  }));
export const SK_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.102,
    2016: 0.102,
    2017: 0.0524,
    2018: 0.0516,
  }));
export const SK_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.1,
    2014: 0.1,
    2015: 0.1,
    2016: 0.102,
    2017: 0.0556,
    2018: 0.058,
  }));
export const CAN_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({}));
export const CAN_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({}));
