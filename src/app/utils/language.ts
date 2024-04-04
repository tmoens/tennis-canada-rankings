export interface Language {
  fr: boolean;
  prefix: string;
  name: string;
  buttonLabel: string;
  backgroundClass: string;
}

export const ENGLISH: Language = {
  fr: false,
  prefix: 'en',
  name: 'en_US',
  buttonLabel: 'Français',
  backgroundClass: 'en-bg'
};
export const FRENCH: Language = {
  fr: true,
  prefix: 'fr',
  name: 'fr_CA',
  buttonLabel: 'English',
  backgroundClass: 'fr-bg'
};
