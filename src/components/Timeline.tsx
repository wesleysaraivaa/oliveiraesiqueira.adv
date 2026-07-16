import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, RevealWords } from "@/components/Reveal";

const TIMELINE = [
  {
    year: "2018",
    title: "Fundação",
    body: "Kelziane Oliveira e Samuel Siqueira abrem o escritório em Ubajara/CE, com foco em advocacia de proximidade.",
  },
  {
    year: "2020",
    title: "Consolidação no contencioso",
    body: "Atuação criminal e cível se firmam como pilares, com vitórias relevantes em segunda instância.",
  },
  {
    year: "2022",
    title: "Expansão previdenciária",
    body: "Núcleo dedicado a benefícios do INSS atende toda a região da Ibiapaba.",
  },
  {
    year: "2024",
    title: "Modelo boutique",
    body: "Adoção formal do modelo boutique: número limitado de casos por sócio, atendimento direto e estratégia personalizada.",
  },
  {
    year: "2026",
    title: "Hoje",
    body: "Mais de 300 casos conduzidos, presença consolidada no Ceará e clientes recorrentes em seis áreas de prática.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="mb-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
        <Reveal className="lg:col-span-3 eyebrow text-navy-soft">Linha do tempo</Reveal>
        <h3 className="lg:col-span-9 font-display text-4xl sm:text-5xl tracking-[-0.04em] text-ink leading-[1.02]">
          <RevealWords text="De um escritório recém-aberto a referência" />{" "}
          <span className="font-serif italic font-normal text-navy">
            <RevealWords text="regional" delay={0.3} />
          </span>
          .
        </h3>
      </div>

      <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="hidden lg:block lg:col-span-3" />
        <div className="lg:col-span-9 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy/15" aria-hidden />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-accent origin-top"
            aria-hidden
          />
          <ol className="space-y-10 sm:space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-2 size-[15px] rounded-full border-2 border-accent bg-paper"
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                  <span className="font-mono text-xs tracking-[0.2em] text-navy-soft uppercase">
                    {item.year}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl tracking-[-0.02em] text-ink">
                    {item.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                  {item.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
