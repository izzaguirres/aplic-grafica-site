import { Hero } from "@/components/Hero"
import { StatsStrip } from "@/components/StatsStrip"
import { ProductGrid } from "@/components/ProductGrid"
import { Benefits } from "@/components/Benefits"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { CTASection } from "@/components/CTASection"
import { Section } from "@/components/Section"
import { FAQ } from "@/components/FAQ"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { productsData } from "@/lib/products-data"

export default function HomePage() {
  const featuredProducts = productsData.filter(p => p.isFeatured)
  const otherProducts = productsData.filter(p => !p.isFeatured)

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Trust Badges Strip */}
      <div className="reveal">
        <StatsStrip />
      </div>

      {/* Featured Section */}
      <Section className="bg-secondary/30 relative overflow-hidden reveal">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-4 reveal">
              <Star className="w-4 h-4 fill-primary" />
              Os Favoritos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 reveal delay-100">Mais Vendidos da Semana</h2>
            <p className="text-muted-foreground max-w-xl reveal delay-200">
              Qualidade comprovada por centenas de clientes. Produção rápida e acabamento impecável.
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </Section>

      {/* Main Catalog */}
      <Section id="catalogo" className="reveal">
        <ProductGrid 
          products={otherProducts} 
          title="Catálogo Completo" 
          subtitle="Encontre exatamente o que sua empresa precisa para se destacar." 
        />
      </Section>

      {/* Why Choose Us */}
      <Section background="secondary" className="border-t border-border/50 reveal">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 reveal">Por que escolher a Aplic Gráfica?</h2>
          <p className="text-muted-foreground reveal delay-100">Tecnologia de ponta e atendimento humanizado.</p>
        </div>
        <Benefits />
      </Section>

      {/* About Teaser */}
      <Section className="bg-gradient-to-b from-background to-secondary/20 reveal">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight reveal">
              Excelência Gráfica há mais de 14 anos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed reveal delay-100">
              Não somos apenas uma gráfica online. Somos parceiros do seu negócio. 
              Com parque gráfico próprio em Florianópolis, garantimos agilidade real 
              e controle total de qualidade do arquivo à entrega.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 reveal delay-200">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Link href="/sobre">
                Conheça nossa História
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="reveal">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 reveal">Quem imprime, recomenda</h2>
        </div>
        <TestimonialsCarousel />
      </Section>

      <Section background="secondary" className="reveal">
        <FAQ />
      </Section>

      <div className="reveal">
        <CTASection
          headline="Seu projeto pronto para imprimir?"
          subtitle="Ou precisa de ajuda com a arte? Nossa equipe está pronta para te atender agora."
          buttonText="Chamar no WhatsApp"
          buttonUrl="https://wa.me/5548999128310?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
        />
      </div>
    </div>
  )
}