export const fr = {
  contact: { whatsapp: '37281952565', messenger: 'https://m.me/61586410776411' },

  nav: {
    framework: 'Méthodologie',
    engineer: 'Ce que nous faisons',
    work: 'Projets',
    products: 'Produits & Plateformes',
    aes: 'AES',
    engage: 'Engagements',
    faq: 'FAQ',
    cta: 'Lancer un projet',
  },

  hero: {
    eyebrow: 'Société d’ingénierie AI-Native',
    titleLine1: "Nous ne vendons pas de développeurs.",
    titleLine2: 'Nous concevons des',
    titleMuted: 'produits.',
    sub: 'AlexDev conçoit des produits numériques modernes via un système où l’IA fait partie de la méthode d’ingénierie — et où les ingénieurs humains prennent chaque décision finale.',
    ctaPrimary: 'Lancer un projet',
    ctaSecondary: 'Voir le standard d’ingénierie',
    meta: ['Systèmes en production, pas de prototypes', 'IA · SaaS · Web3', 'Dans le monde entier'],
    spec: {
      title: 'AES / Standard d’ingénierie',
      status: 'Actif',
      rows: [
        { n: '01', l: 'Découverte', tag: 'Mené par l’humain' },
        { n: '02', l: 'Architecture', tag: 'Mené par l’humain' },
        { n: '03', l: 'Développement AI-Native', tag: 'IA + humain' },
        { n: '04', l: 'Validation humaine', tag: 'L’humain décide', gate: true },
        { n: '05', l: 'QA & Sécurité', tag: 'IA + humain' },
        { n: '06', l: 'Déploiement', tag: 'Automatisé' },
        { n: '07', l: 'Évolution', tag: 'Continu' },
      ],
    },
  },

  trust: {
    id: 'Couche de confiance',
    metrics: [
      { v: '$2.4M+', k: 'Valeur totale verrouillée, sécurisée on-chain', src: 'ROSCASH' },
      { v: '80k+', k: 'Transactions quotidiennes en production', src: 'QADSAN' },
      { v: '98.7%', k: 'Précision de l’IA par paramètres en opération', src: 'Showroom Pro' },
      { v: '10k+', k: 'Familles intégrées dans un seul système', src: 'Swap Kids' },
    ],
    stackLabel: 'Conçu avec',
    stack: ['OpenAI', 'Anthropic', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'AWS', 'Docker', 'Solidity', 'Stripe'],
  },

  framework: {
    id: 'Framework d’ingénierie AI-Native',
    h2: 'L’IA fait partie du système d’ingénierie, pas une option',
    lead: 'Quatre principes régissent chaque produit que nous concevons. C’est ainsi que « AI-native » cesse d’être un slogan pour devenir une méthode responsable.',
    cards: [
      { n: 'P01', h: 'L’architecture avant le code', p: 'Nous concevons le système — données, contrats, sécurité — avant la première ligne. La structure décide de la qualité.' },
      { n: 'P02', h: 'IA by design', p: 'L’IA est intégrée à tout le flux : génération, revue, tests, documentation. Elle accélère le système, elle ne le remplace pas.' },
      { n: 'P03', h: 'Responsabilité humaine', p: 'Chaque résultat d’IA passe par une validation humaine. Les ingénieurs assument la décision finale, l’architecture et le risque.' },
      { n: 'P04', h: 'Des systèmes avant des fonctionnalités', p: 'Nous construisons des produits qui résistent à la croissance — des structures durables, pas des livrables ponctuels.' },
    ],
  },

  engineer: {
    id: 'Ce que nous faisons',
    h2: 'Deux lignes, un même standard d’ingénierie',
    lead: 'D’une landing page à 99 $ à une plateforme d’IA d’entreprise — chaque projet passe par le même pipeline AES. Aucun service marketing.',
    laneEng: {
      title: 'Projets d’ingénierie',
      kind: 'Sur devis',
      rows: [
        { li: 'Systèmes d’IA', ld: 'agents · RAG · automatisation' },
        { li: 'Plateformes FinTech', ld: 'paiements · prêt · portefeuilles' },
        { li: 'Plateformes SaaS', ld: 'multi-tenant · facturation' },
        { li: 'Gaming et GameFi', ld: 'temps réel · économies tokenisées' },
        { li: 'Produits Web3', ld: 'émission de tokens & NFT · contrats · audits' },
        { li: 'Plateformes d’entreprise', ld: 'portails · CRM · ERP' },
        { li: 'Automatisation', ld: 'pipelines de bout en bout' },
      ],
    },
    laneQuick: {
      title: 'Solutions rapides',
      kind: 'Produits prêts',
      rows: [
        { li: 'Landing pages', ld: 'dès 99 $' },
        { li: 'Sites vitrines', ld: 'dès 500 $' },
        { li: 'Assistants IA', ld: 'dès 500 $' },
        { li: 'Bots Telegram', ld: 'dès 500 $' },
        { li: 'Telegram Mini Apps', ld: 'dès 500 $' },
      ],
    },
  },

  work: {
    id: 'Projets sélectionnés',
    h2: 'Systèmes que nous avons conçus',
    lead: 'Des produits réels avec des métriques réelles : la plupart en production, chacun avec son statut honnête. Pas de maquettes, pas de traction inventée.',
    projects: [
      {
        dm: 'FinTech · AI', yr: '2025', name: 'MEM Cash', url: 'memcash.app', href: 'https://memcash.app',
        desc: 'Plateforme de micro-crédit à IA agentique qui couvre en temps réel de petits manques de solde au moment du paiement : orchestration multi-agents, scoring de crédit alternatif par LLM et une PWA offline-first.',
        metrics: [{ mv: 'Agentic', mk: 'IA multi-agents' }, { mv: 'Llama 3.1', mk: 'Scoring' }, { mv: 'PWA', mk: 'Offline-first' }],
      },
      {
        dm: 'Web3', yr: '2024', name: 'ROSCASH', url: 'roscash.org', href: 'https://roscash.org',
        desc: 'Tontines rotatives (ROSCA) et prêts P2P sur smart contracts : des pools financiers sans intermédiaires bancaires.',
        metrics: [{ mv: '$2.4M+', mk: 'TVL' }, { mv: '180+', mk: 'Pools actifs' }, { mv: '<3s', mk: 'Temps de tx' }],
      },
      {
        dm: 'Construction · AI', yr: '2026', name: 'StroyTablitsa', url: 'stroytablica.ru', href: 'https://stroytablica.ru',
        desc: 'Bot Telegram qui transforme n\'importe quel tableau Excel de chantier en analyste IA conversationnel.',
        metrics: [{ mv: 'Exact (BDD)', mk: 'Zéro approximation IA' }, { mv: '200k', mk: 'Lignes / fichier' }, { mv: '3 gratuits', mk: 'Fichiers / mois' }],
      },
      {
        dm: 'Telegram · AI', yr: '2024', name: 'Swap Kids', url: 'swapkids.org', href: 'https://swapkids.org',
        desc: 'Plateforme privée sur Telegram pour échanger des articles pour enfants.',
        metrics: [{ mv: '10k+', mk: 'Familles' }, { mv: '45k+', mk: 'Échanges' }, { mv: '2,500', mk: 'En ligne / jour' }],
      },
      {
        dm: 'GameFi', yr: '2023', name: 'QADSAN', url: 'qadsan.com', href: 'https://qadsan.com',
        desc: 'Simulateur GameFi massif de marché boursier avec actifs tokenisés.',
        metrics: [{ mv: '80k+', mk: 'Tx / jour' }, { mv: '40k+', mk: 'Utilisateurs actifs' }, { mv: '<30ms', mk: 'Réponse UI' }],
      },
      {
        dm: 'Telegram · Web3', yr: '2025', name: 'Webtransfer', url: 't.me/Webtransfer_apps_bot', href: 'https://t.me/Webtransfer_apps_bot',
        desc: 'Mini-app Telegram pour le prêt P2P en TON et USDT — sans banques ni intermédiaires.',
        metrics: [{ mv: 'TON + USDT', mk: 'Prêts bi-devises' }, { mv: 'Live', mk: 'Enchères en temps réel' }, { mv: '12', mk: 'Langues' }],
      },
      {
        dm: 'E-commerce', yr: '2025', name: 'Monte Salotti', url: 'montesalotti.ge', href: 'https://montesalotti.ge',
        desc: 'Showroom en ligne premium d’une marque de meubles italienne : présentation cinématographique des collections et conversion via messageries.',
        metrics: [{ mv: '7', mk: 'Catégories' }, { mv: '6', mk: 'Sections' }, { mv: '100%', mk: 'Multilingue' }],
      },
      {
        dm: 'Art · NFT', yr: '2024', name: 'Ijareteli', url: 'ijareteli.com', href: 'https://ijareteli.com',
        desc: 'Galerie numérique présentant les œuvres d’un artiste géorgien sous forme de NFT : défilement cinématographique et interaction GSAP.',
        metrics: [{ mv: '2,000+', mk: 'Œuvres' }, { mv: '6.5 min', mk: 'Temps moyen' }, { mv: '450+', mk: 'Demandes' }],
      },
    ],
  },

  products: {
    id: 'Produits & Plateformes',
    h2: 'Produits & plateformes propres d’AlexDev',
    lead: 'En plus de l’ingénierie sur mesure, AlexDev développe et exploite ses propres plateformes SaaS et d’IA.',
    items: [
      {
        id: 'showroom-ai',
        badge: 'Plateforme IA d’entreprise',
        name: 'Showroom AI',
        tagline: 'Plateforme IA pour les entreprises',
        desc: 'Une plateforme d’IA qui transforme la base de connaissances, le catalogue, les règles et les processus métiers de l’entreprise en un système d’IA pour le traitement des demandes et des ventes.',
        industries: ['Ameublement', 'Automobile', 'Immobilier', 'Commerce', 'Services'],
        primaryCta: 'Explorer Showroom AI',
        primaryHref: 'https://showroom-ai.pro/',
        secondaryCta: 'En savoir plus',
        secondaryHref: '/fr/showroom-ai',
        metrics: [
          { mv: '5 min', mk: 'Vitesse de devis' },
          { mv: '98.7%', mk: 'Précision' },
          { mv: 'Multi-tenant', mk: 'Architecture' }
        ],
      },
      {
        id: 'ai-business-assistant',
        badge: 'Assistant IA WhatsApp',
        name: 'AI Business Assistant',
        tagline: 'Assistant IA pour WhatsApp',
        desc: "Assistant client IA pour WhatsApp qui s'appuie sur la base de connaissances de votre entreprise et automatise les échanges 24/7.",
        features: ['WhatsApp Cloud API', 'Moteur de connaissances', 'Intégration CRM'],
        primaryCta: 'Explorer AI Business Assistant',
        primaryHref: '/fr/ai-business-assistant',
        metrics: [
          { mv: 'WhatsApp', mk: 'Cloud API v23.0' },
          { mv: '24/7', mk: 'Assistant IA' },
          { mv: 'Bitrix24', mk: 'Intégration CRM' }
        ],
      },
    ],
  },

  aes: {
    id: 'Standard d’ingénierie d’AlexDev',
    h2: 'AlexDev Engineering Standard (AES)',
    lead: 'Notre méthodologie sous forme de standard documenté et reproductible. L’IA parcourt tout le pipeline ; au centre se trouve une revue humaine ; les personnes restent responsables du début à la fin.',
    stages: [
      { sn: '01', h: 'Discovery', role: 'Humain', type: 'h' },
      { sn: '02', h: 'Architecture', role: 'Humain', type: 'h' },
      { sn: '03', h: 'Dév AI-Native', role: 'IA + humain', type: 'ai' },
      { sn: '04', h: 'Revue', role: 'L’humain décide', type: 'h', gate: true },
      { sn: '05', h: 'QA et sécurité', role: 'IA + humain', type: 'ai' },
      { sn: '06', h: 'Déploiement', role: 'Automatisé', type: 'h' },
      { sn: '07', h: 'Évolution', role: 'Continu', type: 'ai' },
    ],
    notes: [
      { b: 'L’IA accélère', t: ' — génération, revue, tests, documentation.' },
      { b: 'Les humains décident', t: ' — architecture, risque et chaque release.' },
    ],
  },

  engage: {
    id: 'Modèles de collaboration',
    h2: 'Comment nous travaillons — et combien ça coûte',
    lead: 'Prix d’entrée transparent quand le périmètre est clair. Estimation au périmètre sinon. Le même standard pour les deux.',
    cardA: {
      k: 'Modèle A', h: 'Solutions rapides',
      d: 'Des builds productisés avec un prix d’entrée fixe et transparent. Idéal pour une première présence web ou un outil ciblé.',
      rows: [
        { pi: 'Landing page', pp: 'dès 99 $' },
        { pi: 'Site vitrine', pp: 'dès 500 $' },
        { pi: 'Assistant IA', pp: 'dès 500 $' },
        { pi: 'Bot Telegram / Mini App', pp: 'dès 500 $' },
      ],
      foot: 'Livré selon AES · CI/CD, budget de performance et monitoring par défaut.',
    },
    cardB: {
      k: 'Modèle B', h: 'Projets d’ingénierie',
      d: 'Des systèmes sur mesure, estimés après un appel de Discovery. Prix selon l’architecture et le résultat, jamais à l’heure.',
      rows: [
        { pi: 'SaaS / Systèmes IA', pp: 'Au périmètre', scope: true },
        { pi: 'Plateformes métier', pp: 'Au périmètre', scope: true },
        { pi: 'Enterprise / Web3', pp: 'Au périmètre', scope: true },
        { pi: 'Fourchette typique', pp: '$5k – $100k+' },
      ],
      foot: 'Estimation après un appel de Discovery gratuit · remise complète du code et de la PI · NDA sur demande.',
    },
  },

  faq: {
    id: 'Questions',
    h2: 'Des réponses directes',
    items: [
      { q: 'Êtes-vous une agence ou une équipe de freelances ?', a: 'Ni l’un ni l’autre. AlexDev est une société d’ingénierie AI-Native. Nous ne vendons ni développeurs ni heures : nous construisons des produits selon un standard documenté (AES), avec CI/CD, tests automatisés et sécurité intégrés.', open: true },
      { q: 'Est-ce que l’IA écrit mon produit toute seule ?', a: 'Non. L’IA est intégrée à notre système d’ingénierie pour accélérer le travail, mais chaque sortie passe par une revue humaine. Les ingénieurs assument l’architecture, le risque et chaque release.' },
      { q: 'À qui appartiennent le code et la propriété intellectuelle ?', a: 'À vous. À la livraison, nous transférons l’intégralité du dépôt, la documentation et les accès à l’infrastructure. Nous signons un NDA sur demande avant d’entrer dans les détails.' },
      { q: 'Combien ça coûte et combien de temps ça prend ?', a: 'Les solutions rapides démarrent à 99 $ fixes et se lancent en quelques jours. Les projets d’ingénierie sont estimés après un appel de Discovery gratuit : généralement $5k–$100k+, avec un MVP en quelques semaines et des démos hebdomadaires.' },
      { q: 'Pouvez-vous améliorer ou sauver un projet existant ?', a: 'Oui. Nous réalisons d’abord un audit de l’architecture et de la santé du code, puis nous proposons refactoring, évolution ou réécriture par phases : souvent plus rapide et moins cher que repartir de zéro.' },
    ],
  },

  final: {
    id: 'Démarrer',
    h2: 'Concevons votre produit',
    p: 'Envoyez un brief court. Nous proposerons une architecture, un standard et une estimation, et nous répondons sous 24 heures.',
    form: {
      name: 'Nom', namePh: 'Votre nom',
      contact: 'Contact', contactPh: 'Email ou WhatsApp',
      type: 'Type de projet',
      typeOptions: [
        'Site / Landing page',
        'Bot Telegram / Mini App',
        'Système / assistant IA',
        'FinTech / plateforme financière',
        'SaaS / plateforme web',
        'Gaming / GameFi',
        'Automatisation / intégrations',
        'Web3 / DeFi',
        'Autre',
      ],
      building: 'Ce que vous voulez construire',
      buildingPh: 'Quelques lignes sur le problème et le résultat attendu',
      submit: 'Envoyer le brief via WhatsApp',
      alt: 'Vous préférez direct ?',
    },
  },

  footer: {
    about: 'Société d’ingénierie AI-Native. Nous concevons des produits numériques modernes — des systèmes IA aux plateformes SaaS — avec l’AlexDev Engineering Standard.',
    colCompany: { t: 'Société', links: [{ label: 'Méthodologie', href: '#framework' }, { label: 'AES', href: '#aes' }, { label: 'Réalisations', href: '#work' }, { label: 'Modèles', href: '#engage' }] },
    colEngineer: { t: 'Nous construisons', links: [{ label: 'Systèmes IA', href: '#engineer' }, { label: 'SaaS', href: '#engineer' }, { label: 'Web3', href: '#engineer' }, { label: 'Solutions rapides', href: '#engineer' }] },
    colConnect: { t: 'Contact' },
    copy: '© 2024–2026 AlexDev · AI-Native Engineering',
    worldwide: 'Partout dans le monde',
  },
};
