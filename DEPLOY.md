# Guia de Deploy - Aplic Gráfica

## Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Vercel (recomendado) ou outro provedor

## Preparação para Deploy

### 1. Verificação de Qualidade

```bash
# Instalar dependências
npm install

# Verificar tipos TypeScript
npm run type-check

# Executar linting
npm run lint

# Build de produção
npm run build
```

### 2. Variáveis de Ambiente

Criar arquivo `.env.local` (para desenvolvimento) ou configurar no provedor de deploy:

```env
# Email (opcional - para formulário de contato)
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email
EMAIL_PASS=your-password
```

### 3. Deploy no Vercel (Recomendado)

1. **Conectar repositório**:
   - Faça push do código para GitHub/GitLab
   - Conecte o repositório no Vercel

2. **Configurações do projeto**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variáveis de ambiente** (se necessário):
   - Configure no painel do Vercel

4. **Domínio personalizado**:
   - Configure DNS apontando para o Vercel
   - Adicione o domínio no painel do Vercel

### 4. Deploy Manual

```bash
# Build
npm run build

# Testar localmente
npm start

# Deploy (exemplo com Vercel CLI)
npx vercel --prod
```

## Estrutura de Arquivos Importantes

```
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   └── api/               # API routes
├── components/            # Componentes React
├── public/               # Arquivos estáticos
│   └── images/           # Imagens do site
├── tailwind.config.ts    # Configuração Tailwind
└── next.config.mjs       # Configuração Next.js
```

## Otimizações Implementadas

- ✅ **SEO**: Meta tags, sitemap, robots.txt
- ✅ **Performance**: Image optimization, lazy loading
- ✅ **Acessibilidade**: ARIA labels, semantic HTML
- ✅ **Responsividade**: Mobile-first design
- ✅ **TypeScript**: Tipagem completa
- ✅ **ESLint**: Código limpo e padronizado

## Monitoramento

### Vercel Analytics
- Habilite no painel do Vercel
- Monitore performance e erros

### Google Analytics
- Adicione o script no `layout.tsx`
- Configure eventos personalizados

## Manutenção

### Atualizações
```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Limpar cache
npm run clean
```

### Backup
- Mantenha backup do código no Git
- Configure backup automático do banco (se aplicável)

## Suporte

Para problemas técnicos:
- Verifique os logs do Vercel
- Teste localmente com `npm run dev`
- Consulte a documentação do Next.js

---

**Última atualização**: $(date)
**Versão**: 1.0.0 