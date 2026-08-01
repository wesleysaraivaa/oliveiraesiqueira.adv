import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { W as WHATSAPP, G as GMAPS_URL, w as wa, O as OFFICE_COORDS, a as OFFICE_ADDRESS } from "./router-TARqNEfJ.mjs";
import { u as useScroll, a as useTransform, b as useMotionValue, c as useSpring } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SmoothScroll() {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced ? null : new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    if (lenis) window.__lenis = lenis;
    let rafId = 0;
    if (lenis) {
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }
    const scrollToHash = (hash) => {
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    const onClick = (e) => {
      const target = e.target;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      e.preventDefault();
      scrollToHash(href);
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onClick);
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 100);
    }
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);
  return null;
}
const AtmosphericLayer = ({
  glow = true,
  grid = true,
  texture = true
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    glow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "atmospheric-glow-forest", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "atmospheric-glow-gold", "aria-hidden": true })
    ] }),
    texture && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "atmospheric-texture", "aria-hidden": true }),
    grid && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "atmospheric-grid", "aria-hidden": true })
  ] });
};
function Magnetic({
  children,
  strength = 0.35,
  className
}) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 220, mass: 0.3 });
  const sy = useSpring(y, { damping: 18, stiffness: 220, mass: 0.3 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      className,
      style: { x: sx, y: sy, display: "inline-block" },
      onMouseMove: (e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      },
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      children
    }
  );
}
const heroPhoto = "/assets/HERO-BEnJBmGS.png";
const WHATSAPP_URL = wa("Olá, gostaria de conversar com a Oliveira & Siqueira Advocacia.");
const useFinePointer = () => {
  const [fine, setFine] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const m = window.matchMedia("(pointer: fine)");
    const u = () => setFine(m.matches);
    u();
    m.addEventListener("change", u);
    return () => m.removeEventListener("change", u);
  }, []);
  return fine;
};
const Hero = () => {
  const heroRef = reactExports.useRef(null);
  const fine = useFinePointer();
  const hx = useMotionValue(0);
  const hy = useMotionValue(0);
  const hxs = useSpring(hx, { stiffness: 120, damping: 22, mass: 0.6 });
  const hys = useSpring(hy, { stiffness: 120, damping: 22, mass: 0.6 });
  useTransform(hxs, (v) => v * -24);
  const imgY = useTransform(hys, (v) => v * -24);
  const txtX = useTransform(hxs, (v) => v * 10);
  const txtY = useTransform(hys, (v) => v * 10);
  reactExports.useEffect(() => {
    if (!fine || !heroRef.current) return;
    const el = heroRef.current;
    const move = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", ref: heroRef, className: "relative min-h-screen overflow-hidden bg-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          style: { y: imgY },
          initial: { scale: 1.06, opacity: 0 },
          animate: { scale: 1.01, opacity: 1 },
          transition: { duration: 2.4, ease: [0.16, 1, 0.3, 1] },
          className: "absolute inset-0 select-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroPhoto,
              alt: "Escritório",
              className: "w-full h-full object-cover img-editorial opacity-48"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-ink via-ink/65 to-ink/35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 vignette-soft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AtmosphericLayer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block absolute top-32 right-16 z-20 text-right text-[10px] tracking-[0.32em] uppercase text-ink-foreground/55 leading-loose", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Reg. OAB/CE 56.379 · 52.128" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Ubajara — Ceará — Brasil" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent", children: "MMXVIII — Presente" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 items-center gap-4 -rotate-90 origin-left text-[10px] tracking-[0.5em] uppercase text-ink-foreground/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-accent" }),
      "Advocacia Estratégica"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "relative z-10 container-narrow pt-32 sm:pt-40 pb-20 sm:pb-24 lg:pt-56 lg:pb-32",
        style: { x: txtX, y: txtY },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-accent mb-6 xs3:mb-10", children: "— Direito · Estratégia · Presença" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display text-ink-foreground text-[40px] xs2:text-[48px] xs3:text-[58px] sm:text-[96px] lg:text-[148px] xl:text-[176px] leading-[0.92] sm:leading-[0.88] tracking-[-0.03em] wrap-anywhere", children: [
            "Defesa",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink-foreground/45", children: " de" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-gradient", children: "quem confia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink-foreground/45", children: "em " }),
            "você."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 xs3:mt-12 sm:mt-16 grid grid-cols-12 gap-6 sm:gap-8 items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-12 lg:col-span-5 text-[15px] xs3:text-base lg:text-lg text-ink-foreground/70 font-light leading-relaxed", children: "Banca dedicada a causas previdenciárias, de família e cíveis — com escuta atenta, estratégia técnica e a sobriedade que cada processo exige." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-4 lg:col-start-9 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.35, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-hover": true,
                className: "group inline-flex w-full xs3:w-auto items-center justify-center xs3:justify-start gap-3 xs3:gap-4 bg-accent text-accent-foreground px-7 xs2:px-8 sm:px-10 py-5 sm:py-6 text-[11.5px] font-medium uppercase tracking-[0.26em] xs3:tracking-[0.32em] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:bg-ink-foreground",
                children: [
                  "Agendar consulta",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-500 group-hover:translate-x-1", children: "→" })
                ]
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ink-foreground/40 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-px bg-ink-foreground/30 animate-pulse" })
    ] })
  ] });
};
const NAV_LINKS = [
  ["Sobre", "#sobre"],
  ["Áreas", "#areas"],
  ["Equipe", "#equipe"],
  ["Contato", "#contato"]
];
function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(245,245,243,0)", "rgba(245,245,243,0.85)"]);
  const border = useTransform(scrollY, [0, 200], ["rgba(30,42,68,0)", "rgba(30,42,68,0.12)"]);
  const color = useTransform(scrollY, [0, 200], ["rgb(245,245,243)", "rgb(24,30,49)"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      style: { backgroundColor: bg, borderColor: border, color, backdropFilter: "blur(12px)" },
      className: "fixed top-0 inset-x-0 z-40 border-b",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-narrow flex items-center justify-between h-16 sm:h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3 text-sm font-medium tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/LOGO.jpg",
              alt: "Logo Oliveira & Siqueira",
              className: "h-8 w-8 object-cover rounded-sm border border-(--navy)/10"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Oliveira ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "&" }),
            " Siqueira"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: NAV_LINKS.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            className: "opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300",
            children: label
          },
          href
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: WHATSAPP,
            target: "_blank",
            rel: "noreferrer",
            className: "text-sm font-medium hover:text-accent transition-colors duration-300",
            children: "WhatsApp →"
          }
        ) })
      ] })
    }
  );
}
function Reveal({
  children,
  delay = 0,
  y = 24,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
      children
    }
  );
}
function RevealWords({
  text,
  className,
  delay = 0
}) {
  const words = text.split(" ");
  const containerVariants = {
    hidden: {},
    show: {}
  };
  const wordVariants = {
    hidden: { y: "110%" },
    show: (custom) => ({
      y: "0%",
      transition: {
        duration: 0.9,
        delay: delay + custom * 0.06,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className,
      style: { display: "inline-block" },
      variants: containerVariants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.15 },
      children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          style: { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { style: { display: "inline-block" }, variants: wordVariants, custom: i, children: [
            w,
            i < words.length - 1 ? " " : ""
          ] })
        },
        i
      ))
    }
  );
}
const TIMELINE = [
  {
    year: "2018",
    title: "Fundação",
    body: "Kelziane Oliveira e Samuel Siqueira abrem o escritório em Ubajara/CE, com foco em advocacia de proximidade."
  },
  {
    year: "2020",
    title: "Consolidação no contencioso",
    body: "Atuação criminal e cível se firmam como pilares, com vitórias relevantes em segunda instância."
  },
  {
    year: "2022",
    title: "Expansão previdenciária",
    body: "Núcleo dedicado a benefícios do INSS atende toda a região da Ibiapaba."
  },
  {
    year: "2024",
    title: "Modelo boutique",
    body: "Adoção formal do modelo boutique: número limitado de casos por sócio, atendimento direto e estratégia personalizada."
  },
  {
    year: "2026",
    title: "Hoje",
    body: "Mais de 300 casos conduzidos, presença consolidada no Ceará e clientes recorrentes em seis áreas de prática."
  }
];
function Timeline() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "mb-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-3 eyebrow text-navy-soft", children: "Linha do tempo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "lg:col-span-9 font-display text-4xl sm:text-5xl tracking-[-0.04em] text-ink leading-[1.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "De um escritório recém-aberto a referência" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic font-normal text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "regional", delay: 0.3 }) }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-12 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block lg:col-span-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[7px] top-2 bottom-2 w-px bg-navy/15", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { scaleY: lineScale },
            className: "absolute left-[7px] top-2 bottom-2 w-px bg-accent origin-top",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-10 sm:space-y-12", children: TIMELINE.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-15% 0px" },
            transition: { duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
            className: "relative pl-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": true,
                  className: "absolute left-0 top-2 size-[15px] rounded-full border-2 border-accent bg-paper"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs tracking-[0.2em] text-navy-soft uppercase", children: item.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl sm:text-2xl tracking-[-0.02em] text-ink", children: item.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl", children: item.body })
            ]
          },
          item.year
        )) })
      ] })
    ] })
  ] });
}
const TESTIMONIALS = [
  {
    quote: "Recebi do escritório o que nenhum outro me ofereceu: tempo, escuta e uma estratégia que considerou a minha vida inteira — não só o processo.",
    name: "M. Carvalho",
    meta: "Cliente · matéria previdenciária"
  },
  {
    quote: "Em um momento delicado da minha família, encontrei acolhimento e uma condução firme. Cada etapa foi explicada com clareza e respeito.",
    name: "R. Almeida",
    meta: "Cliente · direito de família"
  },
  {
    quote: "Profissionalismo raro. A defesa foi construída com cuidado técnico e sensibilidade humana — o resultado veio, mas o processo já havia sido justo.",
    name: "J. Nogueira",
    meta: "Cliente · matéria criminal"
  },
  {
    quote: "Fui tratado como pessoa, não como número. A estratégia era clara, o retorno era rápido e a postura, sempre íntegra.",
    name: "A. Ribeiro",
    meta: "Cliente · matéria trabalhista"
  }
];
function Testimonial() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const [i, setI] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % TESTIMONIALS.length);
    }, 7e3);
    return () => window.clearInterval(id);
  }, [paused]);
  const go = (n) => setI((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative overflow-hidden bg-ink text-ivory px-8 py-20 sm:px-16 sm:py-32",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            "aria-hidden": true,
            style: { y: markY },
            className: "pointer-events-none absolute -top-10 -left-4 sm:left-6 font-serif italic text-[18rem] sm:text-[24rem] leading-none text-accent/8 select-none",
            children: "“"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-40",
            animate: {
              background: [
                "radial-gradient(500px circle at 15% 20%, hsla(38, 55%, 52%, 0.12), transparent 60%)",
                "radial-gradient(500px circle at 85% 80%, hsla(38, 55%, 52%, 0.12), transparent 60%)",
                "radial-gradient(500px circle at 15% 20%, hsla(38, 55%, 52%, 0.12), transparent 60%)"
              ]
            },
            transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "eyebrow text-ivory/60", children: "Depoimentos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] tracking-[0.25em] uppercase text-ivory/50", children: [
              String(i + 1).padStart(2, "0"),
              " / ",
              String(TESTIMONIALS.length).padStart(2, "0")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9 min-h-[280px] sm:min-h-[240px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.01em] text-balance mb-10", children: current.quote }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-12 h-px bg-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs tracking-[0.2em] uppercase text-ivory", children: current.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] uppercase text-ivory/50 mt-1", children: current.meta })
                    ] })
                  ] })
                ]
              },
              i
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: TESTIMONIALS.map((_, n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => go(n),
                  "aria-label": `Ir para depoimento ${n + 1}`,
                  className: "group relative h-3 w-8 flex items-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `block h-px w-full transition-all ${n === i ? "bg-accent" : "bg-ivory/25 group-hover:bg-ivory/60"}`
                    }
                  )
                },
                n
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => go(i - 1),
                    "aria-label": "Depoimento anterior",
                    className: "font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 border border-ivory/20 hover:border-accent hover:text-accent transition-colors",
                    children: "←"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => go(i + 1),
                    "aria-label": "Próximo depoimento",
                    className: "font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 border border-ivory/20 hover:border-accent hover:text-accent transition-colors",
                    children: "→"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ]
    }
  ) });
}
const STATS = [
  { n: "7+", label: "anos de atuação" },
  { n: "300+", label: "casos conduzidos" },
  { n: "06", label: "áreas de prática" },
  { n: "Ubajara", label: "sede no Ceará" }
];
const PILLARS = [
  {
    k: "Método",
    t: "Estratégia antes do processo",
    d: "Cada caso começa com diagnóstico técnico e leitura realista de cenário. O processo é consequência, não ponto de partida."
  },
  {
    k: "Postura",
    t: "Presença real, não terceirizada",
    d: "Quem atende é quem advoga. Sem call center, sem intermediários, sem terceirização da relação com o cliente."
  },
  {
    k: "Compromisso",
    t: "Decisões que duram décadas",
    d: "Trabalhamos para consolidar resultados que protegem patrimônio, liberdade e reputação muito além do trânsito em julgado."
  }
];
function Manifesto() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, id: "sobre", className: "relative py-32 sm:py-40 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { y: bgY },
        "aria-hidden": true,
        className: "pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 font-display text-[28rem] leading-none tracking-[-0.06em] text-navy/4 select-none",
        children: "2018"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-narrow w-full relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-3 eyebrow text-navy-soft", children: "01 — Quem somos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "lg:col-span-9 display-lg text-balance text-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "Defendemos pessoas e empresas com" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic font-normal text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "clareza", delay: 0.4 }) }),
          ", ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "estratégia e presença real.", delay: 0.5 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-16 mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs tracking-[0.2em] text-navy-soft uppercase", children: "Manifesto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9 grid sm:grid-cols-2 gap-10 lg:gap-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ink text-lg leading-relaxed", children: [
            "Oliveira & Siqueira é um escritório",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-serif italic", children: "boutique" }),
            " em Ubajara, no Ceará. Trabalhamos com um número limitado de casos para garantir profundidade intelectual e estratégia sob medida — o oposto da advocacia de balcão."
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Não buscamos apenas a vitória processual. Consolidamos decisões que protegem o patrimônio, a liberdade e a reputação dos nossos clientes por décadas. Cada parecer, cada audiência e cada acordo é assinado pelos sócios — sem terceirização, sem atalhos." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-navy/15 hairline mb-24", children: PILLARS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.1, className: "bg-paper p-10 lg:p-12 pillar-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] tracking-[0.25em] text-navy-soft uppercase mb-6", children: [
          String(i + 1).padStart(2, "0"),
          " · ",
          p.k
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl lg:text-3xl tracking-[-0.03em] text-ink mb-4 leading-[1.05]", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: p.d })
      ] }, p.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 hairline pt-10 mb-24", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.08, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl lg:text-6xl tracking-[-0.04em] gold-gradient mb-2 w-fit", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-[0.2em] text-navy-soft uppercase", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonial, {})
    ] })
  ] });
}
const AREAS = [
  {
    n: "01",
    title: "Civil",
    body: "Patrimônio, contratos e sucessões.",
    waMsg: "Olá, gostaria de uma consulta na área de Direito Civil com o escritório Oliveira & Siqueira."
  },
  {
    n: "02",
    title: "Criminal",
    body: "Defesa técnica em todas as instâncias.",
    waMsg: "Olá, preciso de orientação em matéria criminal com o escritório Oliveira & Siqueira."
  },
  {
    n: "03",
    title: "Família",
    body: "Divórcio, guarda, pensão e inventário.",
    waMsg: "Olá, preciso de orientação em Direito de Família com o escritório Oliveira & Siqueira."
  },
  {
    n: "04",
    title: "Trabalhista",
    body: "Verbas, acordos e consultoria preventiva.",
    waMsg: "Olá, gostaria de uma consulta trabalhista com o escritório Oliveira & Siqueira."
  },
  {
    n: "05",
    title: "Previdenciário",
    body: "Aposentadorias, auxílios e revisões.",
    waMsg: "Olá, gostaria de tirar dúvidas previdenciárias com o escritório Oliveira & Siqueira."
  },
  {
    n: "06",
    title: "Consumidor",
    body: "Bancos, planos de saúde e cobranças indevidas.",
    waMsg: "Olá, tenho um problema de consumo e gostaria do auxílio do escritório Oliveira & Siqueira."
  }
];
function Areas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "areas", className: "py-32 sm:py-40 hairline-bottom bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-narrow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "eyebrow text-navy-soft mb-16", children: "02 — Áreas de atuação" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hairline", children: AREAS.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(AreaRow, { area }, area.n)) })
  ] }) });
}
function AreaRow({ area }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.li,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10% 0px" },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: wa(area.waMsg),
          target: "_blank",
          rel: "noreferrer",
          className: "group relative block py-8 sm:py-12 hairline-bottom overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-12 items-baseline gap-4 sm:gap-8 transition-colors duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 sm:col-span-1 eyebrow text-navy-soft group-hover:text-accent transition-colors duration-500", children: area.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "col-span-10 sm:col-span-5 font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.04em] text-ink transition-all duration-500 group-hover:translate-x-3 group-hover:text-navy", children: area.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden sm:block sm:col-span-5 text-muted-foreground text-base leading-relaxed transition-colors duration-500 group-hover:text-ink/80", children: area.body }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:flex sm:col-span-1 justify-end text-2xl text-navy-soft transition-all duration-500 group-hover:translate-x-3 group-hover:text-accent", children: "→" })
            ] })
          ]
        }
      )
    }
  );
}
const attorneySamuel = "/assets/attorney-samuel-C2wbCBAy.jpg";
const attorneyKelziane = "/assets/attorney-kelziane-DckVSrD8.jpg";
const ATTORNEYS = [
  {
    name: "Kelziane Oliveira",
    oab: "OAB/CE 52.128",
    role: "Sócia Fundadora — Família & Previdenciário",
    bio: "Especialista em Direito de Família, Sucessões e demandas previdenciárias junto ao INSS.",
    image: attorneyKelziane,
    waMsg: "Olá Dra. Kelziane, gostaria de uma consulta."
  },
  {
    name: "Samuel Siqueira",
    oab: "OAB/CE 56.379",
    role: "Sócio Fundador — Criminal & Civil",
    bio: "Atuação em defesas criminais complexas, demandas patrimoniais e estratégia processual cível.",
    image: attorneySamuel,
    waMsg: "Olá Dr. Samuel, gostaria de uma consulta."
  }
];
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "equipe", className: "pt-20 sm:pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-narrow pb-6 sm:pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "eyebrow text-navy-soft", children: "03 — Equipe" }) }),
    ATTORNEYS.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AttorneyRow, { attorney: a, reverse: i % 2 === 1, divider: i > 0 }, a.name))
  ] });
}
function AttorneyRow({
  attorney,
  reverse,
  divider
}) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: `pb-20 sm:pb-28 ${divider ? "hairline pt-20 sm:pt-28" : "pt-4 sm:pt-6"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-narrow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: `grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { clipPath: "inset(100% 0 0 0)" },
            whileInView: { clipPath: "inset(0% 0 0 0)" },
            viewport: { once: true, margin: "-15% 0px" },
            transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] },
            whileHover: { scale: 1.025 },
            className: "aspect-4/5 overflow-hidden bg-ivory cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                src: attorney.image,
                alt: `Retrato de ${attorney.name}`,
                loading: "lazy",
                decoding: "async",
                style: { y: imgY, scale: imgScale },
                className: "w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 lg:pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "font-mono text-xs text-navy-soft tracking-[0.2em] mb-6", children: attorney.oab }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-5xl sm:text-6xl lg:text-7xl tracking-[-0.04em] text-ink mb-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: attorney.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, className: "font-serif italic text-lg text-navy mb-8", children: attorney.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed max-w-md mb-10 text-base", children: attorney.bio }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.35, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: wa(attorney.waMsg),
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-3 text-sm font-medium text-ink border-b border-ink/30 hover:border-accent hover:text-accent pb-1 transition-colors duration-300",
              children: [
                "Conversar no WhatsApp ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
              ]
            }
          ) }) })
        ] })
      ]
    }
  ) }) });
}
const FAQ = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A consulta inicial é uma reunião reservada — presencialmente em Ubajara/CE ou de forma online. — onde escutamos o caso, analisamos documentos preliminares e indicamos os caminhos jurídicos viáveis. Não há compromisso de contratação."
  },
  {
    q: "Atendem clientes fora de Ubajara?",
    a: "Sim. Atendemos clientes em todo o Brasil de forma 100% online, e presencialmente em Ubajara/CE e região. Reuniões podem ser realizadas remotamente quando necessário."
  },
  {
    q: "Como são definidos os honorários?",
    a: "Os honorários são apresentados de forma transparente após o diagnóstico do caso, considerando complexidade, instâncias envolvidas e tempo estimado. Seguimos integralmente a tabela da OAB-CE."
  },
  {
    q: "Em quanto tempo recebo um retorno?",
    a: "Mensagens recebidas pelo WhatsApp em horário comercial são respondidas no mesmo dia. Para urgências, indicamos contato telefônico direto."
  }
];
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "w-full border-b relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-narrow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "py-10 md:py-16 lg:py-20 border-b grid grid-cols-1 md:grid-cols-12 gap-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-numeral absolute top-4 right-6 md:right-12", "aria-hidden": true, children: "§ 05" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "tag-caps text-deep/50 block mb-6", children: "Dúvidas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display leading-none tracking-tight",
            style: { fontSize: "clamp(2.5rem, 5.5vw, 5rem)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "Antes de" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-(--color-highlight)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "conversarmos.", delay: 0.2 }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: FAQ.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: `faq group ${i < FAQ.length - 1 ? "border-b" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "py-10 md:py-12 flex items-center justify-between gap-8 hover:bg-surface/50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-display leading-tight tracking-tight",
            style: { fontSize: "clamp(1.25rem, 2.4vw, 2rem)" },
            children: f.q
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-icon font-display text-3xl md:text-4xl leading-none shrink-0 text-accent", children: "+" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-12 max-w-3xl text-base md:text-lg leading-relaxed text-(--color-deep)", children: f.a }) }) })
    ] }) }, f.q)) })
  ] }) });
}
function AddressMap() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [Comp, setComp] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const [rl, L] = await Promise.all([import("../_libs/react-leaflet.mjs"), import("../_libs/leaflet.mjs").then(function(n) {
        return n.l;
      })]);
      if (cancelled) return;
      const goldPin = L.divIcon({
        className: "",
        html: `
          <div style="position:relative;width:28px;height:28px;">
            <span style="position:absolute;inset:0;border-radius:9999px;background:var(--color-accent);opacity:.25;animation:pulse 2.4s ease-out infinite;"></span>
            <span style="position:absolute;top:6px;left:6px;width:16px;height:16px;border-radius:9999px;background:var(--color-accent);border:2px solid var(--color-ivory);box-shadow:0 4px 12px rgba(15,31,23,.4);"></span>
          </div>
          <style>@keyframes pulse{0%{transform:scale(.6);opacity:.5}100%{transform:scale(2);opacity:0}}</style>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      setComp({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        Marker: rl.Marker,
        Popup: rl.Popup,
        icon: goldPin
      });
      setMounted(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  if (!mounted || !Comp) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "address-map-shell flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.25em] uppercase text-(--ink)/50", children: "Carregando mapa…" }) });
  }
  const { MapContainer, TileLayer, Marker, Popup, icon } = Comp;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "address-map-shell relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MapContainer,
    {
      center: OFFICE_COORDS,
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: false,
      style: { width: "100%", height: "100%" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TileLayer,
          {
            url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
            subdomains: ["a", "b", "c", "d"]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TileLayer,
          {
            url: "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",
            subdomains: ["a", "b", "c", "d"]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Marker, { position: OFFICE_COORDS, icon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popup, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontFamily: "DM Serif Display, serif" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Oliveira & Siqueira" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "Fira Sans, sans-serif", fontSize: "0.75rem" }, children: OFFICE_ADDRESS })
        ] }) }) })
      ]
    }
  ) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contato", className: "w-full border-b relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-numeral absolute top-4 right-6 md:right-12 z-0", "aria-hidden": true, children: "§ 06" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 lg:border-r flex flex-col relative z-10 contact-left-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 md:py-16 lg:py-20 border-b", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "tag-caps text-deep/50 block mb-6", children: "Contato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display leading-none tracking-tight mb-8",
              style: { fontSize: "clamp(3rem, 7vw, 6rem)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealWords, { text: "Conversemos." })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl leading-relaxed max-w-lg", children: "Atendimento reservado mediante agendamento. Respondemos toda mensagem no mesmo dia útil." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: WHATSAPP,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "brut-btn mt-10",
              children: [
                "Falar pelo WhatsApp ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "py-8 md:py-12 pr-4 border-b md:border-b-0 md:border-r", delay: 0.1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-caps-sm text-deep/50 block mb-4", children: "Endereço" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic font-display text-xl md:text-2xl leading-snug", children: [
              "Rua Cel. Vicente, 312",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Centro — Ubajara/CE"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "py-8 md:py-12 pl-0 md:pl-8", delay: 0.2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-caps-sm text-deep/50 block mb-4", children: "Horários" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-3 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "tag-caps-sm text-deep/60", children: "Seg — Sex" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-lg", children: "08h — 18h" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "tag-caps-sm text-deep/60", children: "Sábado" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-lg", children: "Sob agenda" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "tag-caps-sm text-deep/60", children: "Domingo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-lg italic text-deep/60", children: "Fechado" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "border-t py-8 md:py-12 flex flex-col gap-4", delay: 0.3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-caps-sm text-deep/50 mb-2", children: "Canais diretos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: WHATSAPP,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-baseline gap-4 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-highlight group-hover:text-deep transition", children: "▸" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl group-hover:italic group-hover:text-highlight transition", children: "WhatsApp · (88) 99445-4680" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:contato@oliveirasiqueira.adv.br",
              className: "flex items-baseline gap-4 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-highlight group-hover:text-deep transition", children: "▸" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl group-hover:italic group-hover:text-highlight transition break-all", children: "contato@oliveirasiqueira.adv.br" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5 flex flex-col bg-surface", delay: 0.15, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 md:py-8 pl-6 pr-(--page-edge) flex items-baseline justify-between border-b", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag-caps text-highlight", children: "Localização" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: GMAPS_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "tag-caps-sm text-deep brut-link",
              children: "Abrir no Google Maps ↗"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-[420px] relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddressMap, {}) })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ink text-ivory/60 py-16 sm:py-20 border-t border-navy/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-narrow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16 pb-12 border-b border-(--navy)/10 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/LOGO.jpg",
              alt: "Logo Oliveira & Siqueira",
              className: "h-10 w-10 object-cover rounded-sm border border-navy/20"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl sm:text-2xl text-ivory tracking-tight", children: [
            "Oliveira ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "&" }),
            " Siqueira"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ivory/45 max-w-sm leading-relaxed", children: "Escritório de advocacia boutique dedicado a soluções estratégicas sob medida, com ética, rigor técnico e presença real." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: WHATSAPP,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-ivory transition-colors",
              children: "WhatsApp: (88) 99445-4680"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:contato@oliveirasiqueira.adv.br",
              className: "hover:text-ivory transition-colors",
              children: "contato@oliveirasiqueira.adv.br"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase", children: "Ubajara / CE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-xs leading-relaxed text-ivory/45", children: [
          "Rua Cel. Vicente, 312",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Centro — CEP 62350-000"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] tracking-wider text-ivory/35 uppercase font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Oliveira & Siqueira Advocacia · OAB/CE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Todos os direitos reservados."
      ] })
    ] })
  ] }) });
}
function useReveal() {
  reactExports.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(".reveal");
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
function Landing() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Areas, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "brut-scope", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Landing as component
};
