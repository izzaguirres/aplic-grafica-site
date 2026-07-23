"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

const message = "Olá, gostaria de fazer um orçamento com a Aplic Gráfica."

export function HomeWhatsAppCTA() {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <Button
      size="lg"
      onClick={() => handleWhatsAppClick(message, "home_about_cta")}
      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all"
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      Orçar pelo WhatsApp
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
