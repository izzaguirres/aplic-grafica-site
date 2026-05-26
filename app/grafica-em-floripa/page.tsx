import type { Metadata } from "next"
import { MessageCircle, PackageCheck, Truck } from "lucide-react"
import { LpHero } from "@/components/LpHero"
import { TrustedClients } from "@/components/TrustedClients"
import { LpBenefits, type LpBenefit } from "@/components/LpBenefits"
import { LpFaq, type LpFaqItem } from "@/components/LpFaq"
import { ProductGrid } from "@/components/ProductGrid"
import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { productsData } from "@/lib/products-data"
import { createPageMetadata } from "@/lib/site"

const whatsappMessage = "Olá, vim pelo Google e quero um orçamento com a Aplic Gráfica."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) =>
  /cartao|panfleto|banner|cracha|etiqueta|pasta/i.test(p.id),
)

const benefits: LpBenefit[] = [
  {
    icon: MessageCircle,
    title: "Atendimento pelo WhatsApp",
    description:
      "Envie o arquivo, tire dúvidas e combine o pedido em uma conversa simples, com prazo confirmado antes da produção.",
  },
  {
    icon: PackageCheck,
    title: "Materiais para empresas",
    description:
      "Cartões, panfletos, banners, crachás, etiquetas, pastas e materiais de escritório para o dia a dia do negócio.",
  },
  {
    icon: Truck,
    title: "Entrega no seu endereço",
    description:
      "Pedido online e entrega combinada em Florianópolis e região, sem precisar expor bairro como promessa no anúncio.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "A Aplic atende pedidos online?",
    answer:
      "Sim. Você pode enviar sua arte pelo WhatsApp, receber o orçamento, aprovar a produção e combinar a entrega pelo atendimento.",
  },
  {
    question: "Quais produtos posso pedir?",
    answer:
      "Cartão de visita, panfleto, banner, crachá, etiquetas adesivas, pasta com bolso, blocos, receituários e outros materiais gráficos sob orçamento.",
  },
  {
    question: "Vocês imprimem na hora?",
    answer:
      "Não trabalhamos como papelaria de impressão imediata. Cada pedido tem prazo combinado conforme produto, quantidade e arquivo enviado.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "A entrega é combinada no atendimento conforme endereço, produto e prazo do pedido. O orçamento já sai com a melhor opção para você.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Gráfica em Florianópolis | Aplic Gráfica",
  description:
    "Gráfica em Florianópolis para cartões, panfletos, banners, crachás, etiquetas, pastas e materiais para empresas. Atendimento pelo WhatsApp.",
  path: "/grafica-em-floripa",
  keywords: [
    "gráfica em florianópolis",
    "gráfica em floripa",
    "aplic gráfica",
    "gráfica online florianópolis",
    "materiais gráficos florianópolis",
  ],
})

export default function GraficaEmFloripaPage() {
  return (
    <>
      <LpHero
        kicker="Aplic Gráfica · 15 anos em Floripa"
        headline={
          <>
            Gráfica em{" "}
            <span className="relative inline-block">
              Florianópolis
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>{" "}
            para empresas e profissionais.
          </>
        }
        subheadline="Atendimento pelo WhatsApp, produção com prazo combinado e entrega no seu endereço. Do arquivo à entrega, a Aplic acompanha o pedido com você."
        bullets={["Pedido online", "Prazo combinado", "Entrega no endereço"]}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_grafica_floripa_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="O que a Aplic resolve"
        subheading="Materiais gráficos para quem precisa vender, organizar, identificar equipe ou apresentar melhor a empresa."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Produtos mais pedidos"
          subtitle="Comece pelo produto que você precisa. Se tiver um pedido diferente, chama no WhatsApp e a gente orienta."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_grafica_floripa_faq"
      />

      <CTASection
        headline="Precisa de material gráfico em Floripa?"
        subtitle="Envie sua arte ou explique o pedido. A Aplic retorna com orientação, prazo e orçamento."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
