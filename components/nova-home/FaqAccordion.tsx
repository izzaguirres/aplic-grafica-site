"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./faq-accordion.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <div
            className={`${styles.item} ${isOpen ? styles.open : ""}`}
            key={item.question}
          >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" />
            </button>
            <div
              id={panelId}
              className={styles.answer}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
