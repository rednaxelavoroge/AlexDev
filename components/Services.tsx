"use client";

import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Icon } from "@/components/Icon";
import { useDict } from "@/lib/i18n/DictProvider";

export function Services() {
  const dict = useDict();

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#02050c] relative">
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full glow-glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            {dict.services.badge as string}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
            {dict.services.heading as string}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {dict.services.subheading as string}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => {
            const item = (dict.services.items as { title: string; value: string; client: string; outcome: string }[])[i];
            return (
              <article key={item.title} className="glass-card p-8 rounded-2xl flex flex-col">
                <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={26} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.value}</p>

                <dl className="space-y-2.5 mb-6 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-gray-500 shrink-0">Кому:</dt>
                    <dd className="text-gray-300">{item.client}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-gray-500 shrink-0">Результат:</dt>
                    <dd className="text-teal-300">{item.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 glass-panel rounded-2xl p-8">
          <p className="text-gray-300 text-lg">
            {dict.services.ctaLine as string}
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm transition-all"
          >
            {dict.services.cta as string} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
