// These ratings are used in several different places.

import {KeyedStaticCollection} from '../app/utils/keyed-static-collection';
import {Rating} from '../app/utils/rating';

export const BU18_RATING =
  new Rating(1);

export const BU16_RATING =
  new Rating(0.6, new KeyedStaticCollection<number>({'2017': 0.52}));

export const BU14_RATING =
  new Rating(0.3, new KeyedStaticCollection<number>({'2017': 0.21}));

export const BU12_RATING =
  new Rating(0.1, new KeyedStaticCollection<number>({'2017': 0.07}));

export const GU18_RATING =
  new Rating(1);

export const GU16_RATING =
  new Rating(0.68, new KeyedStaticCollection<number>({'2017': 0.74}));

export const GU14_RATING =
  new Rating(0.3, new KeyedStaticCollection<number>({'2017': 0.36}));

export const GU12_RATING =
  new Rating(0.12, new KeyedStaticCollection<number>({'2017': 0.14}));

