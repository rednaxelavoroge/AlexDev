import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, ShieldAlert } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  isNda?: boolean;
  metrics?: { label: string; value: string }[];
  challenge?: string;
  solution?: string;
}

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['Все', 'ИИ & Боты', 'Web3 & Крипто', 'SaaS & Web-системы'];

const PROJECT_LIST: Project[] = [
  // Primary (Real) Projects at the top
  {
    id: 1,
    title: 'Showroom Pro (showroom-ai.pro)',
    category: 'ИИ & Боты',
    description: 'Интеллектуальный ИИ-сотрудник для автоматизации продаж и мебельных шоурумов. Распознает параметры изделий из чатов и документов.',
    fullDescription: 'Инновационная B2B SaaS-платформа на базе искусственного интеллекта (LLM), разработанная для мебельных фабрик и шоурумов. AI-сотрудник обрабатывает входящие неструктурированные сообщения от клиентов в мессенджерах, мгновенно распознает габариты изделия, выбранную ткань, тип фурнитуры и автоматически генерирует счета, коммерческие предложения и заказы на производство.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'OpenAI GPT-4o', 'PostgreSQL', 'TailwindCSS', 'TypeScript'],
    link: 'https://showroom-ai.pro',
    isNda: false,
    metrics: [
      { label: 'Скорость расчета КП', value: '5 мин' },
      { label: 'Точность параметров', value: '98.7%' },
      { label: 'Экономия времени', value: '90%' }
    ],
    challenge: 'Менеджеры тратили часы на ручной расчет размеров, перенос данных из чатов WhatsApp/Telegram в Excel и генерацию фабричных спецификаций, что приводило к ошибкам.',
    solution: 'Внедрен AI-парсер спецификаций с автоматическим калькулятором наценки и логистики, экспортирующий документы в PDF/DOCX в 1 клик.'
  },
  {
    id: 2,
    title: 'ROSCASH — Blockchain Financial Circles',
    category: 'Web3 & Крипто',
    description: 'Децентрализованные накопительные круги и B2B/P2P кредитование на блокчейне (DeFi). Умные финансовые пулы.',
    fullDescription: 'Высокотехнологичное DeFi Web3-приложение, автоматизирующее традиционные накопительные круги (ROSCA) через смарт-контракты. Система позволяет участникам копить средства в пулах и получать займы под низкий процент без посредничества банков, распределяя доход между держателями токенов.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethers.js', 'TailwindCSS'],
    link: 'https://roscash.org',
    isNda: false,
    metrics: [
      { label: 'Total Value Locked', value: '$2.4M+' },
      { label: 'Активных пулов', value: '180+' },
      { label: 'Время транзакции', value: '<3 сек' }
    ],
    challenge: 'Создать надежную и прозрачную P2P накопительную систему без участия банков, защищенную от невыплат участников.',
    solution: 'Разработаны Solidity смарт-контракты со стейкингом залога и динамическим начислением процентов за ожидание.'
  },
  {
    id: 3,
    title: 'Swap Kids — Telegram-своп платформа',
    category: 'ИИ & Боты',
    description: 'Закрытая шеринг-экосистема обмена вещами в Telegram с AI-скорингом состояния изделий по фото.',
    fullDescription: 'Социальная шеринг-платформа обмена детскими товарами, объединяющая Telegram-бота с Mini App интерфейсом. Включает в себя нейросетевую модель оценки износа вещей по фотографиям, внутренний баланс баллов и геймифицированную реферальную воронку.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'FastAPI', 'Python/Aiogram', 'TailwindCSS', 'PostgreSQL'],
    link: 'https://swapkids.org',
    isNda: false,
    metrics: [
      { label: 'Семей в системе', value: '10,000+' },
      { label: 'Успешных обменов', value: '45,000+' },
      { label: 'Ежедневный онлайн', value: '2,500' }
    ],
    challenge: 'Масштабировать локальные родительские чаты обмена вещами в автоматизированную платформу с валидацией качества и предотвращением мошенничества.',
    solution: 'Создан Telegram-бот с геймификацией баланса, скорингом состояния вещей по фото (AI-анализ) и внутренней системой рейтинга.'
  },
  {
    id: 4,
    title: 'Webtransfer — P2P Social Lending',
    category: 'Web3 & Крипто',
    description: 'Децентрализованная социальная кредитная сеть. P2P займы и микрокредитование на базе смарт-контрактов.',
    fullDescription: 'Децентрализованная финансовая экосистема P2P-кредитования. Позволяет пользователям из любой точки мира выдавать и привлекать микрозаймы напрямую. Включает ИИ-скоринг рисков на основе активности в социальных медиа и автоматическое распределение залогового пула.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Node.js', 'Web3', 'PostgreSQL', 'Redis'],
    link: '#',
    isNda: true,
    metrics: [
      { label: 'Выдано займов', value: '$12M+' },
      { label: 'Участников сети', value: '150k+' },
      { label: 'Снижение дефолтов', value: '15%' }
    ],
    challenge: 'Обеспечить безопасность займов в анонимной среде без традиционной кредитной истории.',
    solution: 'Внедрен скоринг на основе активности в соцсетях, автоматическое обеспечение залогов в смарт-контрактах и гарантийный фонд.'
  },
  {
    id: 5,
    title: 'QADSAN — GameFi Token-Shares Market',
    category: 'Web3 & Крипто',
    description: 'Многопользовательский GameFi-симулятор биржевой торговли токенизированными активами.',
    fullDescription: 'Высокоскоростная GameFi платформа, симулирующая фондовый рынок виртуальных токенов-акций. Движок обрабатывает тысячи транзакций в секунду через WebSockets и Redis, предоставляя игрокам интерактивные графики и стейкинг пулы с доходностью.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Laravel', 'Web3', 'MySQL', 'TailwindCSS'],
    link: 'https://qadsan.com',
    isNda: false,
    metrics: [
      { label: 'Транзакций в день', value: '80,000+' },
      { label: 'Количество токенов', value: '24' },
      { label: 'Пользователей', value: '40,000+' }
    ],
    challenge: 'Разработать игровой финансовый движок с нулевой задержкой котировок при высоких нагрузках.',
    solution: 'Использованы веб-сокеты с кэшированием стаканов ордеров в Redis, обеспечивающие отклик интерфейса <30мс.'
  },
  {
    id: 6,
    title: 'Ijareteli — Digital Art Gallery',
    category: 'SaaS & Web-системы',
    description: 'Премиальный цифровой выставочный зал и оцифровка произведений искусства грузинского художника.',
    fullDescription: 'Интерактивная премиум-галерея для оцифровки и продажи картин грузинского художника Фридона Болквадзе. Оптимизированный интерфейс с плавной кинематографичной прокруткой и сложными GSAP-эффектами привлекает коллекционеров и инвесторов со всего мира.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    technologies: ['HTML5', 'CSS3 (Custom)', 'JavaScript (ES6)', 'GSAP Animations'],
    link: 'https://www.ijareteli.com',
    isNda: false,
    metrics: [
      { label: 'Оцифровано картин', value: '2,000+' },
      { label: 'Время удержания', value: '6.5 мин' },
      { label: 'Запросов на покупку', value: '450+' }
    ],
    challenge: 'Передать глубину и текстуру физических картин художника на экранах мобильных устройств, сохранив премиальный дух искусства.',
    solution: 'Разработана кастомная плавная прокрутка, эффекты параллакса на GSAP и оптимизированная система ленивой загрузки изображений в сверхвысоком разрешении.'
  },

  // Secondary Projects (Lower Section)
  {
    id: 7,
    title: 'AI Customer Support System',
    category: 'ИИ & Боты',
    description: 'Интеллектуальный AI-агент поддержки клиентов для e-commerce на базе LLM.',
    fullDescription: 'Умный чат-бот для интеграции на сайты и мессенджеры. Использует RAG (Retrieval-Augmented Generation) по базе знаний компании для мгновенного ответа на вопросы клиентов с сохранением контекста.',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'Redis', 'LangChain'],
    isNda: true,
    metrics: [
      { label: 'Автоматизация ответов', value: '82%' },
      { label: 'Удовлетворенность', value: '4.8/5' }
    ]
  },
  {
    id: 8,
    title: 'CryptoTrader Pro Platform',
    category: 'Web3 & Крипто',
    description: 'Профессиональный торговый терминал с аналитикой криптопортфелей в реальном времени.',
    fullDescription: 'Платформа реального времени для трейдинга и аналитики криптовалютных активов с интеграцией бирж через API и продвинутыми графиками котировок.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'WebSockets', 'D3.js', 'Binance API'],
    link: '#',
    isNda: true,
    metrics: [
      { label: 'Время обновления', value: '100мс' },
      { label: 'Обработано свечей', value: '10M+' }
    ]
  },
  {
    id: 9,
    title: 'FoodExpress App',
    category: 'SaaS & Web-системы',
    description: 'Мобильное приложение доставки еды со слежением за курьером на карте в реальном времени.',
    fullDescription: 'Комплексная система доставки: клиентское приложение, приложение курьера и панель администратора ресторана.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase Cloud Messaging'],
    link: '#',
    isNda: true,
    metrics: [
      { label: 'Заказов в месяц', value: '120k' },
      { label: 'Точность геолокации', value: '99.4%' }
    ]
  }
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState('Все');

  const filteredProjects = activeTab === 'Все'
    ? PROJECT_LIST
    : PROJECT_LIST.filter(p => p.category === activeTab);

  const mainProjects = filteredProjects.filter(p => p.id <= 6);
  const secondaryProjects = filteredProjects.filter(p => p.id > 6);

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-[#02050c]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-900/10 rounded-full glow-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full glow-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-4 animate-pulse">
            <FolderGit2 size={16} /> Кейсы и Проекты
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
            Реализованные решения
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Архитектура, ИИ-интеграции и Web3 системы, разработанные под ключ для реального бизнеса.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main/Primary Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
            <span className="text-sm font-mono tracking-widest text-teal-400 uppercase font-semibold">Флагманские проекты</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainProjects.map(project => (
              <div 
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="glass-card group rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-transparent to-transparent opacity-80" />
                  
                  {project.isNda && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded bg-red-950/80 border border-red-500/30 text-red-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <ShieldAlert size={10} /> NDA Защита
                    </span>
                  )}
                  
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors font-display flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-400">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary / Archive Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="text-sm font-mono tracking-widest text-indigo-400 uppercase font-semibold">Архивные &amp; Дополнительные работы</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map(project => (
                <div 
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="p-5 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded">
                      {project.category}
                    </span>
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors font-display">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 text-[9px] text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
