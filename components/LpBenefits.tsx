import type { LucideIcon } from "lucide-react"

export interface LpBenefit {
  icon: LucideIcon
  title: string
  description: string
}

interface LpBenefitsProps {
  items: LpBenefit[]
  heading?: string
  subheading?: string
}

export function LpBenefits({ items, heading, subheading }: LpBenefitsProps) {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        {(heading || subheading) && (
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-muted-foreground leading-relaxed">{subheading}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-[#CDD2D7] hover:border-[#28282D] hover:shadow-lg transition-all"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-[#28282D]/5 text-[#28282D]">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#28282D]">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#28282D]/70 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
