"use client";

import { Code2, Users, Brain, ShieldCheck } from "lucide-react";
import { useDict } from "@/lib/i18n/DictProvider";

const PILLAR_ICONS = [
  <Code2 key="code" size={22} className="text-indigo-400" />,
  <Users key="users" size={22} className="text-teal-400" />,
  <Brain key="brain" size={22} className="text-purple-400" />,
  <ShieldCheck key="shield" size={22} className="text-amber-400" />,
];

export function About() {
  const dict = useDict();
  const pillars = dict.about.pillars as { title: string; text: string }[];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              {dict.about.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
              {dict.about.heading}
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                {(dict.about.p1 as string[])[0]}
                <span className="text-white font-semibold">{(dict.about.p1 as string[])[1]}</span>
                {(dict.about.p1 as string[])[2]}
              </p>
              <p>
                {(dict.about.p2 as string[])[0]}
                <span className="text-white">{(dict.about.p2 as string[])[1]}</span>
              </p>
              <p>{dict.about.p3 as string}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                {dict.about.cta1 as string}
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full text-indigo-300 hover:text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
              >
                {dict.about.cta2 as string}
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="glass-card rounded-2xl p-6 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {PILLAR_ICONS[i]}
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
