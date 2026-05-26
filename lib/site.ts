import type { Metadata } from "next"

function normalizeUrl(value?: string) {
  if (!value) return null

  const trimmed = value.trim().replace(/\/+$/, "")
  if (!trimmed) return null

  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) || "https://aplicgrafica.com.br"

export const siteConfig = {
  name: "Aplic Gráfica",
  shortName: "Aplic Gráfica",
  url: siteUrl,
  title: "Gráfica em Florianópolis | Aplic Gráfica - Entrega Rápida",
  description:
    "Gráfica online em Florianópolis para cartões de visita, panfletos, banners, adesivos e comunicação visual. Atendimento pelo WhatsApp, entrega e retirada combinadas.",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  locale: "pt_BR",
  email: "comercialaplic@hotmail.com",
  phoneDisplay: "(48) 99912-8310",
  phoneE164: "+5548999128310",
  whatsappUrl: "https://wa.me/5548999128310",
  foundedYear: "2011",
  social: {
    instagram: "https://www.instagram.com/aplicgrafica",
    facebook: "https://www.facebook.com/aplicgrafica",
  },
  location: {
    city: "Florianópolis",
    region: "SC",
    country: "BR",
    areaServed: "Grande Florianópolis",
    serviceArea: ["Florianópolis", "São José", "Palhoça", "Biguaçu"],
    operationalOfficeNote:
      "Escritório operacional em Florianópolis. Atendimento pelo WhatsApp; retirada somente com horário combinado.",
  },
} as const

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return siteConfig.url
  if (/^https?:\/\//i.test(path)) return path
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function getYearsInBusiness() {
  return new Date().getFullYear() - parseInt(siteConfig.foundedYear, 10)
}

type PageMetadataOptions = {
  title: string
  description: string
  path?: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: "Aplic Gráfica em Florianópolis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.twitterImage)],
    },
  }
}

type ServicePageSchemaOptions = {
  path: string
  name: string
  description: string
  serviceType: string
  faqs?: Array<{ question: string; answer: string }>
  relatedProducts?: Array<{ name: string; description: string; url?: string }>
}

export function createServicePageSchema({
  path,
  name,
  description,
  serviceType,
  faqs = [],
  relatedProducts = [],
}: ServicePageSchemaOptions) {
  const pageUrl = absoluteUrl(path)

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name,
        description,
        serviceType,
        provider: {
          "@type": ["Organization", "LocalBusiness"],
          "@id": `${absoluteUrl("/")}#organization`,
          name: siteConfig.name,
          url: absoluteUrl("/"),
          telephone: siteConfig.phoneE164,
          email: siteConfig.email,
          image: absoluteUrl("/images/thumbnail.png"),
          logo: absoluteUrl("/images/logo.png"),
          areaServed: siteConfig.location.serviceArea,
          address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.region,
            addressCountry: siteConfig.location.country,
          },
        },
        areaServed: siteConfig.location.serviceArea,
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl("/contato"),
          availableLanguage: ["pt-BR"],
        },
        url: pageUrl,
        hasOfferCatalog:
          relatedProducts.length > 0
            ? {
                "@type": "OfferCatalog",
                name: "Produtos relacionados",
                itemListElement: relatedProducts.map((product) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: product.name,
                    description: product.description,
                    url: product.url ? absoluteUrl(product.url) : pageUrl,
                  },
                })),
              }
            : undefined,
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  }
}
