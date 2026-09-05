"use client";

import { useLayoutEffect } from "react";

const revealSelector = "[data-aplic-reveal]";

export function EditorialReveal() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-aplic-page]");

    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let shouldReduceMotion = reducedMotion.matches;

    const reveal = (element: HTMLElement, immediate = false) => {
      if (immediate) element.dataset.revealInstant = "true";
      element.dataset.revealed = "true";
    };

    const revealAll = () => {
      root
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => reveal(element));
    };

    root.dataset.motionReady = "true";

    if (!("IntersectionObserver" in window)) {
      revealAll();
      delete root.dataset.motionReady;
      return;
    }

    if (shouldReduceMotion) revealAll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          reveal(element);
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.01,
      },
    );

    const observe = (element: HTMLElement) => {
      if (shouldReduceMotion || element.dataset.revealed === "true") {
        reveal(element);
        return;
      }

      observer.observe(element);
    };

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        root
          .querySelectorAll<HTMLElement>(revealSelector)
          .forEach((element) => observe(element));
      });
    });

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.matches(revealSelector)) reveal(node, true);
          node
            .querySelectorAll<HTMLElement>(revealSelector)
            .forEach((element) => reveal(element, true));
        });
      });
    });

    mutations.observe(root, { childList: true, subtree: true });

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      shouldReduceMotion = event.matches;
      if (!event.matches) return;

      observer.disconnect();
      revealAll();
    };

    reducedMotion.addEventListener("change", handleReducedMotion);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      mutations.disconnect();
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleReducedMotion);
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
