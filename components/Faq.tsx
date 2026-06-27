import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group glass-card rounded-2xl px-6 open:border-indigo-500/30 [&[open]>summary>svg]:rotate-180"
            >
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-white font-semibold font-display">
                {item.q}
                <ChevronDown size={20} className="text-indigo-400 shrink-0 transition-transform" />
              </summary>
              <p className="text-gray-400 text-sm leading-relaxed pb-5 -mt-1">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400">Остались вопросы?</p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
          >
            Задать вопрос напрямую
          </a>
        </div>
      </div>
    </section>
  );
}
