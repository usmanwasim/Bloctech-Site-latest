import bm from "../assets/bm.png";
import ic from "../assets/Group1.png";
import ic1 from "../assets/Group2.png";
import ic2 from "../assets/Group3.png";
import ic3 from "../assets/Group4.png";
import useInView from "@/lib/useInView";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ContractBanner, PresaleBanner } from "./WhyUsVisuals";

const features = [
  {
    title: "Shaping What Gets Built",
    icon: ic,
    description:
      "We clarify scope, tokenomics, contract logic and priorities before a single line is written — so what moves forward is clean and built for long-term value.",
  },
  {
    title: "Structured, Ongoing Clarity",
    icon: ic1,
    description:
      "Clear milestones, regular progress updates and demo builds. You always know what's done, what's next and why.",
  },
  {
    title: "Contracts & UI Built Together",
    icon: ic2,
    description:
      "Interfaces, backend and smart contracts are developed side by side, so your DApp stays stable, intuitive and easy to maintain.",
  },
  {
    title: "Secure, Launch-Ready Delivery",
    icon: ic3,
    description:
      "Every release is tested, reviewed and verified on testnet before mainnet — delivered as a dependable product your users can trust.",
  },
];

// Numbered steps joined by a line that fills in as the list scrolls into view.
function StepList({ items, start }) {
  const [ref, inView] = useInView(0.3);
  return (
    <div ref={ref} className="relative space-y-4">
      <div className="absolute left-7 sm:left-8 top-8 bottom-8 w-px bg-white/10" aria-hidden="true">
        <div
          className={`h-full w-full origin-top bg-linear-to-b from-lilac via-iris to-transparent transition-transform duration-[1600ms] ease-out ${
            inView ? "scale-y-100" : "scale-y-0"
          }`}
        />
      </div>

      {items.map((f, i) => (
        <Reveal key={f.title} from="left" delay={200 + i * 180}>
          <div className="group relative flex items-start gap-4 sm:gap-5 rounded-2xl p-0 sm:p-3 sm:-m-3 transition-colors duration-300 hover:bg-white/[0.03]">
            <div className="relative shrink-0">
              <div className="absolute inset-1 rounded-2xl bg-lilac/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={f.icon}
                alt=""
                loading="lazy"
                className="relative w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
              />
            </div>
            <div className="pt-1">
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-lilac/70">
                {String(start + i + 1).padStart(2, "0")}
              </span>
              <h4 className="font-display text-lg sm:text-xl font-semibold text-white transition-colors group-hover:text-lilac">
                {f.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function WhyWorkWithUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6">
      {/* background media */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]">
          <img src={bm} alt="" loading="lazy" className="w-[1400px] max-w-none animate-glow" />
        </div>
        <div className="absolute left-[8%] top-[30%] w-72 h-72 rounded-full bg-iris/20 blur-[90px] animate-drift" />
        <div className="absolute right-[6%] bottom-[15%] w-80 h-80 rounded-full bg-lilac/15 blur-[100px] animate-drift [animation-delay:-7s]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Why BlocTech"
            title="Built with clarity. Delivered with precision."
            subtitle="Founders and businesses choose us for Web3 products that work on day one and keep working as they grow."
          />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-10">
            <Reveal from="left">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Structure, clarity and support that stays aligned
              </h3>
              <p className="mt-3 text-slate-400 sm:text-lg">
                Working with BlocTech means certainty at every stage.
              </p>
            </Reveal>
            <StepList items={features.slice(0, 2)} start={0} />
            <Reveal from="scale" className="pt-4">
              <ContractBanner />
            </Reveal>
          </div>

          <div className="space-y-10">
            <Reveal from="right" className="pb-4">
              <PresaleBanner />
            </Reveal>
            <Reveal from="right">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Delivery that performs, scales and holds its shape
              </h3>
              <p className="mt-3 text-slate-400 sm:text-lg">
                Stable, cohesive systems built for real users and long-term growth.
              </p>
            </Reveal>
            <StepList items={features.slice(2)} start={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
