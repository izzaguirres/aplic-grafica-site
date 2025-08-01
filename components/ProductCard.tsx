"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowRight } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

interface ProductCardProps {
  name: string
  variations?: string
  image: string
  whatsappMessage?: string
}

export function ProductCard({ name, variations, image, whatsappMessage }: ProductCardProps) {
  const { handleWhatsAppClick } = useWhatsAppConversion()
  
  const defaultMessage = `Olá,%20vim%20do%20site.%20Quero%20orçamento%20de:%20${encodeURIComponent(name)}${variations ? `%0AVariação/Medida:%20${encodeURIComponent(variations)}` : ""}%0AObservações:%20`

  return (
    <Card className="group relative overflow-hidden rounded-3xl border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2 h-full">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-border/50 via-transparent to-border/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-3xl bg-white/90 backdrop-blur-sm" />

      <CardContent className="relative p-3 md:p-4">
        <div className="aspect-square relative mb-3 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/30">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating Badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Badge className="bg-primary/90 text-primary-foreground text-xs font-semibold">Disponível</Badge>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3 text-center">
          <h3 className="font-bold text-sm md:text-base lg:text-lg leading-tight line-clamp-2 group-hover:text-foreground transition-colors duration-300 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
            {name}
          </h3>
          {variations && (
            <Badge variant="secondary" className="text-xs font-medium bg-secondary/80 text-muted-foreground mx-auto">
              {variations}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="relative p-3 md:p-4 pt-0">
        <Button
          onClick={() => handleWhatsAppClick(whatsappMessage || defaultMessage, 'product_card', name)}
          className="w-full h-11 font-semibold bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-lg shadow-lime-500/25 hover:shadow-xl hover:shadow-lime-500/30 hover:from-lime-500 hover:to-lime-600 transition-all duration-300 rounded-2xl group/btn border-0"
        >
          <MessageCircle className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
          <span className="md:hidden">Comprar</span>
          <span className="hidden md:inline">Comprar pelo WhatsApp</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Button>
      </CardFooter>
    </Card>
  )
}
