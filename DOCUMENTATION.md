# 📚 Documentação Técnica - Aplic Gráfica Site

## 📋 Índice

1. [Arquitetura do Projeto](#arquitetura-do-projeto)
2. [Configurações](#configurações)
3. [Componentes](#componentes)
4. [Páginas](#páginas)
5. [API Routes](#api-routes)
6. [Estilos e Design System](#estilos-e-design-system)
7. [Performance](#performance)
8. [SEO](#seo)
9. [Deploy](#deploy)
10. [Troubleshooting](#troubleshooting)

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

```
aplic-grafica-site/
├── app/                          # Next.js 14 App Router
│   ├── api/                     # API Routes
│   │   └── contact/
│   │       └── route.ts         # Formulário de contato
│   ├── contato/                 # Página de contato
│   ├── produtos/                # Página de produtos
│   ├── sobre/                   # Página sobre
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página inicial
│   ├── robots.ts                # SEO - robots.txt
│   └── sitemap.ts               # SEO - sitemap
├── components/                   # Componentes React
│   ├── ui/                      # shadcn/ui components
│   └── *.tsx                    # Componentes customizados
├── hooks/                       # Custom hooks
├── lib/                         # Utilitários
├── public/                      # Arquivos estáticos
└── styles/                      # Estilos adicionais
```

### Padrões de Nomenclatura

- **Arquivos**: kebab-case (`product-card.tsx`)
- **Componentes**: PascalCase (`ProductCard.tsx`)
- **Variáveis**: camelCase (`productName`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Pastas**: kebab-case (`product-grid/`)

---

## ⚙️ Configurações

### Next.js (next.config.mjs)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações específicas do projeto
  experimental: {
    // Recursos experimentais
  },
  images: {
    // Configuração de otimização de imagens
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Outras configurações...
}

export default nextConfig
```

### TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind CSS (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-rethink-sans)", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

### PostCSS (postcss.config.mjs)

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
```

---

## 🧩 Componentes

### Componentes de Layout

#### Header.tsx
```typescript
interface HeaderProps {
  // Props específicas se necessário
}

export function Header({ ...props }: HeaderProps) {
  // Implementação
}
```

**Funcionalidades:**
- Navegação responsiva
- Toggle de tema (claro/escuro)
- Links para WhatsApp
- Logo da empresa

**Estados:**
- `mounted`: Controla hidratação do tema
- `theme`: Estado atual do tema
- `pathname`: Rota atual

#### Footer.tsx
```typescript
export function Footer() {
  // Implementação
}
```

**Seções:**
- Logo e descrição
- Links rápidos
- Produtos
- Informações de contato

### Componentes de Páginas

#### Hero.tsx
```typescript
export function Hero() {
  const products = [
    "Cartões de Visita",
    "Panfletos",
    "Banners",
    // ...
  ]
  
  return (
    // JSX
  )
}
```

**Elementos:**
- Badge de experiência
- Título principal com gradiente
- Lista de produtos
- CTAs (WhatsApp e Ver Produtos)

#### ProductGrid.tsx
```typescript
interface Product {
  name: string
  variations?: string
  image: string
  whatsappMessage?: string
}

interface ProductGridProps {
  products: Product[]
  title?: string
  subtitle?: string
  className?: string
}
```

**Funcionalidades:**
- Grid responsivo
- Animações de entrada
- Título e subtítulo opcionais
- Renderização de ProductCard

#### ProductCard.tsx
```typescript
interface ProductCardProps {
  name: string
  variations?: string
  image: string
  whatsappMessage?: string
}
```

**Funcionalidades:**
- Imagem com hover effect
- Informações do produto
- Badge de disponibilidade
- CTA para WhatsApp

### Componentes de Formulário

#### ContactForm.tsx
```typescript
const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  privacy: z.boolean().refine((val) => val === true, "Você deve aceitar a política de privacidade"),
})
```

**Estados:**
- `isSubmitting`: Loading do formulário
- `submitStatus`: Status do envio (idle/success/error)

**Validação:**
- Nome: mínimo 2 caracteres
- Email: formato válido
- Mensagem: mínimo 10 caracteres
- Política de privacidade: obrigatória

---

## 📄 Páginas

### Layout Principal (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: {
    default: "Aplic Gráfica - A Gráfica que você procura! | Florianópolis",
    template: "%s | Aplic Gráfica Florianópolis",
  },
  description: "Gráfica em Florianópolis com entrega grátis...",
  // ... outras meta tags
}
```

**Configurações:**
- Fonte: Rethink Sans (Google Fonts)
- ThemeProvider para tema claro/escuro
- Header e Footer globais
- Meta tags SEO

### Página Inicial (app/page.tsx)

**Seções:**
1. Hero (Hero.tsx)
2. StatsStrip (estatísticas)
3. Mais Vendidos (ProductGrid)
4. Benefícios (Benefits.tsx)
5. Mais Procurados (ProductGrid)
6. História da empresa
7. Depoimentos (TestimonialsCarousel)
8. FAQ (FAQ.tsx)
9. CTA Final (CTASection)

### Página de Produtos (app/produtos/)

#### page.tsx (Server Component)
```typescript
export const metadata: Metadata = {
  title: "Produtos - Catálogo Completo",
  description: "Confira nosso catálogo completo...",
}
```

#### ProdutosPageClient.tsx (Client Component)
```typescript
const allProducts = [
  // Array com todos os produtos
]

const categories = [
  { value: "all", label: "Todas as Categorias" },
  { value: "cartoes", label: "Cartões" },
  // ...
]
```

**Funcionalidades:**
- Filtro por categoria
- Contador de produtos
- Grid responsivo
- Estado local para filtros

### Página Sobre (app/sobre/page.tsx)

**Seções:**
1. Introdução da empresa
2. Processo de trabalho (3 etapas)
3. Diferenciais (4 cards)
4. CTA para contato

### Página Contato (app/contato/page.tsx)

**Seções:**
1. Informações de contato (4 cards)
2. Formulário de contato
3. Destaque para WhatsApp

---

## 🔌 API Routes

### Formulário de Contato (app/api/contact/route.ts)

```typescript
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  privacy: z.boolean().refine((val) => val === true),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)
    
    // TODO: Implementar envio de email
    
    return NextResponse.json({ message: "Mensagem enviada com sucesso!" })
  } catch (error) {
    // Tratamento de erros
  }
}
```

**Validação:**
- Zod schema para validação
- Tratamento de erros de validação
- Resposta padronizada

**TODO:**
- Integração com serviço de email (Resend/SendGrid)
- Template de email HTML
- Rate limiting
- Logs de erro

---

## 🎨 Estilos e Design System

### Variáveis CSS (app/globals.css)

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 142.1 76.2% 36.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 142.1 70.6% 45.3%;
    --primary-foreground: 144.9 80.4% 10%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 142.1 76.2% 36.3%;
  }
}
```

### Classes Utilitárias

```css
@layer utilities {
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent;
  }
  
  .primary-section {
    @apply bg-gradient-to-br from-primary via-primary/90 to-primary/80;
  }
  
  .bg-grid-pattern {
    background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
}
```

### Breakpoints Responsivos

```css
/* Mobile First */
.container {
  @apply px-4 mx-auto;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    @apply px-6;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    @apply px-8;
  }
}

/* Large Desktop */
@media (min-width: 1400px) {
  .container {
    @apply px-0 max-w-7xl;
  }
}
```

---

## ⚡ Performance

### Otimizações Implementadas

#### Next.js 14
- **App Router**: Roteamento otimizado
- **Server Components**: Renderização no servidor
- **Streaming**: Carregamento progressivo
- **Image Optimization**: Otimização automática

#### Imagens
```typescript
import Image from "next/image"

<Image
  src={image}
  alt={name}
  fill
  className="object-cover"
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
/>
```

#### Fontes
```typescript
import { Rethink_Sans } from "next/font/google"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rethink-sans",
  display: "swap",
})
```

### Métricas de Performance

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Bundle Analysis
```bash
# Instalar bundle analyzer
pnpm add -D @next/bundle-analyzer

# Configurar no next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# Executar análise
ANALYZE=true pnpm build
```

---

## 🔍 SEO

### Meta Tags (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: {
    default: "Aplic Gráfica - A Gráfica que você procura! | Florianópolis",
    template: "%s | Aplic Gráfica Florianópolis",
  },
  description: "Gráfica em Florianópolis com entrega grátis. Cartões, panfletos, banners, adesivos e mais. Produção expressa e qualidade profissional há mais de 13 anos.",
  keywords: [
    "gráfica florianópolis",
    "impressão",
    "cartão de visita",
    "panfletos",
    "banners",
    "adesivos",
    "comunicação visual",
  ],
  authors: [{ name: "Aplic Gráfica" }],
  creator: "Aplic Gráfica",
  publisher: "Aplic Gráfica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aplicgrafica.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aplicgrafica.com.br",
    siteName: "Aplic Gráfica",
    title: "Aplic Gráfica - A Gráfica que você procura! | Florianópolis",
    description: "Gráfica em Florianópolis com entrega grátis...",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aplic Gráfica Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplic Gráfica - A Gráfica que você procura! | Florianópolis",
    description: "Gráfica em Florianópolis com entrega grátis...",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
```

### Sitemap (app/sitemap.ts)

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aplicgrafica.com.br'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
```

### Robots (app/robots.ts)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://aplicgrafica.com.br/sitemap.xml',
  }
}
```

---

## 🚀 Deploy

### Vercel (Recomendado)

#### Configuração Automática
1. Conectar repositório no Vercel
2. Configurar variáveis de ambiente
3. Deploy automático

#### Variáveis de Ambiente
```env
# Email
RESEND_API_KEY=your_resend_api_key

# Site
NEXT_PUBLIC_SITE_URL=https://aplicgrafica.com.br
NEXT_PUBLIC_SITE_NAME=Aplic Gráfica

# WhatsApp
WHATSAPP_NUMBER=5548999128310
```

#### Configuração (vercel.json)
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "pnpm install"
}
```

### Netlify

#### Configuração (netlify.toml)
```toml
[build]
  command = "pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Outras Plataformas

#### Railway
- Deploy automático via Git
- Configuração de variáveis de ambiente
- SSL automático

#### Render
- Build automático
- Health checks
- Auto-scaling

---

## 🔧 Troubleshooting

### Problemas Comuns

#### 1. Erro de Hidratação
```typescript
// Problema: Diferença entre servidor e cliente
// Solução: Usar useEffect para estado do tema
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null
```

#### 2. Imagens não carregam
```typescript
// Problema: Domínio não configurado
// Solução: Adicionar ao next.config.mjs
const nextConfig = {
  images: {
    domains: ['seu-dominio.com'],
  },
}
```

#### 3. Formulário não envia
```typescript
// Problema: API Route não configurada
// Solução: Verificar rota e validação
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Body recebido:', body) // Debug
    // ...
  } catch (error) {
    console.error('Erro:', error) // Debug
  }
}
```

#### 4. Tema não persiste
```typescript
// Problema: Configuração do ThemeProvider
// Solução: Verificar configuração
<ThemeProvider 
  attribute="class" 
  defaultTheme="light" 
  enableSystem 
  disableTransitionOnChange
>
```

### Debug

#### Logs de Desenvolvimento
```bash
# Ver logs detalhados
DEBUG=* pnpm dev

# Ver bundle
ANALYZE=true pnpm build
```

#### Performance
```bash
# Lighthouse
npx lighthouse http://localhost:3000

# Bundle analyzer
pnpm add -D @next/bundle-analyzer
ANALYZE=true pnpm build
```

### Manutenção

#### Atualizações
```bash
# Atualizar dependências
pnpm update

# Atualizar Next.js
pnpm add next@latest react@latest react-dom@latest

# Verificar vulnerabilidades
pnpm audit
```

#### Backup
```bash
# Backup do código
git archive --format=zip --output=backup-$(date +%Y%m%d).zip HEAD

# Backup das variáveis de ambiente
cp .env.local .env.backup
```

---

## 📞 Suporte

Para suporte técnico:

- **Email**: contato@aplicgrafica.com.br
- **WhatsApp**: (48) 99912-8310
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/aplic-grafica-site/issues)

---

**Documentação atualizada em:** Dezembro 2024  
**Versão do projeto:** 1.0.0  
**Última revisão:** Dezembro 2024 