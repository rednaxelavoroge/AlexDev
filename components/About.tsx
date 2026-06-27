import { Code2, Users, Brain, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: <Code2 size={22} className="text-indigo-400" />,
    title: "Инженер в ядре",
    text: "Alex лично проектирует архитектуру и пишет ключевой код каждого проекта — с 2014 года в разработке.",
  },
  {
    icon: <Users size={22} className="text-teal-400" />,
    title: "Сеть сеньоров",
    text: "Под задачу подключаем проверенных senior-разработчиков, дизайнеров, DevOps и AI-специалистов.",
  },
  {
    icon: <Brain size={22} className="text-purple-400" />,
    title: "AI-экспертиза",
    text: "Специализация на AI-продуктах: LLM, агенты, RAG и автоматизация, встроенные в реальные бизнес-процессы.",
  },
  {
    icon: <ShieldCheck size={22} className="text-amber-400" />,
    title: "Ответственность за результат",
    text: "Один человек отвечает за продукт от первого созвона до поддержки после релиза. Без размытой ответственности.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              О студии
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
              Бутиковая студия под руководством основателя
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                AlexDev Studio — это не анонимное агентство и не фриланс-биржа. Это студия,
                которой руководит инженер. Каждый проект ведёт{" "}
                <span className="text-white font-semibold">Alex</span> — Founder &amp; Lead
                Engineer с десятью годами опыта создания цифровых продуктов: от лендингов в начале
                пути до сложных enterprise- и AI-систем сегодня.
              </p>
              <p>
                Чтобы закрывать проекты любого масштаба без потери качества, под каждую задачу
                Alex собирает команду из проверенной сети{" "}
                <span className="text-white">senior-разработчиков, дизайнеров, DevOps- и
                AI-специалистов</span>. Вы получаете вовлечённость основателя и мощность команды —
                без накладных расходов крупного агентства.
              </p>
              <p>
                Наш принцип прост и честен: мы не просто пишем код — мы строим продукты, которые
                помогают бизнесу расти. Прозрачно, с еженедельными демо и ответственностью за
                результат.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                Познакомиться
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full text-indigo-300 hover:text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
              >
                Посмотреть работы →
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-6 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-display">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
