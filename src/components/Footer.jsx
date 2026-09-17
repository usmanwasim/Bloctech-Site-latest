import { company, links, navLinks } from "@/data/site";
import { Logo } from "./Navbar";
import SocialIcons from "./SocialIcons";

const serviceLinks = [
  "Multichain Presale",
  "Tokenization",
  "Staking Platforms",
  "Smart Contracts",
  "NFT Solutions",
  "DEX & CEX",
];

const profileLinks = [
  { label: "Upwork Agency", href: links.upworkAgency },
  { label: "CEO on Upwork", href: links.upworkCeo },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Instagram", href: links.instagram },
  { label: "Careers (Fitco)", href: links.fitco },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 pt-14 pb-8 text-sm">
      <div className="mx-auto max-w-6xl grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-slate-400 leading-relaxed">{company.tagline}</p>
          <SocialIcons />
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2.5 text-slate-400">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="transition hover:text-white">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-slate-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Find Us</h4>
          <ul className="space-y-2.5 text-slate-400">
            {profileLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="break-all transition hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p>Web3 · Blockchain · DeFi · NFT Development</p>
      </div>
    </footer>
  );
}
