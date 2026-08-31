import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProductLandingPage, type ProductLandingFaq } from "@/components/site/ProductLandingPage";
import { createPageMetadata, createServicePageSchema } from "@/lib/site";

const whatsappMessage = "Olá! Quero um orçamento de blocos ou receituários. Vou enviar o formato, a quantidade e um modelo ou referência.";
const faqs: ProductLandingFaq[] = [
  { question: "Vocês fazem receituário personalizado?", answer: "Sim. Produzimos conforme o arquivo e as informações enviadas pelo profissional ou pela clínica." },
  { question: "Que tipos de bloco posso pedir?", answer: "Blocos de pedido, orçamento, recibo, checklist, ordem de serviço, atendimento e outros formatos sob orçamento." },
  { question: "Preciso enviar a arte pronta?", answer: "Se tiver arte final, envie. Um modelo antigo ou uma referência também ajuda a avaliarmos o arquivo necessário." },
  { question: "Qual é o prazo?", answer: "O prazo depende do formato e da quantidade. Ele é confirmado com o valor antes de iniciar a produção." },
];

export const metadata: Metadata = createPageMetadata({ title: "Blocos e Receituário Médico em Florianópolis", description: "Blocos personalizados e receituários em Florianópolis para clínicas, consultórios e empresas. Atendimento pelo WhatsApp.", path: "/blocos-receituario", keywords: ["blocos personalizados florianópolis", "receituário médico florianópolis", "bloco de pedido floripa"] });
const pageSchema = createServicePageSchema({ path: "/blocos-receituario", name: "Blocos e receituários em Florianópolis", description: "Blocos personalizados e receituários para clínicas, consultórios e empresas.", serviceType: "Impressão de blocos e receituários", faqs });

export default function BlocosReceituarioPage() {
  return <><JsonLd data={pageSchema} /><ProductLandingPage
    eyebrow="Blocos e receituários"
    title="Papelaria feita para a rotina funcionar."
    lead="Receituários, blocos de pedido e materiais personalizados para clínicas, consultórios e empresas."
    placeholderLabel="Foto de campanha dos blocos em produção"
    products={[]}
    productsTitle=""
    productsLead=""
    highlights={[
      { label: "01", title: "Formato definido", description: "Tamanho, número de folhas e uso do bloco são combinados conforme sua rotina." },
      { label: "02", title: "Informações conferidas", description: "Dados profissionais, campos e organização do layout passam por aprovação." },
      { label: "03", title: "Produção sob medida", description: "Quantidade, valor e prazo são confirmados antes de começar." },
    ]}
    faqs={faqs}
    whatsappMessage={whatsappMessage}
    analyticsSource="lp_blocos"
  /></>;
}
