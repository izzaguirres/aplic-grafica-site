"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <div className="relative reveal">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
              <Card className="rounded-3xl border-[#CDD2D7] bg-white h-full shadow-sm">
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#28282D] text-[#28282D]" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-[#CDD2D7]" />
                  </div>

                  <blockquote className="text-base lg:text-lg mb-6 flex-1 leading-relaxed text-[#28282D] font-medium">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-[#E6FF50] flex items-center justify-center border border-[#28282D]/10">
                      <span className="text-[#28282D] font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <cite className="font-bold text-[#28282D] not-italic">{testimonial.name}</cite>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="h-10 w-10 rounded-full border-2 border-[#CDD2D7] text-[#28282D] hover:bg-[#28282D] hover:text-[#E6FF50] hover:border-[#28282D] bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#28282D] scale-125" : "bg-[#CDD2D7] hover:bg-[#28282D]/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="h-10 w-10 rounded-full border-2 border-[#CDD2D7] text-[#28282D] hover:bg-[#28282D] hover:text-[#E6FF50] hover:border-[#28282D] bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
