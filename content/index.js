import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import { it } from './it';
import { fr } from './fr';
import { ar } from './ar';
import { ru } from './ru';

const content = { en, es, pt, it, fr, ar, ru };

export function getContent(locale) {
  return content[locale] || en;
}
