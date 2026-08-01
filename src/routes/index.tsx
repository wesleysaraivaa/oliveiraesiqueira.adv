import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Manifesto } from "@/components/Manifesto";
import { Areas } from "@/components/Areas";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { SITE_URL } from "../lib/constants";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Oliveira & Siqueira Advocacia — Ubajara/CE" },
      {
        name: "description",
        content:
          "Escritório de advocacia em Ubajara/CE. Atuação técnica em Civil, Criminal, Família, Trabalhista, Previdenciário e Consumidor. Consulta direta pelo WhatsApp.",
      },
      { name: "theme-color", content: "#1e2a44" },
      { property: "og:title", content: "Oliveira & Siqueira Advocacia" },
      {
        property: "og:description",
        content: "Defesa jurídica com rigor e dignidade — Ubajara/CE.",
      },
      { property: "og:image", content: `${SITE_URL}/assets/hero-columns-optimized.jpg` },
      { property: "og:image:secure_url", content: `${SITE_URL}/assets/hero-columns-optimized.jpg` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "800" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

function Landing() {
  useReveal();
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Areas />
        <Team />
        <div className="brut-scope">
          <Faq />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
