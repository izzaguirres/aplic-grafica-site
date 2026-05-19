import type { Metadata } from "next"
import { Zap, Layers, MapPin } from "lucide-react"
import { LpHero } from "@/components/LpHero"
import { TrustedClients } from "@/components/TrustedClients"
import { LpBenefits, type LpBenefit } from "@/components/LpBenefits"
import { LpFaq, type LpFaqItem } from "@/components/LpFaq"
import { ProductGrid } from "@/components/ProductGrid"
import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { productsData } from "@/lib/products-data"
import { createPageMetadata } from "@/lib/site"

const whatsappMessage = "Olá, vim pelo site e quero um orçamento de panfleto."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) =>
  /panfleto|filipeta|folder/i.test(p.id),
)

const benefits: LpBenefit[] = [
  {
    icon: Zap,
    title: "Pronto pra divulgação rápida",
    description:
      "1000 un. em até 3 dias úteis, pra delivery, evento, inauguração e academia. Tiragens maiores em 5 a 7 dias.",
  },
  {
    icon: Layers,
    title: "Frente e verso em couchê 90g",
    description:
      "Papel couchê brilho com cor vibrante nos dois lados. Mais espaço pra sua mensagem sem perder leveza pra distribuição.",
  },
  {
    icon: MapPin,
    title: "Entrega em toda Floripa",
    description:
      "Centro, Estreito, Trindade, Lagoa, Canasvieiras, Campeche, Palhoça e São José. Combinamos o melhor horário no zap.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Qual a quantidade mínima?",
    answer:
      "Trabalhamos a partir de 1.000 unidades. Abaixo disso, o custo unitário não compensa e o tempo de produção fica próximo do mesmo.",
  },
  {
    question: "A5 ou A6? Qual escolher?",
    answer:
      "A6 (10x14cm) é o formato clássico e mais econômico pra distribuição em massa, delivery, panfletagem. A5 (15x21cm) é maior, cabe mais informação e funciona bem pra cardápio, lista de serviços, folder promocional.",
  },
  {
    question: "Qual o prazo real?",
    answer:
      "1000 unidades saem em até 3 dias úteis a partir da aprovação da arte. Tiragens maiores (2500+) levam de 5 a 7 dias úteis. O prazo exato vai no orçamento, antes de você fechar.",
  },
  {
    question: "Preciso enviar a arte pronta?",
    answer:
      "Sim, trabalhamos com a arte que você envia. Se precisar de pequenos ajustes de layout, a gente resolve na mesma conversa.",
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Pix, cartão de crédito e boleto. Combinamos junto com o orçamento.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Panfleto em Florianópolis — 3 dias úteis | Aplic Gráfica",
  description:
    "Panfleto em Florianópolis com prazo de 3 dias úteis. Couchê 90g, frente e verso, entrega em toda Grande Floripa. Atendimento direto pelo WhatsApp.",
  path: "/panfleto",
  keywords: [
    "panfleto florianópolis",
    "panfleto floripa",
    "gráfica panfleto florianópolis",
    "panfleto a5 florianópolis",
    "panfleto a6 florianópolis",
    "filipeta florianópolis",
  ],
})

export default function PanfletoPage() {
  return (
    <>
      <LpHero
        headline={
          <>
            Panfleto em{" "}
            <span className="relative inline-block">
              Florianópolis
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            , com prazo claro.
          </>
        }
        subheadline="1000 un. em até 3 dias úteis · 2500 un. ou mais em 5 a 7 dias. Couchê 90g frente e verso, entrega em toda Grande Floripa."
        bullets={["Couchê 90g", "Frente e verso", "A partir de 1000 un."]}
        priceAnchor="A6 10x14cm — 1000 un. a partir de R$ 385"
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_panfleto_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Por que o panfleto da Aplic"
        subheading="Volume, prazo e qualidade de cor — os três ingredientes que toda divulgação de fim de semana pede."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Escolha seu formato"
          subtitle="A5 pra cardápio e apresentação. A6 pra volume e rua. Filipeta pra cardápio rígido."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_panfleto_faq"
      />

      <CTASection
        headline="Pronto pra divulgar?"
        subtitle="Do arquivo à entrega, pelo WhatsApp. Prazo confirmado no orçamento."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
