export type Lang = "en" | "ru" | "ka" | "hy";

export const LANGS: Lang[] = ["en", "ru", "ka", "hy"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  ru: "Русский",
  ka: "ქართული",
  hy: "Հայերեն",
};

export interface Dict {
  lang: Lang;
  site: {
    name: string;
    tagline: string;
    description: string;
    descriptionShort: string;
    experienceLine: string;
    openForProjects: string;
    boutiqueLabel: string;
    stats: { value: string; label: string }[];
  };
  nav: {
    services: string;
    portfolio: string;
    technologies: string;
    process: string;
    pricing: string;
    faq: string;
    blog: string;
    contacts: string;
    discussProject: string;
  };
  hero: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: [string, string, string];
    p2: [string, string];
    p3: string;
    cta1: string;
    cta2: string;
    pillars: { title: string; text: string }[];
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    ctaLine: string;
    cta: string;
    items: { title: string; value: string; client: string; outcome: string }[];
  };
  why: {
    badge: string;
    heading: string;
    subheading: string;
    items: { title: string; desc: string }[];
  };
  portfolio: {
    badge: string;
    heading: string;
    subheading: string;
    filters: { all: string };
    modal: { tech: string; about: string; challenge: string; solution: string; outcome: string; similar: string; discuss: string; openProject: string; requestDemo: string; learnLaunch: string };
  };
  tech: {
    badge: string;
    heading: string;
    subheading: string;
  };
  process: {
    badge: string;
    heading: string;
    subheading: string;
    steps: { title: string; desc: string; bullets: string[] }[];
  };
  pricing: {
    badge: string;
    heading: string;
    subheading: string;
    disclaimer: string;
    customQuote: string;
    popular: string;
    ctaPrefix: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
  };
  faq: {
    badge: string;
    heading: string;
    subheading: string;
    askDirect: string;
    items: { q: string; a: string }[];
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    whatsapp: string;
    whatsappSub: string;
    messenger: string;
    messengerSub: string;
    form: string;
    formSub: string;
    worldwide: string;
    fieldName: string;
    fieldContact: string;
    fieldType: string;
    fieldMessage: string;
    placeholderName: string;
    placeholderContact: string;
    placeholderMessage: string;
    submit: string;
    sending: string;
    consent: string;
    successTitle: string;
    successText: string;
    resend: string;
    errorNetwork: string;
    errorSend: string;
    projectTypes: string[];
  };
  footer: {
    description: string;
    nav: string;
    connect: string;
    copyright: string;
    founderLine: string;
  };
  blog: {
    heading: string;
    subheading: string;
    readMore: string;
    backToBlog: string;
    ctaLine: string;
    cta: string;
  };
  seo: {
    titleTemplate: string;
    blogTitle: string;
  };
}

import en from "./en";
import ru from "./ru";
import ka from "./ka";
import hy from "./hy";

export const DICTS: Record<Lang, Dict> = { en, ru, ka, hy };

export function getDict(lang: Lang): Dict {
  return DICTS[lang] ?? DICTS.en;
}
