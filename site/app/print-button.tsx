"use client";

import type { ReactElement } from "react";

/** The host supplies this; the package renderer takes it as a slot so it needs
 *  no client boundary of its own. */
export function PrintButton(): ReactElement {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-[var(--radius-xs)] border border-[var(--border-subtle)] bg-[var(--surface-card)] px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] print:hidden"
    >
      Save as PDF
    </button>
  );
}
