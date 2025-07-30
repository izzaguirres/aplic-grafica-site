import { CheckCircle, Clock, Truck, Headphones } from "lucide-react"


const benefits = [
  {
    icon: CheckCircle,
    title: "Qualidade Garantida",
    description: "Impressão nítida, cores fiéis e acabamento profissional em todos os nossos produtos.",
  },
  {
    icon: Clock,
    title: "Prazos Expressos",
    description: "Produção rápida e eficiente, sempre respeitando o prazo combinado com você.",
  },
  {
    icon: Truck,
    title: "Entrega em toda Florianópolis",
    description: "Levamos seu pedido até você em toda a Grande Florianópolis.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Atendimento rápido personalizado pelo WhatsApp para tirar todas as suas dúvidas.",
  },
]

export function Benefits() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border-0 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2 p-8 text-center space-y-6"
          style={{ backgroundColor: '#222222' }}
        >
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-16 w-16 rounded-3xl bg-white/25 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-white/30">
                  <benefit.icon className="h-8 w-8" style={{ color: '#D3F26A' }} />
                </div>
                <div className="absolute -inset-2 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: '#D3F26A' }}>
                {benefit.title}
              </h3>
            </div>
          </div>
      ))}
    </div>
  )
}
