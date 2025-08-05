import { Star, Users, Package, Calendar } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: "+14",
    unit: "anos",
    label: "no mercado",
  },
  {
    icon: Package,
    value: "+200mil",
    unit: "",
    label: "produtos entregues",
  },
  {
    icon: Users,
    value: "+50mil",
    unit: "",
    label: "clientes satisfeitos",
  },
  {
    icon: Star,
    value: "4.5",
    unit: "★",
    label: "avaliação Google",
  },
]

export function StatsStrip() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#222222' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="h-16 w-16 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <stat.icon className="h-8 w-8" style={{ color: '#D3F26A' }} />
                  </div>
                  <div className="absolute -inset-2 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl lg:text-5xl font-bold" style={{ color: '#D3F26A' }}>{stat.value}</span>
                  {stat.unit && <span className="text-2xl font-semibold" style={{ color: '#D3F26A' }}>{stat.unit}</span>}
                </div>
                <p className="text-sm lg:text-base font-medium" style={{ color: '#D3F26A' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
