import Image from "next/image";
import { Clock3, MapPin, MessageCircleMore } from "lucide-react";
import { WhatsAppAction } from "@/components/nova-home/NovaHomeActions";
import { AplicPageShell } from "@/components/site/AplicPageShell";
import styles from "./contato.module.css";

const contactOptions = [
  {
    number: "01",
    title: "Quero um orçamento",
    text: "Conte o produto, a quantidade e a medida. Se tiver uma referência, mande junto.",
    label: "Pedir orçamento",
    source: "contact_budget",
    scope: "general_quote" as const,
    context: "budget_request",
    message: "Olá! Quero solicitar um orçamento. Vou enviar o produto, a quantidade e a medida.",
  },
  {
    number: "02",
    title: "Quero enviar minha arte",
    text: "Envie o arquivo para conferirmos formato, tamanho e o que precisa ser ajustado antes da produção.",
    label: "Enviar minha arte",
    source: "contact_file",
    scope: "artwork_submission" as const,
    context: "artwork_review",
    message: "Olá! Quero enviar uma arte para conferência e orçamento.",
  },
  {
    number: "03",
    title: "Quero acompanhar um pedido",
    text: "Informe seu nome ou empresa para verificarmos em que etapa está o material.",
    label: "Consultar pedido",
    source: "contact_status",
    scope: "order_support" as const,
    context: "order_status",
    message: "Olá! Gostaria de consultar o andamento do meu pedido.",
  },
];

export default function ContatoPageClient() {
  return (
    <AplicPageShell className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow} data-aplic-reveal="text">
            Fale com a Aplic
          </p>
          <h1 id="contact-title" data-aplic-reveal="text" data-reveal-order="1">
            Seu orçamento começa numa conversa simples.
          </h1>
          <p data-aplic-reveal="text" data-reveal-order="2">
            Sem formulário e sem cadastro. Conte o que você precisa pelo WhatsApp e nossa equipe confirma o próximo passo.
          </p>
          <div data-aplic-reveal="text" data-reveal-order="3">
            <WhatsAppAction
              label="Iniciar conversa"
              message="Olá! Vim pelo site e quero conversar sobre um material gráfico."
              source="contact_main"
              scope="general_quote"
              context="contact_page_main"
              tone="lime"
            />
          </div>
          <div className={styles.serviceFacts} data-aplic-reveal="text" data-reveal-order="4">
            <span><Clock3 aria-hidden="true" />Segunda a sexta, 9h às 18h</span>
            <span><MapPin aria-hidden="true" />Florianópolis e região</span>
          </div>
        </div>
        <div className={styles.heroMedia} data-aplic-reveal="media">
          <Image
            src="/images/campanha/hero-adesivo-faz-propaganda.webp"
            alt="Adesivo da campanha Faz Propaganda sendo aplicado"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 43vw"
          />
        </div>
      </section>

      <section className={styles.options} aria-labelledby="contact-options-title">
        <header>
          <p className={styles.eyebrow} data-aplic-reveal="text">
            Como podemos ajudar
          </p>
          <h2 id="contact-options-title" data-aplic-reveal="text" data-reveal-order="1">
            Escolha o assunto e já comece do ponto certo.
          </h2>
        </header>
        <div className={styles.optionGrid}>
          {contactOptions.map((option, index) => (
            <article key={option.number} data-aplic-reveal="text" data-reveal-order={String(index)}>
              <span>{option.number}</span>
              <h3>{option.title}</h3>
              <p>{option.text}</p>
              <WhatsAppAction
                label={option.label}
                message={option.message}
                source={option.source}
                scope={option.scope}
                context={option.context}
                tone={index === 1 ? "light" : "lime"}
                showLeadingIcon={false}
              />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.info} aria-label="Informações de atendimento">
        <div data-aplic-reveal="text">
          <MessageCircleMore aria-hidden="true" />
          <p><strong>Atendimento online</strong> pelo WhatsApp, do orçamento à confirmação do pedido.</p>
        </div>
        <div data-aplic-reveal="text" data-reveal-order="1">
          <MapPin aria-hidden="true" />
          <p><strong>Produção em Florianópolis</strong> com entrega ou retirada previamente combinada.</p>
        </div>
      </section>
    </AplicPageShell>
  );
}
