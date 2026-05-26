"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, CheckCircle2 } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

interface LpHeroProps {
  kicker?: string
  headline: ReactNode
  subheadline: ReactNode
  priceAnchor?: string
  whatsappMessage: string
  analyticsSource?: string
  bullets?: string[]
}

export function LpHero({
  kicker = "15 anos em Florianópolis · 4.5★ no Google",
  headline,
  subheadline,
  priceAnchor,
  whatsappMessage,
  analyticsSource = "lp_hero",
  bullets,
}: LpHeroProps) {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <section className="relative overflow-hidden bg-background pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />

      <div className="container relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {kicker && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/70 border border-border text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              {kicker}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.05]">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subheadline}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-xs sm:text-sm font-semibold text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full max-w-md sm:max-w-lg justify-center">
            <Button
              size="lg"
              onClick={() => handleWhatsAppClick(whatsappMessage, analyticsSource)}
              className="h-14 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform transition-colors rounded-xl border-0 shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Orçar no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="h-14 px-8 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors w-full sm:w-auto"
            >
              <Link href="/contato">
                Tirar dúvida no WhatsApp
              </Link>
            </Button>
          </div>

          {priceAnchor && (
            <p className="text-sm font-semibold text-muted-foreground pt-2">
              {priceAnchor}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
