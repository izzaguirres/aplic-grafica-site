"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

const faqs = [
  {
    question: "Fazem entrega em toda Florianópolis?",
    answer: "Sim, fazemos entrega em toda a Grande Florianópolis.",
  },
  {
    question: "Preciso enviar a arte pronta?",
    answer:
      "Sim, trabalhamos principalmente com artes enviadas pelos clientes. Se necessário, podemos ajudar com pequenos ajustes ou criar uma arte simples.",
  },
  {
    question: "Quais são os prazos?",
    answer:
      "Os prazos variam por produto e tiragem. Confirmamos o prazo exato no orçamento, sempre buscando a maior agilidade possível.",
  },
  {
    question: "Fazem envio para outras cidades?",
    answer: "Sim, enviamos para outras cidades por transportadora ou correios. O frete é calculado sob consulta.",
  },
  {
    question: "Quais formas de pagamento aceitas?",
    answer: "Aceitamos Pix, cartão de crédito e boleto. As condições são combinadas no momento do orçamento.",
  },
]

export function FAQ() {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Perguntas Frequentes</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm"
          >
            <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-6 text-zinc-800 hover:text-black hover:no-underline [&[data-state=open]]:text-black transition-colors">
              <span className="group-hover:underline group-hover:decoration-primary group-hover:decoration-2 underline-offset-4">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 p-8 rounded-2xl bg-secondary/30 border border-border/50 text-center space-y-4">
        <h3 className="text-xl font-bold">Ainda com dúvida?</h3>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Não encontrou o que procurava? Fale com nosso atendimento agora mesmo.
        </p>
        <Button 
            onClick={() => handleWhatsAppClick(undefined, 'faq_cta')}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl h-12 px-8 shadow-lg hover:shadow-[#25D366]/20 transition-all"
        >
            <MessageCircle className="mr-2 h-5 w-5" />
            Tirar dúvida no WhatsApp
        </Button>
      </div>
    </div>
  )
}
