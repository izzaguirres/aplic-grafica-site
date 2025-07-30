# 🚀 Guia para Conectar ao GitHub

## 📋 **Passos para Conectar ao GitHub**

### **1. Criar Repositório no GitHub**

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** ou **"+"** → **"New repository"**
3. Configure o repositório:
   - **Repository name**: `aplic-grafica-site`
   - **Description**: `Site institucional da Aplic Gráfica - Florianópolis`
   - **Visibility**: Private (recomendado) ou Public
   - **NÃO** marque "Add a README file" (já temos um)
   - **NÃO** marque "Add .gitignore" (já temos um)
4. Clique em **"Create repository"**

### **2. Conectar Repositório Local ao GitHub**

Após criar o repositório, o GitHub mostrará comandos. Use estes:

```bash
# Adicionar remote origin (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/aplic-grafica-site.git

# Verificar se foi adicionado
git remote -v

# Fazer push do código
git branch -M main
git push -u origin main
```

### **3. Configurar Branch Protection (Opcional)**

Para maior segurança:

1. Vá em **Settings** → **Branches**
2. Clique em **"Add rule"**
3. Configure:
   - **Branch name pattern**: `main`
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require branches to be up to date before merging**

### **4. Configurar Deploy Automático**

#### **Vercel (Recomendado)**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Conecte sua conta GitHub
4. Selecione o repositório `aplic-grafica-site`
5. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Clique em **"Deploy"**

#### **Configurações Adicionais no Vercel**

1. **Variáveis de Ambiente** (se necessário):
   - Vá em **Settings** → **Environment Variables**
   - Adicione suas variáveis (ex: `EMAIL_PASS`)

2. **Domínio Personalizado**:
   - Vá em **Settings** → **Domains**
   - Adicione seu domínio (ex: `aplicgrafica.com.br`)

### **5. Configurar GitHub Actions (Opcional)**

Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linting
        run: npm run lint
      
      - name: Type check
        run: npm run type-check
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🔧 **Comandos Úteis**

### **Desenvolvimento Diário**

```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "feat: nova funcionalidade"

# Fazer push
git push origin main

# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Voltar para main
git checkout main

# Atualizar repositório
git pull origin main
```

### **Deploy**

```bash
# Deploy automático
./scripts/deploy.sh vercel

# Ou manual
npm run build
npx vercel --prod
```

## 📁 **Estrutura do Repositório**

```
aplic-grafica-site/
├── .github/              # GitHub Actions (se configurado)
├── app/                  # Next.js App Router
├── components/           # Componentes React
├── public/              # Arquivos estáticos
├── scripts/             # Scripts de deploy
├── .gitignore           # Arquivos ignorados
├── README.md            # Documentação principal
├── DEPLOY.md            # Guia de deploy
├── SECURITY.md          # Guia de segurança
├── vercel.json          # Configuração Vercel
└── package.json         # Dependências
```

## 🔒 **Segurança**

### **Arquivos Protegidos**
- ✅ `.env.local` - No `.gitignore`
- ✅ `node_modules/` - No `.gitignore`
- ✅ `.next/` - No `.gitignore`
- ✅ Logs e arquivos temporários

### **Informações Públicas (Normal)**
- ✅ Código fonte (JavaScript, HTML, CSS)
- ✅ Imagens em `/public/`
- ✅ Informações de contato
- ✅ Lista de produtos

## 🚨 **Troubleshooting**

### **Erro: "fatal: remote origin already exists"**
```bash
# Remover remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/SEU_USUARIO/aplic-grafica-site.git
```

### **Erro: "Permission denied"**
```bash
# Verificar configuração do Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Ou usar SSH (recomendado)
git remote set-url origin git@github.com:SEU_USUARIO/aplic-grafica-site.git
```

### **Erro no Deploy**
1. Verificar logs no Vercel
2. Testar build local: `npm run build`
3. Verificar variáveis de ambiente
4. Verificar configuração do `vercel.json`

## 📞 **Suporte**

Para problemas técnicos:
- **GitHub Issues**: Abra uma issue no repositório
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Documentação Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

**✅ Repositório configurado e pronto para deploy!** 