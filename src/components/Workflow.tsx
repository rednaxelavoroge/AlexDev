import React from 'react';
import { Compass, GitBranch, ShieldCheck, Rocket } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Compass size={22} className="text-indigo-400" />,
      title: 'Проектирование & ТЗ',
      desc: 'Глубокий анализ бизнес-процессов, составление технического задания, проектирование структуры БД и UI-прототипов.'
    },
    {
      num: '02',
      icon: <GitBranch size={22} className="text-purple-400" />,
      title: 'Спринты & Демо',
      desc: 'Пошаговая разработка с еженедельными демо-сборками. Вы видите готовый результат и контролируете прогресс на каждом этапе.'
    },
    {
      num: '03',
      icon: <ShieldCheck size={22} className="text-teal-400" />,
      title: 'Аудит & Тестирование',
      desc: 'Комплексное тестирование нагрузок, безопасности смарт-контрактов, защита от DDoS и валидация перед релизом.'
    },
    {
      num: '04',
      icon: <Rocket size={22} className="text-amber-400" />,
      title: 'Релиз & Мониторинг',
      desc: 'Деплой на стабильные сервера (Vercel, VPS), настройка CI/CD автоматизации и гарантийное сопровождение после сдачи.'
    }
  ];

  return (
    <section id="workflow" className="py-24 lg:py-32 bg-[#02050c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Процесс работы
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            От архитектуры до запуска
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Прозрачный процесс разработки с четкими дедлайнами и регулярной отчетностью.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[50px] right-[50px] h-px bg-white/5 z-0" />

          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-2xl relative z-10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Step Num & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-bold text-white/10 font-mono">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {s.title}
                </h3>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
