import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-icon.png";
import { company, links, navLinks } from "@/data/site";
import { UpworkIcon } from "./SocialIcons";

export function Logo({ className = "" }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid place-items-center w-10 h-10 rounded-xl border border-lilac/25 bg-white/5">
        <span className="absolute inset-0 rounded-xl bg-lilac/20 blur-md" />
        <img src={logo} alt="" className="relative w-8 h-8 object-contain" />
      </span>
      <span className="font-display text-lg sm:text-xl font-bold text-white leading-none">
        BlocTech
        <span className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] text-lilac uppercase mt-0.5">
          Solutions
        </span>
      </span>
      <span className="sr-only">{company.name}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
          scrolled || open
            ? "bg-[#0b0a16]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
            : "border border-transparent"
        }`}
      >
        <Logo />

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative py-1 transition hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-lilac after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={links.upworkAgency}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-lilac to-iris px-4 py-2.5 text-sm font-semibold text-[#1a1333] shadow-[0_0_24px_rgba(195,167,244,0.35)] transition hover:brightness-110"
          >
            <UpworkIcon className="w-4 h-4" />
            Hire on Upwork
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden mx-auto max-w-6xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-[480px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl bg-[#0b0a16]/95 backdrop-blur-xl border border-white/10 p-4">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={links.upworkAgency}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-lilac to-iris px-4 py-3 text-sm font-semibold text-[#1a1333]"
          >
            <UpworkIcon className="w-4 h-4" />
            Hire us on Upwork
          </a>
        </div>
      </div>
    </header>
  );
}
