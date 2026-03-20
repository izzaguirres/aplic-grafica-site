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
  title: "Aplic Gráfica | Gráfica Rápida em Florianópolis - Entrega Expressa",
  description:
    "Gráfica em Florianópolis com entrega rápida para cartões de visita, panfletos, banners, adesivos e comunicação visual. Atendimento ágil pelo WhatsApp.",
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
  },
} as const

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return siteConfig.url
  if (/^https?:\/\//i.test(path)) return path
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
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
