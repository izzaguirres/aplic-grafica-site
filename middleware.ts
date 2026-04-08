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

  // Content Security Policy — allowlist para GTM, Google Ads conversion tracking,
  // Google Analytics e Vercel. Sem isso o browser bloqueia silenciosamente os
  // scripts do Google e nenhuma conversão é registrada.
  response.headers.set('Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' " +
      "https://vercel.live " +
      "https://www.googletagmanager.com " +
      "https://www.google-analytics.com " +
      "https://ssl.google-analytics.com " +
      "https://www.googleadservices.com " +
      "https://googleads.g.doubleclick.net " +
      "https://www.google.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data: https://fonts.gstatic.com; " +
    "connect-src 'self' " +
      "https://api.vercel.com " +
      "https://www.google-analytics.com " +
      "https://stats.g.doubleclick.net " +
      "https://www.googletagmanager.com " +
      "https://www.googleadservices.com " +
      "https://googleads.g.doubleclick.net " +
      "https://www.google.com; " +
    "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net; " +
    "frame-ancestors 'none';"
  )

  // Rate limiting para API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
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