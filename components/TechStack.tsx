import { TECH_GROUPS, ALL_TECH } from "@/lib/tech";

// Бренды, удалённые из simpleicons по требованию правообладателей — локальные SVG
const LOCAL_LOGOS: Record<string, string> = {
  openai: "/brand/openai.svg",
  amazonwebservices: "/brand/aws.svg",
};

function Logo({ slug, name }: { slug: string; name: string }) {
  const src = LOCAL_LOGOS[slug] ?? `https://cdn.simpleicons.org/${slug}/a5b4fc`;
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={name}
      width={28}
      height={28}
      loading="lazy"
      className="h-7 w-7 object-contain opacity-80"
    />
  );
}

export function TechStack() {
  return (
    <section id="tech" className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full glow-glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Технологии
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            Современный стек под задачу
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Выбираем технологии под цель проекта, а не наоборот — ради надёжности,
            скорости и масштабируемости.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mb-14 overflow-hidden border-y border-white/5 py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee gap-12 px-6">
            {[...ALL_TECH, ...ALL_TECH].map((t, i) => (
              <span key={`${t.slug}-${i}`} className="flex items-center gap-2.5 shrink-0">
                <Logo slug={t.slug} name={t.name} />
                <span className="text-sm text-gray-400 font-medium whitespace-nowrap">{t.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_GROUPS.map((g) => (
            <div key={g.group} className="glass-card rounded-2xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-300/80 mb-5">
                {g.group}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {g.items.map((t) => (
                  <li
                    key={t.slug}
                    className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2.5"
                  >
                    <Logo slug={t.slug} name={t.name} />
                    <span className="text-xs text-gray-300 truncate">{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
