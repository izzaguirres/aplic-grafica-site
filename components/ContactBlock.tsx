import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, ArrowRight, Zap } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

export function ContactBlock() {
  const { handleWhatsAppClick } = useWhatsAppConversion()
  
  return (
    <Card className="rounded-3xl border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-pattern opacity-5" />

      <CardContent className="p-6 md:p-8 lg:p-12 text-center relative">
        <div className="space-y-4 md:space-y-6">
          <div className="flex justify-center">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
          </div>

          <div className="space-y-2 md:space-y-3">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Fale com nosso time agora</h3>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Tire suas dúvidas e faça seu orçamento pelo WhatsApp. Resposta em minutos!
            </p>
          </div>

          <Button
            size="lg"
            onClick={() => handleWhatsAppClick("Olá,%20preciso%20de%20ajuda%20com%20um%20pedido.")}
            className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6 h-12 md:h-14 font-semibold shadow-lg hover:shadow-xl transition-all group w-full md:w-auto"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Abrir WhatsApp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
