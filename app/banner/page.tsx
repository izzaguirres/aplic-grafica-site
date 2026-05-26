import type { Metadata } from "next"
import { Sun, Hammer, Eye } from "lucide-react"
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

const whatsappMessage = "Olá, vim pelo site e quero um orçamento de banner em lona."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) => /banner|cavalete/i.test(p.id))

const benefits: LpBenefit[] = [
  {
    icon: Sun,
    title: "Aguenta o sol de Floripa",
    description:
      "Lona fosca com resistência UV pra ficar na fachada, vitrine ou evento externo sem perder cor.",
  },
  {
    icon: Hammer,
    title: "Pronto pra pendurar",
    description:
      "Entregue com acabamento em bastão de madeira e corda — sai da caixa, pendura, está funcionando.",
  },
  {
    icon: Eye,
    title: "Tamanho que chama atenção",
    description:
      "50x70cm pra avisos, 100x100cm pra chamar de longe. Tem inauguração, promoção ou evento? Banner faz o serviço.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Qual o prazo do banner?",
    answer:
      "3 dias úteis em média, a partir da aprovação da arte. Pedidos urgentes podem sair antes, a gente confirma no orçamento.",
  },
  {
    question: "O banner vem pronto pra pendurar?",
    answer:
      "Sim. Entregamos com acabamento em bastão de madeira nas extremidades e corda pra amarração. É só pendurar.",
  },
  {
    question: "Qual a diferença entre os tamanhos?",
    answer:
      "50x70cm é ideal pra avisos rápidos (promoção, horário especial, convite). 100x100cm é pra chamar atenção de longe — inauguração, fachada, evento.",
  },
  {
    question: "Vocês fazem tamanhos personalizados?",
    answer:
      "Sim, fazemos projetos sob medida. Manda a medida e o layout pelo WhatsApp que a gente cota.",
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Pix, cartão de crédito e boleto. Combinamos junto com o orçamento.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Banner em Lona em Florianópolis — 3 dias úteis",
  description:
    "Banner em lona em Florianópolis com prazo de 3 dias úteis. Lona fosca resistente, acabamento em madeira e corda. Atendimento direto pelo WhatsApp.",
  path: "/banner",
  keywords: [
    "banner florianópolis",
    "banner lona florianópolis",
    "banner em lona floripa",
    "gráfica banner florianópolis",
    "banner fachada florianópolis",
  ],
})

const pageSchema = createServicePageSchema({
  path: "/banner",
  name: "Banner em lona em Florianópolis",
  description:
    "Banner em lona para lojas, eventos, fachadas e avisos em Florianópolis, com atendimento pelo WhatsApp e entrega ou retirada combinada.",
  serviceType: "Impressão de banner em lona",
  faqs,
  relatedProducts: products.map((product) => ({
    name: product.name,
    description: product.description,
    url: product.landingPage,
  })),
})

export default function BannerPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <LpHero
        headline={
          <>
            Banner em lona pronto em até{" "}
            <span className="relative inline-block">
              3 dias úteis
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            .
          </>
        }
        subheadline="Do promocional de fim de mês à inauguração da loja. Lona fosca resistente ao sol de Floripa, acabamento em madeira e corda — pronto pra pendurar."
        bullets={["Lona fosca", "Madeira e corda", "50x70 e 100x100"]}
        priceAnchor="50x70cm a partir de R$ 120 · 100x100cm a partir de R$ 210"
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_banner_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Por que o banner da Aplic"
        subheading="Lona certa, acabamento que dura, e o tamanho que comunica o que você precisa."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Escolha seu formato"
          subtitle="Banner em lona ou cavalete rígido. O dois chamam atenção, cada um pra um contexto."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_banner_faq"
      />

      <CTASection
        headline="Pronto pra aparecer?"
        subtitle="Arte aprovada hoje, banner pendurado em 3 dias úteis."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
