import { ArrowRight, Mail, MapPin } from "lucide-react";
import foot from "../assets/foot.png";
import { company, links } from "@/data/site";
import { UpworkIcon } from "./SocialIcons";

const contactItems = [
  { label: "Email", value: company.email, href: `mailto:${company.email}`, Icon: Mail },
  { label: "Office", value: company.address, Icon: MapPin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 sm:px-6 pt-20 sm:pt-28 pb-16">
      <div className="relative mx-auto max-w-6xl rounded-[2rem] overflow-hidden border border-white/10">
        <img
          src={foot}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_70%] opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/40 to-ink/90" />

        <div className="relative px-5 py-14 sm:px-12 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
            Let's build something that lasts.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-300 sm:text-lg text-pretty">
            Tell us about your presale, token, staking platform or DApp. We'll reply with a clear plan,
            timeline and quote — usually within one business day.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`mailto:${company.email}?subject=New%20Web3%20Project%20Inquiry`}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-lilac to-iris px-6 py-3.5 font-semibold text-[#1a1333] shadow-[0_0_32px_rgba(195,167,244,0.4)] transition hover:brightness-110"
            >
              Email Your Project Brief
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={links.upworkAgency}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#14a800] px-6 py-3.5 font-semibold text-white transition hover:bg-[#108a00]"
            >
              <UpworkIcon className="w-4 h-4" />
              Hire Us on Upwork
            </a>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 text-left">
            {contactItems.map((item) => {
              const { label, value, href, Icon } = item;
              const body = (
                <>
                  <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-lilac/15 text-lilac">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">{label}</span>
                    <span className="block text-sm font-medium text-white break-words">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="glass flex h-full items-center gap-3 rounded-2xl p-4 transition hover:border-lilac/40">
                      {body}
                    </a>
                  ) : (
                    <div className="glass flex h-full items-center gap-3 rounded-2xl p-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
