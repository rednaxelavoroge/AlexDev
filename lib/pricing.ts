/**
 * Все цены хранятся внутри в USD. Конвертация — по индикативным курсам
 * (ориентировочно, не финансовая котировка). Базовая валюта — USD.
 * Курсы обновляются через Frankfurter API и кешируются в sessionStorage на 1 час.
 */
export type CurrencyCode = "USD" | "EUR" | "GBP" | "GEL" | "AMD" | "AED" | "RUB";

const DEFAULT_RATES: Record<string, number> = {
  EUR: 0.92,
  GBP: 0.79,
  GEL: 2.7,
  AMD: 387,
  AED: 3.67,
  RUB: 82,
};

/** Создаёт массив валют с указанными курсами */
function buildCurrencies(rates: Record<string, number>): Currency[] {
  return [
    { code: "USD", symbol: "$", rate: 1, round: 1, label: "US Dollar" },
    { code: "EUR", symbol: "€", rate: rates.EUR ?? DEFAULT_RATES.EUR, round: 1, label: "Euro" },
    { code: "GBP", symbol: "£", rate: rates.GBP ?? DEFAULT_RATES.GBP, round: 1, label: "British Pound" },
    { code: "GEL", symbol: "₾", rate: rates.GEL ?? DEFAULT_RATES.GEL, round: 1, label: "Georgian Lari" },
    { code: "AMD", symbol: "֏", rate: rates.AMD ?? DEFAULT_RATES.AMD, round: 100, label: "Armenian Dram" },
    { code: "AED", symbol: "AED", rate: rates.AED ?? DEFAULT_RATES.AED, round: 1, label: "UAE Dirham" },
    { code: "RUB", symbol: "₽", rate: rates.RUB ?? DEFAULT_RATES.RUB, round: 100, label: "Russian Ruble" },
  ];
}

/** Запрашивает живые курсы через Frankfurter API, кеширует в sessionStorage на 1 час */
export async function fetchLiveRates(): Promise<Currency[]> {
  const CACHE_KEY = "alexdev_fx_rates";
  const CACHE_TTL = 60 * 60 * 1000; // 1 час

  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { rates, ts } = JSON.parse(cached);
      if (Date.now() - ts < CACHE_TTL) {
        return buildCurrencies(rates);
      }
    }
  } catch { /* невалидный кеш — идём в сеть */ }

  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,GEL,AMD,RUB");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const rates: Record<string, number> = { ...data.rates, AED: 3.67 }; // AED фиксирован к USD
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ rates, ts: Date.now() }));
    } catch { /* sessionStorage недоступен */ }
    return buildCurrencies(rates);
  } catch {
    return buildCurrencies(DEFAULT_RATES);
  }
}

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  /** сколько единиц валюты в 1 USD */
  rate: number;
  /** округление до N (для красивых цен) */
  round: number;
  label: string;
}

export const CURRENCIES: Currency[] = buildCurrencies(DEFAULT_RATES);

export interface PricingTier {
  name: string;
  /** базовая цена в USD; null = Custom Quote */
  priceUsd: number | null;
  unit: string;
  taglineEn: string;
  taglineRu: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Landing Page",
    priceUsd: 99,
    unit: "from",
    taglineEn: "Single-page site with form and analytics",
    taglineRu: "Одностраничный сайт с формой и аналитикой",
    features: [
      "Responsive single-page website",
      "Contact form, map, messengers",
      "Basic SEO optimization",
      "Domain, hosting, SSL",
      "Analytics and tracking pixels",
      "3–5 days to launch",
    ],
    cta: "Order a landing page",
  },
  {
    name: "Business Website",
    priceUsd: 500,
    unit: "from",
    taglineEn: "Multi-page company website with CMS",
    taglineRu: "Многостраничный сайт компании с CMS",
    features: [
      "Multi-page site (up to 10 pages)",
      "CMS for self-management",
      "Advanced SEO & 95+ PageSpeed",
      "Blog, portfolio, testimonials",
      "CRM and messenger integration",
      "1–2 weeks to launch",
    ],
    cta: "Build a website",
  },
  {
    name: "Corporate Website",
    priceUsd: 1500,
    unit: "from",
    taglineEn: "Premium corporate platform with custom UX",
    taglineRu: "Премиальная корпоративная платформа",
    features: [
      "Unique design and animations",
      "Client/partner portal",
      "Advanced SEO strategy",
      "Multilingual (2+ languages)",
      "Integrations: CRM, ERP, payments",
      "2–4 weeks to launch",
    ],
    highlighted: true,
    cta: "Discuss project",
  },
  {
    name: "Startup MVP",
    priceUsd: 500,
    unit: "from",
    taglineEn: "Functional prototype to test your idea",
    taglineRu: "Функциональный прототип для проверки идеи",
    features: [
      "Working product, not a clickable mockup",
      "1 core user scenario",
      "Auth and basic admin panel",
      "Cloud deployment + monitoring",
      "Iterative 1-week sprints",
      "2–4 weeks to MVP",
    ],
    cta: "Launch MVP",
  },
  {
    name: "Telegram Mini App",
    priceUsd: 500,
    unit: "from",
    taglineEn: "In-app experience inside Telegram",
    taglineRu: "Приложение внутри Telegram",
    features: [
      "Mini App with Telegram auth",
      "Telegram Stars payments",
      "Referral system and gamification",
      "Admin bot and notifications",
      "Web content management panel",
      "1–3 weeks to launch",
    ],
    cta: "Build Mini App",
  },
  {
    name: "AI Integration",
    priceUsd: 1000,
    unit: "from",
    taglineEn: "Embed AI into your business workflow",
    taglineRu: "Внедрение AI в ваш бизнес-процесс",
    features: [
      "AI agent or RAG system for your use case",
      "Integration with your knowledge base",
      "API or chat interface (Web / TG / WA)",
      "Automation of one end-to-end process",
      "Team training on working with AI",
      "2–4 weeks to deployment",
    ],
    highlighted: true,
    cta: "Integrate AI",
  },
  {
    name: "Marketplace",
    priceUsd: 5000,
    unit: "from",
    taglineEn: "Two-sided platform with payments and moderation",
    taglineRu: "Двусторонняя платформа с платежами и модерацией",
    features: [
      "Two user types + roles",
      "Payment gateway and commissions",
      "Ratings, reviews, verification",
      "Admin panel with moderation",
      "Search, filters, catalog",
      "1–3 months to launch",
    ],
    cta: "Launch marketplace",
  },
  {
    name: "FinTech Platform",
    priceUsd: 25000,
    unit: "from",
    taglineEn: "Financial platform with compliance and high-load architecture",
    taglineRu: "Финансовая платформа с комплаенсом и высокой нагрузкой",
    features: [
      "Fault-tolerant high-load architecture",
      "Payment gateway (Stripe / local acquirers)",
      "KYC/AML and compliance",
      "Web3 / smart contracts (optional)",
      "Security audit and pentest",
      "2–4 months to launch",
    ],
    cta: "Discuss FinTech",
  },
  {
    name: "Enterprise AI",
    priceUsd: null,
    unit: "",
    taglineEn: "Custom enterprise AI systems — tailored scope and pricing",
    taglineRu: "Кастомные enterprise AI-системы — объём и цена под задачу",
    features: [
      "Custom AI architecture",
      "Senior specialist team per project",
      "Legacy system integration",
      "Security audit and compliance",
      "SLA and long-term support",
      "Roadmap and phased delivery",
    ],
    cta: "Contact us",
  },
];

export function convert(usd: number, currency: Currency): number {
  const raw = usd * currency.rate;
  return currency.round === 1
    ? raw
    : Math.round(raw / currency.round) * currency.round;
}

export function formatPrice(usd: number | null, currency: Currency, lang: string = "en"): string {
  if (usd === null) return "Custom Quote";
  const value = convert(usd, currency);
  const locale = lang === "ru" ? "ru-RU" : lang === "ka" ? "ka-GE" : lang === "hy" ? "hy-AM" : "en-US";
  const formatted = new Intl.NumberFormat(locale).format(Math.round(value));
  return currency.code === "AED"
    ? `${formatted} ${currency.symbol}`
    : `${currency.symbol}${formatted}`;
}
