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
        <div className="flex flex-col items-center text-center py-16 md:py-20 lg:py-24 space-y-8">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border-white/30 px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/30 transition-colors"
          >
            <Sparkles className="h-4 w-4" />
            Mais de 14 anos de experiência
            <div className="flex items-center gap-1 ml-2">
              <Star className="h-3 w-3 fill-foreground text-foreground" />
              <span className="text-xs">4.8</span>
            </div>
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-foreground">
              A Gráfica Rápida que você procura!
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              Entrega em toda Florianópolis. Produção expressa e qualidade profissional para o seu negócio.
            </p>
          </div>

          {/* Products Showcase */}
          <div className="w-full max-w-6xl">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {products.map((product) => (
                <div
                  key={product}
                  className="group relative overflow-hidden rounded-xl bg-white/60 dark:bg-card/60 backdrop-blur-sm border border-border/50 px-3 py-2 hover:bg-white/80 dark:hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span className="text-xs md:text-sm font-semibold text-foreground relative z-10">{product}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-base font-bold bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-2xl shadow-lime-500/25 hover:shadow-3xl hover:shadow-lime-500/30 hover:from-lime-500 hover:to-lime-600 transition-all duration-300 hover:scale-105 rounded-2xl border-0"
            >
              <Link href="https://wa.me/5548999128310?text=Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.">
                <MessageCircle className="mr-3 h-6 w-6" />
                Conversar no WhatsApp
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-base font-bold border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 bg-white text-gray-900 transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <Link href="#mais-vendidos">
                Ver Produtos
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
