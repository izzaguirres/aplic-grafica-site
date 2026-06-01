"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

const testimonials = [
  {
    name: "Laio",
    text: "Entrega rápida e material impecável.",
  },
  {
    name: "Giovanna",
    text: "Atendimento muito atencioso, resolveu tudo pelo WhatsApp.",
  },
  {
    name: "Mariana",
    text: "Preço justo e qualidade excelente, recomendo.",
  },
  {
    name: "Bruno",
    text: "Fecharam meu pedido em poucas horas, top!",
  },
  {
    name: "Fernando",
    text: "Já pedi várias vezes, sempre no prazo.",
  },
  {
    name: "Robson",
    text: "A arte ficou melhor do que eu imaginava.",
  },
  {
    name: "Lisandra",
    text: "Viraram parceiros fixos da nossa empresa.",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [maxIndex, next])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
              <Card className="rounded-2xl border-0 bg-[#F5F5F7] h-full shadow-none hover:shadow-md transition-all">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2">
                        <GoogleIcon />
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                          ))}
                        </div>
                     </div>
                     <span className="text-[10px] uppercase font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verificado
                     </span>
                  </div>

                  <blockquote className="text-base text-[#28282D] mb-6 flex-1 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <div className="flex items-center space-x-3 pt-4 border-t border-black/5">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-gray-600 text-xs">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                        <cite className="font-bold text-[#28282D] text-sm not-italic">{testimonial.name}</cite>
                        <span className="text-[10px] text-muted-foreground">Cliente via Google</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          aria-label="Depoimento anterior"
          className="hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-gray-400" aria-hidden="true" />
        </Button>

        <div className="flex space-x-2" role="tablist" aria-label="Navegação de depoimentos">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir para depoimento ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors transition-[width] duration-300 ${
                index === currentIndex ? "bg-[#28282D] w-6" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          aria-label="Próximo depoimento"
          className="hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-gray-400" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
