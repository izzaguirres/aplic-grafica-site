import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { ScrollReveal } from "@/components/ScrollReveal"

const googleSans = localFont({
  src: "./fonts/GoogleSansFlex.ttf",
  variable: "--font-google-sans",
  weight: "100 1000",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aplicgrafica.com.br"),
  title: {
    default: "Aplic Gráfica | Gráfica Rápida em Florianópolis - Entrega Expressa",
    template: "%s | Aplic Gráfica Florianópolis",
  },
  description:
    "Gráfica em Florianópolis com entrega rápida. Cartões de Visita, Panfletos, Banners, Adesivos e Comunicação Visual. Peça pelo WhatsApp e receba em 24h.",
  keywords: [
    "gráfica florianópolis",
    "gráfica rápida",
    "cartão de visita florianópolis",
    "banners florianópolis",
    "panfletos",
    "adesivos",
    "comunicação visual",
    "impressão digital",
    "centro",
    "trindade",
    "estreito",
  ],
  authors: [{ name: "Aplic Gráfica" }],
  creator: "Aplic Gráfica",
  publisher: "Aplic Gráfica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aplicgrafica.com.br",
    siteName: "Aplic Gráfica Rápida",
    title: "Aplic Gráfica - A Melhor Gráfica de Florianópolis",
    description: "Impressão de alta qualidade com entrega expressa na Grande Florianópolis. Peça seu orçamento agora pelo WhatsApp.",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aplic Gráfica Florianópolis - Fachada e Produtos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplic Gráfica - Gráfica Rápida em Florianópolis",
    description: "Cartões, Banners e Adesivos com entrega expressa. Peça agora!",
    images: ["/images/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Florianópolis",
    "geo.position": "-27.594870;-48.548220", // Coordenadas aproximadas do Centro de Floripa
    "ICBM": "-27.594870, -48.548220",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  generator: 'v0.dev'
}

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Google Analytics & Ads - lazyOnload para não bloquear hidratação */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-761339571"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-761339571');
            ${gaId ? `gtag('config', '${gaId}');` : ''}

            function gtag_report_conversion() {
              gtag('event', 'conversion', {
                'send_to': 'AW-761339571/L8JaCPqqmJgBELO9hOsC'
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className={`${googleSans.variable} font-sans antialiased`}>
        {/* ... json-ld ... */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aplic Gráfica",
              "image": "https://aplicgrafica.com.br/images/thumbnail.png",
              "@id": "https://aplicgrafica.com.br",
              "url": "https://aplicgrafica.com.br",
              "telephone": "+5548999128310",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Jerônimo Coelho, 123 (Exemplo)", // Você pode ajustar o endereço exato depois
                "addressLocality": "Florianópolis",
                "addressRegion": "SC",
                "postalCode": "88010-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -27.594870,
                "longitude": -48.548220
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/aplicgrafica",
                "https://www.facebook.com/aplicgrafica"
              ]
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollReveal />
          <Header />
          <main className="min-h-screen">{children}</main>
          <FloatingWhatsApp />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
