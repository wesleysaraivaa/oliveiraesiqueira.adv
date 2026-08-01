import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Recebi do escritório o que nenhum outro me ofereceu: tempo, escuta e uma estratégia que considerou a minha vida inteira — não só o processo.",
    name: "M. Carvalho",
    meta: "Cliente · matéria previdenciária",
  },
  {
    quote:
      "Em um momento delicado da minha família, encontrei acolhimento e uma condução firme. Cada etapa foi explicada com clareza e respeito.",
    name: "R. Almeida",
    meta: "Cliente · direito de família",
  },
  {
    quote:
      "Profissionalismo raro. A defesa foi construída com cuidado técnico e sensibilidade humana — o resultado veio, mas o processo já havia sido justo.",
    name: "J. Nogueira",
    meta: "Cliente · matéria criminal",
  },
  {
    quote:
      "Fui tratado como pessoa, não como número. A estratégia era clara, o retorno era rápido e a postura, sempre íntegra.",
    name: "A. Ribeiro",
    meta: "Cliente · matéria trabalhista",
  },
];

export function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (n: number) => setI((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[i];

  return (
    <div ref={ref} className="relative">
      <div
        className="relative overflow-hidden bg-ink text-ivory px-8 py-20 sm:px-16 sm:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.span
          aria-hidden
          style={{ y: markY }}
          className="pointer-events-none absolute -top-10 -left-4 sm:left-6 font-serif italic text-[18rem] sm:text-[24rem] leading-none text-accent/8 select-none"
        >
          “
        </motion.span>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(500px circle at 15% 20%, hsla(38, 55%, 52%, 0.12), transparent 60%)",
              "radial-gradient(500px circle at 85% 80%, hsla(38, 55%, 52%, 0.12), transparent 60%)",
              "radial-gradient(500px circle at 15% 20%, hsla(38, 55%, 52%, 0.12), transparent 60%)",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-6">
            <Reveal className="eyebrow text-ivory/60">Depoimentos</Reveal>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ivory/50">
              {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </div>
          </div>
          <div className="lg:col-span-9 min-h-70 sm:min-h-60">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.01em] text-balance mb-10">
                {current.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <span className="block w-12 h-px bg-accent" />
                <div>
                  <div className="font-mono text-xs tracking-[0.2em] uppercase text-ivory">
                    {current.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory/50 mt-1">
                    {current.meta}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex gap-3">
                {TESTIMONIALS.map((_, n) => (
                  <button
                    key={n}
                    onClick={() => go(n)}
                    aria-label={`Ir para depoimento ${n + 1}`}
                    className="group relative h-3 w-8 flex items-center"
                  >
                    <span
                      className={`block h-px w-full transition-all ${
                        n === i ? "bg-accent" : "bg-ivory/25 group-hover:bg-ivory/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => go(i - 1)}
                  aria-label="Depoimento anterior"
                  className="font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 border border-ivory/20 hover:border-accent hover:text-accent transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => go(i + 1)}
                  aria-label="Próximo depoimento"
                  className="font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 border border-ivory/20 hover:border-accent hover:text-accent transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
