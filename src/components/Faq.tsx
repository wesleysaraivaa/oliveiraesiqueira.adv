import { Reveal, RevealWords } from "@/components/Reveal";

const FAQ = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A consulta inicial é uma reunião reservada — presencial em Ubajara/CE or online — onde escutamos o caso, analisamos documentos preliminares e indicamos os caminhos jurídicos viáveis. Não há compromisso de contratação.",
  },
  {
    q: "Atendem clientes fora de Ubajara?",
    a: "Sim. Atendemos clientes em todo o Brasil de forma 100% online, e presencialmente em Ubajara/CE e região. Reuniões podem ser realizadas remotamente quando necessário.",
  },
  {
    q: "Como são definidos os honorários?",
    a: "Os honorários são apresentados de forma transparente após o diagnóstico do caso, considerando complexidade, instâncias envolvidas e tempo estimado. Seguimos integralmente a tabela da OAB-CE.",
  },
  {
    q: "Em quanto tempo recebo um retorno?",
    a: "Mensagens recebidas pelo WhatsApp em horário comercial são respondidas no mesmo dia. Para urgências, indicamos contato telefônico direto.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full border-b relative">
      <div className="container-narrow">
        <header className="py-10 md:py-16 lg:py-20 border-b grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          <span className="section-numeral absolute top-4 right-6 md:right-12" aria-hidden>
            § 05
          </span>
          <div className="md:col-span-5">
            <Reveal className="tag-caps text-deep/50 block mb-6">
              Dúvidas frequentes
            </Reveal>
            <h2
              className="font-display leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
            >
              <RevealWords text="Antes de" />{" "}
              <span className="italic text-(--color-highlight)">
                <RevealWords text="conversarmos." delay={0.2} />
              </span>
            </h2>
          </div>
        </header>
        <div>
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.08}>
              <details className={`faq group ${i < FAQ.length - 1 ? "border-b" : ""}`}>
                <summary className="py-10 md:py-12 flex items-center justify-between gap-8 hover:bg-surface/50 transition-colors">
                  <span
                    className="font-display leading-tight tracking-tight"
                    style={{ fontSize: "clamp(1.25rem, 2.4vw, 2rem)" }}
                  >
                    {f.q}
                  </span>
                  <span className="faq-icon font-display text-3xl md:text-4xl leading-none shrink-0 text-accent">
                    +
                  </span>
                </summary>
                <div className="faq-body">
                  <div>
                    <p className="pb-12 max-w-3xl text-base md:text-lg leading-relaxed text-(--color-deep)">
                      {f.a}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
