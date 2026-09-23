import { ArrowUpRight, Linkedin } from "lucide-react";
import ceo from "../assets/ceo.png";
import { company, links } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { UpworkIcon } from "./SocialIcons";

const profiles = [
  {
    title: "Upwork Agency",
    text: "Hire the full BlocTech team with Upwork's payment protection.",
    href: links.upworkAgency,
    Icon: UpworkIcon,
    color: "text-[#14a800]",
  },
  {
    title: "LinkedIn",
    text: "6,400+ followers. Company news, launches and hiring.",
    href: links.linkedin,
    Icon: Linkedin,
    color: "text-[#4ca3ff]",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
        <SectionHeading
          eyebrow="About Us"
          title="A Web3 team trusted by founders worldwide"
          subtitle={`${company.name} is a blockchain software company founded in ${company.founded}, helping product companies and non-IT businesses build reliable Web3 solutions.`}
        />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-5">
          {/* Founder card */}
          <Reveal from="left" className="lg:col-span-3 rounded-3xl p-px bg-linear-to-br from-lilac/50 via-white/5 to-iris/40">
            <div className="h-full rounded-3xl bg-linear-to-br from-[#1b1933] to-[#0f0e1d] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="relative w-24 h-24 shrink-0">
                  <span className="absolute -inset-1.5 rounded-full bg-linear-to-br from-lilac to-iris blur-md opacity-70" />
                  <span className="absolute inset-0 rounded-full p-[2px] bg-linear-to-br from-lilac via-iris to-[#5b4bd6]">
                    <img
                      src={ceo}
                      alt="Muhammad Suleman, Founder and CEO of BlocTech Solutions"
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-lilac">Founder &amp; CEO</p>
                  <h3 className="font-display mt-1 text-2xl font-bold text-white">Muhammad Suleman</h3>
                  <p className="mt-1 text-sm text-slate-400">Crypto Consultant · Blockchain Specialist · DeFi &amp; Smart Contract Expert</p>
                </div>
              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">
                A dedicated Crypto Consultant with over 8 years of experience in the blockchain and
                cryptocurrency industry, providing comprehensive consulting services that help
                businesses navigate the complexities of the crypto world. His expertise includes DeFi,
                smart contracts, blockchain development and crypto asset management.
              </p>

              <a
                href={links.upworkCeo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#14a800] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#108a00]"
              >
                <UpworkIcon className="w-4 h-4" />
                View CEO's Upwork Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Profile links */}
          <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {profiles.map((profile, i) => {
              const { title, text, href, color, Icon } = profile;
              return (
              <Reveal key={title} from="right" delay={i * 120} className="h-full">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex h-full flex-col rounded-3xl p-6 transition hover:border-lilac/40 hover:-translate-y-1 sheen-host"
              >
                <div className="flex items-center justify-between">
                  <span className={`grid place-items-center w-11 h-11 rounded-xl bg-white/5 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 transition group-hover:text-lilac group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h4 className="font-display mt-4 text-lg font-semibold text-white">{title}</h4>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </a>
              </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
