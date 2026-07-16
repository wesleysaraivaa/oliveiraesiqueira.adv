import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { AtmosphericLayer } from "@/components/AtmosphericBackground";
import { Magnetic } from "@/components/Magnetic";
import heroPhoto from "@/assets/HERO.png";
import { wa } from "@/lib/constants";

const WHATSAPP_URL = wa("Olá, gostaria de conversar com a Oliveira & Siqueira Advocacia.");

const useFinePointer = () => {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(pointer: fine)");
    const u = () => setFine(m.matches);
    u();
    m.addEventListener("change", u);
    return () => m.removeEventListener("change", u);
  }, []);
  return fine;
};

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();

  const hx = useMotionValue(0);
  const hy = useMotionValue(0);
  const hxs = useSpring(hx, { stiffness: 120, damping: 22, mass: 0.6 });
  const hys = useSpring(hy, { stiffness: 120, damping: 22, mass: 0.6 });
  const imgX = useTransform(hxs, (v) => v * -24);
  const imgY = useTransform(hys, (v) => v * -24);
  const txtX = useTransform(hxs, (v) => v * 10);
  const txtY = useTransform(hys, (v) => v * 10);

  useEffect(() => {
    if (!fine || !heroRef.current) return;
    const el = heroRef.current;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      hx.set((e.clientX - r.left) / r.width - 0.5);
      hy.set((e.clientY - r.top) / r.height - 0.5);
    };
    const leave = () => {
      hx.set(0);
      hy.set(0);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [fine, hx, hy]);

  return (
    <section id="top" ref={heroRef} className="relative min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          style={{ y: imgY }}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1.01, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 select-none"
        >
          <img
            src={heroPhoto}
            alt="Escritório"
            className="w-full h-full object-cover img-editorial opacity-48"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/65 to-ink/35" />
        <div className="absolute inset-0 vignette-soft" />
        <AtmosphericLayer />
      </div>

      <div className="hidden lg:block absolute top-32 right-16 z-20 text-right text-[10px] tracking-[0.32em] uppercase text-ink-foreground/55 leading-loose">
        <div>Reg. OAB/CE 56.379 · 52.128</div>
        <div>Ubajara — Ceará — Brasil</div>
        <div className="text-accent">MMXVIII — Presente</div>
      </div>

      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 items-center gap-4 -rotate-90 origin-left text-[10px] tracking-[0.5em] uppercase text-ink-foreground/40">
        <span className="h-px w-12 bg-accent" />
        Advocacia Estratégica
      </div>

      <motion.div
        className="relative z-10 container-narrow pt-32 sm:pt-40 pb-20 sm:pb-24 lg:pt-56 lg:pb-32"
        style={{ x: txtX, y: txtY }}
      >
        <p className="eyebrow text-accent mb-6 xs3:mb-10">— Direito · Estratégia · Presença</p>
        <h1 className="display text-ink-foreground text-[40px] xs2:text-[48px] xs3:text-[58px] sm:text-[96px] lg:text-[148px] xl:text-[176px] leading-[0.92] sm:leading-[0.88] tracking-[-0.03em] wrap-anywhere">
          Defesa
          <span className="text-ink-foreground/45"> de</span>
          <br />
          <span className="italic gold-gradient">quem confia</span>
          <br />
          <span className="text-ink-foreground/45">em </span>você.
        </h1>

        <div className="mt-10 xs3:mt-12 sm:mt-16 grid grid-cols-12 gap-6 sm:gap-8 items-end">
          <p className="col-span-12 lg:col-span-5 text-[15px] xs3:text-base lg:text-lg text-ink-foreground/70 font-light leading-relaxed">
            Banca dedicada a causas previdenciárias, de família e cíveis — com escuta atenta,
            estratégia técnica e a sobriedade que cada processo exige.
          </p>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-center">
            <Magnetic strength={0.35}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group inline-flex w-full xs3:w-auto items-center justify-center xs3:justify-start gap-3 xs3:gap-4 bg-accent text-accent-foreground px-7 xs2:px-8 sm:px-10 py-5 sm:py-6 text-[11.5px] font-medium uppercase tracking-[0.26em] xs3:tracking-[0.32em] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:bg-ink-foreground"
              >
                Agendar consulta
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ink-foreground/40 flex flex-col items-center gap-3">
        <span>Desça</span>
        <span className="h-10 w-px bg-ink-foreground/30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
