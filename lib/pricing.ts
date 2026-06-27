/**
 * Все цены хранятся внутри в USD. Конвертация — по индикативным курсам
 * (ориентировочно, не финансовая котировка). Базовая валюта — USD.
 */
export type CurrencyCode = "USD" | "EUR" | "GBP" | "GEL" | "AMD" | "AED" | "RUB";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  /** сколько единиц валюты в 1 USD */
  rate: number;
  /** округление до N (для красивых цен) */
  round: number;
  label: string;
}

export const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", rate: 1, round: 100, label: "US Dollar" },
  { code: "EUR", symbol: "€", rate: 0.92, round: 100, label: "Euro" },
  { code: "GBP", symbol: "£", rate: 0.79, round: 100, label: "British Pound" },
  { code: "GEL", symbol: "₾", rate: 2.7, round: 100, label: "Georgian Lari" },
  { code: "AMD", symbol: "֏", rate: 387, round: 5000, label: "Armenian Dram" },
  { code: "AED", symbol: "AED", rate: 3.67, round: 100, label: "UAE Dirham" },
  { code: "RUB", symbol: "₽", rate: 79, round: 5000, label: "Russian Ruble" },
];

export interface PricingTier {
  name: string;
  /** базовая цена в USD; null = индивидуально */
  priceUsd: number | null;
  unit: string;
  tagline: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Launch / MVP",
    priceUsd: 5000,
    unit: "от",
    tagline: "Запуск идеи в продакшен",
    description:
      "Для стартапов, которым нужно быстро проверить гипотезу рабочим продуктом, а не прототипом.",
    features: [
      "Лендинг или компактный продукт",
      "1 ключевой пользовательский сценарий",
      "AI-функция или интеграция под ключ",
      "Деплой на Vercel + базовый SEO",
      "2–4 недели до релиза",
    ],
    cta: "Обсудить MVP",
  },
  {
    name: "Growth / SaaS",
    priceUsd: 15000,
    unit: "от",
    tagline: "Продукт, готовый расти",
    description:
      "Полноценный SaaS или платформа с биллингом, кабинетами и масштабируемой архитектурой.",
    features: [
      "Многопользовательская архитектура",
      "Биллинг и платежи (Stripe)",
      "AI-агенты и автоматизация процессов",
      "Админ-панель и аналитика",
      "Еженедельные демо и поддержка после релиза",
    ],
    highlighted: true,
    cta: "Запустить продукт",
  },
  {
    name: "Scale / Enterprise",
    priceUsd: 40000,
    unit: "от",
    tagline: "Сложные системы и нагрузки",
    description:
      "Enterprise-платформы, Web3 и высоконагруженные системы с командой сеньоров под задачу.",
    features: [
      "Распределённая отказоустойчивая архитектура",
      "Web3 / смарт-контракты с аудитом",
      "Интеграции, роли, безопасность, аудит",
      "DevOps, CI/CD и мониторинг",
      "Долгосрочное сопровождение и SLA",
    ],
    cta: "Спроектировать систему",
  },
  {
    name: "Retainer",
    priceUsd: 3000,
    unit: "от",
    tagline: "Постоянная команда под рукой",
    description:
      "Ежемесячное развитие и поддержка продукта выделенной командой студии.",
    features: [
      "Выделенные часы инженеров ежемесячно",
      "Развитие фич и техническая поддержка",
      "Мониторинг и обновления",
      "Приоритетный канал связи",
    ],
    cta: "Обсудить сопровождение",
  },
];

export function convert(usd: number, currency: Currency): number {
  const raw = usd * currency.rate;
  return Math.round(raw / currency.round) * currency.round;
}

export function formatPrice(usd: number, currency: Currency): string {
  const value = convert(usd, currency);
  const formatted = new Intl.NumberFormat("ru-RU").format(value);
  // символ-префикс для $€£₾₽֏, постфикс для буквенных кодов (AED)
  return currency.code === "AED"
    ? `${formatted} ${currency.symbol}`
    : `${currency.symbol}${formatted}`;
}
