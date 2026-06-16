import React from 'react';
import { ArrowRight, Code, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaclick: () => void;
  onProjectsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaclick, onProjectsClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 bg-[#030712]">
      {/* Decorative Blur Background Grains */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 rounded-full glow-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full glow-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 max-w-4xl">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
          </span>
          <span className="flex items-center gap-1">
            Открыт для новых проектов <Sparkles size={12} className="text-amber-400" />
          </span>
        </div>

        {/* Big Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-display">
          Архитектура успеха:<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">
            ИИ, Web3 и Telegram
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Разрабатываю высоконагруженные Telegram-системы, интеллектуальных ИИ-ботов и безопасные DeFi-платформы. Превращаю сложные идеи в дорогие, масштабируемые цифровые активы.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={onCtaclick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 flex items-center justify-center gap-2 group scale-105"
          >
            Начать проект <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onProjectsClick}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            Смотреть кейсы
          </button>
        </div>
      </div>

      {/* Marquee Ticker Statistics */}
      <div className="absolute bottom-12 left-0 right-0 w-full overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm py-5">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-mono text-gray-400 uppercase tracking-widest">
          {/* Loop items for smooth scroll */}
          {[1, 2].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2.5">
                <Zap size={14} className="text-teal-400" /> 30+ реализованных систем
              </span>
              <span className="text-white/10">•</span>
              <span className="flex items-center gap-2.5">
                <Code size={14} className="text-indigo-400" /> Релиз за 14-28 дней
              </span>
              <span className="text-white/10">•</span>
              <span className="flex items-center gap-2.5">
                <ShieldCheck size={14} className="text-purple-400" /> Безопасность смарт-контрактов
              </span>
              <span className="text-white/10">•</span>
              <span className="flex items-center gap-2.5">
                <Sparkles size={14} className="text-amber-400" /> AI-агенты 24/7 автономии
              </span>
              <span className="text-white/10">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
