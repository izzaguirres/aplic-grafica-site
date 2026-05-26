import type { Metadata } from "next"
import { BriefcaseBusiness, FileText, Handshake } from "lucide-react"
import { LpHero } from "@/components/LpHero"
import { TrustedClients } from "@/components/TrustedClients"
import { LpBenefits, type LpBenefit } from "@/components/LpBenefits"
import { LpFaq, type LpFaqItem } from "@/components/LpFaq"
import { ProductGrid } from "@/components/ProductGrid"
import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { JsonLd } from "@/components/JsonLd"
import { productsData } from "@/lib/products-data"
import { createPageMetadata, createServicePageSchema } from "@/lib/site"

const whatsappMessage = "Olá, vim pelo Google e quero um orçamento de pasta com bolso."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) => /pasta|cartao|tag/i.test(p.id))

const benefits: LpBenefit[] = [
  {
    icon: BriefcaseBusiness,
    title: "Apresentação corporativa",
    description:
      "Pasta personalizada para proposta, contrato, material comercial, treinamento e atendimento presencial.",
  },
  {
    icon: FileText,
    title: "Bolso para documentos",
    description:
      "Formato pensado para organizar folhas A4, cartões, contratos e materiais entregues ao cliente.",
  },
  {
    icon: Handshake,
    title: "Mais presença na reunião",
    description:
      "Material físico ajuda a proposta a parecer organizada, profissional e fácil de consultar depois.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Para que serve a pasta com bolso?",
    answer:
      "Ela organiza propostas, contratos, catálogos e documentos A4. É indicada para escritórios, clínicas, construtoras, imobiliárias, eventos e apresentações comerciais.",
  },
  {
    question: "Vocês fazem pasta personalizada com minha marca?",
    answer:
      "Sim. A pasta pode receber a identidade da empresa na capa, contracapa e área interna, conforme o arquivo aprovado.",
  },
  {
    question: "Qual quantidade mínima?",
    answer:
      "A quantidade ideal depende do acabamento e da necessidade do pedido. Envie a demanda pelo WhatsApp para a Aplic cotar o melhor formato.",
  },
  {
    question: "Preciso enviar arquivo fechado?",
    answer:
      "Se você já tiver arte final, melhor. Se tiver apenas logo e referência, a gente avalia no atendimento o que precisa ser ajustado antes da produção.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Pasta com Bolso Personalizada em Florianópolis",
  description:
    "Pasta com bolso personalizada em Florianópolis para propostas, contratos e apresentações corporativas. Atendimento pelo WhatsApp.",
  path: "/pasta-com-bolso",
  keywords: [
    "pasta com bolso florianópolis",
    "pasta personalizada floripa",
    "pasta corporativa florianópolis",
    "pasta para proposta florianópolis",
  ],
})

const pageSchema = createServicePageSchema({
  path: "/pasta-com-bolso",
  name: "Pasta com bolso personalizada em Florianópolis",
  description:
    "Pasta com bolso personalizada em Florianópolis para propostas, contratos e apresentações corporativas.",
  serviceType: "Impressão de pasta com bolso",
  faqs,
  relatedProducts: products.map((product) => ({
    name: product.name,
    description: product.description,
    url: product.landingPage,
  })),
})

export default function PastaComBolsoPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <LpHero
        kicker="Aplic Gráfica · Material corporativo"
        headline={
          <>
            Pasta com bolso para{" "}
            <span className="relative inline-block">
              propostas e contratos
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            .
          </>
        }
        subheadline="Pasta personalizada em Florianópolis para empresas que precisam entregar documentos, propostas e apresentações com mais organização."
        bullets={["A4", "Com bolso", "Marca da empresa"]}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_pasta_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Quando a pasta faz sentido"
        subheading="Para propostas, onboarding, contratos e materiais que precisam chegar ao cliente com cara de empresa organizada."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Material corporativo relacionado"
          subtitle="Pasta, cartão e tag podem trabalhar juntos na apresentação da sua marca."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_pasta_faq"
      />

      <CTASection
        headline="Quer cotar pasta com bolso?"
        subtitle="Envie o uso, quantidade e arte disponível. A Aplic orienta o melhor formato."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
