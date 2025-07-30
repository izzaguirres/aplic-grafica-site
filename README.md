# 🖨️ Aplic Gráfica - Site Institucional

Site institucional moderno para a Aplic Gráfica, uma gráfica localizada em Florianópolis com mais de 14 anos de experiência. Desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 **Status do Projeto**

✅ **Pronto para Deploy** - Site completamente funcional e otimizado

## ✨ **Características**

- 🎨 **Design Moderno**: Interface limpa e profissional
- 📱 **Responsivo**: Otimizado para mobile, tablet e desktop
- ⚡ **Performance**: Carregamento rápido e otimizado
- 🔒 **Seguro**: Headers de segurança e validação de dados
- 🎯 **SEO**: Meta tags, sitemap e robots.txt configurados
- 🌙 **Tema Escuro/Claro**: Suporte a modo escuro
- 📞 **WhatsApp Integration**: Links diretos para contato
- 📝 **Formulário de Contato**: API funcional

## 🛠️ **Tecnologias**

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deploy**: Vercel (configurado)

## 📁 **Estrutura do Projeto**

```
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── api/               # API routes
│   ├── produtos/          # Página de produtos
│   ├── sobre/             # Página sobre
│   └── contato/           # Página de contato
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── Hero.tsx          # Seção hero
│   ├── ProductCard.tsx   # Card de produto
│   └── ...               # Outros componentes
├── public/               # Arquivos estáticos
│   └── images/           # Imagens do site
├── scripts/              # Scripts de deploy
├── middleware.ts         # Middleware de segurança
└── vercel.json          # Configuração Vercel
```

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js 18+
- npm ou yarn

### **Instalação**
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/aplic-grafica-site.git
cd aplic-grafica-site

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev
```

### **Build de Produção**
```bash
# Verificar tipos
npm run type-check

# Executar linting
npm run lint

# Build de produção
npm run build

# Executar em produção
npm start
```

## 🔒 **Segurança**

O projeto inclui várias camadas de proteção:

- ✅ **Headers de Segurança**: XSS, Clickjacking, etc.
- ✅ **Rate Limiting**: Proteção contra spam
- ✅ **Validação de Dados**: Zod schema validation
- ✅ **Sanitização**: Remoção de caracteres perigosos
- ✅ **HTTPS Forçado**: Redirecionamento automático
- ✅ **Variáveis de Ambiente**: Credenciais protegidas

## 📊 **Páginas**

### **🏠 Página Inicial**
- Hero section com CTA
- Produtos em destaque
- Estatísticas da empresa
- Benefícios
- Depoimentos
- FAQ
- Seção CTA

### **🛍️ Produtos**
- Lista completa de produtos
- Filtros por categoria
- Imagens otimizadas
- Links diretos para WhatsApp

### **ℹ️ Sobre**
- História da empresa
- Valores e missão
- Equipe
- Certificações

### **📞 Contato**
- Formulário funcional
- Informações de contato
- Mapa de atendimento
- Horários de funcionamento

## 🎨 **Design System**

### **Cores**
- **Primária**: Verde lime (#D3F26A)
- **Secundária**: Cinza escuro (#222222)
- **Background**: Cinza claro (#eeeeee)
- **Texto**: Preto/Branco (modo claro/escuro)

### **Tipografia**
- **Fonte**: Geist (sans-serif)
- **Tamanhos**: Escala responsiva
- **Pesos**: Regular, Medium, Bold

### **Componentes**
- Cards com efeito glass morphism
- Botões com gradientes
- Badges com liquid glass
- Animações suaves

## 📱 **Responsividade**

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 **Scripts Disponíveis**

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Executar produção
npm run lint         # Verificar código
npm run type-check   # Verificar tipos
npm run clean        # Limpar builds
```

## 🚀 **Deploy**

### **Vercel (Recomendado)**
```bash
# Deploy automático
./scripts/deploy.sh vercel

# Ou manual
npx vercel --prod
```

### **Configuração**
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## 📞 **Contatos**

- **WhatsApp**: (48) 99912-8310
- **Email**: comercialaplic@hotmail.com
- **Região**: Grande Florianópolis

## 📄 **Licença**

Este projeto é privado e pertence à Aplic Gráfica.

## 🤝 **Contribuição**

Para contribuições, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ para a Aplic Gráfica** 