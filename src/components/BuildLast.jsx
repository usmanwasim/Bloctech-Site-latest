import { ArrowRight, Check, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const packages = [
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
  return (
    <section id="packages" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Packages"
          title="Pick a starting point. We tailor the rest."
          subtitle="Every project is quoted to its exact scope — these packages show how most of our clients begin."
        />

        <div className="grid gap-5 md:grid-cols-3 items-stretch">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-px ${
                p.featured
                  ? "bg-linear-to-b from-lilac to-iris shadow-[0_0_60px_rgba(137,119,241,0.35)] md:-translate-y-3"
                  : "bg-white/10"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-linear-to-r from-lilac to-iris px-3 py-1 text-xs font-semibold text-[#1a1333] whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" /> Most popular
                </span>
              )}
              <div className="flex h-full flex-col rounded-3xl bg-[#11101f] p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">{p.name}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{p.desc}</p>

                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-lilac/10 pb-3 text-slate-200">
                      <Check className="mt-0.5 w-4.5 h-4.5 shrink-0 rounded-full bg-lilac p-0.5 text-[#301d50]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-linear-to-r from-lilac to-iris text-[#1a1333] hover:brightness-110"
                      : "border border-lilac/50 text-white hover:bg-lilac/10"
                  }`}
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
