import { Star, MapPin, Printer, MessageCircle } from "lucide-react"

const stats = [
  {
    icon: MapPin,
    value: "Local",
    unit: "",
    label: "Sede em Florianópolis",
  },
  {
    icon: Printer,
    value: "15",
    unit: "+",
    label: "Anos de Mercado",
  },
  {
    icon: MessageCircle,
    value: "15",
    unit: "min",
    label: "Resposta no WhatsApp",
  },
  {
    icon: Star,
    value: "4.5",
    unit: "/5",
    label: "Avaliação no Google",
  },
]

export function StatsStrip() {
  return (
    <section className="relative py-12 border-y border-[#CDD2D7]/50 bg-white">
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 rounded-2xl transition-colors hover:bg-[#F5F5F7] group reveal"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Icon Container - Shark with clean look */}
              <div className="mb-3 p-3 rounded-xl bg-[#28282D]/5 text-[#28282D] group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-6 w-6" />
              </div>

              <div className="text-center space-y-1">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-3xl font-bold tracking-tight text-[#28282D]">{stat.value}</span>
                  {stat.unit && <span className="text-lg font-semibold text-[#28282D] opacity-60">{stat.unit}</span>}
                </div>
                <p className="text-sm font-bold text-[#28282D]/60 uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}