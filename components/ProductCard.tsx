"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowRight, Zap } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"
import { Product } from "@/lib/products-data"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

// Hoisted: formatador criado uma única vez, reutilizado por todos os cards
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})

const formatCurrency = (value: number) => currencyFormatter.format(value)

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { handleWhatsAppClick } = useWhatsAppConversion()
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(0)

  const currentPriceItem = product.priceTable[selectedPriceIndex] || product.priceTable[0]
  const currentPrice = currentPriceItem.valor

  const selectorLabel = product.selectorLabel ?? "Quantidade"
  const itemUnit = product.itemUnit ?? "un."
  const renderItemLabel = (item: typeof currentPriceItem) =>
    item.label ?? (itemUnit ? `${item.quantidade} ${itemUnit}` : String(item.quantidade))

  const currentItemLabel = renderItemLabel(currentPriceItem)
  const quantityPhrase = currentPriceItem.label
    ? `*${product.name} ${currentPriceItem.label}*`
    : `*${currentPriceItem.quantidade} unidades* de *${product.name}*`

  const message = `Olá! Gostaria de encomendar ${quantityPhrase} por *${formatCurrency(currentPrice)}*. Como prosseguir?`

  return (
    <Card className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-border/60 bg-white shadow-tech hover:shadow-tech-hover transition-shadow duration-300">
      {/* Contextual Badge (top-right) */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-[#E6FF50] text-[#28282D] hover:bg-[#D9F040] font-bold border-0 rounded-md px-3 py-1 text-xs uppercase tracking-wide shadow-sm">
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Express Delivery Badge (top-left) */}
      {product.expressDelivery && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-[#28282D] text-[#E6FF50] hover:bg-black font-bold border-0 rounded-md px-2.5 py-1 text-[10px] uppercase tracking-wide shadow-sm flex items-center gap-1">
            <Zap className="w-3 h-3 fill-[#E6FF50]" />
            Até 3 dias
          </Badge>
        </div>
      )}

      {/* Image Area - Optimized to fill space */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 48px), (max-width: 1280px) calc(33vw - 48px), calc(25vw - 48px)"
          quality={72}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section - Grows to push footer down */}
      <CardContent className="flex flex-col flex-1 p-5 space-y-4">

        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight text-[#28282D] group-hover:text-black transition-colors min-h-[1.5rem]">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed min-h-[2.5rem]">
            {product.description}
          </p>
        </div>

        {/* Selector */}
        <div className="space-y-1.5 mt-auto pt-2">
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            {selectorLabel}
          </label>
          <Select
            value={selectedPriceIndex.toString()}
            onValueChange={(val) => setSelectedPriceIndex(Number(val))}
          >
            <SelectTrigger className="w-full bg-[#F5F5F7] border-0 focus:ring-1 focus:ring-[#E6FF50] text-[#28282D] font-medium h-9 rounded-lg">
              <SelectValue placeholder={`Selecione: ${selectorLabel.toLowerCase()}`}>
                {currentItemLabel}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {product.priceTable.map((item, index) => (
                <SelectItem key={`${item.label ?? item.quantidade}-${index}`} value={index.toString()}>
                  {renderItemLabel(item)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>

      {/* Footer Section - Always at bottom */}
      <CardFooter className="p-5 pt-0 mt-auto flex flex-col gap-4">
        {/* Price Display */}
        <div className="w-full flex items-baseline justify-between border-t border-border/40 pt-4">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">A partir de</span>
          <span className="text-2xl font-bold text-[#28282D] tracking-tight">
            {formatCurrency(currentPrice)}
          </span>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => handleWhatsAppClick(message, 'product_card', product.name)}
          className={cn(
            "w-full h-11 font-bold tracking-wide rounded-lg transition-colors transition-transform duration-300 border-0",
            "bg-[#E6FF50] text-[#28282D] hover:bg-[#D9F040]",
            "hover:translate-y-[-1px] active:translate-y-[0px] shadow-sm"
          )}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Cotar no WhatsApp
          <ArrowRight className="ml-2 h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  )
}
