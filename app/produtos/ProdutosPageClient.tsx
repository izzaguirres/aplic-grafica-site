"use client"

import { useState, useMemo } from "react"
import { ProductGrid } from "@/components/ProductGrid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { productsData } from "@/lib/products-data"
import { Search, X, PackageX } from "lucide-react"

const categories = [
  { value: "all", label: "Todos" },
  { value: "Promocional", label: "Promocional" },
  { value: "Empresa", label: "Empresarial" },
  { value: "Sinalização", label: "Sinalização" },
  { value: "Adesivos", label: "Adesivos" },
  { value: "Hotelaria", label: "Hotelaria" },
]

export default function ProdutosPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const clearFilters = () => {
    setSelectedCategory("all")
    setSearchQuery("")
  }

  const hasActiveFilter = selectedCategory !== "all" || searchQuery !== ""

  return (
    <div className="min-h-screen bg-white">
      {/* Header Compacto & Funcional */}
      <section className="pt-32 pb-12 px-4 border-b border-[#CDD2D7]/30 bg-[#F5F5F7]/50">
        <div className="container max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#28282D]">
              Catálogo Completo
            </h1>
            <p className="text-lg text-[#28282D]/60 max-w-2xl mx-auto font-medium">
              Explore nossa linha de produtos gráficos. Digite o que procura ou navegue pelas categorias.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#28282D]/50 group-focus-within:text-[#28282D] transition-colors" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Buscar produto (ex: cartão, banner)..."
                aria-label="Buscar produtos"
                className="pl-10 h-12 rounded-xl border-[#CDD2D7] bg-white focus:ring-2 focus:ring-[#E6FF50] focus:border-transparent text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Limpar busca"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full text-[#28282D]/50 transition-colors"
                >
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Category Pills (Desktop) */}
            <div className="hidden md:flex flex-wrap gap-2 justify-center" role="radiogroup" aria-label="Filtrar por categoria">
              {categories.map((category) => (
                <button
                  key={category.value}
                  role="radio"
                  aria-checked={selectedCategory === category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors transition-transform duration-300 border ${
                    selectedCategory === category.value
                      ? "bg-[#28282D] text-[#E6FF50] border-[#28282D] shadow-lg shadow-[#28282D]/20 scale-105"
                      : "bg-white text-[#28282D]/70 border-[#CDD2D7] hover:border-[#28282D] hover:text-[#28282D]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Category Scroll */}
          <div className="md:hidden w-full overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-2 w-max" role="radiogroup" aria-label="Filtrar por categoria">
              {categories.map((category) => (
                <button
                  key={category.value}
                  role="radio"
                  aria-checked={selectedCategory === category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${
                     selectedCategory === category.value
                      ? "bg-[#28282D] text-[#E6FF50] border-[#28282D]"
                      : "bg-white text-[#28282D]/70 border-[#CDD2D7]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Filter Summary */}
          <div className="flex items-center justify-between text-sm text-[#28282D]/60 pt-2 border-t border-[#CDD2D7]/30">
            <span>
              Mostrando <strong>{filteredProducts.length}</strong> produtos
            </span>
            {hasActiveFilter && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="h-8 px-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold uppercase"
              >
                Limpar Filtros
                <X className="ml-2 h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Grid Results */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 animate-fade-in">
            <div className="h-24 w-24 rounded-full bg-[#F5F5F7] flex items-center justify-center">
              <PackageX className="h-10 w-10 text-[#28282D]/30" />
            </div>
            <div className="space-y-2 max-w-md">
              <h3 className="text-xl font-bold text-[#28282D]">Nenhum produto encontrado</h3>
              <p className="text-[#28282D]/60">
                Não encontramos nada com esses termos. Tente buscar por categorias como &quot;Cartão&quot; ou &quot;Banner&quot;.
              </p>
            </div>
            <Button 
              onClick={clearFilters}
              variant="outline"
              className="border-[#CDD2D7] text-[#28282D] hover:bg-[#F5F5F7]"
            >
              Limpar busca
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
