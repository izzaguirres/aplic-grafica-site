import type { Metadata } from "next"
import { Building2, Shield, Users } from "lucide-react"
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

const whatsappMessage = "Olá, vim pelo site e quero um orçamento de crachá empresarial."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) => /cracha|tag|pasta/i.test(p.id))

const benefits: LpBenefit[] = [
  {
    icon: Building2,
    title: "Identidade da empresa no pescoço",
    description:
      "Logo, nome e cargo impressos em PVC colorido. O primeiro contato do seu funcionário já comunica seriedade.",
  },
  {
    icon: Shield,
    title: "PVC que dura o ano inteiro",
    description:
      "Laminação resistente — não quebra no bolso, não descola com o suor, não desbota com o sol.",
  },
  {
    icon: Users,
    title: "De 5 a 100 funcionários",
    description:
      "Do escritório pequeno à empresa com equipe inteira — mesmo prazo, preço melhor a partir de 25 unidades.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Qual o prazo do crachá?",
    answer:
      "5 dias úteis em média a partir da aprovação da arte e da lista com nomes e cargos dos funcionários.",
  },
  {
    question: "O cordão vem incluso?",
    answer:
      "Sim, entregamos com cordão preto de largura padrão. Se precisar de cordão em cor específica ou com logo da empresa estampado, a gente cota separado.",
  },
  {
    question: "Posso incluir foto dos funcionários?",
    answer:
      "Sim. Você envia as fotos (preferencialmente em qualidade boa, fundo neutro) junto com a lista de nomes. A gente diagrama e manda prova digital pra aprovação antes de imprimir.",
  },
  {
    question: "Como envio a lista de funcionários?",
    answer:
      "Planilha simples com nome, cargo e foto (se for o caso) pelo WhatsApp ou e-mail. A gente prepara o arquivo final e te manda pra aprovar.",
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Pix, cartão de crédito e boleto. Combinamos junto com o orçamento.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Crachá Empresarial em Florianópolis — 5 dias úteis",
  description:
    "Crachá empresarial em Florianópolis em 5 dias úteis. PVC laminado, cordão incluso, de 5 a 100 funcionários. Atendimento direto pelo WhatsApp.",
  path: "/cracha",
  keywords: [
    "crachá empresa florianópolis",
    "crachá empresarial floripa",
    "gráfica crachá florianópolis",
    "crachá pvc florianópolis",
    "crachá funcionário florianópolis",
  ],
})

const pageSchema = createServicePageSchema({
  path: "/cracha",
  name: "Crachá empresarial em Florianópolis",
  description:
    "Crachá empresarial em Florianópolis para equipes, clínicas, escritórios e empresas, com atendimento pelo WhatsApp.",
  serviceType: "Produção de crachá empresarial",
  faqs,
  relatedProducts: products.map((product) => ({
    name: product.name,
    description: product.description,
    url: product.landingPage,
  })),
})

export default function CrachaPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <LpHero
        headline={
          <>
            Crachá empresarial em até{" "}
            <span className="relative inline-block">
              5 dias úteis
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            .
          </>
        }
        subheadline="PVC laminado, identidade da sua empresa e nome dos funcionários. Acompanhamento direto com você no WhatsApp, do arquivo à entrega."
        bullets={["PVC laminado", "Cordão preto incluso", "5 a 100 un."]}
        priceAnchor="5 un. a partir de R$ 235 · 100 un. por R$ 1.435"
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_cracha_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Por que o crachá da Aplic"
        subheading="PVC que dura, cordão que não enrola, acompanhamento direto. 15 anos atendendo escritório, clínica, indústria e pousada de Floripa."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Material corporativo completo"
          subtitle="Além do crachá, também fazemos tag com furo, pasta com bolso e papelaria empresarial."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_cracha_faq"
      />

      <CTASection
        headline="Equipe identificada em 5 dias"
        subtitle="Manda a lista de funcionários e a arte. A gente cuida do resto."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
