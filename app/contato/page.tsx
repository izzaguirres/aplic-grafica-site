import type { Metadata } from "next"
import ContatoPageClient from "./ContatoPageClient"
import { createPageMetadata } from "@/lib/site"

export const metadata: Metadata = createPageMetadata({
  title: "Contato e Orçamentos",
  description:
    "Fale com a Aplic Gráfica pelo WhatsApp para solicitar orçamento, enviar arquivos, acompanhar pedidos e tirar dúvidas em Florianópolis.",
  path: "/contato",
  keywords: [
    "contato gráfica florianópolis",
    "orçamento gráfica florianópolis",
    "whatsapp gráfica florianópolis",
    "enviar arquivo gráfica",
  ],
})

export default function ContatoPage() {
  return <ContatoPageClient />
}
