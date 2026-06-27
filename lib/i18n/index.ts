export type Lang = "en" | "ru" | "ka" | "hy";

export const LANGS: Lang[] = ["en", "ru", "ka", "hy"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  ru: "Русский",
  ka: "ქართული",
  hy: "Հայերեն",
};

export const DEFAULT_LANG: Lang = "en";

/** Parse Accept-Language header to detect best matching language */
export function detectLang(header: string | null, cookie: string | null): Lang {
  if (cookie) {
    const saved = cookie.trim() as Lang;
    if (LANGS.includes(saved)) return saved;
  }
  if (!header) return DEFAULT_LANG;
  const langs = header.split(",").map((l) => {
    const [tag] = l.trim().split(";");
    return tag.split("-")[0].toLowerCase();
  });
  for (const l of langs) {
    if (l === "ru") return "ru";
    if (l === "ka") return "ka";
    if (l === "hy") return "hy";
    if (l === "en") return "en";
  }
  return DEFAULT_LANG;
}

export function isValidLang(lang: string): lang is Lang {
  return LANGS.includes(lang as Lang);
}
