import { WHATSAPP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/60 py-16 sm:py-20 border-t border-navy/20">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16 pb-12 border-b border-(--navy)/10 text-sm">
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/LOGO.jpg"
                alt="Logo Oliveira & Siqueira"
                className="h-10 w-10 object-cover rounded-sm border border-navy/20"
              />
              <span className="font-display text-xl sm:text-2xl text-ivory tracking-tight">
                Oliveira <span className="opacity-50">&amp;</span> Siqueira
              </span>
            </div>
            <p className="text-xs text-ivory/45 max-w-sm leading-relaxed">
              Escritório de advocacia boutique dedicado a soluções estratégicas sob medida, com
              ética, rigor técnico e presença real.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase">
              Contato
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory transition-colors"
                >
                  WhatsApp: (88) 99445-4680
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@oliveirasiqueira.adv.br"
                  className="hover:text-ivory transition-colors"
                >
                  contato@oliveirasiqueira.adv.br
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase">
              Ubajara / CE
            </span>
            <address className="not-italic text-xs leading-relaxed text-ivory/45">
              Rua Cel. Vicente, 312
              <br />
              Centro — CEP 62350-000
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] tracking-wider text-ivory/35 uppercase font-mono">
          <div>Oliveira &amp; Siqueira Advocacia · OAB/CE</div>
          <div>© {new Date().getFullYear()} Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
