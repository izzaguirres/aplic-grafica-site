"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowRight, Zap, CheckCircle2 } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

export function Hero() {
  const { handleWhatsAppClick } = useWhatsAppConversion()
  
  const tags = [
    "Entrega Agilizada",
    "Alta Definição",
    "Atendimento Humano",
    "Parque Gráfico Próprio"
  ]

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />

      <div className="container relative z-20">
        <div className="flex flex-col items-center text-center py-20 lg:py-32 space-y-8">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-md border border-border/50 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              A Gráfica Rápida que você procura em Florianópolis
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#28282D] leading-[0.95] animate-fade-in [animation-delay:100ms]">
              Sua marca, impressa com <span className="relative inline-block text-[#28282D]">
                excelência
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#E6FF50]" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>.
            </h1>
            <p className="text-xl md:text-2xl text-[#28282D]/70 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
              Do cartão de visita ao banner gigante. Qualidade premium e agilidade que seu negócio precisa para crescer.
            </p>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in [animation-delay:300ms]">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#CDD2D7]/30 border border-[#CDD2D7] text-sm font-semibold text-[#28282D]">
                <CheckCircle2 className="w-4 h-4 text-[#28282D]" />
                {tag}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full max-w-md sm:max-w-lg justify-center animate-fade-in [animation-delay:400ms]">
            <Button
              size="lg"
              onClick={() => handleWhatsAppClick(undefined, 'hero_cta')}
              className="h-14 px-8 text-base font-bold bg-[#E6FF50] text-[#28282D] hover:bg-[#D9F040] hover:scale-105 transition-all rounded-xl border-0 shadow-lg shadow-[#E6FF50]/20"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-base font-bold border-2 border-[#CDD2D7] text-[#28282D] hover:bg-[#CDD2D7]/20 transition-all rounded-xl"
            >
              <Link href="#catalogo">
                Ver Catálogo
                <Zap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}