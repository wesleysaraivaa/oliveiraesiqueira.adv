import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { wa } from "@/lib/constants";

const AREAS = [
  {
    n: "01",
    title: "Civil",
    body: "Patrimônio, contratos e sucessões.",
    waMsg:
      "Olá, gostaria de uma consulta na área de Direito Civil com o escritório Oliveira & Siqueira.",
  },
  {
    n: "02",
    title: "Criminal",
    body: "Defesa técnica em todas as instâncias.",
    waMsg: "Olá, preciso de orientação em matéria criminal com o escritório Oliveira & Siqueira.",
  },
  {
    n: "03",
    title: "Família",
    body: "Divórcio, guarda, pensão e inventário.",
    waMsg: "Olá, preciso de orientação em Direito de Família com o escritório Oliveira & Siqueira.",
  },
  {
    n: "04",
    title: "Trabalhista",
    body: "Verbas, acordos e consultoria preventiva.",
    waMsg: "Olá, gostaria de uma consulta trabalhista com o escritório Oliveira & Siqueira.",
  },
  {
    n: "05",
    title: "Previdenciário",
    body: "Aposentadorias, auxílios e revisões.",
    waMsg: "Olá, gostaria de tirar dúvidas previdenciárias com o escritório Oliveira & Siqueira.",
  },
  {
    n: "06",
    title: "Consumidor",
    body: "Bancos, planos de saúde e cobranças indevidas.",
    waMsg:
      "Olá, tenho um problema de consumo e gostaria do auxílio do escritório Oliveira & Siqueira.",
  },
];

export function Areas() {
  return (
    <section id="areas" className="py-32 sm:py-40 hairline-bottom bg-paper">
      <div className="container-narrow">
        <Reveal className="eyebrow text-navy-soft mb-16">02 — Áreas de atuação</Reveal>
        <ul className="hairline">
          {AREAS.map((area) => (
            <AreaRow key={area.n} area={area} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function AreaRow({ area }: { area: (typeof AREAS)[number] }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={wa(area.waMsg)}
        target="_blank"
        rel="noreferrer"
        className="group relative block py-8 sm:py-12 hairline-bottom overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        <div className="relative grid grid-cols-12 items-baseline gap-4 sm:gap-8 transition-colors duration-500">
          <span className="col-span-2 sm:col-span-1 eyebrow text-navy-soft group-hover:text-accent transition-colors duration-500">
            {area.n}
          </span>
          <h3 className="col-span-10 sm:col-span-5 font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.04em] text-ink transition-all duration-500 group-hover:translate-x-3 group-hover:text-navy">
            {area.title}
          </h3>
          <p className="hidden sm:block sm:col-span-5 text-muted-foreground text-base leading-relaxed transition-colors duration-500 group-hover:text-ink/80">
            {area.body}
          </p>
          <span className="hidden sm:flex sm:col-span-1 justify-end text-2xl text-navy-soft transition-all duration-500 group-hover:translate-x-3 group-hover:text-accent">
            →
          </span>
        </div>
      </a>
    </motion.li>
  );
}
