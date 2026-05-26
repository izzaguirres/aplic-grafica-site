import type { Metadata } from "next"
import SobrePageClient from "./SobrePageClient"
import { createPageMetadata } from "@/lib/site"

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a gráfica online em Florianópolis",
  description:
    "Conheça a Aplic Gráfica, gráfica online em Florianópolis com 15 anos de experiência em impressão digital, comunicação visual, entrega e retirada combinada.",
  path: "/sobre",
  keywords: [
    "sobre aplic gráfica",
    "gráfica rápida em florianópolis",
    "impressão digital florianópolis",
    "comunicação visual florianópolis",
  ],
})

export default function SobrePage() {
  return <SobrePageClient />
}
