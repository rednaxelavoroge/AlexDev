"use client";

import { WHY_CHOOSE } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { useDict } from "@/lib/i18n/DictProvider";

export function WhyChoose() {
  const dict = useDict();

  return (
    <section id="why" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            {dict.why.badge as string}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            {dict.why.heading as string}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {dict.why.subheading as string}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((a, i) => {
            const item = (dict.why.items as { title: string; desc: string }[])[i];
            return (
              <div key={item.title} className="glass-card rounded-2xl p-7 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-white/10 flex items-center justify-center">
                  <Icon name={a.icon} size={22} className="text-indigo-300" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
