import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import PipelineVisual from "./PipelineVisual";
import Reveal from "./Reveal";

const engagements = [
  {
    name: "Token Launch",
    desc: "For new projects that need to go live fast",
    features: [
      "Token smart contract (ERC-20 / BEP-20 / SPL)",
      "Presale DApp on one chain",
      "Wallet connect & admin panel",
      "Contract testing & verification",
    ],
  },
  {
    name: "Multichain Growth",
    desc: "For serious launches across several networks",
    featured: true,
    features: [
      "Presale across multiple chains",
      "Staking & rewards dashboard",
      "Vesting & claim portal",
      "Custom UI/UX design",
      "Audit-ready code & deployment support",
    ],
  },
  {
    name: "Enterprise & Tokenization",
    desc: "For businesses building complete platforms",
    features: [
      "Real-world asset tokenization",
      "NFT marketplace or DEX platform",
      "Custom backend & integrations",
      "Dedicated team & ongoing support",
    ],
  },
];

export default function PricingSection() {
  const [open, setOpen] = useState(1);

  return (
    <section id="engagements" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="pointer-events-none absolute left-0 top-1/4 w-[55%] h-96 rounded-full bg-iris/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* left: animated pipeline */}
        <Reveal from="left" className="order-2 lg:order-1">
          <div className="rounded-3xl p-px bg-linear-to-br from-lilac/40 via-white/5 to-iris/30 shadow-[0_0_60px_rgba(137,119,241,0.2)]">
            <div className="rounded-3xl bg-[#0b0a18] p-2 sm:p-3">
              <PipelineVisual />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            One pipeline — whatever you start with, it ships tested, audited and live.
          </p>
        </Reveal>

        {/* right: engagement models, compact */}
        <div className="order-1 lg:order-2">
          <Reveal from="right">
            <span className="inline-flex items-center gap-2 rounded-full border border-lilac/30 bg-lilac/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-lilac">
              <span className="w-1.5 h-1.5 rounded-full bg-lilac animate-pulse" />
              Engagement Models
            </span>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
              Pick a starting point. We tailor the rest.
            </h2>
            <p className="mt-4 text-slate-400 text-pretty">
              Every project is quoted to its exact scope — these are the three ways most clients begin.
            </p>
          </Reveal>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {engagements.map((p, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={p.name} from="right" delay={120 + i * 110}>
                  <div className={isOpen ? "bg-white/[0.03]" : ""}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-2 py-5 text-left transition-colors hover:bg-white/[0.03]"
                    >
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isOpen ? "text-lilac" : "text-slate-500"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-display text-lg font-semibold text-white">{p.name}</span>
                          {p.featured && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-lilac to-iris px-2 py-0.5 text-[10px] font-semibold text-[#1a1333]">
                              <Sparkles className="w-3 h-3" /> Most popular
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate-400">{p.desc}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-lilac" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid overflow-hidden px-2 transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <ul className="space-y-2.5 pl-8 text-sm">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-slate-300">
                              <Check className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-lilac p-0.5 text-[#301d50]" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#contact"
                          className="group mt-5 ml-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-lilac to-iris px-5 py-2.5 text-sm font-semibold text-[#1a1333] transition hover:brightness-110"
                        >
                          Get a Quote
                          <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal from="right" delay={420}>
            <p className="mt-6 text-sm text-slate-500">
              Not sure which fits?{" "}
              <a href="#contact" className="text-lilac underline-offset-4 hover:underline">
                Send us your idea
              </a>{" "}
              and we'll suggest the shortest path to launch.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
