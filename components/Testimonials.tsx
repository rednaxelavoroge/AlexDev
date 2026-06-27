import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#02050c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Отзывы
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            Что говорят клиенты
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Слова основателей продуктов, которые мы запускали и развивали вместе.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.project} className="glass-card rounded-2xl p-7 flex flex-col">
              <Quote size={28} className="text-indigo-400/60 mb-4" />
              <blockquote className="text-gray-300 text-sm leading-relaxed flex-1">
                {t.text}
              </blockquote>
              <div className="flex gap-0.5 mt-5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.accent} border border-white/10 flex items-center justify-center text-white font-bold text-sm font-display`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
                <span className="ml-auto text-[11px] font-mono text-indigo-300/70">{t.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
