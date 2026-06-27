export const siteConfig = {
  name: "AlexDev Studio",
  legalName: "AlexDev Studio",
  tagline: "We design. We build. We scale.",
  description:
    "AlexDev Studio — founder-led software studio building AI products, SaaS and web platforms for startups and growing businesses worldwide.",
  descriptionRu:
    "AlexDev Studio — бутиковая студия разработки под руководством основателя. Создаём AI-продукты, SaaS и веб-платформы для стартапов и растущего бизнеса по всему миру.",
  url: "https://alexdev-portfolio.vercel.app",
  locale: "ru_RU",
  founder: {
    displayName: "Alex",
    name: "Александр Морозов",
    nameEn: "Alexander Morozov",
    role: "Founder & Lead Engineer",
    roleRu: "Основатель и ведущий инженер",
    photo: "/people/alexander.jpg",
    experienceYears: 10,
    startedYear: 2014,
  },
  location: {
    city: "Батуми",
    country: "Грузия",
    countryCode: "GE",
    region: "Worldwide",
  },
  contacts: {
    formDeliveryEmail: "aegonet@gmail.com",
    whatsappUrl: "https://wa.me/995585890730",
    telegram: "@alexdev_pro",
    telegramUrl: "https://t.me/alexdev_pro",
    email: "hello@alexdev.studio",
    emailUrl: "mailto:hello@alexdev.studio?subject=Project%20inquiry",
    github: "https://github.com",
  },
  experienceLine: "10+ Years Experience  ·  Startups & Businesses  ·  Worldwide Remote Collaboration",
  stats: [
    { value: "30+", label: "Запущенных систем" },
    { value: "10", label: "Лет инженерного опыта" },
    { value: "$5k–$100k+", label: "Бюджеты проектов" },
    { value: "24ч", label: "Среднее время ответа" },
  ],
  nav: [
    { label: "Услуги", href: "/#services" },
    { label: "Портфолио", href: "/#portfolio" },
    { label: "Технологии", href: "/#tech" },
    { label: "Процесс", href: "/#process" },
    { label: "Цены", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Блог", href: "/blog" },
    { label: "Контакты", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
