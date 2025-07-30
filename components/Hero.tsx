import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowRight, Sparkles, Star } from "lucide-react"

export function Hero() {
  const products = [
    "Cartões de Visita",
    "Panfletos",
    "Banners",
    "Adesivos",
    "Etiquetas",
    "Cardápios",
    "Blocos",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="flex flex-col items-center text-center py-12 md:py-16 lg:py-20 xl:py-24 space-y-6 md:space-y-8">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-md border-white/30 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-foreground hover:bg-white/30 transition-colors"
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Mais de 14 anos de experiência</span>
            <span className="sm:hidden">14+ anos</span>
            <div className="flex items-center gap-1 ml-1 md:ml-2">
              <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-foreground text-foreground" />
              <span className="text-xs">4.8</span>
            </div>
          </Badge>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4 max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
              A Gráfica Rápida que você procura!
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium px-4">
              Entrega em toda Florianópolis. Produção expressa e qualidade profissional para o seu negócio.
            </p>
          </div>

          {/* Products Showcase */}
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 lg:gap-3">
              {products.map((product) => (
                <div
                  key={product}
                  className="group relative overflow-hidden rounded-lg md:rounded-xl bg-white/60 dark:bg-card/60 backdrop-blur-sm border border-border/50 px-2 md:px-3 py-1.5 md:py-2 hover:bg-white/80 dark:hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span className="text-xs md:text-sm font-semibold text-foreground relative z-10">{product}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full max-w-md sm:max-w-lg">
            <Button
              size="lg"
              asChild
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-2xl shadow-lime-500/25 hover:shadow-3xl hover:shadow-lime-500/30 hover:from-lime-500 hover:to-lime-600 transition-all duration-300 hover:scale-105 rounded-2xl border-0"
            >
              <Link href="https://wa.me/5548999128310?text=Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.">
                <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Conversar no WhatsApp
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 bg-white text-gray-900 transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <Link href="#mais-vendidos">
                Ver Produtos
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
