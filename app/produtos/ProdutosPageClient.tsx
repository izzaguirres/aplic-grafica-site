"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/ProductGrid"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const allProducts = [
  // Cartões
  {
    name: "Cartão de Visita - Brilho Total",
    variations: "à partir de 100 unidades",
    category: "cartoes",
    image: "/images/produtos/Cartao de Visita - Brilho Total.png",
  },
  {
    name: "Cartão de Visita - Fosco",
    variations: "à partir de 500 unidades",
    category: "cartoes",
    image: "/images/produtos/Cartao de Visita - Fosco.png",
  },
  {
    name: "Cartão de Visita - Mini",
    variations: "à partir de 500 unidades",
    category: "cartoes",
    image: "/images/produtos/Mini Cartao de Visita.png",
  },
  {
    name: "Cartão com Cantos Arredondados",
    variations: "à partir de 500 unidades",
    category: "cartoes",
    image: "/images/produtos/Cartao de Visita - Cantos Arredondados.png",
  },

  // Panfletos
  {
    name: "Panfleto 10×14cm",
    variations: "à partir de 1.000 unidades",
    category: "panfletos",
    image: "/images/produtos/Panfleto 10x14.png",
  },

  // Banners/Lonas
  {
    name: "Banner em Lona",
    variations: "à partir de 50x70cm",
    category: "banners",
    image: "/images/produtos/Banner em Lona.png",
  },
  {
    name: "Lona com Ilhós",
    variations: "à partir de 50x50cm",
    category: "banners",
    image: "/images/produtos/Lona com Ilhos.png",
  },

  // Adesivos/Etiquetas
  {
    name: "Impressão Digital",
    variations: "à partir de 50x50cm",
    category: "adesivos",
    image: "/images/produtos/Impressao Digital.png",
  },
  {
    name: "Etiqueta Adesiva",
    variations: "à partir de 100 unidades",
    category: "adesivos",
    image: "/images/produtos/Etiqueta Adesiva.png",
  },

  // Comunicação Visual
  {
    name: "Cavalete de Ferro",
    variations: "50x100cm",
    category: "comunicacao",
    image: "/images/produtos/Cavalete de Ferro.png",
  },
  {
    name: "Cavalete de Madeira",
    variations: "50x100cm",
    category: "comunicacao",
    image: "/images/produtos/Cavalete de Madeira.png",
  },
  {
    name: "Placa Não Perturbe",
    variations: "à partir de 100 unidades",
    category: "comunicacao",
    image: "/images/produtos/Nao Perturbe.png",
  },

  // Diversos
  {
    name: "Tag com Furo",
    variations: "à partir de 250 unidades",
    category: "diversos",
    image: "/images/produtos/Tag com Furo.png",
  },
  {
    name: "Blocos/Receituários",
    variations: "à partir de 10 Blocos",
    category: "diversos",
    image: "/images/produtos/Blocos Receituarios.png",
  },
  {
    name: "Crachá Empresarial",
    variations: "à partir de 5 unidades",
    category: "diversos",
    image: "/images/produtos/Cracha Empresarial.png",
  },
  {
    name: "Pasta com Bolso",
    variations: "à partir de 25 unidades",
    category: "diversos",
    image: "/images/produtos/Pasta com Bolso.png",
  },
]

const categories = [
  { value: "all", label: "Todas as Categorias" },
  { value: "cartoes", label: "Cartões" },
  { value: "panfletos", label: "Panfletos" },
  { value: "banners", label: "Banners/Lonas" },
  { value: "adesivos", label: "Adesivos/Etiquetas" },
  { value: "comunicacao", label: "Comunicação Visual" },
  { value: "diversos", label: "Diversos" },
]

export default function ProdutosPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false
    return true
  })

  const clearFilters = () => {
    setSelectedCategory("all")
  }

  const hasActiveFilter = selectedCategory !== "all"

  return (
    <>
      <Section>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Nossos Produtos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira nosso catálogo completo de produtos gráficos. Use o filtro para encontrar exatamente o que você
              precisa.
            </p>
          </div>

          {/* Filtro Simplificado - Apenas Categoria */}
          <div className="bg-secondary/30 rounded-3xl p-6 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Categoria</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 rounded-2xl border-2 bg-background/80 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </span>
                  {hasActiveFilter && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Filtro ativo
                    </Badge>
                  )}
                </div>
                {hasActiveFilter && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="h-8 px-3 text-xs bg-transparent"
                  >
                    Limpar
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Grid de Produtos */}
          <ProductGrid products={filteredProducts} />
        </div>
      </Section>
    </>
  )
}
