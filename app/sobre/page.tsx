import type { Metadata } from "next"
import SobrePageClient from "./SobrePageClient"
import { createPageMetadata } from "@/lib/site"

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a Aplic Gráfica",
  description:
    "Conheça a história da Aplic Gráfica, gráfica rápida em Florianópolis com mais de 14 anos de experiência em impressão digital e comunicação visual.",
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
