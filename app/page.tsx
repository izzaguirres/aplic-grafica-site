import type { Metadata } from "next"
import { Hero } from "@/components/Hero"
import { ProductGrid } from "@/components/ProductGrid"
import { CatalogSearch } from "@/components/CatalogSearch"
import { Benefits } from "@/components/Benefits"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { CTASection } from "@/components/CTASection"
import { CustomProjectCTA } from "@/components/CustomProjectCTA"
import { HomeWhatsAppCTA } from "@/components/HomeWhatsAppCTA"
import { SitesBanner } from "@/components/SitesBanner"
import { Section } from "@/components/Section"
import { FAQ } from "@/components/FAQ"
import Link from "next/link"
import { Star } from "lucide-react"
import { productsData } from "@/lib/products-data"
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site"

const homeTitle = "Gráfica em Florianópolis - Cartões, Banners, Panfletos e Adesivos | Aplic Gráfica"
const homeDescription =
  "Aplic Gráfica em Florianópolis com produção ágil para cartões de visita, panfletos, banners, adesivos e comunicação visual. Atendimento rápido pelo WhatsApp."

const featuredProducts = productsData
  .filter((product) => product.isFeatured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: absoluteUrl("/"),
      name: siteConfig.name,
      description: homeDescription,
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${absoluteUrl("/")}#organization`,
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteConfig.name,
      url: absoluteUrl("/"),
      image: absoluteUrl("/images/thumbnail.png"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo.png"),
      },
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      foundingDate: siteConfig.foundedYear,
      areaServed: siteConfig.location.areaServed,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: siteConfig.phoneE164,
          email: siteConfig.email,
          url: siteConfig.whatsappUrl,
          availableLanguage: ["pt-BR"],
          areaServed: "BR-SC",
        },
      ],
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
      knowsAbout: [
        "Cartões de visita",
        "Panfletos",
        "Banners em lona",
        "Adesivos",
        "Comunicação visual",
        "Impressão digital",
      ],
    },
    {
      "@type": "Service",
      "@id": `${absoluteUrl("/")}#service`,
      name: "Impressão gráfica rápida e comunicação visual em Florianópolis",
      serviceType: "Serviços gráficos e impressão digital",
      provider: {
        "@id": `${absoluteUrl("/")}#organization`,
      },
      areaServed: siteConfig.location.areaServed,
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: absoluteUrl("/contato"),
        availableLanguage: ["pt-BR"],
      },
    },
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl("/")}#featured-products`,
      name: "Produtos em destaque",
      itemListElement: featuredProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(product.landingPage ?? "/produtos"),
        name: product.name,
        description: product.description,
      })),
    },
  ],
}

export const metadata: Metadata = createPageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  keywords: [
    "gráfica rápida florianópolis",
    "gráfica em florianópolis",
    "cartão de visita florianópolis",
    "panfletos florianópolis",
    "banners florianópolis",
    "adesivos florianópolis",
    "comunicação visual florianópolis",
  ],
})

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />

      {/* Featured Section */}
      <Section size="sm" className="bg-secondary/30 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 text-foreground text-sm font-bold uppercase tracking-wider mb-4 border border-border/50">
              <Star className="w-4 h-4 fill-primary text-primary" />
              Os Favoritos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Mais vendidos</h2>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </Section>

      {/* Main Catalog */}
      <Section id="catalogo">
        <CatalogSearch
          products={productsData}
          title="Catálogo Completo"
          subtitle="Busque pelo produto que tua empresa precisa. Se não estiver aqui, a gente faz sob medida."
        />
      </Section>

      <Section size="sm" className="pt-0 md:pt-0">
        <SitesBanner />
      </Section>

      {/* Custom Project Section (New) */}
      <Section className="bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
            <div className="space-y-4 max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-2 border border-white/20">
                    Sob Medida
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Não encontrou o que procurava?
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Fazemos projetos personalizados para sua empresa. Adesivos especiais, cortes diferenciados, grandes formatos e muito mais.
                </p>
            </div>
            <CustomProjectCTA />
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="secondary" className="border-t border-border/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Por que escolher a Aplic Gráfica?</h2>
          <p className="text-muted-foreground">
            Orçamento pelo WhatsApp, prazo combinado e entrega no seu endereço.
          </p>
        </div>
        <Benefits />
      </Section>

      {/* About Teaser */}
      <Section className="bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              15 anos em Florianópolis
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              São 15 anos produzindo material gráfico para empresas em Floripa.
              Você pede pelo WhatsApp, a gente confere o arquivo, combina o prazo
              e entrega no seu endereço.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <HomeWhatsAppCTA />
            <Link
              href="/sobre"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/70 border border-border text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-4">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            4.5 no Google · Perfil da Aplic
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            O que os clientes dizem no Google
          </h2>
          <p className="text-muted-foreground">
            Avaliações publicadas no perfil da Aplic Gráfica no Google.
          </p>
        </div>
        <TestimonialsCarousel />
      </Section>

      <Section background="secondary">
        <FAQ />
      </Section>

      <div>
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
