import {
  Coins,
  Globe,
  Image,
  Layers,
  Repeat,
  Rocket,
  ShieldCheck,
  Boxes,
  Wallet,
} from "lucide-react";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
import img5 from "../assets/icon5.png";
import img6 from "../assets/icon6.png";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Multichain Presale & Launchpads",
    desc: "Token presale DApps across Ethereum, BNB Chain, Polygon, Solana and Tron — multi-currency payments, stages, vesting, claims and referral systems.",
    Icon: Rocket,
    tag: "Most requested",
  },
  {
    title: "Token Development & Tokenization",
    desc: "ERC-20, BEP-20 and SPL tokens, plus real-world asset (RWA) tokenization for property, commodities and securities.",
    Icon: Coins,
  },
  {
    title: "Staking & Yield Platforms",
    desc: "Flexible and locked staking, reward pools, yield farming and ROI dashboards with clear, safe on-chain logic.",
    Icon: Layers,
  },
  {
    title: "Smart Contracts & Audits",
    desc: "Production-grade contracts in Solidity and Rust — gas-optimised, fully tested and reviewed before deployment.",
    Icon: ShieldCheck,
  },
  {
    title: "DApp Development",
    desc: "End-to-end decentralized apps with wallet connect, real-time data and smooth user journeys on any EVM or non-EVM chain.",
    Icon: Boxes,
  },
  {
    title: "NFT Solutions",
    desc: "NFT collections, minting websites, marketplaces, and utility or gaming NFTs with royalties and on-chain metadata.",
    Icon: Image,
  },
  {
    title: "DEX & CEX Exchanges",
    desc: "Token swaps, liquidity pools, AMMs and order-book exchanges built for speed, liquidity and security.",
    Icon: Repeat,
  },
  {
    title: "Wallets & Crypto Payments",
    desc: "Custom crypto wallets and payment gateways so your business can accept and manage digital assets.",
    Icon: Wallet,
  },
  {
    title: "Metaverse & Web3 Consulting",
    desc: "Strategy, tokenomics and architecture guidance — from first idea to a confident go-to-market launch.",
    Icon: Globe,
  },
];

const capabilities = [
  { title: "Smart Contracts", icon: img1 },
  { title: "DeFi Systems", icon: img2 },
  { title: "UI/UX Design", icon: img3 },
  { title: "Backend", icon: img4 },
  { title: "Front-End", icon: img5 },
  { title: "Consulting", icon: img6 },
];

export default function BuildGrid() {
  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-[80%] h-[420px] rounded-full bg-[#39345B] opacity-30 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
        <SectionHeading
          eyebrow="What We Build"
          title="Complete Web3 services, under one roof"
          subtitle="We design it, code it, secure it and launch it — whatever your blockchain product needs."
        />
        </Reveal>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const { title, desc, tag, Icon } = service;
            return (
            <Reveal key={title} delay={i * 80} className="h-full">
            <article
              className="group relative h-full rounded-2xl p-px bg-linear-to-br from-lilac/40 via-white/5 to-iris/30 transition hover:from-lilac hover:to-iris hover:-translate-y-1 duration-300"
            >
              <div className="relative h-full rounded-2xl bg-linear-to-br from-[#1b1933] to-[#0f0e1d] p-6 sm:p-7 sheen-host">
                <div className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 rounded-full bg-lilac/10 blur-2xl transition group-hover:bg-lilac/25" />
                <div className="flex items-start justify-between gap-3">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-linear-to-br from-lilac to-iris text-[#2b2250] shadow-[0_0_24px_rgba(195,167,244,0.3)]">
                    <Icon className="w-6 h-6" />
                  </span>
                  {tag && (
                    <span className="rounded-full bg-lilac/15 border border-lilac/30 px-2.5 py-1 text-[11px] font-medium text-lilac">
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-5 text-lg sm:text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            </article>
            </Reveal>
            );
          })}
        </div>

        {/* capabilities strip */}
        <div className="mt-12 sm:mt-16 rounded-3xl p-px bg-linear-to-r from-[#d6a4ff]/60 via-[#8f7eff]/60 to-[#627bff]/60 shadow-[0_0_50px_rgba(151,71,255,0.2)]">
          <div className="rounded-3xl bg-[#0e0d1b] px-5 py-8 sm:px-10">
            <p className="text-center text-sm text-mist mb-6">
              One full-stack team — no hand-offs between agencies
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {capabilities.map((c) => (
                <li key={c.title} className="flex flex-col items-center gap-3 text-center">
                  <img src={c.icon} alt="" className="w-11 h-11 object-contain" loading="lazy" />
                  <span className="text-sm font-medium text-slate-200">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
