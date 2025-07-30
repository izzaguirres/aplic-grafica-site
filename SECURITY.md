# 🔒 Guia de Segurança - Aplic Gráfica

## ⚠️ **Limitações Importantes**

### **Código Frontend SEMPRE será visível**
- JavaScript, HTML e CSS são **sempre visíveis** no navegador
- Isso é **normal e esperado** para sites web
- **Não é possível** esconder completamente o código frontend

### **O que PODE ser protegido:**
- ✅ Chaves de API e credenciais
- ✅ Lógica de negócio sensível
- ✅ Dados de usuários
- ✅ Configurações do servidor

## 🛡️ **Estratégias Implementadas**

### **1. Variáveis de Ambiente**
```bash
# .env.local (NUNCA commite no Git)
EMAIL_PASS=sua_senha_aqui
API_KEY=sua_chave_aqui
```

### **2. Ofuscação de Código**
- ✅ **SWC Minify**: Código minificado em produção
- ✅ **Tree Shaking**: Código não utilizado removido
- ✅ **Bundle Splitting**: Código dividido em chunks

### **3. Headers de Segurança**
```javascript
// Headers implementados:
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: [configurado]
```

### **4. Rate Limiting**
- ✅ **API Routes**: Máximo 5 tentativas por minuto
- ✅ **Middleware**: Proteção adicional

### **5. Validação e Sanitização**
- ✅ **Zod Schema**: Validação rigorosa
- ✅ **Sanitização**: Remoção de caracteres perigosos
- ✅ **Content-Type**: Verificação de tipo

## 🚫 **O que NÃO pode ser escondido:**

### **Código Frontend (Sempre Visível)**
```javascript
// Isso SEMPRE será visível no navegador
const whatsappNumber = "5548999128310"
const productList = [...]
const componentLogic = () => {...}
```

### **Imagens e Assets**
- Todas as imagens em `/public/` são públicas
- CSS e JavaScript são sempre visíveis

## 🔐 **Proteções Adicionais Recomendadas**

### **1. Autenticação (se necessário)**
```bash
npm install next-auth
```

### **2. Criptografia de Dados**
```bash
npm install bcryptjs
```

### **3. Monitoramento**
```bash
npm install @sentry/nextjs
```

### **4. WAF (Web Application Firewall)**
- Cloudflare
- AWS WAF
- Vercel Edge Functions

## 📋 **Checklist de Segurança**

### **✅ Implementado**
- [x] Variáveis de ambiente
- [x] Headers de segurança
- [x] Rate limiting básico
- [x] Validação de dados
- [x] Sanitização de inputs
- [x] HTTPS forçado
- [x] Bloqueio de arquivos sensíveis

### **🔄 Recomendado**
- [ ] Autenticação de usuários
- [ ] Criptografia de dados sensíveis
- [ ] Logs de segurança
- [ ] Monitoramento de ataques
- [ ] Backup automático
- [ ] Certificado SSL válido

## 🚨 **Alertas Importantes**

### **1. WhatsApp Number**
- O número do WhatsApp **deve ser público**
- É parte do negócio, não informação sensível

### **2. Produtos e Preços**
- Informações de produtos **devem ser públicas**
- São parte do marketing do site

### **3. Contatos**
- Email e telefone **devem ser visíveis**
- São informações de contato do negócio

## 🔧 **Comandos de Segurança**

```bash
# Verificar vulnerabilidades
npm audit

# Atualizar dependências
npm update

# Verificar tipos
npm run type-check

# Build seguro
npm run build
```

## 📞 **Suporte de Segurança**

Para questões de segurança:
1. **Não commite** arquivos `.env`
2. **Use HTTPS** sempre
3. **Mantenha dependências** atualizadas
4. **Monitore logs** regularmente
5. **Faça backups** frequentes

---

**⚠️ Lembre-se**: Código frontend sempre será visível. Foque em proteger dados sensíveis e lógica de negócio no backend. 