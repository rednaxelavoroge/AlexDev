"use client";

import { useState } from "react";
import { ArrowUpRight, FolderGit2, Lock, Hammer } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/projects";
import { DeviceMockup } from "@/components/DeviceMockup";
import { ProjectModal } from "@/components/ProjectModal";
import { useDict } from "@/lib/i18n/DictProvider";

export function Portfolio() {
  const dict = useDict();
  const [filter, setFilter] = useState<string>("Все");
  const [selected, setSelected] = useState<Project | null>(null);

  const list = filter === "Все" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative bg-[#02050c]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-indigo-900/10 rounded-full glow-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-900/10 rounded-full glow-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-4">
            <FolderGit2 size={16} /> {dict.portfolio.badge as string}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            {dict.portfolio.heading as string}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {dict.portfolio.subheading as string}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {c === "Все" ? (dict.portfolio.filters.all as string) : c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {list.map((p) => (
            <article
              key={p.slug}
              className="glass-card rounded-3xl p-6 sm:p-8 cursor-pointer group"
              onClick={() => setSelected(p)}
            >
              <div className="mb-7 px-2 pt-2">
                <DeviceMockup
                  src={p.shot}
                  alt={`${p.title} — превью`}
                  device={p.device}
                  status={p.status}
                  url={p.link}
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-indigo-300 px-2.5 py-1 bg-indigo-500/10 rounded border border-indigo-500/20">
                  {p.category}
                </span>
                <span className="text-xs text-gray-500 font-mono">{p.year}</span>
                {p.status === "nda" && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase text-red-400 px-2 py-1 rounded bg-red-950/40 border border-red-500/20">
                    <Lock size={10} /> NDA
                  </span>
                )}
                {p.status === "soon" && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase text-amber-400 px-2 py-1 rounded bg-amber-950/30 border border-amber-500/20">
                    <Hammer size={10} /> Скоро
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white font-display flex items-center justify-between gap-2 group-hover:text-indigo-300 transition-colors">
                {p.title}
                <ArrowUpRight
                  size={20}
                  className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </h3>
              <p className="text-indigo-300/70 text-sm font-medium mb-3">{p.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {p.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {p.metrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="flex items-baseline gap-1.5">
                    <span className="text-teal-400 font-bold font-display">{m.value}</span>
                    <span className="text-[11px] text-gray-500">{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
