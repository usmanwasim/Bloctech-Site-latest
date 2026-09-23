import { useEffect, useState } from "react";
import { ClipboardList, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import useInView from "@/lib/useInView";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Discovery & Scope",
    desc: "We map your idea, tokenomics and must-have features into a clear, costed plan before anything is built.",
    Icon: ClipboardList,
    meta: "Week 1",
    output: "Scope document & quote",
  },
  {
    title: "Architecture & Design",
    desc: "Contract logic, chain choice and UI screens are agreed up front, so there are no surprises later.",
    Icon: PenTool,
    meta: "Week 1–2",
    output: "Screens & contract spec",
  },
  {
    title: "Build & Integrate",
    desc: "Smart contracts, backend and frontend are developed side by side with demo builds you can try.",
    Icon: Code2,
    meta: "Week 2–5",
    output: "Working testnet build",
  },
  {
    title: "Test & Audit",
    desc: "Full test suite, gas optimisation and a security review before a single real token moves.",
    Icon: ShieldCheck,
    meta: "Week 5–6",
    output: "Audit-ready contracts",
  },
  {
    title: "Launch & Support",
    desc: "Mainnet deployment, contract verification, handover documents and support after go-live.",
    Icon: Rocket,
    meta: "Launch day",
    output: "Live product & handover",
  },
];

export default function Process() {
  const [ref, inView] = useInView(0.25);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // The timeline plays itself once the section is on screen, and waits while
  // the visitor is inspecting a step.
  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 2600);
    return () => clearInterval(t);
  }, [inView, paused]);

  return (
    <section id="process" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-64 rounded-full bg-iris/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl" ref={ref}>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="From first call to mainnet launch"
            subtitle="A clear path with fixed milestones. Hover a step to hold it — otherwise it plays through."
          />
        </Reveal>

        {/* desktop rail */}
        <div className="mb-8 hidden lg:grid grid-cols-5" aria-hidden="true">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex justify-center">
              {i < steps.length - 1 && (
                <span className="absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-white/10">
                  <span
                    className={`block h-full bg-linear-to-r from-lilac to-iris transition-all duration-700 ease-out ${
                      i < active ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
              <span
                className={`relative grid place-items-center w-11 h-11 rounded-full border font-mono text-xs transition-all duration-500 ${
                  i <= active
                    ? "border-lilac/60 bg-linear-to-br from-lilac to-iris text-[#1a1333] shadow-[0_0_20px_rgba(195,167,244,0.45)]"
                    : "border-white/15 bg-[#0e0d1b] text-slate-500"
                } ${i === active ? "scale-110" : ""}`}
              >
                {i === active && (
                  <span className="absolute inset-0 rounded-full border border-lilac/60 animate-ping-slow" />
                )}
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => {
            const { title, desc, meta, output, Icon } = step;
            const isActive = i === active;
            return (
              <Reveal as="li" key={title} delay={i * 110} className="h-full">
                <div
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  onMouseLeave={() => setPaused(false)}
                  className={`group relative flex h-full flex-col rounded-2xl border p-5 transition-all duration-500 sheen-host ${
                    isActive
                      ? "border-lilac/50 bg-linear-to-b from-[#1c1935] to-[#100e20] shadow-[0_0_40px_rgba(137,119,241,0.25)] lg:-translate-y-1"
                      : "border-white/10 bg-[#0d0c1b]"
                  }`}
                >
                  {/* light line across the top of the active card */}
                  <span className="absolute inset-x-0 top-0 h-px overflow-hidden rounded-t-2xl">
                    <span
                      className={`block h-full bg-linear-to-r from-transparent via-lilac to-transparent transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </span>

                  <div className="flex items-center justify-between">
                    <span
                      className={`relative grid place-items-center w-11 h-11 rounded-xl transition-all duration-500 ${
                        isActive
                          ? "bg-linear-to-br from-lilac to-iris text-[#2b2250] scale-105"
                          : "bg-white/5 text-lilac/70"
                      }`}
                    >
                      {isActive && <span className="absolute inset-0 rounded-xl bg-lilac/50 blur-md" />}
                      <Icon className="relative w-5 h-5" />
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 lg:hidden">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>

                  <div className="mt-auto pt-4">
                    <p
                      className={`flex items-center gap-1.5 font-mono text-[11px] transition-colors duration-500 ${
                        isActive ? "text-lilac" : "text-slate-500"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {output}
                    </p>
                    <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">
                      {meta}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* summary bar */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 anim-led" />
              Typical build: 4–6 weeks
            </span>
            <span className="hidden sm:block w-px h-5 bg-white/10" />
            <span className="text-slate-400">Fixed milestones · Demo builds every week</span>
            <span className="hidden sm:block w-px h-5 bg-white/10" />
            <a href="#contact" className="font-semibold text-lilac underline-offset-4 hover:underline">
              Start your project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
