export const locales = ['en', 'es', 'pt', 'it', 'fr', 'ar', 'ru'];
export const defaultLocale = 'en';
export const rtlLocales = ['ar'];

export function dir(locale) {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}

export const langLabels = {
  en: 'EN', es: 'ES', pt: 'PT', it: 'IT', fr: 'FR', ar: 'AR', ru: 'RU',
};
