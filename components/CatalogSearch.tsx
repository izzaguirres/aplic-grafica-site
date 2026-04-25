"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/ProductGrid"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"
import type { Product } from "@/lib/products-data"

interface CatalogSearchProps {
  products: Product[]
  title?: string
  subtitle?: string
}

// Unicode range U+0300–U+036F cobre os acentos após normalize("NFD")
const DIACRITICS_REGEX = /[̀-ͯ]/g

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .trim()
}

export function CatalogSearch({ products, title, subtitle }: CatalogSearchProps) {
  const [query, setQuery] = useState("")
  const { handleWhatsAppClick } = useWhatsAppConversion()

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalize(query)
    if (!normalizedQuery) return products

    return products.filter((product) => {
      const haystack = normalize(
        [product.name, product.description, product.category ?? ""].join(" "),
      )
      return haystack.includes(normalizedQuery)
    })
  }, [products, query])

  const missingMessage = query.trim()
    ? `Olá! Procurei por *${query.trim()}* no site e não encontrei. Vocês fazem esse produto? Gostaria de um orçamento.`
    : "Olá! Quero consultar um produto que não está no catálogo. Podem me ajudar?"

  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-10 md:mb-12 space-y-3">
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="max-w-xl mx-auto mb-8 md:mb-10 relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
          aria-hidden="true"
        />
        <Input
          type="text"
          inputMode="search"
          placeholder="Buscar produto · ex: cartão, banner, crachá..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-12 pl-11 pr-11 bg-white border-[#CDD2D7] focus-visible:ring-[#E6FF50] text-base rounded-xl shadow-sm"
          aria-label="Buscar produto"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Limpar busca"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="max-w-xl mx-auto text-center py-12 md:py-16 px-6 rounded-2xl border border-dashed border-border bg-secondary/30">
          <Search className="w-10 h-10 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
            Não achamos esse produto por aqui.
          </h3>
          <p className="text-muted-foreground mb-6">
            Mesmo assim, a gente pode fazer sob medida. Manda o que precisa no WhatsApp que a gente cota.
          </p>
          <Button
            onClick={() => handleWhatsAppClick(missingMessage, "catalog_empty_state")}
            className="bg-[#E6FF50] text-[#28282D] hover:bg-[#D9F040] font-bold rounded-xl h-11 px-6"
          >
            Chamar no WhatsApp
          </Button>
        </div>
      )}
    </div>
  )
}
