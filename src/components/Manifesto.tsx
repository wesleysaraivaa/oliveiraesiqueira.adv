import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, RevealWords } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { Testimonial } from "@/components/Testimonial";

const STATS = [
  { n: "7+", label: "anos de atuação" },
  { n: "300+", label: "casos conduzidos" },
  { n: "06", label: "áreas de prática" },
  { n: "Ubajara", label: "sede no Ceará" },
];

const PILLARS = [
  {
    k: "Método",
    t: "Estratégia antes do processo",
    d: "Cada caso começa com diagnóstico técnico e leitura realista de cenário. O processo é consequência, não ponto de partida.",
  },
  {
    k: "Postura",
    t: "Presença real, não terceirizada",
    d: "Quem atende é quem advoga. Sem call center, sem intermediários, sem terceirização da relação com o cliente.",
  },
  {
    k: "Compromisso",
    t: "Decisões que duram décadas",
    d: "Trabalhamos para consolidar resultados que protegem patrimônio, liberdade e reputação muito além do trânsito em julgado.",
  },
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} id="sobre" className="relative py-32 sm:py-40 overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 font-display text-[28rem] leading-none tracking-[-0.06em] text-navy/4 select-none"
      >
        2018
      </motion.div>
      <div className="container-narrow w-full relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <Reveal className="lg:col-span-3 eyebrow text-navy-soft">01 — Quem somos</Reveal>
          <h2 className="lg:col-span-9 display-lg text-balance text-ink">
            <RevealWords text="Defendemos pessoas e empresas com" />{" "}
            <span className="font-serif italic font-normal text-navy">
              <RevealWords text="clareza" delay={0.4} />
            </span>
            , <RevealWords text="estratégia e presença real." delay={0.5} />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-24">
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="font-mono text-xs tracking-[0.2em] text-navy-soft uppercase">Manifesto</p>
          </Reveal>
          <div className="lg:col-span-9 grid sm:grid-cols-2 gap-10 lg:gap-14">
            <Reveal delay={0.15}>
              <p className="text-ink text-lg leading-relaxed">
                Oliveira &amp; Siqueira é um escritório{" "}
                <em className="font-serif italic">boutique</em> em Ubajara, no Ceará. Trabalhamos
                com um número limitado de casos para garantir profundidade intelectual e estratégia
                sob medida — o oposto da advocacia de balcão.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Não buscamos apenas a vitória processual. Consolidamos decisões que protegem o
                patrimônio, a liberdade e a reputação dos nossos clientes por décadas. Cada parecer,
                cada audiência e cada acordo é assinado pelos sócios — sem terceirização, sem
                atalhos.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-navy/15 hairline mb-24">
          {PILLARS.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.1} className="bg-paper p-10 lg:p-12 pillar-card">
              <p className="font-mono text-[10px] tracking-[0.25em] text-navy-soft uppercase mb-6">
                {String(i + 1).padStart(2, "0")} · {p.k}
              </p>
              <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.03em] text-ink mb-4 leading-[1.05]">
                {p.t}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 hairline pt-10 mb-24">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="font-display text-5xl lg:text-6xl tracking-[-0.04em] gold-gradient mb-2 w-fit">
                {s.n}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-navy-soft uppercase">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <Timeline />
        <Testimonial />
      </div>
    </section>
  );
}
