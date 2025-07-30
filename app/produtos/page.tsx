import type { Metadata } from "next"
import ProdutosPageClient from "./ProdutosPageClient"

// TODO: Implementar metadata dinâmica
export const metadata: Metadata = {
  title: "Produtos - Catálogo Completo",
  description:
    "Confira nosso catálogo completo de produtos gráficos: cartões, panfletos, banners, adesivos e muito mais.",
}

export default function ProdutosPage() {
  return <ProdutosPageClient />
}
