"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { CURRENCIES, PRICING_TIERS, formatPrice, type Currency } from "@/lib/pricing";
import { useDict } from "@/lib/i18n/DictProvider";

export function Pricing() {
  const dict = useDict();
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0]);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full glow-glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            {dict.pricing.badge as string}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
            {dict.pricing.heading as string}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            {dict.pricing.subheading as string}
          </p>
        </div>

        {/* Currency switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              onClick={() => setCurrency(c)}
              aria-pressed={currency.code === c.code}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                currency.code === c.code
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
              title={c.label}
            >
              {c.code}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-7 flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-b from-indigo-500/15 to-purple-500/5 border border-indigo-500/40 shadow-xl shadow-indigo-500/10"
                  : "glass-card"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold uppercase tracking-wider">
                  {dict.pricing.popular as string}
                </span>
              )}
              <h3 className="text-lg font-bold text-white font-display">{tier.name}</h3>
              <p className="text-xs text-indigo-300/70 mb-4">{tier.taglineEn}</p>

              <div className="mb-4">
                {tier.priceUsd !== null ? (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-gray-500">{dict.pricing.ctaPrefix as string}</span>
                    <span className="text-3xl font-extrabold text-white font-display">
                      {formatPrice(tier.priceUsd, currency)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-white font-display">
                    {dict.pricing.customQuote as string}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-gray-300">
                    <Check size={16} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                }`}
              >
                {tier.cta} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          {dict.pricing.disclaimer as string}
        </p>
      </div>
    </section>
  );
}
