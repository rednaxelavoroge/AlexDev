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
  { code: "USD", symbol: "$", rate: 1, round: 1, label: "US Dollar" },
  { code: "EUR", symbol: "€", rate: 0.92, round: 1, label: "Euro" },
  { code: "GBP", symbol: "£", rate: 0.79, round: 1, label: "British Pound" },
  { code: "GEL", symbol: "₾", rate: 2.7, round: 1, label: "Georgian Lari" },
  { code: "AMD", symbol: "֏", rate: 387, round: 100, label: "Armenian Dram" },
  { code: "AED", symbol: "AED", rate: 3.67, round: 1, label: "UAE Dirham" },
  { code: "RUB", symbol: "₽", rate: 79, round: 100, label: "Russian Ruble" },
];

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
    unit: "от",
    taglineEn: "Single-page site with form and analytics",
    taglineRu: "Одностраничный сайт с формой и аналитикой",
    features: [
      "Адаптивный одностраничный сайт",
      "Контактная форма, карта, мессенджеры",
      "Базовая SEO-оптимизация",
      "Домен, хостинг, SSL",
      "Аналитика и пиксели",
      "3–5 дней до запуска",
    ],
    cta: "Заказать лендинг",
  },
  {
    name: "Business Website",
    priceUsd: 500,
    unit: "от",
    taglineEn: "Multi-page company website with CMS",
    taglineRu: "Многостраничный сайт компании с CMS",
    features: [
      "Многостраничный сайт (до 10 стр)",
      "CMS для самостоятельного наполнения",
      "Продвинутая SEO и скорость 95+",
      "Блог, портфолио, отзывы",
      "Интеграция CRM и мессенджеров",
      "1–2 недели до запуска",
    ],
    cta: "Создать сайт",
  },
  {
    name: "Corporate Website",
    priceUsd: 1500,
    unit: "от",
    taglineEn: "Premium corporate platform with custom UX",
    taglineRu: "Премиальная корпоративная платформа",
    features: [
      "Уникальный дизайн и анимации",
      "Личный кабинет клиента / партнёра",
      "Сложная SEO-стратегия",
      "Мультиязычность (2+ языка)",
      "Интеграции: CRM, ERP, 1С, платежи",
      "2–4 недели до запуска",
    ],
    highlighted: true,
    cta: "Обсудить проект",
  },
  {
    name: "Startup MVP",
    priceUsd: 500,
    unit: "от",
    taglineEn: "Functional prototype to test your idea",
    taglineRu: "Функциональный прототип для проверки идеи",
    features: [
      "Рабочий продукт, а не кликабельный макет",
      "1 ключевой пользовательский сценарий",
      "Авторизация и базовая админ-панель",
      "Деплой на облако + мониторинг",
      "Итеративные спринты по 1 неделе",
      "2–4 недели до MVP",
    ],
    cta: "Запустить MVP",
  },
  {
    name: "Telegram Mini App",
    priceUsd: 500,
    unit: "от",
    taglineEn: "In-app experience inside Telegram",
    taglineRu: "Приложение внутри Telegram",
    features: [
      "Mini App с Telegram-авторизацией",
      "Платежи через Telegram Stars",
      "Реферальная система и геймификация",
      "Бот-администратор и уведомления",
      "Веб-панель управления контентом",
      "1–3 недели до запуска",
    ],
    cta: "Создать Mini App",
  },
  {
    name: "AI Integration",
    priceUsd: 1000,
    unit: "от",
    taglineEn: "Embed AI into your business workflow",
    taglineRu: "Внедрение AI в ваш бизнес-процесс",
    features: [
      "AI-агент или RAG-система под задачу",
      "Интеграция с вашей базой знаний",
      "API или чат-интерфейс (Web / Telegram / WhatsApp)",
      "Автоматизация одного сквозного процесса",
      "Обучение команды работе с AI",
      "2–4 недели до внедрения",
    ],
    highlighted: true,
    cta: "Внедрить AI",
  },
  {
    name: "Marketplace",
    priceUsd: 5000,
    unit: "от",
    taglineEn: "Two-sided platform with payments and moderation",
    taglineRu: "Двусторонняя платформа с платежами и модерацией",
    features: [
      "Два типа пользователей + роли",
      "Платёжный шлюз и комиссии",
      "Рейтинг, отзывы, верификация",
      "Админ-панель с модерацией",
      "Поиск, фильтры, каталог",
      "1–3 месяца до запуска",
    ],
    cta: "Запустить маркетплейс",
  },
  {
    name: "FinTech Platform",
    priceUsd: 25000,
    unit: "от",
    taglineEn: "Financial platform with compliance and high-load architecture",
    taglineRu: "Финансовая платформа с комплаенсом и высокой нагрузкой",
    features: [
      "Отказоустойчивая high-load архитектура",
      "Платёжный шлюз (Stripe / локальные эквайеры)",
      "KYC/AML и комплаенс",
      "Web3 / смарт-контракты (опционально)",
      "Аудит безопасности и пентест",
      "2–4 месяца до запуска",
    ],
    cta: "Обсудить FinTech",
  },
  {
    name: "Enterprise AI",
    priceUsd: null,
    unit: "",
    taglineEn: "Custom enterprise AI systems — tailored scope and pricing",
    taglineRu: "Кастомные enterprise AI-системы — объём и цена под задачу",
    features: [
      "Индивидуальная AI-архитектура",
      "Команда senior-специалистов под проект",
      "Интеграция с legacy-системами",
      "Security audit и комплаенс",
      "SLA и долгосрочное сопровождение",
      "Roadmap и поэтапная разработка",
    ],
    cta: "Связаться с нами",
  },
];

export function convert(usd: number, currency: Currency): number {
  const raw = usd * currency.rate;
  return currency.round === 1
    ? raw
    : Math.round(raw / currency.round) * currency.round;
}

export function formatPrice(usd: number | null, currency: Currency): string {
  if (usd === null) return "Custom Quote";
  const value = convert(usd, currency);
  const formatted = new Intl.NumberFormat("ru-RU").format(Math.round(value));
  return currency.code === "AED"
    ? `${formatted} ${currency.symbol}`
    : `${currency.symbol}${formatted}`;
}
