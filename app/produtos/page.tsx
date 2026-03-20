import type { Metadata } from "next"
import ProdutosPageClient from "./ProdutosPageClient"
import { createPageMetadata } from "@/lib/site"

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

export default function ProdutosPage() {
  return <ProdutosPageClient />
}
