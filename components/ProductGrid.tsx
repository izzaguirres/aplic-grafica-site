import { ProductCard } from "./ProductCard"

interface Product {
  name: string
  variations?: string
  image: string
  whatsappMessage?: string
}

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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}
