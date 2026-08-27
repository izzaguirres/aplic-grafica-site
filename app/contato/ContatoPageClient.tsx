"use client"

import { Section } from "@/components/Section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, MapPin, Upload, HelpCircle, FileText, ArrowRight, Phone } from "lucide-react"
import { useWhatsAppConversion } from "@/hooks/use-whatsapp-conversion"
import Image from "next/image"

export default function ContatoPageClient() {
  const { handleWhatsAppClick } = useWhatsAppConversion()

  return (
    <>
      <Section className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto space-y-12 pt-12 md:pt-0">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#28282D] reveal">
              Vamos tirar seu projeto do papel?
            </h1>
            <p className="text-xl text-[#28282D]/60 max-w-2xl mx-auto font-medium reveal delay-100">
              Esqueça os formulários lentos. Aqui o atendimento é direto pelo WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-[#28282D] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-[#28282D]/20 reveal delay-200">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6FF50]/10 border border-[#E6FF50]/20 text-[#E6FF50] text-sm font-bold uppercase tracking-wide">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Atendimento pelo WhatsApp
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Falar com um atendente
                  </h2>
                  <p className="text-white/70 text-lg max-w-md">
                    Dúvidas gerais, consultoria ou apenas um &quot;oi&quot;. Nossa equipe está pronta para te ouvir.
                  </p>
                  <Button
                    onClick={() => handleWhatsAppClick("Olá! Vim do site e gostaria de falar com um atendente.", "contact_main")}
                    className="h-14 px-8 bg-[#E6FF50] text-[#28282D] hover:bg-white font-bold text-lg rounded-xl shadow-[0_0_40px_-10px_#E6FF50] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Iniciar Conversa
                  </Button>
                </div>

                <div className="hidden md:block opacity-10 transform translate-x-12 translate-y-12 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700">
                  <MessageCircle className="w-64 h-64 text-white" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6FF50]/5 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="reveal delay-300">
              <Card
                onClick={() => handleWhatsAppClick("Olá! Gostaria de *solicitar um orçamento*.", "contact_budget")}
                className="cursor-pointer group hover:border-[#28282D] transition-all duration-300 border-[#CDD2D7] bg-white rounded-[2rem] overflow-hidden h-full"
              >
                <CardContent className="p-8 flex items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] text-[#28282D] flex items-center justify-center group-hover:bg-[#E6FF50] transition-colors duration-300">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#28282D]">Orçamento</h3>
                    <p className="text-[#28282D]/60 font-medium">Já sabe o que quer? Peça sua cotação rápida.</p>
                    <div className="pt-2 flex items-center text-[#28282D] font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Solicitar <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal delay-400">
              <Card
                onClick={() => handleWhatsAppClick("Olá! Gostaria de *enviar um arquivo/arte* para análise.", "contact_file")}
                className="cursor-pointer group hover:border-[#28282D] transition-all duration-300 border-[#CDD2D7] bg-white rounded-[2rem] overflow-hidden h-full"
              >
                <CardContent className="p-8 flex items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] text-[#28282D] flex items-center justify-center group-hover:bg-[#E6FF50] transition-colors duration-300">
                    <Upload className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#28282D]">Enviar Arquivo</h3>
                    <p className="text-[#28282D]/60 font-medium">Mande sua arte para análise técnica.</p>
                    <div className="pt-2 flex items-center text-[#28282D] font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Enviar <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal delay-500">
              <Card
                onClick={() => handleWhatsAppClick("Olá! Gostaria de saber o *status do meu pedido*.", "contact_status")}
                className="cursor-pointer group hover:border-[#28282D] transition-all duration-300 border-[#CDD2D7] bg-white rounded-[2rem] overflow-hidden h-full"
              >
                <CardContent className="p-8 flex items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] text-[#28282D] flex items-center justify-center group-hover:bg-[#E6FF50] transition-colors duration-300">
                    <HelpCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#28282D]">Status do Pedido</h3>
                    <p className="text-[#28282D]/60 font-medium">Acompanhe a produção do seu material.</p>
                    <div className="pt-2 flex items-center text-[#28282D] font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Consultar <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="reveal delay-600">
              <Card
                onClick={() => handleWhatsAppClick("Olá! Tenho uma *dúvida geral*.", "contact_other")}
                className="cursor-pointer group hover:border-[#28282D] transition-all duration-300 border-[#CDD2D7] bg-white rounded-[2rem] overflow-hidden h-full"
              >
                <CardContent className="p-8 flex items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] text-[#28282D] flex items-center justify-center group-hover:bg-[#E6FF50] transition-colors duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#28282D]">Outros Assuntos</h3>
                    <p className="text-[#28282D]/60 font-medium">Parcerias, financeiro ou dúvidas gerais.</p>
                    <div className="pt-2 flex items-center text-[#28282D] font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Falar <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="border-t border-[#CDD2D7]/50 pt-12 pb-20 reveal delay-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#28282D]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#28282D] text-lg">Florianópolis / SC</h4>
                  <p className="text-[#28282D]/60 font-medium">Atendemos toda a região</p>
                </div>
              </div>

              <div className="w-px h-12 bg-[#CDD2D7] hidden md:block" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#28282D]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#28282D] text-lg">09:00 - 18:00</h4>
                  <p className="text-[#28282D]/60 font-medium">Segunda a Sexta</p>
                </div>
              </div>

              <div className="w-px h-12 bg-[#CDD2D7] hidden md:block" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#28282D]">
                  <Image src="/images/favicon.png" alt="Logo" width={24} height={24} className="opacity-80" />
                </div>
                <div>
                  <h4 className="font-bold text-[#28282D] text-lg">Aplic Gráfica</h4>
                  <p className="text-[#28282D]/60 font-medium">Desde 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
