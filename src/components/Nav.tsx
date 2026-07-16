import { motion, useScroll, useTransform } from "motion/react";
import { Magnetic } from "@/components/Magnetic";
import { WHATSAPP } from "@/lib/constants";

const NAV_LINKS = [
  ["Sobre", "#sobre"],
  ["Áreas", "#areas"],
  ["Equipe", "#equipe"],
  ["Contato", "#contato"],
] as const;

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(245,245,243,0)", "rgba(245,245,243,0.85)"]);
  const border = useTransform(scrollY, [0, 200], ["rgba(30,42,68,0)", "rgba(30,42,68,0.12)"]);
  const color = useTransform(scrollY, [0, 200], ["rgb(245,245,243)", "rgb(24,30,49)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border, color, backdropFilter: "blur(12px)" }}
      className="fixed top-0 inset-x-0 z-40 border-b"
    >
      <div className="container-narrow flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-3 text-sm font-medium tracking-tight">
          <img
            src="/assets/LOGO.jpg"
            alt="Logo Oliveira & Siqueira"
            className="h-8 w-8 object-cover rounded-sm border border-(--navy)/10"
          />
          <span>
            Oliveira <span className="opacity-50">&amp;</span> Siqueira
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
        <Magnetic>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-accent transition-colors duration-300"
          >
            WhatsApp →
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
