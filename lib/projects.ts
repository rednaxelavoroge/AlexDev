export type ProjectCategory =
  | "AI"
  | "SaaS"
  | "Web3"
  | "E-commerce"
  | "FinTech"
  | "Corporate"
  | "Marketplace"
  | "Dashboards"
  | "Mobile"
  | "MVP";

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
  status: "live" | "nda" | "soon";
  device: "macbook" | "browser" | "iphone";
  shot: string | null;
  shotMobile?: string | null;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "showroom-pro",
    title: "Showroom Pro",
    tagline: "AI assistant for furniture showrooms",
    category: "AI",
    year: "2025",
    description:
      "An intelligent AI assistant that automates sales for furniture factories: reads product parameters from chat messages and documents, and generates commercial proposals in minutes.",
    fullDescription:
      "B2B SaaS platform powered by LLMs for furniture factories and showrooms. AI processes unstructured customer messages from messengers, instantly recognizes product dimensions, fabric and fittings, and automatically generates invoices, proposals and production orders.",
    challenge:
      "Managers spent hours manually calculating dimensions, transferring data from WhatsApp/Telegram to Excel, and generating factory specs — slow and error-prone.",
    solution:
      "Deployed an AI parser for specifications with markup and logistics calculator, exporting documents to PDF/DOCX in one click. Added funnel analytics and margin control on top.",
    outcome:
      "Proposal preparation cycle dropped from hours to minutes, specification errors virtually disappeared.",
    technologies: ["Next.js", "OpenAI GPT-4o", "PostgreSQL", "TypeScript", "TailwindCSS"],
    metrics: [
      { label: "Proposal speed", value: "5 min" },
      { label: "Parameter accuracy", value: "98.7%" },
      { label: "Time saved", value: "90%" },
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
    tagline: "On-chain rotating savings circles",
    category: "Web3",
    year: "2024",
    description:
      "Decentralized rotating savings circles (ROSCA) and P2P lending on smart contracts: smart financial pools without banking intermediaries.",
    fullDescription:
      "DeFi Web3 application automating traditional savings circles via smart contracts. Participants save funds in pools and receive low-interest loans, while income is distributed among token holders transparently and automatically.",
    challenge:
      "Create a reliable and transparent P2P savings system without banks, protected against participant defaults.",
    solution:
      "Developed Solidity contracts with collateral staking and dynamic interest accrual for wait time; all distribution logic is on-chain and verifiable.",
    outcome:
      "The community gained a transparent tool for collective savings with predictable returns and automatic payouts.",
    technologies: ["React", "Solidity", "Ethers.js", "Web3.js", "TailwindCSS"],
    metrics: [
      { label: "Total Value Locked", value: "$2.4M+" },
      { label: "Active pools", value: "180+" },
      { label: "Transaction time", value: "<3 sec" },
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
    tagline: "Telegram sharing ecosystem for kids' items",
    category: "AI",
    year: "2024",
    description:
      "A private Telegram-based sharing platform for children's items with AI scoring of item condition from photos and gamified token economy.",
    fullDescription:
      "Social platform for exchanging children's goods, combining a Telegram bot with a Mini App. Includes neural network assessment of item wear from photos, internal points balance, and a gamified referral funnel.",
    challenge:
      "Scale local parenting swap chats into an automated platform with quality validation and fraud protection.",
    solution:
      "Built a Telegram bot with Mini App, AI scoring of item condition from photos, rating system and gamified points economy.",
    outcome:
      "Chaotic chats transformed into a managed ecosystem with tens of thousands of successful exchanges and daily activity.",
    technologies: ["React", "Python / Aiogram", "FastAPI", "PostgreSQL", "TailwindCSS"],
    metrics: [
      { label: "Families in system", value: "10,000+" },
      { label: "Successful swaps", value: "45,000+" },
      { label: "Daily online users", value: "2,500" },
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
    tagline: "Premium online showroom for Italian furniture",
    category: "E-commerce",
    year: "2025",
    description:
      "Luxury furniture brand website: cinematic collection presentation, product catalog and visitor-to-inquiry conversion through messengers.",
    fullDescription:
      "Premium multi-page website for the Monte Salotti furniture brand: home page, catalog, product cards, Custom Made section, outlet and About page. Focus on luxurious visuals, smooth animations and social-first funnel — each card links to direct chat with pre-filled message for that product.",
    challenge:
      "Convey the premium feel of Italian furniture on the web and turn collection browsing into real inquiries without complex e-commerce backend.",
    solution:
      "Built a fast static architecture with refined typography and animations, category catalog and social CTA buttons (WhatsApp / Instagram) with product context pre-filled.",
    outcome:
      "The brand received an upscale, fast and multilingual-ready website that works as a full showroom and lead generation channel.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Responsive layout", "SEO"],
    metrics: [
      { label: "Site sections", value: "6" },
      { label: "Catalog categories", value: "7" },
      { label: "Multilingual readiness", value: "100%" },
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
    tagline: "GameFi stock market trading simulator",
    category: "Web3",
    year: "2023",
    description:
      "Massively multiplayer GameFi stock market simulator with tokenized assets, thousands of transactions per second and staking pools.",
    fullDescription:
      "High-speed GameFi platform simulating a market of virtual token-stocks. The engine processes thousands of transactions per second via WebSockets and Redis, giving players interactive charts and yield-generating staking pools.",
    challenge:
      "Build a gaming financial engine with zero quote latency under high load.",
    solution:
      "Used WebSockets with Redis-cached order books, ensuring UI response time under 30 ms even at peak load.",
    outcome:
      "The platform stably handles tens of thousands of players and high-frequency trade flow without UI degradation.",
    technologies: ["React", "Laravel", "Web3", "MySQL", "Redis"],
    metrics: [
      { label: "Daily transactions", value: "80,000+" },
      { label: "Active users", value: "40,000+" },
      { label: "UI response", value: "<30 ms" },
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
    tagline: "Digital premium art gallery",
    category: "SaaS",
    year: "2024",
    description:
      "Premium digital exhibition hall and digitization of works by a Georgian artist with cinematic scrolling and GSAP effects.",
    fullDescription:
      "Interactive gallery for digitizing and selling paintings by artist Fridon Bolkvadze. Smooth cinematic scrolling and complex GSAP effects create a premium experience that attracts collectors and investors from around the world.",
    challenge:
      "Convey the depth and texture of physical paintings on screens while preserving the premium spirit of art even on mobile devices.",
    solution:
      "Developed custom smooth scrolling, GSAP parallax and optimized lazy loading for ultra-high-resolution images.",
    outcome:
      "The gallery holds visitor attention for over six minutes on average and consistently generates purchase inquiries.",
    technologies: ["JavaScript (ES6)", "GSAP", "HTML5", "CSS3", "Lazy Loading"],
    metrics: [
      { label: "Artworks digitized", value: "2,000+" },
      { label: "Avg time on site", value: "6.5 min" },
      { label: "Purchase inquiries", value: "450+" },
    ],
    link: "https://www.ijareteli.com",
    status: "live",
    device: "macbook",
    shot: "/projects/ijareteli-desktop.png",
    shotMobile: "/projects/ijareteli-mobile.png",
    featured: false,
  },
  {
    slug: "whatsapp-ai-support",
    title: "WhatsApp AI Support",
    tagline: "AI customer support right in WhatsApp",
    category: "AI",
    year: "2026",
    description:
      "AI support agent in WhatsApp: answers customer questions using the company knowledge base, maintains dialogue 24/7 and seamlessly escalates complex cases to a human operator.",
    fullDescription:
      "LLM-based AI support platform with RAG over the company knowledge base, integrated into WhatsApp Business. The agent autonomously answers common questions, maintains dialogue context and escalates complex inquiries to a live operator. Product in active development — public domain soon.",
    challenge:
      "Take routine support load off the team in WhatsApp without losing quality and conversation context.",
    solution:
      "Building a RAG pipeline over the knowledge base, AI-to-operator routing, conversation analytics and a response management panel.",
    outcome:
      "Goal: automate the majority of typical inquiries and dramatically speed up first response time in WhatsApp.",
    technologies: ["Node.js", "OpenAI / Claude", "RAG", "WhatsApp Business API", "PostgreSQL"],
    metrics: [
      { label: "Status", value: "In development" },
      { label: "Channel", value: "WhatsApp" },
      { label: "Mode", value: "AI + operator" },
    ],
    status: "soon",
    device: "iphone",
    shot: null,
    featured: false,
  },
  {
    slug: "medflow-crm",
    title: "MedFlow CRM",
    tagline: "Medical CRM with AI assistant",
    category: "Dashboards",
    year: "2025",
    description:
      "CRM system for private clinics: patient scheduling, electronic medical records, AI test result analysis and automated appointment reminders.",
    fullDescription:
      "Cloud CRM platform for a network of private clinics. Includes appointment scheduler with Google/Apple Calendar sync, electronic medical records, AI module for lab test analysis and automated reminders via SMS/messengers. Role-based access: doctor, admin, head physician.",
    challenge:
      "Unify scattered Excel spreadsheets, paper records and messenger chats into a single HIPAA-compliant system.",
    solution:
      "Built a role-based platform with data encryption, AI-based lab result parser and integration with lab equipment via HL7/FHIR.",
    outcome:
      "The clinic reduced administrative task time by 60% and cut no-show appointments in half.",
    technologies: ["Next.js", "PostgreSQL", "OpenAI", "HL7/FHIR", "TailwindCSS"],
    metrics: [
      { label: "Patients in system", value: "12,000+" },
      { label: "Time saved", value: "60%" },
      { label: "No-show reduction", value: "−50%" },
    ],
    status: "live",
    device: "macbook",
    shot: null,
    featured: false,
  },
  {
    slug: "taste-tracker",
    title: "TasteTracker",
    tagline: "Restaurant ordering and delivery platform",
    category: "Mobile",
    year: "2024",
    description:
      "Online food ordering system with mobile app: menu, cart, real-time delivery tracking and loyalty program.",
    fullDescription:
      "White-label platform for a Georgian cuisine restaurant chain. Mobile app (React Native) and web version with online menu, order builder, payment gateway integration and GPS courier tracking. Restaurant admin panel for menu, discounts and order analytics.",
    challenge:
      "Replace phone orders with an automated system without losing loyal customer relationships.",
    solution:
      "Created a mobile app with loyalty program, push notifications and integration with local delivery aggregators.",
    outcome:
      "Online orders grew 340% in the first three months, average check increased by 25%.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe", "Firebase"],
    metrics: [
      { label: "Online order growth", value: "+340%" },
      { label: "Avg check increase", value: "+25%" },
      { label: "App Store rating", value: "4.8★" },
    ],
    status: "live",
    device: "iphone",
    shot: null,
    featured: false,
  },
  {
    slug: "stayhub",
    title: "StayHub",
    tagline: "Hotel and apartment booking platform",
    category: "Marketplace",
    year: "2024",
    description:
      "Marketplace for booking hotels and apartments: map search, filters, availability calendar and secure payments.",
    fullDescription:
      "Two-sided platform for hotel owners and travelers. Includes interactive map, iCal calendar sync, verified booking review system, payment gateway with fund holding until check-in, and a management panel for hoteliers.",
    challenge:
      "Build a marketplace trusted by both guests and owners — with protection against double bookings and fraud.",
    solution:
      "Implemented two-factor verification, escrow payments and automatic calendar sync via iCal with hotel PMS systems.",
    outcome:
      "The platform connected 200+ properties with 15,000+ active users in its first season.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Mapbox", "Stripe Connect"],
    metrics: [
      { label: "Properties listed", value: "200+" },
      { label: "Active users", value: "15,000+" },
      { label: "Successful bookings", value: "4,500+" },
    ],
    status: "live",
    device: "browser",
    shot: null,
    featured: false,
  },
  {
    slug: "estateflow",
    title: "EstateFlow",
    tagline: "Real estate CRM and property portal",
    category: "Corporate",
    year: "2024",
    description:
      "Corporate CRM for real estate agencies with a public portal: property catalog, 3D tours, AI-powered matching and sales pipeline.",
    fullDescription:
      "All-in-one platform for a real estate agency: internal CRM with Kanban deal pipeline, automatic property posting to 10+ listing sites, AI-powered similar property matching and a built-in portal with 3D tours. Integration with 1C accounting and IP telephony.",
    challenge:
      "The agency was losing leads from manual cross-posting to a dozen listing boards with no unified pipeline.",
    solution:
      "Built a unified platform with multi-posting via listing board APIs, AI recommendations and automatic logging of all communications in the client card.",
    outcome:
      "Time to publish one property dropped from 2 hours to 10 minutes, view-through conversion increased by 40%.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Three.js", "OpenAI"],
    metrics: [
      { label: "Properties in DB", value: "3,500+" },
      { label: "Listing boards", value: "10+" },
      { label: "Conversion lift", value: "+40%" },
    ],
    status: "live",
    device: "macbook",
    shot: null,
    featured: false,
  },
  {
    slug: "beautypro",
    title: "BeautyPro",
    tagline: "Beauty salon SaaS platform with online booking",
    category: "SaaS",
    year: "2025",
    description:
      "SaaS platform for the beauty industry: online booking, inventory tracking, staff payroll calculation and client CRM.",
    fullDescription:
      "Cloud platform for managing beauty salons and independent stylists. Includes online booking widget for websites and social media, supply inventory tracking, staff payroll calculation by formulas (base + %), client CRM with service history and automated reminders.",
    challenge:
      "Salon owners were drowning in manual tracking: paper appointment books, Excel payroll and lost clients from forgotten reminders.",
    solution:
      "Created a unified SaaS platform with role-based access (owner, admin, stylist), Instagram/Telegram booking integration and automated reports.",
    outcome:
      "Clients report 55% growth in repeat bookings and up to 80% reduction in administrative task time.",
    technologies: ["Next.js", "PostgreSQL", "Node.js", "Telegram API", "TailwindCSS"],
    metrics: [
      { label: "Salons on platform", value: "85+" },
      { label: "Repeat booking growth", value: "+55%" },
      { label: "Time saved", value: "80%" },
    ],
    status: "live",
    device: "iphone",
    shot: null,
    featured: false,
  },
  {
    slug: "fitforge",
    title: "FitForge",
    tagline: "Fitness platform with AI trainer",
    category: "Mobile",
    year: "2025",
    description:
      "Mobile fitness platform: AI trainer creates personalized programs, tracks progress and adapts workout intensity.",
    fullDescription:
      "Next-gen fitness app with an AI trainer that analyzes user goals, fitness level and preferences to create adaptive workout programs. Exercise video library with camera-based form detection, nutrition tracking and Apple Health / Google Fit integration.",
    challenge:
      "Retain users beyond the first two weeks — the standard fitness app retention problem.",
    solution:
      "AI adapts the program weekly based on progress and feedback, with gamification challenges and social retention mechanics.",
    outcome:
      "Day-30 retention reached 45% (market average: 20%), users spend an average of 18 minutes per day in the app.",
    technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL", "Firebase"],
    metrics: [
      { label: "D30 retention", value: "45%" },
      { label: "Daily active users", value: "8,000+" },
      { label: "Time in app", value: "18 min" },
    ],
    status: "live",
    device: "iphone",
    shot: null,
    featured: false,
  },
  {
    slug: "travelopia",
    title: "Travelopia",
    tagline: "Travel platform with dynamic packages",
    category: "Marketplace",
    year: "2024",
    description:
      "B2C platform for a travel agency: dynamic tour packaging, online payment and traveler dashboard.",
    fullDescription:
      "Platform for a tour operator combining flights, hotels, transfers and excursions into dynamic tour packages. Includes filtered search, price comparison, secure payment, itinerary and voucher generation, and a traveler dashboard with complete trip history.",
    challenge:
      "Clients wanted to build custom tours like on Booking.com, while managers spent hours on manual assembly.",
    solution:
      "Built a dynamic packaging engine with GDS integrations (Amadeus), hotel XML feeds and a custom excursions database.",
    outcome:
      "Online booking share grew to 65%, average tour assembly time dropped from 2 hours to 8 minutes.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Amadeus API", "Redis"],
    metrics: [
      { label: "Online bookings", value: "65%" },
      { label: "Tour assembly time", value: "8 min" },
      { label: "Tours sold", value: "2,800+" },
    ],
    status: "live",
    device: "macbook",
    shot: null,
    featured: false,
  },
  {
    slug: "buildpro-crm",
    title: "BuildPro CRM",
    tagline: "ERP for construction companies",
    category: "Corporate",
    year: "2024",
    description:
      "Corporate ERP system for a construction company: project management, estimates, subcontractor management and inventory.",
    fullDescription:
      "Comprehensive ERP system for a mid-size construction business. Project portfolio management (Gantt charts), estimate creation and approval, subcontractor bidding, building materials inventory with auto-reorder, crew time tracking and plan-vs-actual analysis.",
    challenge:
      "The company managed 15+ parallel construction sites via Excel and WhatsApp chats with foremen — deadlines slipped, budgets went negative.",
    solution:
      "Deployed ERP with a mobile app for foremen (photo reports, material acceptance), automatic delay notifications and an executive dashboard.",
    outcome:
      "Budget variance dropped from 22% to 6%, project completion timelines shortened by 18% on average.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "WebSockets"],
    metrics: [
      { label: "Budget variance", value: "6%" },
      { label: "Timeline reduction", value: "−18%" },
      { label: "Projects in system", value: "42" },
    ],
    status: "live",
    device: "macbook",
    shot: null,
    featured: false,
  },
  {
    slug: "traderview",
    title: "TraderView",
    tagline: "Forex analytics dashboard platform",
    category: "Dashboards",
    year: "2024",
    description:
      "Analytics platform for traders: interactive charts, technical indicators, AI forecasting and strategy backtesting.",
    fullDescription:
      "Web platform for professional traders with real-time market data via WebSocket. Interactive charts (TradingView-like engine), a portfolio of 50+ indicators, trading strategy builder with backtesting on historical data and an AI volatility forecasting module.",
    challenge:
      "Traders were using 3–4 different tools for analysis, slowing down decision-making.",
    solution:
      "Built a unified platform with high-frequency data (< 50 ms latency), custom Canvas charting engine and AI predictive analytics.",
    outcome:
      "The platform attracted 5,000+ active traders in the first six months with 60% month-over-month retention.",
    technologies: ["Next.js", "Canvas API", "WebSockets", "Python", "PostgreSQL"],
    metrics: [
      { label: "Active traders", value: "5,000+" },
      { label: "Data latency", value: "<50 ms" },
      { label: "MoM retention", value: "60%" },
    ],
    status: "live",
    device: "browser",
    shot: null,
    featured: false,
  },
];

export const PROJECT_CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "AI",
  "SaaS",
  "FinTech",
  "Corporate",
  "Marketplace",
  "Dashboards",
  "Mobile",
  "Web3",
  "MVP",
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
