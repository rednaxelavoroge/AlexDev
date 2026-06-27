import Image from "next/image";
import { ArrowRight, Sparkles, Globe, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 bg-[#030712]"
    >
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-indigo-500/15 rounded-full glow-glow animate-pulse-glow" />
      <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] bg-purple-500/15 rounded-full glow-glow animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 backdrop-blur-md">
              <Globe size={13} className="text-teal-400" />
              Бутиковая студия разработки · Worldwide
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02] font-display">
              We design.
              <br />
              We build.
              <br />
              <span className="text-gradient">We scale.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              AlexDev Studio помогает стартапам и бизнесу запускать современные продукты
              на базе AI — SaaS, веб-платформы и автоматизацию. От идеи и MVP до
              масштабируемой архитектуры.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Обсудить проект
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                Смотреть портфолио
              </a>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/5 max-w-xl mx-auto lg:mx-0">
              {siteConfig.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl sm:text-3xl font-bold text-white font-display">{s.value}</dt>
                  <dd className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait — preserved, repositioned as Founder */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-teal-500/20 rounded-[2rem] blur-2xl" />
            <div className="relative animate-float">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 device-shadow">
                <Image
                  src={siteConfig.founder.photo}
                  alt={`${siteConfig.founder.name} — ${siteConfig.founder.role}, ${siteConfig.name}`}
                  width={640}
                  height={800}
                  priority
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />

                {/* Availability badge */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                  </span>
                  Открыт для проектов
                </div>

                {/* Founder caption */}
                <div className="absolute bottom-4 inset-x-4 glass-panel rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-indigo-300 font-semibold flex items-center gap-1.5">
                      <BadgeCheck size={13} /> Founder &amp; Lead Engineer
                    </p>
                    <p className="text-white font-bold font-display text-lg leading-tight">
                      Александр
                    </p>
                  </div>
                  <Sparkles size={20} className="text-amber-400 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
