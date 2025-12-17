"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, CheckCircle2 } from "lucide-react"
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
        <div className="flex flex-col items-center text-center pt-20 pb-12 lg:py-32 space-y-6 lg:space-y-8">
          
          {/* Social Proof Badge (Novo) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 animate-fade-in">
             <div className="flex items-center gap-1">
                {[1,2,3,4].map(i => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                {/* Meia estrela para o 4.5 */}
                <svg className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                     <defs>
                        <linearGradient id="half">
                            <stop offset="50%" stopColor="currentColor"/>
                            <stop offset="50%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
             </div>
             <span className="text-sm font-semibold text-muted-foreground">
                4.5/5 no Google • +10.000 Clientes Atendidos
             </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1] sm:leading-[0.95] animate-fade-in anim-delay-200">
              A Gráfica Rápida que você procura em <span className="relative inline-block text-foreground">
                Floripa
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>.
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in anim-delay-400">
              Entrega em toda Grande Florianópolis, qualidade superior e orçamento num clique. Do cartão ao banner, nós resolvemos.
            </p>
          </div>

          {/* Feature Tags (Mobile optimized) */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 animate-fade-in anim-delay-600">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-xs sm:text-sm font-semibold text-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" />
                {tag}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 w-full max-w-md sm:max-w-lg justify-center animate-fade-in anim-delay-800">
            <Button
              size="lg"
              onClick={() => handleWhatsAppClick(undefined, 'hero_cta')}
              className="h-14 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all rounded-xl border-0 shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Orçar Agora no WhatsApp
            </Button>

            <Button
              size="lg"
              variant="ghost"
              asChild
              className="h-14 px-8 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all w-full sm:w-auto"
            >
              <Link href="#catalogo">
                Ver catálogo completo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}