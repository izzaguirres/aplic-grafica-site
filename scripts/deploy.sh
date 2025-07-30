#!/bin/bash

# Script de Deploy - Aplic Gráfica
# Uso: ./scripts/deploy.sh [vercel|manual]

set -e

echo "🚀 Iniciando processo de deploy..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    error "Execute este script na raiz do projeto"
    exit 1
fi

# Limpar builds anteriores
log "🧹 Limpando builds anteriores..."
npm run clean 2>/dev/null || true

# Instalar dependências
log "📦 Instalando dependências..."
npm install

# Verificar tipos TypeScript
log "🔍 Verificando tipos TypeScript..."
if ! npm run type-check; then
    error "Erro na verificação de tipos TypeScript"
    exit 1
fi

# Executar linting
log "🔍 Executando linting..."
if ! npm run lint; then
    warn "Avisos de linting encontrados, mas continuando..."
fi

# Build de produção
log "🏗️ Executando build de produção..."
if ! npm run build; then
    error "Erro no build de produção"
    exit 1
fi

log "✅ Build concluído com sucesso!"

# Deploy baseado no argumento
case "${1:-vercel}" in
    "vercel")
        log "🚀 Deployando no Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            warn "Vercel CLI não encontrado. Instalando..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
    "manual")
        log "📋 Deploy manual - Build pronto para deploy"
        log "Execute: npm start"
        ;;
    *)
        error "Opção inválida. Use: vercel ou manual"
        exit 1
        ;;
esac

log "�� Deploy concluído!" 