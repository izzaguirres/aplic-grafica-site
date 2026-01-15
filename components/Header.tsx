"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

// Hoisted: array estático fora do componente para evitar recriação a cada render
const navItems = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { handleWhatsAppClick } = useWhatsAppConversion()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Handler dentro do useEffect para evitar recriação desnecessária
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow transition-[padding] duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#CDD2D7]/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <Image
              src="/images/favicon.png"
              alt="Aplic Gráfica Ícone"
              fill
              priority
              className="object-contain"
              sizes="40px"
            />
          </div>
          <div className="relative h-6 w-24 md:h-8 md:w-32 transition-opacity duration-300 group-hover:opacity-80">
            <Image
              src="/images/logo.png"
              alt="Aplic Gráfica"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 768px) 96px, 128px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                isScrolled
                ? "text-zinc-800 hover:bg-zinc-100 hover:text-black"
                : "text-zinc-800 hover:bg-white/50 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            onClick={() => handleWhatsAppClick(undefined, 'header')}
            className="ml-4 bg-[#18181b] text-[#E6FF50] hover:bg-[#18181b]/90 font-bold rounded-xl shadow-md hover:shadow-lg transition-colors transition-shadow"
          >
            Orçamento Rápido
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#28282D]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="sr-only">
                <SheetTitle>Menu de Navegação</SheetTitle>
                <SheetDescription>Navegue pelas páginas do site</SheetDescription>
              </div>
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    handleWhatsAppClick(undefined, 'header_mobile')
                    setIsOpen(false)
                  }}
                  className="w-full bg-[#E6FF50] text-[#28282D] hover:bg-[#E6FF50]/90 font-bold"
                >
                  Orçamento Rápido
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}