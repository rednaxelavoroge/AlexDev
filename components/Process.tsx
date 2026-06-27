"use client";

import { PROCESS_STEPS } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { useDict } from "@/lib/i18n/DictProvider";

export function Process() {
  const dict = useDict();

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#02050c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            {dict.process.badge as string}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            {dict.process.heading as string}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {dict.process.subheading as string}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((s, i) => {
            const step = (dict.process.steps as { title: string; desc: string; bullets: string[] }[])[i];
            return (
              <div key={s.num} className="glass-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon name={s.icon} size={22} className="text-indigo-400" />
                  </div>
                  <span className="text-3xl font-bold text-white/10 font-mono">{s.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[11px] text-gray-400 px-2.5 py-1 rounded bg-white/5 border border-white/5"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
