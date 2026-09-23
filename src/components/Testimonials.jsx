import { Quote, Star } from "lucide-react";
import { links } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { UpworkIcon } from "./SocialIcons";

// Real client reviews from the Upwork profile.
const reviews = [
  {
    quote:
      "We had a great experience with this team. They developed everything we needed and more. They solved bugs that existed with this software and they continue to be supportive. Highly recommended!",
    name: "Nathan D. Wosnack",
    region: "United States",
  },
  {
    quote:
      "Suleman is very talented and professional developer. Your prompt responses to my queries and feedback helped to ensure that the project was delivered on time and to the highest quality standards. He has a good team.",
    name: "Kwame Osei",
    region: "United Kingdom",
  },
  {
    quote:
      "Great team to work with. We wasted time and money on another contractor before hiring this team. They are pleasant to work with and understand that customers are not running projects for fun but doing it for business purpose.",
    name: "Jcrowley",
    region: "United States",
  },
  {
    quote:
      "They were knowledgeable and committed to providing us with the best service possible. The communication was excellent and we were kept up to date on the development at all times. We value their corporate integrity and honesty.",
    name: "Roseline",
    region: "United Kingdom",
  },
  {
    quote:
      "Professional experienced guys, who know what they are doing and are able to bring solution for every situation. Good communication, job done properly. Thank you.",
    name: "Alessandro Chudoba",
    region: "Czech Republic",
  },
  {
    quote:
      "Awesome team! Very responsive and deliver great work above expectations, they were also quick to give recommendations and solving issues.",
    name: "Josh Gier",
    region: "Singapore",
  },
  {
    quote:
      "The team did a great job! Very responsive, accommodating, and patient with every question I had! They are reliable, trustworthy and very easy to work with. I will definitely recommend them to anyone looking to have a Token Contract created!",
    name: "JP Duvenhage",
    region: "South Africa",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function ReviewCard({ r }) {
  return (
    <figure className="group relative flex w-[300px] sm:w-[380px] shrink-0 flex-col rounded-2xl border border-white/10 bg-linear-to-br from-[#171530] to-[#0e0d1c] p-6 transition-all duration-300 hover:border-lilac/45 hover:-translate-y-1 sheen-host">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-lilac/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <Quote className="w-7 h-7 text-lilac/25" />
      </div>

      <blockquote className="mt-4 mb-6 text-sm leading-relaxed text-slate-300">“{r.quote}”</blockquote>

      <figcaption className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="grid place-items-center w-10 h-10 shrink-0 rounded-full bg-linear-to-br from-lilac to-iris font-display text-sm font-bold text-[#1a1333] ring-2 ring-lilac/20">
          {initials(r.name)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white truncate">{r.name}</span>
          <span className="block text-xs text-slate-400">{r.region}</span>
        </span>
        <a
          href={links.upworkCeo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${r.name}'s review on Upwork`}
          className="ml-auto flex items-center gap-1 rounded-full border border-[#14a800]/30 bg-[#14a800]/10 px-2 py-1 text-[10px] font-medium text-[#3ecf3e] transition hover:bg-[#14a800]/20 hover:border-[#14a800]/60"
        >
          <UpworkIcon className="w-3 h-3" />
          Upwork
        </a>
      </figcaption>
    </figure>
  );
}

// One row of cards. The set is repeated until it is wider than a wide screen,
// then duplicated, so the row looks full at every point of the loop.
const CARD = 400; // card width + gap

function Row({ items, reverse = false, speed = "60s" }) {
  const copies = Math.max(2, Math.ceil(2400 / (items.length * CARD)));
  const set = Array.from({ length: copies }, () => items).flat();
  return (
    <div className="group/row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      <div
        className="flex w-max gap-5 py-3 animate-marquee group-hover/row:[animation-play-state:paused]"
        style={{ animationDuration: speed, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[...set, ...set].map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 w-[70%] h-80 rounded-full bg-iris/15 blur-[110px]" />

      <div className="relative">
        <div className="px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Client Feedback"
              title="Founders keep coming back"
              subtitle="Real reviews from clients we have delivered Web3 projects for — verified on Upwork."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mb-10 flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
                <span className="flex text-amber-300">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                5.0 average rating
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
                100% Job Success
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
                Clients in 7+ countries
              </span>
            </div>
          </Reveal>
        </div>

        <Row items={reviews.slice(0, 4)} speed="65s" />
        <Row items={reviews.slice(4)} reverse speed="55s" />

        <div className="px-4 sm:px-6">
          <Reveal delay={150}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-400">
              <span>Read every review on our Upwork profile</span>
              <a
                href={links.upworkCeo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-semibold text-white transition hover:border-lilac/50 hover:bg-white/10"
              >
                <UpworkIcon className="w-4 h-4 text-[#14a800]" />
                View All Reviews on Upwork
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
