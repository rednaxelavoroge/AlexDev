export const en = {
  contact: { whatsapp: '37281952565', messenger: 'https://m.me/61586410776411' },

  nav: {
    framework: 'Framework',
    engineer: 'What we engineer',
    work: 'Work',
    aes: 'AES',
    engage: 'Engagement',
    faq: 'FAQ',
    cta: 'Start a project',
  },

  hero: {
    eyebrow: 'AI-Native Engineering Company',
    titleLine1: "We don't sell developers.",
    titleLine2: 'We engineer',
    titleMuted: 'products.',
    sub: 'AlexDev engineers modern digital products through a system where AI is part of the engineering method — and human engineers make every final decision.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See the engineering standard',
    meta: ['Production systems, not prototypes', 'AI · SaaS · Web3', 'Worldwide'],
    spec: {
      title: 'AES / Engineering Standard',
      status: 'Active',
      rows: [
        { n: '01', l: 'Discovery', tag: 'Human-led' },
        { n: '02', l: 'Architecture', tag: 'Human-led' },
        { n: '03', l: 'AI-Native Development', tag: 'AI + Human' },
        { n: '04', l: 'Human Review Gate', tag: 'Human decides', gate: true },
        { n: '05', l: 'QA & Security', tag: 'AI + Human' },
        { n: '06', l: 'Deployment', tag: 'Automated' },
        { n: '07', l: 'Evolution', tag: 'Continuous' },
      ],
    },
  },

  trust: {
    id: 'Trust Layer',
    metrics: [
      { v: '$2.4M+', k: 'Total value locked, secured on-chain', src: 'ROSCASH' },
      { v: '80k+', k: 'Daily transactions in production', src: 'QADSAN' },
      { v: '98.7%', k: 'AI parameter accuracy in operations', src: 'Showroom Pro' },
      { v: '10k+', k: 'Families onboarded to one system', src: 'Swap Kids' },
    ],
    stackLabel: 'Engineered with',
    stack: ['OpenAI', 'Anthropic', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'AWS', 'Docker', 'Solidity', 'Stripe'],
  },

  framework: {
    id: 'AI-Native Engineering Framework',
    h2: 'AI is part of the engineering system — not a feature',
    lead: 'Four principles govern every product we build. They are how "AI-native" stops being a slogan and becomes a method with accountability built in.',
    cards: [
      { n: 'P01', h: 'Architecture before code', p: 'We design the system — data, contracts, security — before a single line ships. Structure decides quality.' },
      { n: 'P02', h: 'AI by design', p: 'AI is embedded across the workflow: generation, review, testing, docs. It accelerates the system, it doesn’t replace it.' },
      { n: 'P03', h: 'Human responsibility', p: 'Every AI output passes a human engineering gate. People own the final decision, the architecture and the risk.' },
      { n: 'P04', h: 'Systems over features', p: 'We build products that hold up under growth and change — long-term structures, not one-off deliverables.' },
    ],
  },

  engineer: {
    id: 'What We Engineer',
    h2: 'Two lanes, one engineering standard',
    lead: 'From a $99 landing page to an enterprise AI platform — every build runs through the same AES pipeline. We do not offer marketing services.',
    laneEng: {
      title: 'Engineering Projects',
      kind: 'Scope-based',
      rows: [
        { li: 'AI Systems', ld: 'agents · RAG · automation' },
        { li: 'FinTech Platforms', ld: 'payments · lending · wallets' },
        { li: 'SaaS Platforms', ld: 'multi-tenant · billing' },
        { li: 'Gaming & GameFi', ld: 'real-time · tokenized economies' },
        { li: 'Web3 Products', ld: 'token & NFT issuance · contracts · audits' },
        { li: 'Business & Enterprise Platforms', ld: 'portals · CRM · ERP' },
        { li: 'Automation', ld: 'end-to-end pipelines' },
      ],
    },
    laneQuick: {
      title: 'Quick Solutions',
      kind: 'Productized',
      rows: [
        { li: 'Landing Pages', ld: 'from $99' },
        { li: 'Corporate Websites', ld: 'from $500' },
        { li: 'AI Assistants', ld: 'from $500' },
        { li: 'Telegram Bots', ld: 'from $500' },
        { li: 'Telegram Mini Apps', ld: 'from $500' },
      ],
    },
  },

  work: {
    id: 'Selected Work',
    h2: "Systems we've engineered",
    lead: 'Real products with real metrics — most live in production, each shown with its honest status. No mockups, no fabricated traction.',
    projects: [
      {
        dm: 'AI · WhatsApp · Automation', yr: '2026', name: 'AI Business Assistant', url: 'alex-dev.pro/ai-business-assistant', href: '/en/ai-business-assistant',
        desc: "AI customer assistant for WhatsApp that works with a business's own knowledge base, qualifies leads and automates customer communication.",
        metrics: [{ mv: 'WhatsApp', mk: 'Cloud API v23.0' }, { mv: '24/7', mk: 'AI Assistant' }, { mv: 'Bitrix24', mk: 'CRM Integration' }],
      },
      {
        dm: 'FinTech · AI', yr: '2025', name: 'MEM Cash', url: 'memcash.app', href: 'https://memcash.app',
        desc: 'Agentic AI micro-lending platform that covers small shortfalls at checkout in real time — multi-agent orchestration, LLM-based alternative credit scoring and an offline-first PWA.',
        metrics: [{ mv: 'Agentic', mk: 'Multi-agent AI' }, { mv: 'Llama 3.1', mk: 'Credit scoring' }, { mv: 'PWA', mk: 'Offline-first' }],
      },
      {
        dm: 'AI', yr: '2025', name: 'Showroom Pro', url: 'showroom-ai.pro', href: 'https://showroom-ai.pro',
        desc: 'AI assistant that reads product parameters from chats and documents, then generates commercial proposals for furniture factories.',
        metrics: [{ mv: '5 min', mk: 'Proposal speed' }, { mv: '98.7%', mk: 'Accuracy' }, { mv: '90%', mk: 'Time saved' }],
      },
      {
        dm: 'Web3', yr: '2024', name: 'ROSCASH', url: 'roscash.org', href: 'https://roscash.org',
        desc: 'Decentralized rotating savings circles and P2P lending on smart contracts — financial pools without banking intermediaries.',
        metrics: [{ mv: '$2.4M+', mk: 'TVL' }, { mv: '180+', mk: 'Active pools' }, { mv: '<3s', mk: 'Tx time' }],
      },
      {
        dm: 'Construction · AI', yr: '2026', name: 'StroyTablitsa', url: 'stroytablica.ru', href: 'https://stroytablica.ru',
        desc: 'Telegram bot that turns any construction Excel file into a conversational AI analyst — finds sum mismatches and duplicate rows, builds supplier summaries and price comparisons, and tracks budget overruns, all in plain Russian, with every figure computed by a database instead of guessed by an LLM.',
        metrics: [{ mv: 'DB-exact', mk: 'No AI guesswork' }, { mv: '200k', mk: 'Rows per file' }, { mv: '3 free', mk: 'Files / month' }],
      },
      {
        dm: 'Telegram · AI', yr: '2024', name: 'Swap Kids', url: 'swapkids.org', href: 'https://swapkids.org',
        desc: 'Private Telegram sharing platform for children’s items with AI scoring of item condition from photos and a token economy.',
        metrics: [{ mv: '10k+', mk: 'Families' }, { mv: '45k+', mk: 'Swaps' }, { mv: '2,500', mk: 'Daily online' }],
      },
      {
        dm: 'GameFi', yr: '2023', name: 'QADSAN', url: 'qadsan.com', href: 'https://qadsan.com',
        desc: 'Massively multiplayer GameFi stock market simulator with tokenized assets, staking pools and thousands of transactions per second.',
        metrics: [{ mv: '80k+', mk: 'Daily tx' }, { mv: '40k+', mk: 'Active users' }, { mv: '<30ms', mk: 'UI response' }],
      },
      {
        dm: 'Telegram · Web3', yr: '2025', name: 'Webtransfer', url: 't.me/Webtransfer_apps_bot', href: 'https://t.me/Webtransfer_apps_bot',
        desc: 'Telegram Mini App for peer-to-peer lending in TON and USDT — no banks, no intermediaries. Users fund or borrow loans directly, bid in a real-time WebSocket auction for the best rate, resell active loans as tradeable certificates, and earn through a five-level referral program.',
        metrics: [{ mv: 'TON + USDT', mk: 'Dual-currency lending' }, { mv: 'Live', mk: 'Real-time auctions' }, { mv: '12', mk: 'Languages' }],
      },
      {
        dm: 'E-commerce', yr: '2025', name: 'Monte Salotti', url: 'montesalotti.ge', href: 'https://montesalotti.ge',
        desc: 'Premium online showroom for an Italian furniture brand — cinematic collection presentation and messenger-based conversion.',
        metrics: [{ mv: '7', mk: 'Categories' }, { mv: '6', mk: 'Sections' }, { mv: '100%', mk: 'Multilingual' }],
      },
      {
        dm: 'Art · NFT', yr: '2024', name: 'Ijareteli', url: 'ijareteli.com', href: 'https://ijareteli.com',
        desc: "Digital gallery presenting a Georgian artist's works as NFTs — cinematic scrolling and GSAP-driven interaction.",
        metrics: [{ mv: '2,000+', mk: 'Artworks' }, { mv: '6.5 min', mk: 'Avg on site' }, { mv: '450+', mk: 'Inquiries' }],
      },
    ],
  },

  aes: {
    id: 'AlexDev Engineering Standard',
    h2: 'The AlexDev Engineering Standard (AES)',
    lead: 'Our methodology as a documented, repeatable standard. AI runs through the pipeline; a human review gate sits at the center; people stay accountable end to end.',
    stages: [
      { sn: '01', h: 'Discovery', role: 'Human', type: 'h' },
      { sn: '02', h: 'Architecture', role: 'Human', type: 'h' },
      { sn: '03', h: 'AI-Native Dev', role: 'AI + Human', type: 'ai' },
      { sn: '04', h: 'Review Gate', role: 'Human decides', type: 'h', gate: true },
      { sn: '05', h: 'QA & Security', role: 'AI + Human', type: 'ai' },
      { sn: '06', h: 'Deployment', role: 'Automated', type: 'h' },
      { sn: '07', h: 'Evolution', role: 'Continuous', type: 'ai' },
    ],
    notes: [
      { b: 'AI accelerates', t: ' — generation, review, testing, documentation.' },
      { b: 'Humans decide', t: ' — architecture, risk, and every release.' },
    ],
  },

  engage: {
    id: 'Engagement Models',
    h2: 'How we work — and what it costs',
    lead: 'Transparent entry pricing where the scope is known. Scoped estimates where it isn’t. Same standard applies to both.',
    cardA: {
      k: 'Model A', h: 'Quick Solutions',
      d: 'Productized builds with a fixed, transparent entry price. Ideal for a first web presence or a focused tool.',
      rows: [
        { pi: 'Landing Page', pp: 'from $99' },
        { pi: 'Corporate Website', pp: 'from $500' },
        { pi: 'AI Assistant', pp: 'from $500' },
        { pi: 'Telegram Bot / Mini App', pp: 'from $500' },
      ],
      foot: 'Ships through AES · CI/CD, performance budget and monitoring included by default.',
    },
    cardB: {
      k: 'Model B', h: 'Engineering Projects',
      d: 'Custom systems scoped after a Discovery call. Priced by architecture and outcome — never by hours.',
      rows: [
        { pi: 'SaaS / AI Systems', pp: 'Scope-based', scope: true },
        { pi: 'Business Platforms', pp: 'Scope-based', scope: true },
        { pi: 'Enterprise / Web3', pp: 'Scope-based', scope: true },
        { pi: 'Typical range', pp: '$5k – $100k+' },
      ],
      foot: 'Estimate after a free Discovery call · full code & IP handover · NDA on request.',
    },
  },

  faq: {
    id: 'FAQ',
    h2: 'Questions, answered directly',
    items: [
      { q: 'Are you an agency or a team of freelancers?', a: 'Neither. AlexDev is an AI-native engineering company. We don’t sell developers or hours — we engineer products through a documented standard (AES) with CI/CD, automated testing and security built in.', open: true },
      { q: 'Is AI writing my product on its own?', a: 'No. AI is embedded in our engineering system to accelerate work, but every output passes a human review gate. Human engineers own the architecture, the risk and every release decision.' },
      { q: 'Who owns the code and IP?', a: 'You do. We hand over the full repository, documentation and infrastructure access on completion. We sign an NDA on request before discussing details.' },
      { q: 'How much does it cost and how long does it take?', a: 'Quick Solutions start at a fixed $99 and ship in days. Engineering Projects are scoped after a free Discovery call — typically $5k–$100k+, with an MVP in weeks and weekly demos throughout.' },
      { q: 'Can you improve or rescue an existing project?', a: 'Yes. We run an architecture and code-health audit first, then propose refactoring, further development or a phased rewrite — often faster and cheaper than starting over.' },
    ],
  },

  final: {
    id: 'Start',
    h2: "Let's engineer your product",
    p: "Send a short brief. We'll propose an architecture, a standard and an estimate — and respond within 24 hours.",
    form: {
      name: 'Name', namePh: 'Your name',
      contact: 'Contact', contactPh: 'Email or WhatsApp',
      type: 'Project type',
      typeOptions: [
        'Website / Landing page',
        'Telegram bot / Mini App',
        'AI system / assistant',
        'FinTech / financial platform',
        'SaaS / web platform',
        'Gaming / GameFi',
        'Automation / integrations',
        'Web3 / DeFi',
        'Other',
      ],
      building: 'What are you building',
      buildingPh: 'A few lines about the problem and the outcome you need',
      submit: 'Send brief via WhatsApp',
      alt: 'Prefer direct?',
    },
  },

  footer: {
    about: 'An AI-native engineering company. We engineer modern digital products — from AI systems to SaaS platforms — through the AlexDev Engineering Standard.',
    colCompany: { t: 'Company', links: [{ label: 'Framework', href: '#framework' }, { label: 'AES', href: '#aes' }, { label: 'Work', href: '#work' }, { label: 'Engagement', href: '#engage' }] },
    colEngineer: { t: 'Engineer', links: [{ label: 'AI Systems', href: '#engineer' }, { label: 'SaaS', href: '#engineer' }, { label: 'Web3', href: '#engineer' }, { label: 'Quick Solutions', href: '#engineer' }] },
    colConnect: { t: 'Connect' },
    copy: '© 2024–2026 AlexDev · AI-Native Engineering',
    worldwide: 'Worldwide',
  },
};
