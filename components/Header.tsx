"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { handleWhatsAppClick } = useWhatsAppConversion()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#CDD2D7]/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/images/favicon.png" 
              alt="Aplic Gráfica Logo" 
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className={`font-bold text-lg md:text-xl tracking-tight ${isScrolled ? "text-[#28282D]" : "text-[#28282D]"}`}>
            Aplic<span className="text-[#E6FF50] ml-0.5">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#E6FF50] ${
                isScrolled ? "text-[#28282D]" : "text-[#28282D]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            onClick={() => handleWhatsAppClick(undefined, 'header')}
            className="bg-[#28282D] text-[#E6FF50] hover:bg-[#28282D]/90 font-bold rounded-xl"
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