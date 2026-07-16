import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import attorneySamuel from "@/assets/attorney-samuel.jpg";
import attorneyKelziane from "@/assets/attorney-kelziane.jpg";
import { Reveal, RevealWords } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { wa } from "@/lib/constants";

const ATTORNEYS = [
  {
    name: "Kelziane Oliveira",
    oab: "OAB/CE 52.128",
    role: "Sócia Fundadora — Família & Previdenciário",
    bio: "Especialista em Direito de Família, Sucessões e demandas previdenciárias junto ao INSS.",
    image: attorneyKelziane,
    waMsg: "Olá Dra. Kelziane, gostaria de uma consulta.",
  },
  {
    name: "Samuel Siqueira",
    oab: "OAB/CE 56.379",
    role: "Sócio Fundador — Criminal & Civil",
    bio: "Atuação em defesas criminais complexas, demandas patrimoniais e estratégia processual cível.",
    image: attorneySamuel,
    waMsg: "Olá Dr. Samuel, gostaria de uma consulta.",
  },
];

export function Team() {
  return (
    <section id="equipe" className="pt-20 sm:pt-28">
      <div className="container-narrow pb-6 sm:pb-10">
        <Reveal className="eyebrow text-navy-soft">03 — Equipe</Reveal>
      </div>
      {ATTORNEYS.map((a, i) => (
        <AttorneyRow key={a.name} attorney={a} reverse={i % 2 === 1} divider={i > 0} />
      ))}
    </section>
  );
}

function AttorneyRow({
  attorney,
  reverse,
  divider,
}: {
  attorney: (typeof ATTORNEYS)[number];
  reverse: boolean;
  divider: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <article className={`pb-20 sm:pb-28 ${divider ? "hairline pt-20 sm:pt-28" : "pt-4 sm:pt-6"}`}>
      <div className="container-narrow">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-6">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              whileHover={{ scale: 1.025 }}
              className="aspect-4/5 overflow-hidden bg-ivory cursor-pointer"
            >
              <motion.img
                src={attorney.image}
                alt={`Retrato de ${attorney.name}`}
                loading="lazy"
                decoding="async"
                style={{ y: imgY, scale: imgScale }}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <Reveal className="font-mono text-xs text-navy-soft tracking-[0.2em] mb-6">
              {attorney.oab}
            </Reveal>
            <h3 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-[-0.04em] text-ink mb-6 overflow-hidden">
              <RevealWords text={attorney.name} />
            </h3>
            <Reveal delay={0.15} className="font-serif italic text-lg text-navy mb-8">
              {attorney.role}
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-10 text-base">
                {attorney.bio}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <Magnetic>
                <a
                  href={wa(attorney.waMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-medium text-ink border-b border-ink/30 hover:border-accent hover:text-accent pb-1 transition-colors duration-300"
                >
                  Conversar no WhatsApp <span>→</span>
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
