import { Coins, Lock, ShieldCheck } from "lucide-react";
import logo from "../assets/footlogo.png";

// Token node that stays upright while its ring rotates.
function Node({ label, color, style, counter }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={style}>
      <div
        className={`${counter} grid place-items-center w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/15 bg-[#14122a]/90 backdrop-blur text-[10px] sm:text-xs font-bold text-white`}
        style={{ boxShadow: `0 0 24px ${color}55` }}
      >
        <span style={{ color }}>{label}</span>
      </div>
    </div>
  );
}

export default function Web3Visual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] aspect-square" aria-hidden="true">
      {/* glow */}
      <div className="absolute inset-[18%] rounded-full bg-iris/40 blur-[80px] animate-glow" />

      {/* outer ring */}
      <div className="absolute inset-[4%] rounded-full border border-dashed border-lilac/25 animate-spin-slower">
        <Node label="ETH" color="#A5A5FF" style={{ left: "50%", top: "0%" }} counter="animate-spin-slower-reverse" />
        <Node label="SOL" color="#14F195" style={{ left: "100%", top: "50%" }} counter="animate-spin-slower-reverse" />
        <Node label="TRX" color="#FF6B6B" style={{ left: "50%", top: "100%" }} counter="animate-spin-slower-reverse" />
        <Node label="ARB" color="#4DA3FF" style={{ left: "0%", top: "50%" }} counter="animate-spin-slower-reverse" />
      </div>

      {/* inner ring */}
      <div className="absolute inset-[22%] rounded-full border border-lilac/30 animate-spin-slow">
        <Node label="BNB" color="#F3BA2F" style={{ left: "85%", top: "15%" }} counter="animate-spin-slow-reverse" />
        <Node label="POL" color="#B98BFF" style={{ left: "15%", top: "85%" }} counter="animate-spin-slow-reverse" />
      </div>

      {/* core block */}
      <div className="absolute inset-[37%] grid place-items-center">
        <div className="relative w-full h-full rotate-45 rounded-3xl bg-linear-to-br from-lilac via-iris to-[#5b4bd6] p-[2px] shadow-[0_0_60px_rgba(137,119,241,0.6)]">
          <div className="w-full h-full rounded-[22px] bg-[#100e22] grid place-items-center">
            <img src={logo} alt="" className="-rotate-45 w-1/3 h-1/3 object-contain" />
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute left-0 sm:-left-4 top-[12%] animate-float">
        <div className="glass rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 w-40 sm:w-48 shadow-xl">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
            <Coins className="w-4 h-4 text-lilac" /> Presale · Stage 2
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[72%] rounded-full bg-linear-to-r from-lilac to-iris" />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-slate-400">
            <span>Multichain</span>
            <span className="text-white font-semibold">72%</span>
          </div>
        </div>
      </div>

      <div className="absolute right-0 sm:-right-2 bottom-[14%] animate-float [animation-delay:1.5s]">
        <div className="glass rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-xl">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
            <Lock className="w-4 h-4 text-emerald-300" /> Staking Pool
          </div>
          <div className="mt-1 font-display text-base sm:text-lg font-bold text-white">
            Rewards Live
          </div>
        </div>
      </div>

      <div className="absolute right-[6%] top-[4%] animate-float [animation-delay:3s] hidden sm:block">
        <div className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-slate-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> Audited Contract
        </div>
      </div>
    </div>
  );
}
