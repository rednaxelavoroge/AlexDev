/* Content for secondary sections: Process, Why Choose, FAQ, Testimonials */

export interface ProcessStep {
  num: string;
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    icon: "Compass",
    title: "Discovery",
    desc: "Dive into your business, audience and competitors. Define goals, success metrics and technical requirements.",
    bullets: ["Task analysis", "Success metrics", "Spec & estimate"],
  },
  {
    num: "02",
    icon: "PenTool",
    title: "Planning & UI/UX",
    desc: "Design architecture, user flows and interfaces — from wireframes to clickable prototype.",
    bullets: ["User flows", "Prototype", "Design system"],
  },
  {
    num: "03",
    icon: "Boxes",
    title: "Architecture",
    desc: "Lay out scalable and secure architecture: data model, integrations, infrastructure.",
    bullets: ["Data schema", "Integrations", "Infrastructure"],
  },
  {
    num: "04",
    icon: "GitBranch",
    title: "Development",
    desc: "Write clean code in sprints with weekly demos. You see progress and shape results at every step.",
    bullets: ["Weekly sprints", "Weekly demos", "Clean code"],
  },
  {
    num: "05",
    icon: "ShieldCheck",
    title: "QA & Audit",
    desc: "Manual and automated testing, load testing, security and smart contract audit before release.",
    bullets: ["Unit / E2E tests", "Load testing", "Security"],
  },
  {
    num: "06",
    icon: "Rocket",
    title: "Launch & Support",
    desc: "Deployment, CI/CD and monitoring. Post-launch warranty support and ongoing development.",
    bullets: ["Deploy & CI/CD", "Monitoring", "24/7 support"],
  },
];

export interface Advantage {
  icon: string;
  title: string;
  desc: string;
}

export const WHY_CHOOSE: Advantage[] = [
  {
    icon: "UserCheck",
    title: "Founder-led development",
    desc: "Alex personally leads every project — no lost context, no layers of middle management, no telephone game.",
  },
  {
    icon: "MessagesSquare",
    title: "Transparent communication",
    desc: "Clear task status, honest timelines, direct line to the engineer — not an account manager.",
  },
  {
    icon: "MonitorPlay",
    title: "Weekly demos",
    desc: "Every week you see a working build and shape the product while changes are still cheap.",
  },
  {
    icon: "Network",
    title: "Senior network",
    desc: "We bring in vetted senior developers, designers, DevOps and AI specialists per project.",
  },
  {
    icon: "Gauge",
    title: "Scalable architecture",
    desc: "We lay a foundation that handles growth: from first users to serious load.",
  },
  {
    icon: "Sparkles",
    title: "AI-first approach",
    desc: "We think about where AI gives business an advantage from day one, not as an afterthought.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "How is the studio different from a freelancer or agency?",
    a: "AlexDev Studio is a founder-led boutique: Alex personally owns the architecture and outcome of every project, while bringing in a network of vetted senior engineers, designers, DevOps and AI specialists. You get founder-level commitment with team power — without large-agency overhead.",
  },
  {
    q: "How much does development cost?",
    a: "Projects start from $99 for a landing page and from $500 for a business website or startup MVP. Marketplaces from $5,000, FinTech platforms from $25,000, Enterprise AI — custom. The exact figure depends on scope and timeline. The site shows starting prices with a currency switcher, and we give a final estimate after a free Discovery call.",
  },
  {
    q: "How long does development take?",
    a: "We launch an MVP in 2–4 weeks, SaaS in 1–3 months, marketplaces and enterprise systems — longer. We work in weekly sprints with demos, so you see progress from week one.",
  },
  {
    q: "Do you work with clients from other countries?",
    a: "Yes, we work worldwide and remotely. Primary communication in Russian and English via WhatsApp, Messenger and video calls. Prices shown in USD, EUR, GBP, GEL, AMD, AED and RUB.",
  },
  {
    q: "Who owns the code and rights?",
    a: "All code and product rights transfer to you. We hand over the repository, documentation and infrastructure access. We sign NDAs on request before discussing details.",
  },
  {
    q: "What happens after launch?",
    a: "We provide warranty support and offer a monthly retainer for product development: new features, monitoring, updates and a priority communication channel.",
  },
  {
    q: "Can you improve or rescue an existing project?",
    a: "Yes. We perform a technical audit, assess code and architecture health, and propose a plan: refactoring, further development or phased rewrite. This is often faster and cheaper than starting from scratch.",
  },
  {
    q: "How do I start working with the studio?",
    a: "Write on WhatsApp or Messenger — or fill out the form on the site. We'll schedule a short Discovery call, analyze your challenge, and propose an approach and estimate. We respond within 24 hours.",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  text: string;
  project: string;
  accent: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Founder",
    role: "Furniture factory · B2B",
    initials: "SP",
    text: "The AI agent replaced hours of manual calculations. Our managers now prepare commercial proposals in minutes instead of half a day. Alex immersed himself in our business as a partner, not a contractor.",
    project: "Showroom Pro",
    accent: "from-teal-500/20 to-indigo-500/10",
  },
  {
    name: "Product team",
    role: "DeFi project",
    initials: "RC",
    text: "Complex on-chain logic was made transparent and secure. Weekly demos kept us informed, and the launch went off without surprises. We recommend AlexDev as a reliable engineering partner.",
    project: "ROSCASH",
    accent: "from-purple-500/20 to-indigo-500/10",
  },
  {
    name: "Founder",
    role: "Sharing platform",
    initials: "SK",
    text: "Chaotic Telegram chats turned into a real platform with AI-powered item assessment. Tens of thousands of successful exchanges and steady daily activity — the best proof of quality.",
    project: "Swap Kids",
    accent: "from-indigo-500/20 to-teal-500/10",
  },
];
