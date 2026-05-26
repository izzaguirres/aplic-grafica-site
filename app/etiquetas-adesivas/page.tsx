import type { Metadata } from "next"
import { Package, Scissors, Send } from "lucide-react"
import { LpHero } from "@/components/LpHero"
import { TrustedClients } from "@/components/TrustedClients"
import { LpBenefits, type LpBenefit } from "@/components/LpBenefits"
import { LpFaq, type LpFaqItem } from "@/components/LpFaq"
import { ProductGrid } from "@/components/ProductGrid"
import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { productsData } from "@/lib/products-data"
import { createPageMetadata } from "@/lib/site"

const whatsappMessage = "Olá, vim pelo Google e quero um orçamento de etiquetas adesivas."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) => /etiqueta|tag|adesivo/i.test(p.id))

const benefits: LpBenefit[] = [
  {
    icon: Package,
    title: "Rótulo para produto",
    description:
      "Etiquetas para embalagens, potes, caixas, sacolas e identificação de produtos artesanais ou comerciais.",
  },
  {
    icon: Scissors,
    title: "Formato sob medida",
    description:
      "A produção pode ser ajustada ao arquivo, ao tamanho da embalagem e ao acabamento indicado para o uso.",
  },
  {
    icon: Send,
    title: "Pedido pelo WhatsApp",
    description:
      "Envie a arte, medida e quantidade desejada. A Aplic orienta material, prazo e entrega antes de fechar.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Que tipo de etiqueta adesiva vocês fazem?",
    answer:
      "Fazemos etiquetas e rótulos personalizados para produtos, embalagens, identificação e comunicação visual. O material ideal depende do uso e da quantidade.",
  },
  {
    question: "Preciso ter a arte pronta?",
    answer:
      "O ideal é enviar a arte pronta. Se faltar algum ajuste simples de arquivo, a gente avalia no atendimento antes da produção.",
  },
  {
    question: "Vocês fazem corte personalizado?",
    answer:
      "Sim, o corte pode ser personalizado conforme o formato do rótulo ou etiqueta. Envie a medida pelo WhatsApp para cotar corretamente.",
  },
  {
    question: "Qual é o prazo?",
    answer:
      "O prazo depende do formato, quantidade e acabamento. A Aplic confirma tudo no orçamento antes de iniciar a produção.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Etiquetas Adesivas em Florianópolis | Aplic Gráfica",
  description:
    "Etiquetas adesivas personalizadas em Florianópolis para produtos, embalagens e negócios locais. Atendimento pelo WhatsApp e entrega combinada.",
  path: "/etiquetas-adesivas",
  keywords: [
    "etiquetas adesivas florianópolis",
    "etiqueta personalizada floripa",
    "rótulos adesivos florianópolis",
    "adesivos personalizados floripa",
  ],
})

export default function EtiquetasAdesivasPage() {
  return (
    <>
      <LpHero
        kicker="Aplic Gráfica · Etiquetas e rótulos"
        headline={
          <>
            Etiquetas adesivas para{" "}
            <span className="relative inline-block">
              produtos e embalagens
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            .
          </>
        }
        subheadline="Rótulos e etiquetas personalizadas em Florianópolis, com orientação de material, acabamento e prazo antes da produção."
        bullets={["Rótulos", "Corte personalizado", "Entrega combinada"]}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_etiquetas_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Etiqueta certa para cada uso"
        subheading="A ideia é entender o produto, a embalagem e o acabamento antes de produzir."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Opções relacionadas"
          subtitle="Etiquetas, tags e materiais de identificação para produto e embalagem."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_etiquetas_faq"
      />

      <CTASection
        headline="Quer cotar etiquetas adesivas?"
        subtitle="Envie a medida, quantidade e arte pelo WhatsApp para receber orientação."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
