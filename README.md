# 🖨️ Aplic Gráfica Site

Site institucional moderno para a Aplic Gráfica, uma gráfica localizada em Florianópolis com mais de 13 anos de experiência. Desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

![Aplic Gráfica](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Build e Deploy](#build-e-deploy)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O **Aplic Gráfica Site** é um site institucional moderno e responsivo desenvolvido para apresentar os serviços de uma gráfica localizada em Florianópolis. O projeto foi construído com foco em:

- **Conversão**: Integração direta com WhatsApp para geração de leads
- **Performance**: Otimizado com Next.js 14 e App Router
- **UX/UI**: Design moderno e intuitivo
- **SEO**: Estrutura otimizada para mecanismos de busca
- **Acessibilidade**: Componentes acessíveis e responsivos

### 🎨 Design System

- **Tipografia**: Rethink Sans (Google Fonts)
- **Cores**: Sistema de cores baseado em HSL com tema claro/escuro
- **Componentes**: shadcn/ui com customizações
- **Animações**: Transições suaves e micro-interações

## ✨ Funcionalidades

### 🏠 Páginas Principais
- **Home**: Hero section, produtos em destaque, benefícios, depoimentos
- **Produtos**: Catálogo completo com filtros por categoria
- **Sobre**: História da empresa, processo de trabalho, diferenciais
- **Contato**: Formulário de contato e informações da empresa

### 🔧 Funcionalidades Técnicas
- ✅ Design responsivo (mobile-first)
- ✅ Tema claro/escuro
- ✅ Navegação otimizada
- ✅ Formulário de contato com validação
- ✅ Links diretos para WhatsApp
- ✅ SEO otimizado
- ✅ Animações CSS
- ✅ Componentes reutilizáveis
- ✅ TypeScript para type safety

### 📱 Responsividade
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🛠️ Tecnologias

### Core
- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript tipado

### Styling
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Integração React Hook Form + Zod

### Development Tools
- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processamento CSS
- **[Autoprefixer](https://autoprefixer.github.io/)** - Prefixos CSS automáticos

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18.17 ou superior)
- **[pnpm](https://pnpm.io/)** (recomendado) ou npm/yarn

### Verificação das versões

```bash
node --version
# v18.17.0 ou superior

pnpm --version
# 8.0.0 ou superior
```

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/aplic-grafica-site.git
   cd aplic-grafica-site
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

5. **Acesse o projeto**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 💻 Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia o servidor de desenvolvimento
pnpm build        # Cria build de produção
pnpm start        # Inicia o servidor de produção
pnpm lint         # Executa o linter

# Desenvolvimento com npm
npm run dev
npm run build
npm run start
npm run lint
```

### Estrutura de Desenvolvimento

```
aplic-grafica-site/
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API Routes
│   ├── contato/           # Página de contato
│   ├── produtos/          # Página de produtos
│   ├── sobre/             # Página sobre
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   └── *.tsx             # Componentes customizados
├── lib/                  # Utilitários e configurações
├── public/               # Arquivos estáticos
└── styles/               # Estilos adicionais
```

## 🏗️ Build e Deploy

### Build de Produção

```bash
# Criar build otimizado
pnpm build

# Verificar build
pnpm start
```

### Deploy

O projeto está configurado para deploy em várias plataformas:

#### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Build
pnpm build

# Deploy manual ou via Git
```

#### Outras Plataformas
- **Railway**: Deploy automático via Git
- **Render**: Deploy com build automático
- **DigitalOcean App Platform**: Deploy containerizado

## 📁 Estrutura do Projeto

```
aplic-grafica-site/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API para formulário de contato
│   ├── contato/
│   │   └── page.tsx              # Página de contato
│   ├── produtos/
│   │   ├── page.tsx              # Página de produtos
│   │   └── ProdutosPageClient.tsx # Componente cliente
│   ├── sobre/
│   │   └── page.tsx              # Página sobre
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Página inicial
│   ├── robots.ts                 # Configuração SEO
│   └── sitemap.ts                # Sitemap
├── components/                   # Componentes React
│   ├── ui/                      # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   └── ...                  # Outros componentes UI
│   ├── Benefits.tsx             # Seção de benefícios
│   ├── ContactBlock.tsx         # Bloco de contato
│   ├── ContactForm.tsx          # Formulário de contato
│   ├── CTASection.tsx           # Seção CTA
│   ├── FAQ.tsx                  # Perguntas frequentes
│   ├── Footer.tsx               # Rodapé
│   ├── Header.tsx               # Cabeçalho
│   ├── Hero.tsx                 # Seção hero
│   ├── ProductCard.tsx          # Card de produto
│   ├── ProductGrid.tsx          # Grid de produtos
│   ├── Section.tsx              # Componente de seção
│   ├── StatsStrip.tsx           # Faixa de estatísticas
│   ├── TestimonialsCarousel.tsx # Carrossel de depoimentos
│   └── theme-provider.tsx       # Provedor de tema
├── hooks/                       # Custom hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                         # Utilitários
│   └── utils.ts                 # Funções utilitárias
├── public/                      # Arquivos estáticos
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   └── ...
├── styles/                      # Estilos adicionais
│   └── globals.css
├── .env.example                 # Exemplo de variáveis de ambiente
├── components.json              # Configuração shadcn/ui
├── next.config.mjs              # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── tailwind.config.ts           # Configuração Tailwind CSS
├── tsconfig.json                # Configuração TypeScript
└── README.md                    # Este arquivo
```

## 🧩 Componentes

### Componentes Principais

#### Layout
- **`Header.tsx`**: Cabeçalho com navegação e tema
- **`Footer.tsx`**: Rodapé com links e informações
- **`Section.tsx`**: Wrapper para seções de conteúdo

#### Páginas
- **`Hero.tsx`**: Seção principal da home
- **`ProductGrid.tsx`**: Grid responsivo de produtos
- **`ProductCard.tsx`**: Card individual de produto
- **`Benefits.tsx`**: Seção de benefícios da empresa
- **`TestimonialsCarousel.tsx`**: Carrossel de depoimentos
- **`FAQ.tsx`**: Perguntas frequentes
- **`CTASection.tsx`**: Seções de call-to-action

#### Formulários
- **`ContactForm.tsx`**: Formulário de contato com validação
- **`ContactBlock.tsx`**: Bloco destacado de contato

### Componentes UI (shadcn/ui)

- **Button**: Botões com variantes
- **Card**: Cards com header, content e footer
- **Form**: Formulários com validação
- **Input**: Campos de entrada
- **Textarea**: Áreas de texto
- **Select**: Seletores dropdown
- **Badge**: Badges e tags
- **Dialog**: Modais e diálogos
- **Toast**: Notificações toast

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Email (para formulário de contato)
EMAIL_SERVICE=resend
RESEND_API_KEY=your_resend_api_key

# WhatsApp
WHATSAPP_NUMBER=5548999128310

# Site
NEXT_PUBLIC_SITE_URL=https://aplicgrafica.com.br
NEXT_PUBLIC_SITE_NAME=Aplic Gráfica
```

### Configuração do Tailwind CSS

O projeto usa uma configuração customizada do Tailwind CSS:

```typescript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        // Sistema de cores HSL
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        // ...
      },
      fontFamily: {
        sans: ["var(--font-rethink-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
}
```

### Configuração do TypeScript

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
  }
}
```

## 📧 Integração de Email

### Resend (Recomendado)

1. **Instale o SDK**
   ```bash
   pnpm add resend
   ```

2. **Configure a API Route**
   ```typescript
   // app/api/contact/route.ts
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export async function POST(request: NextRequest) {
     // ... validação
     
     await resend.emails.send({
       from: 'contato@aplicgrafica.com.br',
       to: 'contato@aplicgrafica.com.br',
       subject: 'Novo contato via site',
       html: `<p>Nome: ${data.name}</p><p>Email: ${data.email}</p><p>Mensagem: ${data.message}</p>`,
     });
   }
   ```

### Alternativas

- **SendGrid**: Para volumes maiores
- **Nodemailer**: Para servidores próprios
- **EmailJS**: Para envio direto do frontend

## 🔍 SEO

### Meta Tags

O projeto inclui meta tags otimizadas:

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Aplic Gráfica - A Gráfica que você procura! | Florianópolis",
    template: "%s | Aplic Gráfica Florianópolis",
  },
  description: "Gráfica em Florianópolis com entrega grátis...",
  keywords: ["gráfica florianópolis", "impressão", "cartão de visita"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    // ...
  },
  twitter: {
    card: "summary_large_image",
    // ...
  },
}
```

### Sitemap e Robots

- **`app/sitemap.ts`**: Sitemap automático
- **`app/robots.ts`**: Configuração para crawlers

## 🧪 Testes

### Estrutura de Testes (Recomendada)

```bash
# Instalar dependências de teste
pnpm add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Criar estrutura
mkdir __tests__
mkdir __tests__/components
mkdir __tests__/pages
```

### Exemplo de Teste

```typescript
// __tests__/components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

describe('Header', () => {
  it('renders logo and navigation', () => {
    render(<Header />);
    expect(screen.getByText('Aplic Gráfica')).toBeInTheDocument();
    expect(screen.getByText('Início')).toBeInTheDocument();
  });
});
```

## 🚀 Performance

### Otimizações Implementadas

- **Next.js 14**: App Router e otimizações automáticas
- **Image Optimization**: Componente `next/image`
- **Font Optimization**: Google Fonts com `next/font`
- **Code Splitting**: Carregamento automático
- **Bundle Analysis**: Análise de bundle

### Métricas de Performance

```bash
# Análise de bundle
pnpm add -D @next/bundle-analyzer

# Build com análise
ANALYZE=true pnpm build
```

## 🔧 Manutenção

### Atualizações

```bash
# Atualizar dependências
pnpm update

# Atualizar Next.js
pnpm add next@latest react@latest react-dom@latest

# Verificar vulnerabilidades
pnpm audit
```

### Backup e Versionamento

```bash
# Commit regular
git add .
git commit -m "feat: nova funcionalidade"

# Tag de versão
git tag -a v1.0.0 -m "Versão 1.0.0"
git push origin v1.0.0
```

## 🤝 Contribuição

1. **Fork o projeto**
2. **Crie uma branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Código

- **TypeScript**: Tipagem estrita
- **ESLint**: Regras de linting
- **Prettier**: Formatação de código
- **Conventional Commits**: Padrão de commits

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:

- **Email**: contato@aplicgrafica.com.br
- **WhatsApp**: (48) 99912-8310
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/aplic-grafica-site/issues)

---

**Desenvolvido com ❤️ para a Aplic Gráfica** 