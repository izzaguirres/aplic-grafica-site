import type { Metadata } from "next"
import { ClipboardList, FilePenLine, Stethoscope } from "lucide-react"
import { LpHero } from "@/components/LpHero"
import { TrustedClients } from "@/components/TrustedClients"
import { LpBenefits, type LpBenefit } from "@/components/LpBenefits"
import { LpFaq, type LpFaqItem } from "@/components/LpFaq"
import { CTASection } from "@/components/CTASection"
import { createPageMetadata } from "@/lib/site"

const whatsappMessage = "Olá, vim pelo Google e quero um orçamento de blocos ou receituário."
const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(whatsappMessage)}`

const benefits: LpBenefit[] = [
  {
    icon: ClipboardList,
    title: "Blocos personalizados",
    description:
      "Blocos de pedido, orçamento, atendimento, checklist, recibo e controle interno com a identidade da empresa.",
  },
  {
    icon: Stethoscope,
    title: "Receituário médico",
    description:
      "Receituários para clínicas e profissionais de saúde, com dados do profissional e layout conforme a necessidade.",
  },
  {
    icon: FilePenLine,
    title: "Papelaria de rotina",
    description:
      "Materiais impressos para escritórios, consultórios e empresas que ainda precisam registrar processos no papel.",
  },
]

const faqs: LpFaqItem[] = [
  {
    question: "Vocês fazem receituário médico personalizado?",
    answer:
      "Sim. Produzimos receituários para clínicas e profissionais de saúde conforme o arquivo e as informações enviadas pelo cliente.",
  },
  {
    question: "Que tipos de bloco posso pedir?",
    answer:
      "Bloco de pedido, orçamento, recibo, checklist, ordem de serviço, atendimento, controle interno e outros formatos sob orçamento.",
  },
  {
    question: "Preciso mandar a arte pronta?",
    answer:
      "Se tiver arte final, envie pelo WhatsApp. Se tiver apenas modelo antigo ou referência, a Aplic avalia o ajuste necessário antes da produção.",
  },
  {
    question: "Qual o prazo?",
    answer:
      "O prazo depende da quantidade, formato e acabamento. Ele é confirmado no orçamento antes de iniciar a produção.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Blocos e Receituário Médico em Florianópolis | Aplic Gráfica",
  description:
    "Blocos personalizados, receituários médicos e materiais de escritório em Florianópolis. Atendimento pelo WhatsApp e produção sob orçamento.",
  path: "/blocos-receituario",
  keywords: [
    "blocos personalizados florianópolis",
    "receituário médico florianópolis",
    "receituarios médicos floripa",
    "bloco de pedido florianópolis",
  ],
})

export default function BlocosReceituarioPage() {
  return (
    <>
      <LpHero
        kicker="Aplic Gráfica · Blocos e receituários"
        headline={
          <>
            Blocos e receituários para{" "}
            <span className="relative inline-block">
              empresas e consultórios
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            .
          </>
        }
        subheadline="Blocos personalizados, receituários médicos e papelaria de rotina em Florianópolis, com atendimento pelo WhatsApp e prazo combinado."
        bullets={["Blocos", "Receituários", "Sob orçamento"]}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_blocos_receituario_hero"
      />

      <TrustedClients />

      <LpBenefits
        heading="Papelaria que organiza a operação"
        subheading="Para empresas, clínicas e consultórios que precisam de materiais impressos para o dia a dia."
        items={benefits}
      />

      <LpFaq
        items={faqs}
        whatsappMessage={whatsappMessage}
        analyticsSource="lp_blocos_receituario_faq"
      />

      <CTASection
        headline="Quer cotar blocos ou receituário?"
        subtitle="Envie o modelo, quantidade e formato desejado. A Aplic orienta o próximo passo."
        buttonText="Chamar no WhatsApp"
        buttonUrl={whatsappUrl}
      />
    </>
  )
}
