"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"
import { cn } from "@/lib/utils"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(true) // Começa aberto o balãozinho se quiser
  const { handleWhatsAppClick } = useWhatsAppConversion()

  useEffect(() => {
    const handleScroll = () => {
      // Aparece depois de rolar 300px (quando o Hero começa a sumir)
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
      
      {/* Balão de CTA (Opcional - aumenta conversão) */}
      {isOpen && (
        <div className="bg-white p-4 rounded-xl shadow-xl border border-border max-w-[250px] relative animate-in zoom-in origin-bottom-right">
            <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar balão de mensagem"
                className="absolute -top-2 -left-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
            >
                <X className="w-3 h-3 text-gray-500" aria-hidden="true" />
            </button>
            <p className="text-sm font-medium text-gray-800 mb-2">
                👋 Precisa de um orçamento rápido?
            </p>
            <Button 
                size="sm" 
                variant="link" 
                className="p-0 h-auto text-green-600 font-bold"
                onClick={() => handleWhatsAppClick(undefined, 'floating_bubble')}
            >
                Falar com atendente &rarr;
            </Button>
            {/* Triângulo do balão */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-border"></div>
        </div>
      )}

      {/* Botão Principal */}
      <Button
        onClick={() => handleWhatsAppClick(undefined, 'floating_button')}
        size="icon"
        className={cn(
          "h-16 w-16 rounded-full shadow-2xl transition-transform transition-colors duration-300 hover:scale-110",
          "bg-[#25D366] hover:bg-[#128C7E] text-white border-4 border-white"
        )}
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Falar no WhatsApp</span>
        
        {/* Ping Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping duration-1000 -z-10"></span>
      </Button>
    </div>
  )
}
