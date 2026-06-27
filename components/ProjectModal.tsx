"use client";

import { useEffect } from "react";
import { X, ExternalLink, ArrowRight, Lock, Hammer } from "lucide-react";
import { DeviceMockup } from "@/components/DeviceMockup";
import type { Project } from "@/lib/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const goContact = () => {
    onClose();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-3xl h-full bg-[#070b15] border-l border-white/10 shadow-2xl flex flex-col z-10 overflow-y-auto">
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 border-b border-white/10 bg-[#070b15]/90 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {project.category}
              </span>
              <span className="text-xs text-gray-500 font-mono">{project.year}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-2 font-display">{project.title}</h2>
            <p className="text-indigo-300/70 text-sm">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 space-y-8">
          <div className="px-2 pt-2">
            <DeviceMockup
              src={project.shot}
              alt={`${project.title} — превью`}
              device={project.device}
              status={project.status}
              url={project.link}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {project.status === "live" && project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/15 transition-all"
              >
                <ExternalLink size={18} /> Открыть проект <ArrowRight size={16} />
              </a>
            ) : (
              <button
                onClick={goContact}
                className="flex-1 min-w-[200px] py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                {project.status === "nda" ? <Lock size={18} /> : <Hammer size={18} />}
                {project.status === "nda" ? "Запросить демо-доступ" : "Узнать о запуске"}
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.03] text-center">
                <span className="block text-xl sm:text-2xl font-bold text-teal-400 font-display">
                  {m.value}
                </span>
                <span className="text-[11px] text-gray-500">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Block title="О проекте" text={project.fullDescription} />
            <Block title="Задача" text={project.challenge} />
            <Block title="Решение" text={project.solution} />
            <Block title="Результат" text={project.outcome} accent />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3 font-display">Стек технологий</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs bg-indigo-500/10 text-indigo-200 border border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">Хотите похожий продукт для вашего бизнеса?</p>
            <button
              onClick={goContact}
              className="shrink-0 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
            >
              Обсудить проект <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, text, accent }: { title: string; text: string; accent?: boolean }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-2 font-display">{title}</h3>
      <p className={`leading-relaxed text-sm ${accent ? "text-teal-200/90" : "text-gray-400"}`}>
        {text}
      </p>
    </div>
  );
}
