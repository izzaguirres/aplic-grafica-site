"use client"

import { ArrowUpRight, Globe2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

export function SitesBanner() {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-10 text-white shadow-2xl shadow-zinc-950/10 md:px-12 md:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            <Globe2 className="h-4 w-4" aria-hidden="true" />
            Também fazemos sites
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sua marca na rua e na internet.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Além dos materiais gráficos, sua empresa pode ter um site claro,
              responsivo e alinhado à mesma marca.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          onClick={() =>
            handleWhatsAppClick(
              "Olá! Vim do site da Aplic e gostaria de conversar sobre a criação de um site para minha empresa.",
              "sites_banner",
            )
          }
          className="w-full shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 lg:w-auto"
        >
          <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          Conversar sobre um site
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
