import React from 'react';
import { Bot, Cpu, Wallet, Layers, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const list = [
    {
      icon: <Bot size={28} className="text-teal-400" />,
      title: 'ИИ & Нейросети',
      desc: 'Интеграция LLM (GPT, Claude), интеллектуальные агенты, умная маршрутизация заявок, RAG-системы по базам знаний и автоматизация 24/7.',
      stack: ['OpenAI API', 'LangChain', 'Pinecone', 'FastAPI']
    },
    {
      icon: <Cpu size={28} className="text-indigo-400" />,
      title: 'Telegram Экосистемы',
      desc: 'Многоуровневые чат-боты, Web App (Mini Apps) приложения, платежи внутри TG, реферальные воронки и системы автоматизации продаж.',
      stack: ['React (Mini Apps)', 'Python / Aiogram', 'WebSockets', 'PostgreSQL']
    },
    {
      icon: <Wallet size={28} className="text-purple-400" />,
      title: 'Web3 & DeFi Решения',
      desc: 'Разработка смарт-контрактов, децентрализованные платежные шлюзы, интеграция кошельков (Web3Auth, WalletConnect), стейкинг пулы.',
      stack: ['Solidity', 'Ethers.js', 'Viem / Wagmi', 'Hardhat']
    },
    {
      icon: <Layers size={28} className="text-blue-400" />,
      title: 'SaaS & Web-системы',
      desc: 'Масштабируемые веб-кабинеты, CRM-интеграции, панели управления данными, защищенные API и личные кабинеты для B2B клиентов.',
      stack: ['Next.js / React', 'Node.js', 'REST & GraphQL', 'Docker']
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Направления
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
            Специализация в передовых технологиях
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Разрабатываю технологичные решения с фокусом на финансовую эффективность и высокую конверсию в целевые действия.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {list.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Technologies list */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {item.stack.map(s => (
                    <span 
                      key={s}
                      className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                
                <span className="text-xs text-indigo-400 font-semibold flex items-center gap-1 hover:text-indigo-300 transition-colors">
                  Подробнее <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
