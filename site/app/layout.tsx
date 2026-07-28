import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { LEGAL_ENTITY } from "@emergences/legal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `Legal & Trust · ${LEGAL_ENTITY}`,
    template: `%s · ${LEGAL_ENTITY}`,
  },
  description:
    "Every agreement, privacy notice, AI-transparency artifact, and trust " +
    "commitment published by Emergences AI, Inc.",
};

// `legal-doc` on the shell root is what the package's print block is scoped to.
// Without it a printed contract keeps the screen palette. `legal-sheet` is what
// the same block flattens to save ink.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="legal-doc min-h-screen bg-[var(--surface-muted)] text-[var(--text-primary)]">
          <header className="sticky top-0 z-20 border-b border-[var(--border-subtle)] bg-[var(--surface-card)]/85 backdrop-blur-md print:hidden">
            <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <Link
                href="/"
                className="font-serif text-[17px] font-bold tracking-[-0.01em] text-[var(--text-primary)] no-underline hover:text-[var(--brand-strong)]"
              >
                {LEGAL_ENTITY}
              </Link>
              <nav className="flex gap-1">
                <Link
                  href="/"
                  className="rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[12.5px] font-medium text-[var(--text-secondary)] no-underline hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                >
                  Documents
                </Link>
                <Link
                  href="/updates"
                  className="rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[12.5px] font-medium text-[var(--text-secondary)] no-underline hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                >
                  Version archive
                </Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 print:p-0">
            <div className="legal-sheet rounded-[var(--radius-3xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] px-5 py-9 shadow-[var(--shadow-card)] sm:px-12 sm:py-14 print:rounded-none print:border-0 print:bg-transparent print:px-0 print:py-0 print:shadow-none">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
