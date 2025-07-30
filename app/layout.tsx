import type React from "react"
import type { Metadata } from "next"
import { Rethink_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rethink-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Aplic Gráfica - A Gráfica que você procura! | Florianópolis",
    template: "%s | Aplic Gráfica Florianópolis",
  },
  description:
    "Gráfica em Florianópolis com entrega grátis. Cartões, panfletos, banners, adesivos e mais. Produção expressa e qualidade profissional há mais de 14 anos.",
  icons: {
    icon: "/images/favicon.png",
  },
  keywords: [
    "gráfica florianópolis",
    "impressão",
    "cartão de visita",
    "panfletos",
    "banners",
    "adesivos",
    "comunicação visual",
  ],
  authors: [{ name: "Aplic Gráfica" }],
  creator: "Aplic Gráfica",
  publisher: "Aplic Gráfica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aplicgrafica.com.br"), // TODO: Substituir pela URL real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aplicgrafica.com.br", // TODO: Substituir pela URL real
    siteName: "Aplic Gráfica",
    title: "Aplic Gráfica - A Gráfica Rapida que você procura! | Florianópolis",
    description:
      "Gráfica em Florianópolis com entrega rápida. Cartões, panfletos, banners, adesivos e mais. Produção expressa e qualidade profissional há mais de 13 anos.",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Aplic Gráfica Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplic Gráfica - A Gráfica Rápida que você procura! | Florianópolis",
    description:
      "Gráfica em Florianópolis com entrega rápida. Cartões, panfletos, banners, adesivos e mais. Produção expressa e qualidade profissional há mais de 13 anos.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${rethinkSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
