import { NextResponse } from "next/server"

export function POST() {
  return NextResponse.json(
    { error: "Este formulário foi desativado. Fale com a Aplic pelo WhatsApp na página de contato." },
    { status: 410 },
  )
}
