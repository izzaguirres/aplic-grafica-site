import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(100, "Email muito longo"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
  privacy: z.boolean().refine((val) => val === true, "Você deve aceitar a política de privacidade"),
})

// Rate limiting simples
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimit.get(ip)
  
  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minuto
    return true
  }
  
  if (limit.count >= 5) { // Máximo 5 tentativas por minuto
    return false
  }
  
  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em 1 minuto." },
        { status: 429 }
      )
    }

    // Verificar método HTTP
    if (request.method !== 'POST') {
      return NextResponse.json({ error: "Método não permitido" }, { status: 405 })
    }

    // Verificar Content-Type
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json({ error: "Content-Type deve ser application/json" }, { status: 400 })
    }

    const body = await request.json()

    // Validar dados
    const validatedData = contactSchema.parse(body)

    // Sanitização adicional
    const sanitizedData = {
      name: validatedData.name.trim().replace(/[<>]/g, ''),
      email: validatedData.email.trim().toLowerCase(),
      message: validatedData.message.trim().replace(/[<>]/g, ''),
      privacy: validatedData.privacy
    }

    // TODO: Implementar envio de email
    // Aqui você pode integrar com serviços como:
    // - Resend (recomendado)
    // - SendGrid
    // - Nodemailer
    // - EmailJS

    console.log("Formulário de contato recebido:", sanitizedData)

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { 
        status: 200,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
        }
      }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.errors },
        { status: 400 }
      )
    }

    console.error("Erro no formulário de contato:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
