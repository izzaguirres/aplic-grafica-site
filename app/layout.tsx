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
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { absoluteUrl, siteConfig } from "@/lib/site"

const googleSans = localFont({
  src: "./fonts/GoogleSansFlex.ttf",
  variable: "--font-google-sans",
  weight: "100 1000",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "gráfica florianópolis",
    "gráfica rápida",
    "cartão de visita florianópolis",
    "banners florianópolis",
    "panfletos",
    "adesivos",
    "etiqueta adesiva florianópolis",
    "blocos receituários florianópolis",
    "comunicação visual",
    "impressão digital",
    "centro",
    "trindade",
    "estreito",
  ],
  authors: [{ name: siteConfig.name, url: absoluteUrl("/") }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.twitterImage)],
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
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script id="gtm-base" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGJD4Q33');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-761339571"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-761339571');
            ${gaId ? `gtag('config', '${gaId}');` : ''}

            function gtag_report_conversion() {
              gtag('event', 'conversion', {
                'send_to': 'AW-761339571/gKh7CPWrrZgBELO9hOsC',
                'transport_type': 'beacon'
              });
              return false;
            }
          `}
        </Script>
        <Script id="whatsapp-click-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var target = e.target;
              if (!target) return;
              var link = target.closest ? target.closest('a') : null;
              if (!link) return;

              var href = link.getAttribute('href') || '';
              var isWhatsapp = /wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href);
              if (!isWhatsapp) return;

              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'whatsapp_click',
                whatsapp_url: href,
                page_location: window.location.href,
                page_path: window.location.pathname,
                page_title: document.title
              });

              // Push conversion via dataLayer with beacon transport.
              // Using dataLayer (not direct gtag()) ensures the event is queued
              // even if gtag.js hasn't finished loading yet — gtag processes
              // the queue on init. transport_type:'beacon' makes the request
              // survive the navigation to wa.me.
              window.dataLayer.push(['event', 'conversion', {
                send_to: 'AW-761339571/gKh7CPWrrZgBELO9hOsC',
                event_category: 'lead',
                event_label: 'whatsapp_click',
                value: 1,
                transport_type: 'beacon'
              }]);
            }, true);
          `}
        </Script>
      </head>
      <body className={`${googleSans.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGJD4Q33"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
