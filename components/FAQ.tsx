import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
            <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-6 hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
