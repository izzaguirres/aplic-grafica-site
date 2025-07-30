/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ofuscação de código em produção
  swcMinify: true,
  
  // Configurações de segurança
  poweredByHeader: false,
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Configurações de imagens
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },

  // Configurações de compressão
  compress: true,

  // Configurações de cache
  generateEtags: false,


}

export default nextConfig
