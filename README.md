# Aplic Gráfica - Premium Web Experience

Este projeto é uma plataforma web moderna, desenvolvida com foco total em **conversão via WhatsApp** e **performance**. Não é apenas um site institucional, mas um "Hub de Vendas" para a gráfica líder em Florianópolis.

## 🚀 Tecnologias e Stack

*   **Framework:** Next.js 14 (App Router)
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS + Shadcn/UI
*   **Tipografia:** Google Sans Flex (Variable Font) localmente hospedada.
*   **Animações:** CSS Nativo (Scroll Reveal) + Micro-interações.

## 💎 Design System: "Tech & Premium"

O site foge do padrão "SaaS Genérico" e adota uma estética de estúdio de design, transmitindo solidez e modernidade.

*   **Paleta de Cores:**
    *   **Shark (#28282D):** Fundo escuro e textos principais. Sofisticação.
    *   **Canary (#E6FF50):** Acentos, CTAs e pontos de luz. Energia e Modernidade.
    *   **Iron (#CDD2D7):** Estrutura, bordas e detalhes técnicos.
*   **Conceitos Visuais:**
    *   *Glassmorphism* (Vidro) sutil.
    *   Cards com bordas arredondadas agressivas (estilo iOS/App).
    *   Animações de entrada (Scroll Reveal) cinematográficas.
    *   "WhatsApp First": Toda interação leva para uma conversa real.

## ⚡ Funcionalidades de Venda

1.  **Catálogo Inteligente:**
    *   Busca em tempo real.
    *   Filtros por categoria em formato "Pills" (cápsulas).
    *   Feedback instantâneo de "Nenhum resultado encontrado".
2.  **Calculadora de Preço (Client-Side):**
    *   Nos cards de produto, o cliente seleciona a quantidade (ex: 1000 ou 5000 un.) e o preço atualiza na hora.
    *   O botão do WhatsApp já gera uma mensagem personalizada com o pedido exato: *"Olá! Quero 5000 Panfletos..."*.
3.  **Hub de Contato:**
    *   Substituição do formulário de e-mail (lento) por um painel de triagem via WhatsApp (rápido).
    *   Canais específicos para: Orçamento, Arquivos, Status e Dúvidas.

## 🔍 SEO (Search Engine Optimization)

O site foi construído para dominar o Google Local em Florianópolis.

*   **JSON-LD (Dados Estruturados):** Schema de `LocalBusiness` injetado, com endereço, horários e geo-coordenadas.
*   **Metadados:** Títulos e descrições otimizados para cauda longa ("Gráfica Rápida Florianópolis").
*   **Sitemap & Robots:** Gerados automaticamente.
*   **Manifest:** Configurado para PWA (Progressive Web App).

## 🛡️ Segurança

O projeto segue as melhores práticas de segurança web:

*   **Headers de Segurança:** Configurados no `middleware.ts` e `next.config.mjs` (HSTS, X-Frame-Options, X-XSS-Protection).
*   **Content Security Policy (CSP):** Restritiva para evitar injeção de scripts maliciosos.
*   **Bloqueio de Rotas:** Arquivos sensíveis (`.env`, `.git`) são bloqueados pelo middleware.
*   **Sanitização:** Como não há banco de dados nem inputs complexos de formulário, a superfície de ataque é mínima.

## 🛠️ Como Rodar Localmente

1.  Instale as dependências:
    ```bash
    npm install
    # ou
    pnpm install
    ```

2.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

3.  Acesse `http://localhost:3000`.

## 👨‍💻 Créditos

Desenvolvido por **[Izaguirres](https://izaguirres.vercel.app)**.
© 2025 Aplic Gráfica.