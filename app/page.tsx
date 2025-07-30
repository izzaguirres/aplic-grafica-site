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
import { ArrowRight } from "lucide-react"

const maisVendidos = [
  {
    name: "Cartão de Visita - Brilho Total",
    variations: "à partir de 100 unidades",
    image: "/images/produtos/Cartao de Visita - Brilho Total.png",
  },
  {
    name: "Cartão de Visita - Fosco",
    variations: "à partir de 500 unidades",
    image: "/images/produtos/Cartao de Visita - Fosco.png",
  },
  {
    name: "Cartão de Visita - Mini",
    variations: "à partir de 500 unidades",
    image: "/images/produtos/Mini Cartao de Visita.png",
  },
  {
    name: "Cartão com Cantos Arredondados",
    variations: "à partir de 500 unidades",
    image: "/images/produtos/Cartao de Visita - Cantos Arredondados.png",
  },
  {
    name: "Panfleto 10×14cm",
    variations: "à partir de 1.000 unidades",
    image: "/images/produtos/Panfleto 10x14.png",
  },
  {
    name: "Banner em Lona",
    variations: "à partir de 50x70cm",
    image: "/images/produtos/Banner em Lona.png",
  },
  {
    name: "Etiqueta Adesiva",
    variations: "à partir de 100 unidades",
    image: "/images/produtos/Etiqueta Adesiva.png",
  },
  {
    name: "Lona com Ilhós",
    variations: "à partir de 50x50cm",
    image: "/images/produtos/Lona com Ilhos.png",
  },
]

const maisProcurados = [
  {
    name: "Tag com Furo",
    variations: "à partir de 250 unidades",
    image: "/images/produtos/Tag com Furo.png",
  },
  {
    name: "Cavalete de Ferro",
    variations: "50x100cm",
    image: "/images/produtos/Cavalete de Ferro.png",
  },
  {
    name: "Cavalete de Madeira",
    variations: "50x100cm",
    image: "/images/produtos/Cavalete de Madeira.png",
  },
  {
    name: "Blocos/Receituários",
    variations: "à partir de 10 Blocos",
    image: "/images/produtos/Blocos Receituarios.png",
  },
  {
    name: "Placa Não Perturbe",
    variations: "à partir de 100 unidades",
    image: "/images/produtos/Nao Perturbe.png",
  },
  {
    name: "Crachá Empresarial",
    variations: "à partir de 5 unidades",
    image: "/images/produtos/Cracha Empresarial.png",
  },
  {
    name: "Pasta com Bolso",
    variations: "à partir de 25 unidades",
    image: "/images/produtos/Pasta com Bolso.png",
  },
  {
    name: "Impressão Digital",
    variations: "à partir de 50x50cm",
    image: "/images/produtos/Impressao Digital.png",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />

      <Section id="mais-vendidos">
        <ProductGrid products={maisVendidos} title="Mais Vendidos" />
      </Section>

      <Section background="secondary">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Aplic Gráfica?</h2>
        <Benefits />
      </Section>

      <Section>
        <ProductGrid products={maisProcurados} title="Os Mais Procurados" />
      </Section>

      <Section background="secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Confiança e qualidade gráfica há mais de 14 anos</h2>
            <p className="text-lg text-muted-foreground">
              Atendemos empresas e profissionais com impressão offset e digital, comunicação visual, adesivos e lonas.
              Produção e entrega expressas em toda Florianópolis. Nosso compromisso é unir qualidade, prazo e
              atendimento rápido para você vender mais.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 bg-white text-gray-900 transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg hover:shadow-xl"
          >
            <Link href="/sobre">
              Conheça nossa história
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Confiado por muitos</h2>
        <TestimonialsCarousel />
      </Section>

      <Section background="secondary">
        <FAQ />
      </Section>

      <CTASection
        headline="Pronto para começar?"
        subtitle="Fale agora pelo WhatsApp e receba seu orçamento em minutos."
        buttonText="Conversar no WhatsApp"
        buttonUrl="https://wa.me/5548999128310?text=Olá,%20preciso%20de%20ajuda%20com%20um%20pedido."
      />
    </>
  )
}
