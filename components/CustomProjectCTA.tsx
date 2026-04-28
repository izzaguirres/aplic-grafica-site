"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

const message = "Olá, tenho um projeto personalizado e gostaria de um orçamento."

export function CustomProjectCTA() {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <Button
      size="lg"
      onClick={() => handleWhatsAppClick(message, "custom_project_home")}
      className="bg-white text-black hover:bg-gray-100 font-bold h-12 px-8 rounded-full shadow-lg transition-all"
    >
      Cotar Projeto Especial
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
