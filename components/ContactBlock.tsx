import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, ArrowRight, Zap } from "lucide-react"

export function ContactBlock() {
  return (
    <Card className="rounded-3xl border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-pattern opacity-5" />

      <CardContent className="p-8 lg:p-12 text-center relative">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold">Fale com nosso time agora</h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Tire suas dúvidas e faça seu orçamento pelo WhatsApp. Resposta em minutos!
            </p>
          </div>

          <Button
            size="lg"
            asChild
            className="text-base px-8 py-6 h-14 font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            <Link href="https://wa.me/5548999128310?text=Olá,%20preciso%20de%20ajuda%20com%20um%20pedido.">
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Abrir WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
