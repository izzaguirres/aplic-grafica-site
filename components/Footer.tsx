import Link from "next/link"
import { MessageCircle, Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/90" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center">
              <img src="/images/logo2.png" alt="Aplic Gráfica" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Gráfica em Florianópolis com mais de 14 anos de experiência. Qualidade, agilidade e entrega em toda a
              Grande Florianópolis.
            </p>
            <Button asChild variant="secondary" className="font-medium">
              <Link href="https://wa.me/5548999128310?text=Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-background/80 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-background/80 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-background/80 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-background/80 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Produtos</h3>
            <ul className="space-y-3">
              <li className="text-background/80">Cartões de Visita</li>
              <li className="text-background/80">Panfletos</li>
              <li className="text-background/80">Banners e Lonas</li>
              <li className="text-background/80">Adesivos</li>
              <li className="text-background/80">Comunicação Visual</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80">(48) 99912-8310</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">comercialaplic@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">Seg-Sex: 9h às 18h</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">Entrega em toda Grande Florianópolis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">© 2024 Aplic Gráfica. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/termos" className="text-background/60 hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
