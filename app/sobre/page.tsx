import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, FileText, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre - Nossa História e Valores",
  description:
    "Conheça a história da Aplic Gráfica. Mais de 14 anos oferecendo qualidade, agilidade e atendimento personalizado em Florianópolis.",
}

const steps = [
  {
    icon: MessageCircle,
    title: "Briefing pelo WhatsApp",
    description: "Conversamos sobre medidas, tiragem, acabamentos e recebemos sua arte para análise.",
  },
  {
    icon: FileText,
    title: "Análise & Produção",
    description:
      "Analisamos sua arte, fazemos ajustes técnicos se necessário e iniciamos a produção com qualidade profissional.",
  },
  {
    icon: Truck,
    title: "Entrega",
    description: "Levamos seu pedido no endereço combinado em toda a região da Grande Florianópolis.",
  },
]

const reasons = [
  {
    title: "Qualidade de Impressão",
    description:
      "Utilizamos equipamentos modernos e materiais de primeira linha para garantir resultados excepcionais.",
  },
  {
    title: "Agilidade",
    description: "Processos otimizados e equipe experiente para entregar seu projeto no menor prazo possível.",
  },
  {
            title: "Entrega Rápida",
    description: "Levamos até você sem custo adicional em toda a Grande Florianópolis.",
  },
  {
    title: "Suporte Consultivo",
    description: "Atendimento personalizado pelo WhatsApp para tirar dúvidas e orientar sobre a melhor solução.",
  },
]

export default function SobrePage() {
  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Confiança e qualidade gráfica há mais de 14 anos</h1>
            <p className="text-lg text-muted-foreground">
              Atendemos empresas e profissionais com impressão offset e digital, comunicação visual, adesivos e lonas.
              Produção e entrega expressas na Grande Florianópolis.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              A <strong>Aplic Gráfica</strong> nasceu da paixão por transformar ideias em realidade através da impressão
              de qualidade. Há mais de uma década, construímos nossa reputação baseada em três pilares fundamentais:{" "}
              <strong>qualidade excepcional</strong>, <strong>prazos cumpridos</strong> e
              <strong>atendimento humanizado</strong>.
            </p>

            <p>
              Nossa jornada começou com o objetivo de oferecer soluções de impressão de alta qualidade para empresas e
              profissionais de Florianópolis e região. Ao longo dos anos, investimos continuamente em tecnologia,
              capacitação da equipe e processos para garantir que cada projeto seja executado com excelência.
            </p>

            <p>
              Trabalhamos principalmente com artes enviadas pelos nossos clientes, garantindo que sua identidade visual
              seja reproduzida com fidelidade. Nosso compromisso é unir qualidade, prazo e atendimento humano para você
              vender mais.
            </p>
          </div>
        </div>
      </Section>

      <Section background="secondary">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Como Trabalhamos</h2>
            <p className="text-lg text-muted-foreground">
              Nosso processo é simples, eficiente e focado na sua satisfação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="rounded-2xl border-muted text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Por que escolher a Aplic Gráfica?</h2>
            <p className="text-lg text-muted-foreground">Mais de 15.000 clientes confiam em nosso trabalho</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="rounded-2xl border-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        headline="Falar com especialista"
        subtitle="Tire suas dúvidas e descubra como podemos ajudar seu negócio a crescer."
        buttonText="Conversar no WhatsApp"
        buttonUrl="https://wa.me/5548999128310?text=Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20conhecer%20melhor%20os%20serviços."
      />
    </>
  )
}
