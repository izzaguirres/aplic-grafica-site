import type { Metadata } from "next";
import NovaHomePage from "./nova-home/page";
import { productsData } from "@/lib/products-data";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

const homeTitle =
  "Gráfica em Florianópolis - Cartões, Banners, Panfletos e Adesivos | Aplic Gráfica";
const homeDescription =
  "Aplic Gráfica em Florianópolis com produção ágil para cartões de visita, panfletos, banners, adesivos e comunicação visual. Atendimento rápido pelo WhatsApp.";

const featuredProducts = productsData
  .filter((product) => product.isFeatured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

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
      publisher: { "@id": `${absoluteUrl("/")}#organization` },
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
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
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
      provider: { "@id": `${absoluteUrl("/")}#organization` },
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
};

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
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <NovaHomePage />
    </>
  );
}
