import { Section } from "@/components/Section"
import { ContactBlock } from "@/components/ContactBlock"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Clock, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato - Fale Conosco",
  description:
    "Entre em contato com a Aplic Gráfica. WhatsApp, formulário online ou visite nossa loja em Florianópolis. Atendimento de segunda a sexta.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    info: "(48) 99912-8310",
    description: "Atendimento rápido e personalizado",
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "comercialaplic@hotmail.com",
    description: "Resposta em até 24 horas",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    info: "Segunda a Sexta: 9h às 18h",
    description: "Sábados sob agendamento",
  },
  {
    icon: MapPin,
    title: "Região de Atendimento",
    info: "Grande Florianópolis",
    description: "Entrega rápida em toda a região",
  },
]

export default function ContatoPage() {
  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você! Escolha a forma de contato que preferir e receba seu orçamento
              rapidamente.
            </p>
          </div>

          {/* WhatsApp Destaque */}
          <ContactBlock />

          {/* Informações de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="rounded-2xl border-muted">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-lg font-medium">{info.info}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="secondary">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
