"use client"

import { Section } from "@/components/Section"
import { CTASection } from "@/components/CTASection"
import { Printer, Users, Zap, History, MapPin } from "lucide-react"
import Image from "next/image"

export default function SobrePageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#CDD2D7] text-xs font-bold uppercase tracking-wide text-[#28282D] reveal">
                <History className="w-3 h-3" />
                Desde 2011
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#28282D] leading-[0.95] reveal delay-100">
                Muito mais que <br />
                <span className="relative inline-block text-[#28282D]">
                  tinta no papel
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E6FF50]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                  </svg>
                </span>
                .
              </h1>
              <p className="text-xl text-[#28282D]/70 leading-relaxed font-medium reveal delay-200">
                Nascemos com uma missão clara: provar que gráfica rápida pode ter qualidade de ateliê.
                Hoje, somos parceiros estratégicos de milhares de empresas em Florianópolis.
              </p>
            </div>
            <div className="flex-1 relative aspect-square md:aspect-[4/3] w-full bg-[#F5F5F7] rounded-[2rem] overflow-hidden border border-[#CDD2D7] reveal delay-300">
              <video
                src="/images/siteaplic2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#28282D]/10" />
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#28282D] reveal">Nossos Pilares</h2>
            <p className="text-[#28282D]/60 max-w-2xl mx-auto font-medium reveal delay-100">
              O que nos diferencia em um mercado tão competitivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-[#CDD2D7] hover:border-[#28282D] transition-colors relative overflow-hidden group reveal delay-100">
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[#28282D] flex items-center justify-center text-[#E6FF50]">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#28282D]">Tecnologia de Ponta</h3>
                <p className="text-[#28282D]/70 font-medium max-w-md">
                  Investimos constantemente em inovação. Nosso parque gráfico conta com máquinas de última geração para impressão digital e acabamento, garantindo cores vibrantes e precisão milimétrica em cada detalhe.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6FF50]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#E6FF50]/20 transition-colors" />
            </div>

            <div className="bg-[#28282D] p-8 rounded-[2rem] text-white flex flex-col justify-between relative overflow-hidden group reveal delay-200">
              <div className="space-y-4 relative z-10">
                <div className="h-12 w-12 rounded-xl bg-[#E6FF50] flex items-center justify-center text-[#28282D]">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Agilidade Real</h3>
                <p className="text-white/70 font-medium text-sm">
                  Processos otimizados para quem não pode esperar. Entrega expressa na ilha e continente.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E6FF50]" />
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-[#CDD2D7] hover:border-[#28282D] transition-colors flex flex-col gap-4 group reveal delay-300">
              <div className="h-12 w-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#28282D]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#28282D]">Atendimento de Verdade</h3>
              <p className="text-[#28282D]/70 font-medium text-sm">
                Sem robôs confusos. Aqui você fala com especialistas que entendem de papel, cor e arquivo.
              </p>
            </div>

            <div className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-[#CDD2D7] hover:border-[#28282D] transition-colors flex flex-col md:flex-row gap-8 items-center reveal delay-400">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-[#28282D]">
                  <MapPin className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Localização Estratégica</h3>
                </div>
                <p className="text-[#28282D]/70 font-medium">
                  Estamos localizados no coração de Florianópolis, permitindo uma logística eficiente para toda a região.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#F5F5F7] text-xs font-bold text-[#28282D]">Centro</span>
                  <span className="px-3 py-1 rounded-lg bg-[#F5F5F7] text-xs font-bold text-[#28282D]">Trindade</span>
                  <span className="px-3 py-1 rounded-lg bg-[#F5F5F7] text-xs font-bold text-[#28282D]">Estreito</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-[#F5F5F7] rounded-xl overflow-hidden relative border border-[#CDD2D7]/50">
                <Image
                  src="/images/13.png"
                  alt="Fachada da Aplic Gráfica"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#28282D] reveal">Do arquivo à entrega</h2>
            <p className="text-[#28282D]/60 reveal delay-100">Processo simplificado para poupar seu tempo.</p>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-[#F5F5F7]" />

            <div className="space-y-12">
              <div className="flex gap-8 relative reveal delay-200">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#28282D] text-[#E6FF50] flex items-center justify-center font-bold text-xl border-4 border-white z-10 shadow-lg">1</div>
                <div className="pt-2 space-y-2">
                  <h3 className="text-xl font-bold text-[#28282D]">Briefing via WhatsApp</h3>
                  <p className="text-[#28282D]/70 font-medium leading-relaxed">
                    Você nos chama, explica o que precisa. Se já tiver a arte, nos envia. Se não, nossa equipe auxilia. Tudo prático, sem formulários infinitos.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 relative reveal delay-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-[#CDD2D7] text-[#28282D] flex items-center justify-center font-bold text-xl z-10">2</div>
                <div className="pt-2 space-y-2">
                  <h3 className="text-xl font-bold text-[#28282D]">Produção Flash</h3>
                  <p className="text-[#28282D]/70 font-medium leading-relaxed">
                    Aprovou? Vai para a máquina. Nossos equipamentos de alta performance garantem que seu pedido seja impresso em tempo recorde com qualidade offset ou digital.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 relative reveal delay-400">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E6FF50] text-[#28282D] flex items-center justify-center font-bold text-xl border-4 border-white z-10 shadow-lg">3</div>
                <div className="pt-2 space-y-2">
                  <h3 className="text-xl font-bold text-[#28282D]">Entrega ou Retirada</h3>
                  <p className="text-[#28282D]/70 font-medium leading-relaxed">
                    Avisamos assim que ficar pronto. Você pode retirar no balcão ou solicitamos um motoboy parceiro para levar até sua porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="reveal">
        <CTASection
          headline="Sua empresa merece essa qualidade."
          subtitle="Pare de sofrer com gráficas que atrasam. Venha para a Aplic."
          buttonText="Iniciar Projeto"
          buttonUrl="https://wa.me/5548999128310"
        />
      </div>
    </>
  )
}
