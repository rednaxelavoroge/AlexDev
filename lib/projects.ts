export type ProjectCategory = "ИИ" | "Web3" | "SaaS" | "E-commerce";

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  metrics: Metric[];
  link?: string;
  /** "live" — рабочий продукт, "nda" — закрыт NDA, "soon" — в разработке */
  status: "live" | "nda" | "soon";
  /** тип превью-рамки */
  device: "macbook" | "browser" | "iphone";
  /** путь к реальному скриншоту (desktop) или null для placeholder */
  shot: string | null;
  shotMobile?: string | null;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "showroom-pro",
    title: "Showroom Pro",
    tagline: "AI-сотрудник для мебельных шоурумов",
    category: "ИИ",
    year: "2025",
    description:
      "Интеллектуальный AI-сотрудник, который автоматизирует продажи мебельных фабрик: распознаёт параметры изделий из переписки и документов и за минуты собирает коммерческое предложение.",
    fullDescription:
      "B2B SaaS-платформа на базе LLM для мебельных фабрик и шоурумов. AI обрабатывает неструктурированные сообщения клиентов из мессенджеров, мгновенно распознаёт габариты изделия, ткань и фурнитуру, и автоматически генерирует счета, КП и заказы на производство.",
    challenge:
      "Менеджеры тратили часы на ручной расчёт размеров, перенос данных из WhatsApp/Telegram в Excel и генерацию фабричных спецификаций — это медленно и порождает ошибки.",
    solution:
      "Внедрён AI-парсер спецификаций с калькулятором наценки и логистики, экспортирующий документы в PDF/DOCX в один клик. Поверх — аналитика воронки и контроль маржинальности.",
    outcome:
      "Цикл подготовки КП сократился с часов до минут, а ошибки в спецификациях практически исчезли.",
    technologies: ["Next.js", "OpenAI GPT-4o", "PostgreSQL", "TypeScript", "TailwindCSS"],
    metrics: [
      { label: "Скорость расчёта КП", value: "5 мин" },
      { label: "Точность параметров", value: "98.7%" },
      { label: "Экономия времени", value: "90%" },
    ],
    link: "https://showroom-ai.pro",
    status: "live",
    device: "macbook",
    shot: "/projects/showroom-desktop.png",
    shotMobile: "/projects/showroom-mobile.png",
    featured: true,
  },
  {
    slug: "roscash",
    title: "ROSCASH",
    tagline: "Накопительные финансовые круги на блокчейне",
    category: "Web3",
    year: "2024",
    description:
      "Децентрализованные накопительные круги (ROSCA) и P2P-кредитование на смарт-контрактах: умные финансовые пулы без банков-посредников.",
    fullDescription:
      "DeFi Web3-приложение, автоматизирующее традиционные накопительные круги через смарт-контракты. Участники копят средства в пулах и получают займы под низкий процент, а доход распределяется между держателями токенов прозрачно и автоматически.",
    challenge:
      "Создать надёжную и прозрачную P2P-накопительную систему без банков, защищённую от невыплат участников.",
    solution:
      "Разработаны Solidity-контракты со стейкингом залога и динамическим начислением процентов за ожидание; вся логика распределения — on-chain и проверяема.",
    outcome:
      "Сообщество получило прозрачный инструмент коллективных накоплений с предсказуемой доходностью и автоматическими выплатами.",
    technologies: ["React", "Solidity", "Ethers.js", "Web3.js", "TailwindCSS"],
    metrics: [
      { label: "Total Value Locked", value: "$2.4M+" },
      { label: "Активных пулов", value: "180+" },
      { label: "Время транзакции", value: "<3 сек" },
    ],
    link: "https://roscash.org",
    status: "live",
    device: "browser",
    shot: "/projects/roscash-desktop.png",
    shotMobile: "/projects/roscash-mobile.png",
    featured: true,
  },
  {
    slug: "swap-kids",
    title: "Swap Kids",
    tagline: "Шеринг-экосистема обмена в Telegram",
    category: "ИИ",
    year: "2024",
    description:
      "Закрытая шеринг-платформа обмена детскими вещами в Telegram с AI-скорингом состояния изделий по фото и геймифицированной экономикой баллов.",
    fullDescription:
      "Социальная платформа обмена детскими товарами, объединяющая Telegram-бота с Mini App. Включает нейросетевую оценку износа вещей по фотографиям, внутренний баланс баллов и реферальную воронку с геймификацией.",
    challenge:
      "Масштабировать локальные родительские чаты обмена в автоматизированную платформу с валидацией качества и защитой от мошенничества.",
    solution:
      "Создан Telegram-бот с Mini App, AI-скорингом состояния вещей по фото, системой рейтинга и геймифицированным балансом баллов.",
    outcome:
      "Хаотичные чаты превратились в управляемую экосистему с десятками тысяч успешных обменов и ежедневной активностью.",
    technologies: ["React", "Python / Aiogram", "FastAPI", "PostgreSQL", "TailwindCSS"],
    metrics: [
      { label: "Семей в системе", value: "10 000+" },
      { label: "Успешных обменов", value: "45 000+" },
      { label: "Ежедневный онлайн", value: "2 500" },
    ],
    link: "https://swapkids.org",
    status: "live",
    device: "iphone",
    shot: "/projects/swapkids-desktop.png",
    shotMobile: "/projects/swapkids-mobile.png",
    featured: true,
  },
  {
    slug: "monte-salotti",
    title: "Monte Salotti",
    tagline: "Премиальный онлайн-шоурум итальянской мебели",
    category: "E-commerce",
    year: "2025",
    description:
      "Люксовый сайт-витрина мебельной студии: кинематографичная подача коллекций, каталог изделий и конверсия посетителей в заявки через мессенджеры.",
    fullDescription:
      "Премиальный многостраничный сайт мебельного бренда Monte Salotti: главная, каталог, карточки изделий, раздел Custom Made, аутлет и «О студии». Акцент на дорогой визуал, плавные анимации и социально-ориентированную воронку — каждая карточка ведёт в директ с предзаполненным сообщением по конкретному изделию.",
    challenge:
      "Передать премиальность итальянской мебели в вебе и превратить просмотр коллекций в реальные обращения без сложного e-commerce-бэкенда.",
    solution:
      "Разработана быстрая статическая архитектура с продуманной типографикой и анимациями, каталогом по категориям и социально-ориентированными CTA (WhatsApp / Instagram) с предзаполнением контекста изделия.",
    outcome:
      "Бренд получил дорогой, быстрый и мультиязычно-готовый сайт, который работает как полноценная витрина и канал лидогенерации.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Адаптивная вёрстка", "SEO"],
    metrics: [
      { label: "Разделов сайта", value: "6" },
      { label: "Категорий каталога", value: "7" },
      { label: "Готовность к мультиязычности", value: "100%" },
    ],
    link: "https://www.montesalotti.ge",
    status: "live",
    device: "macbook",
    shot: "/projects/montesalotti-desktop.png",
    shotMobile: "/projects/montesalotti-mobile.png",
    featured: true,
  },
  {
    slug: "qadsan",
    title: "QADSAN",
    tagline: "GameFi-симулятор биржевой торговли",
    category: "Web3",
    year: "2023",
    description:
      "Многопользовательский GameFi-симулятор фондового рынка токенизированных активов с тысячами транзакций в секунду и стейкинг-пулами.",
    fullDescription:
      "Высокоскоростная GameFi-платформа, симулирующая рынок виртуальных токенов-акций. Движок обрабатывает тысячи транзакций в секунду через WebSockets и Redis, давая игрокам интерактивные графики и доходные стейкинг-пулы.",
    challenge:
      "Разработать игровой финансовый движок с нулевой задержкой котировок при высоких нагрузках.",
    solution:
      "Использованы WebSockets с кэшированием стаканов ордеров в Redis, обеспечивающие отклик интерфейса < 30 мс даже на пике.",
    outcome:
      "Платформа стабильно держит десятки тысяч игроков и высокочастотный поток сделок без деградации интерфейса.",
    technologies: ["React", "Laravel", "Web3", "MySQL", "Redis"],
    metrics: [
      { label: "Транзакций в день", value: "80 000+" },
      { label: "Пользователей", value: "40 000+" },
      { label: "Отклик интерфейса", value: "<30 мс" },
    ],
    link: "https://qadsan.com",
    status: "live",
    device: "browser",
    shot: "/projects/qadsan-desktop.png",
    shotMobile: "/projects/qadsan-mobile.png",
    featured: false,
  },
  {
    slug: "ijareteli",
    title: "Ijareteli",
    tagline: "Цифровая премиум-галерея искусства",
    category: "SaaS",
    year: "2024",
    description:
      "Премиальный цифровой выставочный зал и оцифровка работ грузинского художника с кинематографичной прокруткой и GSAP-эффектами.",
    fullDescription:
      "Интерактивная галерея для оцифровки и продажи картин художника Фридона Болквадзе. Плавная кинематографичная прокрутка и сложные GSAP-эффекты создают премиальный опыт, привлекающий коллекционеров и инвесторов со всего мира.",
    challenge:
      "Передать глубину и текстуру физических картин на экранах, сохранив премиальный дух искусства даже на мобильных.",
    solution:
      "Разработана кастомная плавная прокрутка, параллакс на GSAP и оптимизированная ленивая загрузка изображений сверхвысокого разрешения.",
    outcome:
      "Галерея удерживает внимание посетителей в среднем больше шести минут и стабильно генерирует запросы на покупку.",
    technologies: ["JavaScript (ES6)", "GSAP", "HTML5", "CSS3", "Lazy Loading"],
    metrics: [
      { label: "Оцифровано работ", value: "2 000+" },
      { label: "Время удержания", value: "6.5 мин" },
      { label: "Запросов на покупку", value: "450+" },
    ],
    link: "https://www.ijareteli.com",
    status: "live",
    device: "macbook",
    shot: "/projects/ijareteli-desktop.png",
    shotMobile: "/projects/ijareteli-mobile.png",
    featured: false,
  },
  {
    slug: "webtransfer",
    title: "Webtransfer",
    tagline: "P2P социальная кредитная сеть",
    category: "Web3",
    year: "2023",
    description:
      "Децентрализованная сеть P2P-кредитования с AI-скорингом рисков по социальной активности и автоматическим залоговым пулом.",
    fullDescription:
      "Финансовая экосистема P2P-кредитования: пользователи из любой точки мира выдают и привлекают микрозаймы напрямую. Включает AI-скоринг рисков на основе социальной активности и автоматическое распределение залогового пула. Проект под NDA.",
    challenge:
      "Обеспечить безопасность займов в анонимной среде без традиционной кредитной истории.",
    solution:
      "Внедрён скоринг на основе соцактивности, автоматическое обеспечение залогов в смарт-контрактах и гарантийный фонд.",
    outcome:
      "Сеть выдала миллионы в займах при заметно сниженном уровне дефолтов благодаря AI-скорингу.",
    technologies: ["Node.js", "Web3", "PostgreSQL", "Redis", "AI Scoring"],
    metrics: [
      { label: "Выдано займов", value: "$12M+" },
      { label: "Участников сети", value: "150k+" },
      { label: "Снижение дефолтов", value: "15%" },
    ],
    status: "nda",
    device: "browser",
    shot: null,
    featured: false,
  },
  {
    slug: "whatsapp-ai-support",
    title: "WhatsApp AI Support",
    tagline: "AI-поддержка клиентов прямо в WhatsApp",
    category: "ИИ",
    year: "2026",
    description:
      "AI-агент поддержки в WhatsApp: отвечает на вопросы клиентов по базе знаний компании, ведёт диалог 24/7 и бесшовно передаёт сложные кейсы оператору.",
    fullDescription:
      "Платформа AI-поддержки на базе LLM с RAG по базе знаний компании, интегрированная в WhatsApp Business. Агент автономно отвечает на типовые вопросы, удерживает контекст диалога и эскалирует сложные обращения на живого оператора. Продукт в активной разработке — публичный домен скоро.",
    challenge:
      "Снять с команды поддержки рутинную нагрузку в WhatsApp, не теряя качества и контекста общения с клиентом.",
    solution:
      "Строится RAG-конвейер по базе знаний, маршрутизация «AI → оператор», аналитика диалогов и панель управления ответами.",
    outcome:
      "Цель — автоматизировать большую часть типовых обращений и кратно ускорить первое время ответа в WhatsApp.",
    technologies: ["Node.js", "OpenAI / Claude", "RAG", "WhatsApp Business API", "PostgreSQL"],
    metrics: [
      { label: "Статус", value: "В разработке" },
      { label: "Канал", value: "WhatsApp" },
      { label: "Режим", value: "AI + оператор" },
    ],
    status: "soon",
    device: "iphone",
    shot: null,
    featured: false,
  },
];

export const PROJECT_CATEGORIES: ("Все" | ProjectCategory)[] = [
  "Все",
  "ИИ",
  "Web3",
  "SaaS",
  "E-commerce",
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
