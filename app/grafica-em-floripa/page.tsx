import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProductLandingPage, type ProductLandingFaq } from "@/components/site/ProductLandingPage";
import { productsData } from "@/lib/products-data";
import { createPageMetadata, createServicePageSchema } from "@/lib/site";

const whatsappMessage = "Olá! Vim pela página Gráfica em Floripa e quero fazer um orçamento.";
const productIds = ["cartao-brilho-frente", "panfleto-a6", "banner-lona", "etiqueta-adesiva"];
const products = productIds.flatMap((id) => productsData.filter((product) => product.id === id));
const faqs: ProductLandingFaq[] = [
  { question: "A Aplic atende pedidos online?", answer: "Sim. Você escolhe o produto, envia a arte pelo WhatsApp, aprova o orçamento e combina entrega ou retirada." },
  { question: "Quais produtos posso pedir?", answer: "Cartões, panfletos, banners, etiquetas, crachás, pastas e outros materiais gráficos sob orçamento." },
  { question: "Vocês imprimem na hora?", answer: "Não trabalhamos como impressão imediata de balcão. Cada pedido tem prazo definido conforme produto, quantidade e arquivo." },
  { question: "Como funciona a entrega?", answer: "A entrega atende Florianópolis e região. Endereço, valor e horário são combinados no atendimento." },
];

export const metadata: Metadata = createPageMetadata({ title: "Gráfica em Florianópolis", description: "Gráfica em Florianópolis para cartões, panfletos, banners, etiquetas e materiais empresariais. Atendimento pelo WhatsApp.", path: "/grafica-em-floripa", keywords: ["gráfica em florianópolis", "gráfica em floripa", "gráfica online florianópolis"] });
const pageSchema = createServicePageSchema({ path: "/grafica-em-floripa", name: "Gráfica em Florianópolis", description: "Gráfica online em Florianópolis para impressos e comunicação visual.", serviceType: "Serviços gráficos online", faqs, relatedProducts: products.map((product) => ({ name: product.name, description: product.description, url: product.landingPage })) });

export default function GraficaEmFloripaPage() {
  return <><JsonLd data={pageSchema} /><ProductLandingPage
    eyebrow="Gráfica em Florianópolis"
    title="Seu impresso produzido perto de você."
    lead="Escolha o produto, veja o preço e envie o pedido pelo WhatsApp. Produção local com prazo, entrega ou retirada combinados."
    heroImage={{ src: "/images/campanha/hero-adesivo-faz-propaganda.webp", alt: "Material impresso da campanha Faz Propaganda produzido pela Aplic", position: "50% 50%" }}
    products={products}
    productsTitle="Comece pelos produtos mais pedidos."
    productsLead="Preço por quantidade no card e atendimento direto para confirmar arte, prazo e entrega."
    highlights={[
      { label: "01", title: "Escolha online", description: "Produtos e preços ficam visíveis para você começar sem esperar uma tabela por mensagem." },
      { label: "02", title: "Produção local", description: "Acompanhamos o pedido em Florianópolis e confirmamos o arquivo antes de produzir." },
      { label: "03", title: "Entrega combinada", description: "O material segue para o endereço ou fica disponível para retirada agendada." },
    ]}
    faqs={faqs}
    whatsappMessage={whatsappMessage}
    analyticsSource="lp_floripa"
  /></>;
}
