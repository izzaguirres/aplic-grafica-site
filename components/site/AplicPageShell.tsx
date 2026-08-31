import type { ReactNode } from "react";
import { EditorialReveal } from "./EditorialReveal";

interface AplicPageShellProps {
  children: ReactNode;
  className?: string;
}

export function AplicPageShell({ children, className }: AplicPageShellProps) {
  return (
    <div
      data-aplic-page
      data-aplic-shell
      data-motion-ready="true"
      className={className}
    >
      <noscript>
        <style>{`
          [data-aplic-page] [data-aplic-reveal] {
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
          }
        `}</style>
      </noscript>
      <EditorialReveal />
      {children}
    </div>
  );
}
