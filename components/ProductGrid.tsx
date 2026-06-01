import { ProductCard } from "./ProductCard"
import { Product } from "@/lib/products-data"

interface ProductGridProps {
  products: Product[]
  title?: string
  subtitle?: string
  className?: string
}

export function ProductGrid({ products, title, subtitle, className }: ProductGridProps) {
  return (
    <div className={className}>
      {title && (
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
