import { CheckCircle2, Clock, Truck, UserCheck } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle2,
    title: "Qualidade Premium",
    description: "Parque gráfico próprio com tecnologia de ponta para cores vivas e acabamento perfeito.",
  },
  {
    icon: Clock,
    title: "Produção Ágil",
    description: "Sistemas otimizados para garantir que seu material esteja pronto quando você precisa.",
  },
  {
    icon: Truck,
    title: "Logística Inteligente",
    description: "Entrega expressa em toda Grande Florianópolis para sua comodidade.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Consultivo",
    description: "Não somos robôs. Especialistas reais prontos para ajudar na sua escolha pelo WhatsApp.",
  },
]

export function Benefits() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="group p-6 rounded-2xl bg-white border border-[#CDD2D7] hover:border-[#28282D] hover:shadow-lg transition-all duration-300 reveal"
          style={{ transitionDelay: `${index * 0.15}s` }}
        >
          {/* Icon - Dark Grey */}
          <div className="mb-4 inline-flex p-3 rounded-xl bg-[#28282D]/5 text-[#28282D] group-hover:scale-110 transition-transform duration-300">
            <benefit.icon className="h-6 w-6" />
          </div>
          
          <h3 className="text-lg font-bold mb-2 text-[#28282D] group-hover:text-black transition-colors">
            {benefit.title}
          </h3>
          
          <p className="text-sm text-[#28282D]/70 leading-relaxed font-medium">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  )
}