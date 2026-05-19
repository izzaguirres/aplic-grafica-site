import type { Metadata } from "next"
import { Sparkles, Package, Clock } from "lucide-react"
import { LpHero } from "@/components/LpHero"
import { TrustedClients } from "@/components/TrustedClients"
import { LpBenefits, type LpBenefit } from "@/components/LpBenefits"
import { LpFaq, type LpFaqItem } from "@/components/LpFaq"
import { ProductGrid } from "@/components/ProductGrid"
import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { productsData } from "@/lib/products-data"
import { createPageMetadata } from "@/lib/site"

const whatsappMessage = "Olá, vim pelo site e quero um orçamento de cartão de visita."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const products = productsData.filter((p) => /cartao/i.test(p.id))

const benefits: LpBenefit[] = [
  {
    icon: Sparkles,
    title: "Brilho localizado no logo",
    description:
      "Fundo fosco aveludado com verniz UV aplicado só no logo e no nome. O acabamento preferido pelos escritórios de Floripa.",
  },
  {
    icon: Package,
    title: "Couchê 300g que pesa na mão",
    description:
      "Papel grosso, firme, com textura. O cliente sente a qualidade antes de ler o nome.",
  },
  {
    icon: Clock,
    title: "Prazo combinado é prazo entregue",
    description:
      "Brilho total em até 3 dias úteis · Fosco + verniz localizado em 5 a 7 dias. Confirmado no orçamento, cumprido na entrega.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Como funciona o pedido do cartão?",
    answer:
      "Você manda a arte pelo WhatsApp, a gente revisa, fecha o orçamento e aprova com você antes de imprimir. Cartão Brilho Total sai em até 3 dias úteis. Fosco + verniz localizado, em 5 a 7 dias. O prazo exato do seu pedido vai no orçamento.",
  },
  {
    question: "Preciso enviar a arte pronta?",
    answer:
      "Sim, trabalhamos principalmente com artes enviadas pelos clientes. Se precisar de pequenos ajustes ou criação de uma arte simples, a gente ajuda na mesma conversa.",
  },
  {
    question: "Qual a diferença entre brilho total e brilho localizado?",
    answer:
      "Brilho total deixa o cartão inteiro com laminação brilhante. Brilho localizado deixa o fundo fosco e aplica verniz brilhoso apenas em partes específicas (geralmente o logo e o nome), criando um contraste elegante ao toque.",
  },
  {
    question: "Fazem entrega em quais bairros?",
    answer:
      "Entregamos em toda Grande Florianópolis — Centro, Estreito, Trindade, Lagoa, Canasvieiras, Campeche, Palhoça e São José. Combinamos o melhor horário no WhatsApp.",
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Pix, cartão de crédito e boleto. A condição é fechada junto com o orçamento.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Cartão de Visita em Florianópolis — 3 dias úteis | Aplic Gráfica",
  description:
    "Cartão de visita em Florianópolis com prazo de 3 dias úteis. Couchê 300g, brilho total, fosco e brilho localizado. Atendimento direto pelo WhatsApp.",
  path: "/cartao-de-visita",
  keywords: [
    "cartão de visita florianópolis",
    "cartão de visita floripa",
    "gráfica cartão de visita florianópolis",
    "cartão brilho localizado florianópolis",
    "cartão fosco florianópolis",
  ],
})

export default function CartaoDeVisitaPage() {
  return (
    <>
      <LpHero
        headline={
          <>
            Cartão de visita em{" "}
            <span className="relative inline-block">
              Florianópolis
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            , do arquivo à entrega.
          </>
        }
        subheadline="Brilho total em até 3 dias úteis · Fosco com verniz localizado em 5 a 7 dias. Atendimento direto com o dono pelo WhatsApp."
        bullets={["Couchê 300g", "Brilho ou Fosco", "Direto com o dono"]}
        priceAnchor="100 un. a partir de R$ 185 · 1000 un. a partir de R$ 275"
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_cartao_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Por que o cartão da Aplic"
        subheading="15 anos imprimindo pra empresa local de Floripa. O acabamento importa, o papel importa, e o prazo importa."
        items={benefits}
      />

      <Section id="produtos" className="reveal">
        <ProductGrid
          products={products}
          title="Escolha seu acabamento"
          subtitle="Três opções, um só prazo. Role o mouse sobre o card pra ver os detalhes."
        />
      </Section>

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_cartao_faq"
      />

      <CTASection
        headline="Pronto pra fechar seu cartão?"
        subtitle="Atendimento direto com o dono pelo WhatsApp. Prazo confirmado no orçamento."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
