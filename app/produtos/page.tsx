import type { Metadata } from "next"
import { JsonLd } from "@/components/JsonLd"
import ProdutosPageClient from "./ProdutosPageClient"
import { productsData } from "@/lib/products-data"
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site"

export const metadata: Metadata = createPageMetadata({
  title: "Produtos e Preços",
  description:
    "Confira o catálogo completo da Aplic Gráfica com cartões de visita, panfletos, banners, adesivos e outros materiais gráficos em Florianópolis.",
  path: "/produtos",
  keywords: [
    "produtos gráficos florianópolis",
    "catálogo gráfica florianópolis",
    "preço cartão de visita florianópolis",
    "panfletos banners adesivos florianópolis",
  ],
})

const productsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl("/produtos")}#breadcrumb`,
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
          name: "Produtos",
          item: absoluteUrl("/produtos"),
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl("/produtos")}#catalogo`,
      name: "Catálogo de produtos gráficos da Aplic Gráfica",
      description:
        "Catálogo de materiais gráficos, impressão digital e comunicação visual da Aplic Gráfica em Florianópolis.",
      itemListElement: productsData.map((product, index) => {
        const productUrl = absoluteUrl(product.landingPage ?? "/produtos")

        return {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            "@id": `${productUrl}#${product.id}`,
            name: product.name,
            description: product.description,
            url: productUrl,
            provider: {
              "@id": `${absoluteUrl("/")}#organization`,
              name: siteConfig.name,
            },
            areaServed: siteConfig.location.areaServed,
          },
        }
      }),
    },
  ],
}

export default function ProdutosPage() {
  return (
    <>
      <JsonLd data={productsSchema} />
      <ProdutosPageClient />
    </>
  )
}
