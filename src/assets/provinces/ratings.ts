import {Rating} from '../../app/utils/rating';
import {KeyedStaticCollection} from '../../app/utils/keyed-static-collection';

// These are the provincial rating factors.  They are grouped for easy annual editing.
// We do not do separate ratings for each atlantic province, but rather one for the
// whole region.

export const ATLANTICS_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.101,
    2016: 0.106,
    2017: 0.0556,
    2018: 0.0572,
    2019: 0.058,
    2020: 0.064,
    2021: 0.064,
    2022: 0.105,
    2023: 0.097,
    2024: 0.095,
  }));
export const ATLANTICS_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.101,
    2016: 0.100,
    2017: 0.050,
    2018: 0.050,
    2019: 0.050,
    2020: 0.051,
    2021: 0.051,
    2022: 0.051,
    2023: 0.052,
    2024: 0.056,
  }));
export const AB_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.145,
    2014: 0.153,
    2015: 0.164,
    2016: 0.151,
    2017: 0.092,
    2018: 0.070,
    2019: 0.066,
    2020: 0.076,
    2021: 0.076,
    2022: 0.1,
    2023: 0.102,
    2024: 0.126,
  }));
export const AB_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.126,
    2014: 0.128,
    2015: 0.132,
    2016: 0.124,
    2017: 0.083,
    2018: 0.092,
    2019: 0.169,
    2020: 0.201,
    2021: 0.201,
    2022: 0.212,
    2023: 0.166,
    2024: 0.159,
  }));
export const BC_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.225,
    2014: 0.216,
    2015: 0.217,
    2016: 0.214,
    2017: 0.175,
    2018: 0.183,
    2019: 0.250,
    2020: 0.227,
    2021: 0.227,
    2022: 0.273,
    2023: 0.265,
    2024: 0.205,
  }));
export const BC_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.178,
    2014: 0.207,
    2015: 0.213,
    2016: 0.194,
    2017: 0.139,
    2018: 0.148,
    2019: 0.143,
    2020: 0.174,
    2021: 0.174,
    2022: 0.2,
    2023: 0.212,
    2024: 0.252,
  }));
export const MB_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.102,
    2016: 0.102,
    2017: 0.0524,
    2018: 0.0516,
    2019: 0.054,
    2020: 0.052,
    2021: 0.052,
    2022: 0.074,
    2023: 0.106,
    2024: 0.077,
  }));
export const MB_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.1,
    2014: 0.1,
    2015: 0.1,
    2016: 0.101,
    2017: 0.0556,
    2018: 0.058,
    2019: 0.065,
    2020: 0.066,
    2021: 0.066,
    2022: 0.061,
    2023: 0.074,
    2024: 0.1,
  }));
export const ON_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.490,
    2014: 0.498,
    2015: 0.524,
    2016: 0.564,
    2017: 0.497,
    2018: 0.486,
    2019: 0.418,
    2020: 0.462,
    2021: 0.462,
    2022: 0.342,
    2023: 0.358,
    2024: 0.395,
  }));
export const ON_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.719,
    2014: 0.708,
    2015: 0.690,
    2016: 0.686,
    2017: 0.638,
    2018: 0.639,
    2019: 0.586,
    2020: 0.485,
    2021: 0.485,
    2022: 0.469,
    2023: 0.453,
    2024: 0.399,
  }));
export const QC_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.439,
    2014: 0.432,
    2015: 0.392,
    2016: 0.365,
    2017: 0.379,
    2018: 0.403,
    2019: 0.404,
    2020: 0.369,
    2021: 0.369,
    2022: 0.349,
    2023: 0.322,
    2024: 0.351,
  }));
export const QC_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.276,
    2014: 0.256,
    2015: 0.264,
    2016: 0.300,
    2017: 0.285,
    2018: 0.263,
    2019: 0.237,
    2020: 0.267,
    2021: 0.267,
    2022: 0.248,
    2023: 0.293,
    2024: 0.285,
  }));
export const SK_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.101,
    2014: 0.101,
    2015: 0.102,
    2016: 0.102,
    2017: 0.0524,
    2018: 0.0516,
    2019: 0.054,
    2020: 0.052,
    2021: 0.052,
    2022: 0.074,
    2023: 0.106,
    2024: 0.077,
  }));
export const SK_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({
    2013: 0.1,
    2014: 0.1,
    2015: 0.1,
    2016: 0.102,
    2017: 0.0556,
    2018: 0.058,
    2019: 0.065,
    2020: 0.056,
    2021: 0.056,
    2022: 0.061,
    2023: 0.074,
    2024: 0.1,
  }));
export const CAN_BOYS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({}));
export const CAN_GIRLS_RATING: Rating = new Rating(1,
  new KeyedStaticCollection<number>({}));
