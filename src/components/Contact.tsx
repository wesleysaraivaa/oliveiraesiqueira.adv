import { AddressMap } from "@/components/AddressMap";
import { WHATSAPP, GMAPS_URL } from "@/lib/constants";
import { Reveal, RevealWords } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contato" className="w-full border-b relative">
      <span className="section-numeral absolute top-4 right-6 md:right-12 z-0" aria-hidden>
        § 06
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        <div className="lg:col-span-7 lg:border-r flex flex-col relative z-10 contact-left-col">
          <div className="py-10 md:py-16 lg:py-20 border-b">
            <Reveal className="tag-caps text-deep/50 block mb-6">Contato</Reveal>
            <h2
              className="font-display leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              <RevealWords text="Conversemos." />
            </h2>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed max-w-lg">
                Atendimento reservado mediante agendamento. Respondemos toda mensagem no mesmo dia
                útil.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="brut-btn mt-10"
              >
                Falar pelo WhatsApp <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <Reveal className="py-8 md:py-12 pr-4 border-b md:border-b-0 md:border-r" delay={0.1}>
              <span className="tag-caps-sm text-deep/50 block mb-4">Endereço</span>
              <address className="not-italic font-display text-xl md:text-2xl leading-snug">
                Rua Cel. Vicente, 312
                <br />
                Centro — Ubajara/CE
              </address>
            </Reveal>

            <Reveal className="py-8 md:py-12 pl-0 md:pl-8" delay={0.2}>
              <span className="tag-caps-sm text-deep/50 block mb-4">Horários</span>
              <dl className="space-y-3 text-base">
                <div className="flex justify-between gap-4">
                  <dt className="tag-caps-sm text-deep/60">Seg — Sex</dt>
                  <dd className="font-display text-lg">08h — 18h</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="tag-caps-sm text-deep/60">Sábado</dt>
                  <dd className="font-display text-lg">Sob agenda</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="tag-caps-sm text-deep/60">Domingo</dt>
                  <dd className="font-display text-lg italic text-deep/60">Fechado</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal className="border-t py-8 md:py-12 flex flex-col gap-4" delay={0.3}>
            <span className="tag-caps-sm text-deep/50 mb-2">Canais diretos</span>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-4 group"
            >
              <span className="text-highlight group-hover:text-deep transition">
                ▸
              </span>
              <span className="font-display text-xl md:text-2xl group-hover:italic group-hover:text-highlight transition">
                WhatsApp · (88) 99445-4680
              </span>
            </a>
            <a
              href="mailto:contato@oliveirasiqueira.adv.br"
              className="flex items-baseline gap-4 group"
            >
              <span className="text-highlight group-hover:text-deep transition">
                ▸
              </span>
              <span className="font-display text-xl md:text-2xl group-hover:italic group-hover:text-highlight transition break-all">
                contato@oliveirasiqueira.adv.br
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5 flex flex-col bg-surface" delay={0.15}>
          <div className="py-6 md:py-8 pl-6 pr-(--page-edge) flex items-baseline justify-between border-b">
            <span className="tag-caps text-highlight">Localização</span>
            <a
              href={GMAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-caps-sm text-deep brut-link"
            >
              Abrir no Google Maps ↗
            </a>
          </div>
          <div className="flex-1 min-h-[420px] relative">
            <AddressMap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
