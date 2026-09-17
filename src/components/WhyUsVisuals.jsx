import { useEffect, useState } from "react";
import { CheckCircle2, FileCode2, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import useInView from "@/lib/useInView";

// Dark card with a gradient edge, grid texture and a light sweep.
function Frame({ children, overlays, className = "" }) {
  return (
    <div className="group relative">
      <div className="rounded-2xl p-px bg-linear-to-br from-lilac/70 via-iris/25 to-lilac/40 shadow-[0_0_50px_rgba(135,78,255,0.25)] transition-shadow duration-500 group-hover:shadow-[0_0_80px_rgba(135,78,255,0.45)]">
        <div className={`relative overflow-hidden rounded-2xl bg-[#0c0b19] ${className}`}>
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-60 rounded-full bg-iris/30 blur-[80px] animate-glow" aria-hidden="true" />
          <div className="relative">{children}</div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-white/[0.07] to-transparent animate-shimmer"
          />
        </div>
      </div>
      {overlays}
    </div>
  );
}

const chip = "border border-white/10 backdrop-blur-md bg-[#0e0d1b]/95 shadow-xl";

/* ---------- Presale DApp ---------- */

const payOptions = [
  { chain: "ETH", pay: "0.25 ETH", color: "#A5A5FF" },
  { chain: "BNB", pay: "1.40 BNB", color: "#F3BA2F" },
  { chain: "SOL", pay: "5.10 SOL", color: "#14F195" },
];

function useCountdown(startSeconds) {
  const [left, setLeft] = useState(startSeconds);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : startSeconds)), 1000);
    return () => clearInterval(t);
  }, [startSeconds]);
  return [
    Math.floor(left / 86400),
    Math.floor((left % 86400) / 3600),
    Math.floor((left % 3600) / 60),
    left % 60,
  ].map((n) => String(n).padStart(2, "0"));
}

// Linked blocks with a pulse travelling down the chain.
function BlockChain() {
  const blocks = ["#19,284,061", "#19,284,062", "#19,284,063"];
  return (
    <div className="hidden sm:flex flex-1 justify-center pr-4" aria-hidden="true">
      <div className="relative flex flex-col items-center gap-5">
        <div className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-lilac/10 via-lilac/40 to-lilac/10" />
        <span className="absolute left-1/2 top-4 w-1.5 h-6 -translate-x-1/2 rounded-full bg-lilac shadow-[0_0_12px_#c3a7f4] animate-[chain-pulse_3s_ease-in-out_infinite]" />
        {blocks.map((b, i) => (
          <div
            key={b}
            className="relative rounded-lg border border-lilac/25 bg-[#141228] px-2.5 py-1.5 text-center animate-glow"
            style={{ animationDelay: `${i}s` }}
          >
            <p className="text-[9px] uppercase tracking-wider text-slate-500">Block</p>
            <p className="font-mono text-[10px] text-lilac">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PresaleBanner() {
  const [ref, inView] = useInView(0.35);
  const [active, setActive] = useState(0);
  const time = useCountdown(2 * 86400 + 14 * 3600 + 37 * 60 + 12);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % payOptions.length), 2600);
    return () => clearInterval(t);
  }, []);

  const opt = payOptions[active];

  return (
    <div ref={ref}>
      <Frame
        className="px-4 pt-14 pb-5 sm:p-7"
        overlays={
          <>
            <div className="absolute left-3 top-3 sm:-left-5 sm:top-8 animate-float">
              <div className={`${chip} flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-white`}>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping-slow" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                Live on Mainnet
              </div>
            </div>

            <div className="hidden sm:block absolute -left-6 -bottom-8 animate-float [animation-delay:2s]">
              <div className={`${chip} rounded-2xl px-3.5 py-3 w-40`}>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Staking TVL</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <svg viewBox="0 0 120 36" className="mt-2 w-full h-9" aria-hidden="true">
                  <defs>
                    <linearGradient id="spark" x1="0" x2="1">
                      <stop offset="0" stopColor="#c3a7f4" />
                      <stop offset="1" stopColor="#8977f1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 30 L18 26 L32 28 L46 19 L60 21 L74 13 L88 15 L102 7 L118 4"
                    fill="none"
                    stroke="url(#spark)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={inView ? 0 : 1}
                    style={{ transition: "stroke-dashoffset 2s ease-out 0.4s" }}
                  />
                </svg>
              </div>
            </div>

            <div className="absolute right-3 top-3 sm:top-auto sm:right-4 sm:-bottom-5 animate-toast">
              <div className={`${chip} flex items-center gap-2.5 rounded-xl px-3 py-2`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-white">Transaction confirmed</p>
                  <p className="text-[10px] font-mono text-slate-400">0x7f3a…c91e</p>
                </div>
              </div>
            </div>
          </>
        }
      >
        <div className="flex items-center">
        <BlockChain />
        <div className="ml-auto w-full sm:max-w-[330px] rounded-2xl border border-white/10 bg-[#141228]/90 p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-linear-to-br from-lilac to-iris font-display text-sm font-bold text-[#1a1333]">
                N
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-semibold text-white">$NOVA Presale</p>
                <p className="text-[11px] text-slate-400">Stage 3 of 5</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              LIVE
            </span>
          </div>

          {/* countdown */}
          <div className="mt-4 grid grid-cols-4 gap-1.5 text-center">
            {time.map((v, i) => (
              <div key={i} className="rounded-lg bg-white/5 py-1.5">
                <p className="font-mono text-sm font-semibold text-white tabular-nums">{v}</p>
                <p className="text-[9px] uppercase tracking-wider text-slate-500">{["Days", "Hrs", "Min", "Sec"][i]}</p>
              </div>
            ))}
          </div>

          {/* raised */}
          <div className="mt-4">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Raised</span>
              <span className="text-white font-medium">64%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="relative h-full rounded-full bg-linear-to-r from-lilac to-iris transition-[width] duration-[1800ms] ease-out delay-300 overflow-hidden"
                style={{ width: inView ? "64%" : "0%" }}
              >
                <span className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>

          {/* chain selector */}
          <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-xl bg-white/5 p-1">
            {payOptions.map((o, i) => (
              <span
                key={o.chain}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold transition-all duration-500 ${
                  i === active ? "bg-white/10 text-white shadow" : "text-slate-500"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: o.color }} />
                {o.chain}
              </span>
            ))}
          </div>

          {/* amount */}
          <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2.5">
            <div className="leading-tight">
              <p className="text-[10px] text-slate-500">You pay</p>
              <p key={opt.chain} className="text-sm font-semibold text-white animate-in fade-in slide-in-from-bottom-1 duration-500">
                {opt.pay}
              </p>
            </div>
            <div className="text-right leading-tight">
              <p className="text-[10px] text-slate-500">You receive</p>
              <p className="text-sm font-semibold text-lilac">25,000 NOVA</p>
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-xl bg-linear-to-r from-lilac to-iris py-2.5 text-center text-sm font-semibold text-[#1a1333]">
            <span className="relative z-10 inline-flex items-center gap-2">
              <Wallet className="w-4 h-4" /> Connect Wallet
            </span>
            <span className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
          </div>
        </div>
        </div>
      </Frame>
    </div>
  );
}

/* ---------- Smart contract editor ---------- */

const K = "text-[#c792ea]"; // keyword
const T = "text-[#82aaff]"; // type
const F = "text-[#ffcb6b]"; // function / name
const S = "text-[#c3e88d]"; // string / number
const C = "text-slate-500"; // comment
const P = "text-slate-300"; // plain

const code = [
  [["// SPDX-License-Identifier: MIT", C]],
  [["pragma ", K], ["solidity ", P], ["^0.8.24", S], [";", P]],
  [],
  [["contract ", K], ["TokenPresale ", F], ["is ", K], ["Ownable", T], [" {", P]],
  [["  uint256 ", T], ["public ", K], ["hardCap", P], [" = ", P], ["5_000 ether", S], [";", P]],
  [["  mapping", T], ["(address => uint256) ", P], ["public ", K], ["paid", P], [";", P]],
  [],
  [["  function ", K], ["buy", F], ["() ", P], ["external payable ", K], ["{", P]],
  [["    require", F], ["(saleOpen, ", P], ['"Closed"', S], [");", P]],
  [["    paid", P], ["[msg.sender] += msg.value;", P]],
  [["    emit ", K], ["Purchased", F], ["(msg.sender);", P]],
  [["  }", P]],
  [["}", P]],
];

export function ContractBanner() {
  const [ref, inView] = useInView(0.35);
  return (
    <div ref={ref}>
      <Frame
        className="px-4 pt-14 pb-20 sm:p-7"
        overlays={
          <>
            <div className="absolute right-3 bottom-3 sm:-right-6 sm:-bottom-6 animate-float [animation-delay:1s]">
              <div className={`${chip} rounded-2xl px-3.5 py-3 w-40 sm:w-44`}>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Milestones</span>
                  <span className="font-semibold text-white">3 / 4</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-lilac to-iris transition-[width] duration-[1800ms] ease-out delay-300"
                    style={{ width: inView ? "75%" : "0%" }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-3 top-3 sm:left-auto sm:right-8 sm:-top-4 animate-float [animation-delay:3s]">
              <div
                className={`${chip} flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-white transition-all duration-700 delay-[1600ms] ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Audit passed
              </div>
            </div>
          </>
        }
      >
        <div className="rounded-xl border border-white/10 bg-[#0f0e20]/95 shadow-2xl overflow-hidden">
          {/* title bar */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <FileCode2 className="w-3.5 h-3.5 text-lilac" /> TokenPresale.sol
            </span>
          </div>

          {/* code */}
          <pre className="overflow-hidden px-4 py-4 font-mono text-[10.5px] sm:text-xs leading-[1.7]">
            {code.map((line, i) => (
              <div
                key={i}
                className={`flex whitespace-pre transition-all duration-300 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
                style={{ transitionDelay: `${300 + i * 110}ms` }}
              >
                <span className="w-6 shrink-0 select-none text-slate-600">{i + 1}</span>
                <span>
                  {line.map(([text, cls], j) => (
                    <span key={j} className={cls}>{text}</span>
                  ))}
                  {i === code.length - 1 && (
                    <span className="ml-0.5 inline-block w-1.5 h-3.5 align-middle bg-lilac animate-pulse" />
                  )}
                </span>
              </div>
            ))}
          </pre>

          {/* status bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 bg-white/[0.03] px-4 py-2 text-[10.5px]">
            <span
              className={`flex items-center gap-1.5 text-emerald-300 transition-opacity duration-500 delay-[1800ms] ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Compiled
            </span>
            <span
              className={`text-slate-400 transition-opacity duration-500 delay-[2100ms] ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              Tests <span className="text-white font-medium">48/48</span> passing
            </span>
          </div>
        </div>
      </Frame>
    </div>
  );
}
