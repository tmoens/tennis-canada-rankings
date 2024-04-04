import {AgeGroup} from '../app/age-group';
import {
  BU12_RATING, BU14_RATING, BU16_RATING, BU18_RATING,
  GU12_RATING, GU14_RATING, GU16_RATING, GU18_RATING
} from './ratings';

export const BU18: AgeGroup = new AgeGroup('BU18', 'M', BU18_RATING);

export const BU16: AgeGroup = new AgeGroup('BU16', 'M', BU16_RATING);

export const BU14: AgeGroup = new AgeGroup('BU14', 'M', BU14_RATING);

export const BU12: AgeGroup = new AgeGroup('BU12', 'M', BU12_RATING);

export const GU18: AgeGroup = new AgeGroup('GU18', 'F', GU18_RATING);

export const GU16: AgeGroup = new AgeGroup('GU16', 'F', GU16_RATING);

export const GU14: AgeGroup = new AgeGroup('GU14', 'F', GU14_RATING);

export const GU12: AgeGroup = new AgeGroup('GU12', 'F', GU12_RATING);

export const JUNIOR_AGE_GROUPS: AgeGroup[] =
  [BU18, BU16, BU14, BU12, GU18, GU16, GU14, GU12];
