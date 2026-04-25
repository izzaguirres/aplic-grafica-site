"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

export interface LpFaqItem {
  question: string
  answer: string
}

interface LpFaqProps {
  items: LpFaqItem[]
  heading?: string
  whatsappMessage?: string
  analyticsSource?: string
}

export function LpFaq({
  items,
  heading = "Perguntas Frequentes",
  whatsappMessage,
  analyticsSource = "lp_faq",
}: LpFaqProps) {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{heading}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-5 text-zinc-800 hover:text-black hover:no-underline [&[data-state=open]]:text-black transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-secondary/40 border border-border/50 text-center space-y-3">
          <h3 className="text-xl font-bold">Ainda com dúvida?</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fala direto com quem resolve. Resposta em até 15 minutos no horário comercial.
          </p>
          <Button
            onClick={() => handleWhatsAppClick(whatsappMessage, analyticsSource)}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl h-12 px-8 shadow-lg hover:shadow-[#25D366]/20 transition-all"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chamar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
