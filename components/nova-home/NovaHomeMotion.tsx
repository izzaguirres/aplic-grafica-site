"use client";

import { useLayoutEffect } from "react";

const revealSelector = "[data-nova-reveal]";

export function NovaHomeMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-nova-home]");

    if (!root) return;

    const revealElements = Array.from(
      root.querySelectorAll<HTMLElement>(revealSelector),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const revealAll = () => {
      revealElements.forEach((element) => {
        element.dataset.revealed = "true";
      });
    };

    root.dataset.motionReady = "true";

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.dataset.revealed = "true";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.01,
      },
    );

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        revealElements.forEach((element) => observer.observe(element));
      });
    });

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      if (!event.matches) return;

      observer.disconnect();
      revealAll();
    };

    reducedMotion.addEventListener("change", handleReducedMotion);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      reducedMotion.removeEventListener("change", handleReducedMotion);
      observer.disconnect();
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
