"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        {/* Main Header - Altura reduzida */}
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src="/images/logo.png" alt="Aplic Gráfica" className="h-6 md:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-xl hover:bg-secondary/50",
                  pathname === item.href
                    ? "text-foreground bg-primary/10 font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle - Desktop */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden lg:inline-flex h-9 w-9 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Alternar tema</span>
              </Button>
            )}

            {/* WhatsApp CTA */}
            <Button
              asChild
              className="hidden md:inline-flex h-9 md:h-10 px-4 md:px-5 font-semibold text-xs md:text-sm bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-lg shadow-lime-500/25 hover:shadow-xl hover:shadow-lime-500/30 hover:from-lime-500 hover:to-lime-600 border-0"
            >
              <Link href="https://wa.me/5548999128310?text=Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.">
                <MessageCircle className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                WhatsApp
              </Link>
            </Button>

            {/* Mobile WhatsApp */}
            <Button
              asChild
              size="icon"
              className="md:hidden h-9 w-9 bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 shadow-lg shadow-lime-500/25 border-0"
            >
              <Link href="https://wa.me/5548999128310?text=Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.">
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Tabs - Altura reduzida */}
        <div className="lg:hidden border-t border-border/40 bg-secondary/20">
          <nav className="flex items-center justify-between px-1 py-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex-1 text-center py-2 px-2 text-sm font-medium transition-all duration-200 rounded-lg mx-1",
                  pathname === item.href
                    ? "text-foreground bg-primary/15 shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
