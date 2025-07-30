import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Headers de segurança
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Proteção contra clickjacking
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self' https://api.vercel.com; " +
    "frame-ancestors 'none';"
  )

  // Rate limiting para API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Aqui você pode implementar rate limiting mais robusto
    // Por exemplo, usando Redis ou similar
  }

  // Bloquear acesso a arquivos sensíveis
  const sensitiveFiles = [
    '/.env',
    '/.git',
    '/package.json',
    '/package-lock.json',
    '/README.md',
    '/DEPLOY.md',
    '/STATUS.md'
  ]

  const path = request.nextUrl.pathname
  if (sensitiveFiles.some(file => path.includes(file))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  // Redirecionar HTTP para HTTPS (em produção)
  if (process.env.NODE_ENV === 'production' && 
      request.headers.get('x-forwarded-proto') === 'http') {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
} 