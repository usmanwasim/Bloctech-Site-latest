import { ArrowRight, BadgeCheck } from "lucide-react";
import top from "../assets/top.png";
import { chains, links } from "@/data/site";
import Web3Visual from "./Web3Visual";
import { UpworkIcon } from "./SocialIcons";

const stats = [
  { value: "2020", label: "Building on Web3 since" },
  { value: "100+", label: "DApps delivered" },
  { value: "100%", label: "Job Success on Upwork" },
  { value: "6.4K+", label: "LinkedIn followers" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* background media */}
      <img
        src={top}
        alt=""
        className="pointer-events-none absolute inset-x-0 top-0 w-full h-[760px] lg:h-auto object-cover object-top opacity-40 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
      />
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
        {/* copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-lilac/30 bg-lilac/10 px-3 py-1.5 text-xs sm:text-sm text-lilac">
            <BadgeCheck className="w-4 h-4" />
            Web3 &amp; Blockchain Development Company
          </span>

          <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white text-balance">
            We build the <span className="text-gradient">Web3 products</span> founders launch with.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 text-pretty">
            Multichain presales, tokenization, staking platforms, DApps and NFT
            solutions — designed, coded, audited and launched by one experienced team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-lilac to-iris px-6 py-3.5 font-semibold text-[#1a1333] shadow-[0_0_32px_rgba(195,167,244,0.35)] transition hover:brightness-110"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={links.upworkAgency}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10 hover:border-lilac/50"
            >
              <UpworkIcon className="w-4 h-4 text-[#14a800]" />
              View Upwork Agency
            </a>
          </div>
        </div>

        {/* media */}
        <div className="px-6 sm:px-10 lg:px-0">
          <Web3Visual />
        </div>
      </div>

      {/* stats */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 mt-14 lg:mt-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-4 py-5 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.value}</dd>
              <dd className="mt-1 text-xs sm:text-sm text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* chain marquee */}
      <div className="relative mt-14 sm:mt-16 border-y border-white/5 bg-white/[0.02] py-5">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-500 mb-4 px-4">
          Multichain development across leading networks
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-3 sm:gap-4">
            {[...chains, ...chains].map((c, i) => (
              <li
                key={i}
                aria-hidden={i >= chains.length}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }} />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
