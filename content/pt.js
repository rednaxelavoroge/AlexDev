export const pt = {
  contact: { whatsapp: '37281952565', messenger: 'https://m.me/61586410776411' },

  nav: {
    framework: 'Metodologia',
    engineer: 'O que construímos',
    work: 'Trabalhos',
    aes: 'AES',
    engage: 'Modelos',
    faq: 'Perguntas',
    cta: 'Iniciar projeto',
  },

  hero: {
    eyebrow: 'Empresa de engenharia AI-Native',
    titleLine1: 'Não vendemos programadores.',
    titleLine2: 'Construímos',
    titleMuted: 'produtos.',
    sub: 'A AlexDev constrói produtos digitais modernos por meio de um sistema em que a IA faz parte do método de engenharia, e os engenheiros humanos tomam cada decisão final.',
    ctaPrimary: 'Iniciar projeto',
    ctaSecondary: 'Ver o padrão de engenharia',
    meta: ['Sistemas em produção, não protótipos', 'IA · SaaS · Web3', 'No mundo todo'],
    spec: {
      title: 'AES / Padrão de engenharia',
      status: 'Ativo',
      rows: [
        { n: '01', l: 'Descoberta', tag: 'Conduzido por pessoas' },
        { n: '02', l: 'Arquitetura', tag: 'Conduzido por pessoas' },
        { n: '03', l: 'Desenvolvimento AI-Native', tag: 'IA + humano' },
        { n: '04', l: 'Revisão humana', tag: 'O humano decide', gate: true },
        { n: '05', l: 'QA e segurança', tag: 'IA + humano' },
        { n: '06', l: 'Deploy', tag: 'Automatizado' },
        { n: '07', l: 'Evolução', tag: 'Contínuo' },
      ],
    },
  },

  trust: {
    id: 'Camada de confiança',
    metrics: [
      { v: '$2.4M+', k: 'Valor total bloqueado, protegido on-chain', src: 'ROSCASH' },
      { v: '80k+', k: 'Transações diárias em produção', src: 'QADSAN' },
      { v: '98.7%', k: 'Precisão da IA por parâmetros em operação', src: 'Showroom Pro' },
      { v: '10k+', k: 'Famílias integradas a um sistema', src: 'Swap Kids' },
    ],
    stackLabel: 'Construído com',
    stack: ['OpenAI', 'Anthropic', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'AWS', 'Docker', 'Solidity', 'Stripe'],
  },

  framework: {
    id: 'Framework de engenharia AI-Native',
    h2: 'A IA é parte do sistema de engenharia, não um recurso',
    lead: 'Quatro princípios regem cada produto que construímos. É assim que “AI-native” deixa de ser um slogan e vira um método com responsabilidade embutida.',
    cards: [
      { n: 'P01', h: 'Arquitetura antes do código', p: 'Projetamos o sistema — dados, contratos, segurança — antes de escrever uma única linha. A estrutura decide a qualidade.' },
      { n: 'P02', h: 'IA por design', p: 'A IA está integrada em todo o fluxo: geração, revisão, testes, documentação. Ela acelera o sistema, não o substitui.' },
      { n: 'P03', h: 'Responsabilidade humana', p: 'Cada resultado da IA passa por uma revisão de engenharia humana. As pessoas assumem a decisão final, a arquitetura e o risco.' },
      { n: 'P04', h: 'Sistemas acima de recursos', p: 'Construímos produtos que resistem ao crescimento e à mudança: estruturas de longo prazo, não entregas isoladas.' },
    ],
  },

  engineer: {
    id: 'O que construímos',
    h2: 'Duas linhas, um mesmo padrão de engenharia',
    lead: 'De uma landing de $99 a uma plataforma de IA corporativa: cada build passa pelo mesmo pipeline AES. Não oferecemos serviços de marketing.',
    laneEng: {
      title: 'Projetos de engenharia',
      kind: 'Por escopo',
      rows: [
        { li: 'Sistemas de IA', ld: 'agentes · RAG · automação' },
        { li: 'Plataformas FinTech', ld: 'pagamentos · crédito · carteiras' },
        { li: 'Plataformas SaaS', ld: 'multi-tenant · cobrança' },
        { li: 'Gaming e GameFi', ld: 'tempo real · economias tokenizadas' },
        { li: 'Produtos Web3', ld: 'emissão de tokens e NFT · contratos · auditorias' },
        { li: 'Plataformas de negócio e enterprise', ld: 'portais · CRM · ERP' },
        { li: 'Automação', ld: 'pipelines ponta a ponta' },
      ],
    },
    laneQuick: {
      title: 'Soluções rápidas',
      kind: 'Produtizadas',
      rows: [
        { li: 'Landing pages', ld: 'a partir de $99' },
        { li: 'Sites corporativos', ld: 'a partir de $500' },
        { li: 'Assistentes de IA', ld: 'a partir de $500' },
        { li: 'Bots de Telegram', ld: 'a partir de $500' },
        { li: 'Telegram Mini Apps', ld: 'a partir de $500' },
      ],
    },
  },

  work: {
    id: 'Trabalhos selecionados',
    h2: 'Sistemas que projetamos',
    lead: 'Produtos reais com métricas reais: a maioria em produção, cada um com seu status honesto. Sem mockups nem tração inventada.',
    projects: [
      {
        dm: 'AI · WhatsApp · Automation', yr: '2026', name: 'AI Business Assistant', url: 'alex-dev.pro/ai-business-assistant', href: '/pt/ai-business-assistant',
        desc: "AI customer assistant for WhatsApp that works with a business's own knowledge base, qualifies leads and automates customer communication.",
        metrics: [{ mv: 'WhatsApp', mk: 'Cloud API v23.0' }, { mv: '24/7', mk: 'AI Assistant' }, { mv: 'Bitrix24', mk: 'CRM Integration' }],
      },
      {
        dm: 'FinTech · AI', yr: '2025', name: 'MEM Cash', url: 'memcash.app', href: 'https://memcash.app',
        desc: 'Plataforma de microcrédito com IA agêntica que cobre pequenas faltas de saldo no checkout em tempo real: orquestração multiagente, score de crédito alternativo com LLM e um PWA offline-first.',
        metrics: [{ mv: 'Agentic', mk: 'IA multiagente' }, { mv: 'Llama 3.1', mk: 'Score' }, { mv: 'PWA', mk: 'Offline-first' }],
      },
      {
        dm: 'AI', yr: '2025', name: 'Showroom Pro', url: 'showroom-ai.pro', href: 'https://showroom-ai.pro',
        desc: 'Assistente de IA que lê parâmetros de produtos em chats e documentos e gera propostas comerciais para fábricas de móveis em minutos.',
        metrics: [{ mv: '5 min', mk: 'Velocidade da proposta' }, { mv: '98.7%', mk: 'Precisão' }, { mv: '90%', mk: 'Tempo economizado' }],
      },
      {
        dm: 'Web3', yr: '2024', name: 'ROSCASH', url: 'roscash.org', href: 'https://roscash.org',
        desc: 'Grupos de poupança rotativa (ROSCA) e empréstimos P2P em contratos inteligentes: fundos financeiros sem intermediários bancários.',
        metrics: [{ mv: '$2.4M+', mk: 'TVL' }, { mv: '180+', mk: 'Pools ativos' }, { mv: '<3s', mk: 'Tempo de tx' }],
      },
      {
        dm: 'Construction · AI', yr: '2026', name: 'StroyTablitsa', url: 'stroytablica.ru', href: 'https://stroytablica.ru',
        desc: 'Bot do Telegram que transforma qualquer planilha Excel de obra em um analista de IA conversacional: encontra divergências de soma e linhas duplicadas, monta resumos por fornecedor e comparações de preços, e acompanha estouros de orçamento — tudo em português simples, com cada número calculado por um banco de dados, não «adivinhado» por uma IA.',
        metrics: [{ mv: 'Exato (BD)', mk: 'Sem achismo de IA' }, { mv: '200k', mk: 'Linhas por arquivo' }, { mv: '3 grátis', mk: 'Arquivos / mês' }],
      },
      {
        dm: 'Telegram · AI', yr: '2024', name: 'Swap Kids', url: 'swapkids.org', href: 'https://swapkids.org',
        desc: 'Plataforma privada no Telegram para trocar itens infantis, com avaliação por IA do estado a partir de fotos e economia de tokens.',
        metrics: [{ mv: '10k+', mk: 'Famílias' }, { mv: '45k+', mk: 'Trocas' }, { mv: '2,500', mk: 'Online por dia' }],
      },
      {
        dm: 'GameFi', yr: '2023', name: 'QADSAN', url: 'qadsan.com', href: 'https://qadsan.com',
        desc: 'Simulador GameFi massivo do mercado de ações com ativos tokenizados, pools de staking e milhares de transações por segundo.',
        metrics: [{ mv: '80k+', mk: 'Tx diárias' }, { mv: '40k+', mk: 'Usuários ativos' }, { mv: '<30ms', mk: 'Resposta da UI' }],
      },
      {
        dm: 'Telegram · Web3', yr: '2025', name: 'Webtransfer', url: 't.me/Webtransfer_apps_bot', href: 'https://t.me/Webtransfer_apps_bot',
        desc: 'Mini App do Telegram para empréstimos P2P em TON e USDT — sem bancos, sem intermediários. Os usuários emprestam e tomam empréstimos diretamente, dão lances em um leilão em tempo real pela melhor taxa, revendem empréstimos ativos como certificados negociáveis e ganham com um programa de indicação de cinco níveis.',
        metrics: [{ mv: 'TON + USDT', mk: 'Empréstimos em duas moedas' }, { mv: 'Ao vivo', mk: 'Leilões em tempo real' }, { mv: '12', mk: 'Idiomas' }],
      },
      {
        dm: 'E-commerce', yr: '2025', name: 'Monte Salotti', url: 'montesalotti.ge', href: 'https://montesalotti.ge',
        desc: 'Showroom online premium de uma marca de móveis italiana: apresentação cinematográfica de coleções e conversão por mensageiros.',
        metrics: [{ mv: '7', mk: 'Categorias' }, { mv: '6', mk: 'Seções' }, { mv: '100%', mk: 'Multilíngue' }],
      },
      {
        dm: 'Art · NFT', yr: '2024', name: 'Ijareteli', url: 'ijareteli.com', href: 'https://ijareteli.com',
        desc: 'Galeria digital que apresenta as obras de um artista georgiano como NFTs: rolagem cinematográfica e interação com GSAP.',
        metrics: [{ mv: '2,000+', mk: 'Obras' }, { mv: '6.5 min', mk: 'Tempo médio' }, { mv: '450+', mk: 'Contatos' }],
      },
    ],
  },

  aes: {
    id: 'Padrão de engenharia da AlexDev',
    h2: 'AlexDev Engineering Standard (AES)',
    lead: 'Nossa metodologia como um padrão documentado e repetível. A IA percorre todo o pipeline; no centro há uma revisão humana; as pessoas respondem do início ao fim.',
    stages: [
      { sn: '01', h: 'Descoberta', role: 'Humano', type: 'h' },
      { sn: '02', h: 'Arquitetura', role: 'Humano', type: 'h' },
      { sn: '03', h: 'Dev AI-Native', role: 'IA + humano', type: 'ai' },
      { sn: '04', h: 'Revisão', role: 'O humano decide', type: 'h', gate: true },
      { sn: '05', h: 'QA e segurança', role: 'IA + humano', type: 'ai' },
      { sn: '06', h: 'Deploy', role: 'Automatizado', type: 'h' },
      { sn: '07', h: 'Evolução', role: 'Contínuo', type: 'ai' },
    ],
    notes: [
      { b: 'A IA acelera', t: ' — geração, revisão, testes, documentação.' },
      { b: 'As pessoas decidem', t: ' — arquitetura, risco e cada release.' },
    ],
  },

  engage: {
    id: 'Modelos de trabalho',
    h2: 'Como trabalhamos — e quanto custa',
    lead: 'Preço de entrada transparente quando o escopo é claro. Estimativa por escopo quando não é. O mesmo padrão para ambos.',
    cardA: {
      k: 'Modelo A', h: 'Soluções rápidas',
      d: 'Builds produtizados com um preço de entrada fixo e transparente. Ideal para uma primeira presença na web ou uma ferramenta pontual.',
      rows: [
        { pi: 'Landing page', pp: 'a partir de $99' },
        { pi: 'Site corporativo', pp: 'a partir de $500' },
        { pi: 'Assistente de IA', pp: 'a partir de $500' },
        { pi: 'Bot de Telegram / Mini App', pp: 'a partir de $500' },
      ],
      foot: 'Entregue conforme o AES · CI/CD, orçamento de performance e monitoramento por padrão.',
    },
    cardB: {
      k: 'Modelo B', h: 'Projetos de engenharia',
      d: 'Sistemas sob medida, estimados após uma call de Discovery. Preço por arquitetura e resultado, nunca por horas.',
      rows: [
        { pi: 'SaaS / Sistemas de IA', pp: 'Por escopo', scope: true },
        { pi: 'Plataformas de negócio', pp: 'Por escopo', scope: true },
        { pi: 'Enterprise / Web3', pp: 'Por escopo', scope: true },
        { pi: 'Faixa típica', pp: '$5k – $100k+' },
      ],
      foot: 'Estimativa após uma call de Discovery gratuita · entrega completa de código e IP · NDA sob solicitação.',
    },
  },

  faq: {
    id: 'Perguntas',
    h2: 'Respostas diretas',
    items: [
      { q: 'Vocês são uma agência ou um time de freelancers?', a: 'Nenhum dos dois. A AlexDev é uma empresa de engenharia AI-Native. Não vendemos programadores nem horas: construímos produtos com um padrão documentado (AES), com CI/CD, testes automatizados e segurança integrados.', open: true },
      { q: 'A IA escreve meu produto sozinha?', a: 'Não. A IA está integrada ao nosso sistema de engenharia para acelerar o trabalho, mas cada resultado passa por uma revisão humana. Os engenheiros assumem a arquitetura, o risco e cada release.' },
      { q: 'De quem é o código e a propriedade intelectual?', a: 'Seus. Ao concluir, entregamos o repositório completo, a documentação e os acessos à infraestrutura. Assinamos NDA sob solicitação antes de discutir detalhes.' },
      { q: 'Quanto custa e quanto tempo leva?', a: 'As soluções rápidas partem de $99 fixos e são lançadas em dias. Os projetos de engenharia são estimados após uma call de Discovery gratuita: normalmente $5k–$100k+, com um MVP em semanas e demos semanais.' },
      { q: 'Vocês podem melhorar ou resgatar um projeto existente?', a: 'Sim. Primeiro fazemos uma auditoria de arquitetura e saúde do código e depois propomos refatoração, evolução ou uma reescrita em fases: muitas vezes mais rápido e barato do que começar do zero.' },
    ],
  },

  final: {
    id: 'Começar',
    h2: 'Vamos construir seu produto',
    p: 'Envie um brief curto. Vamos propor uma arquitetura, um padrão e uma estimativa, e respondemos em 24 horas.',
    form: {
      name: 'Nome', namePh: 'Seu nome',
      contact: 'Contato', contactPh: 'Email ou WhatsApp',
      type: 'Tipo de projeto',
      typeOptions: [
        'Site / Landing page',
        'Bot de Telegram / Mini App',
        'Sistema / assistente de IA',
        'FinTech / plataforma financeira',
        'SaaS / plataforma web',
        'Gaming / GameFi',
        'Automação / integrações',
        'Web3 / DeFi',
        'Outro',
      ],
      building: 'O que você quer construir',
      buildingPh: 'Algumas linhas sobre o problema e o resultado que você precisa',
      submit: 'Enviar brief pelo WhatsApp',
      alt: 'Prefere direto?',
    },
  },

  footer: {
    about: 'Empresa de engenharia AI-Native. Construímos produtos digitais modernos — de sistemas de IA a plataformas SaaS — com o AlexDev Engineering Standard.',
    colCompany: { t: 'Empresa', links: [{ label: 'Metodologia', href: '#framework' }, { label: 'AES', href: '#aes' }, { label: 'Trabalhos', href: '#work' }, { label: 'Modelos', href: '#engage' }] },
    colEngineer: { t: 'Construímos', links: [{ label: 'Sistemas de IA', href: '#engineer' }, { label: 'SaaS', href: '#engineer' }, { label: 'Web3', href: '#engineer' }, { label: 'Soluções rápidas', href: '#engineer' }] },
    colConnect: { t: 'Contato' },
    copy: '© 2024–2026 AlexDev · AI-Native Engineering',
    worldwide: 'No mundo todo',
  },
};
