import Link from "next/link";
import type { ReactElement } from "react";
import {
  LEGAL_ENTITY,
  LEGAL_SCOPE_LABELS,
  type LegalDocument,
} from "@emergences/legal";
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  documentsIn,
} from "./catalog";

export const dynamic = "force-static";

const KICKER =
  "m-0 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]";

const READERS = [
  {
    label: "You are a customer",
    text: "You use NeoWork to redesign roles and assess candidates.",
    href: "/terms",
    cta: "Terms, Fee Terms, DPA",
  },
  {
    label: "You are a candidate",
    text: "You were invited to an assessment, or took one from a public posting.",
    href: "/candidate-privacy",
    cta: "Your privacy and rights",
  },
  {
    label: "You are visiting",
    text: "You are reading our websites and nothing more.",
    href: "/website-privacy",
    cta: "Website notices",
  },
];

function DocRow({ doc }: { doc: LegalDocument }): ReactElement {
  return (
    <Link
      href={`/${doc.slug}`}
      className="block rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-card)] px-4 py-3.5 no-underline transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[14px] font-bold text-[var(--text-primary)]">
          {doc.title}
        </span>
        <span className="shrink-0 rounded-[var(--radius-full)] border border-[var(--border-subtle)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
          {LEGAL_SCOPE_LABELS[doc.scope]}
        </span>
      </div>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
        {doc.description}
      </p>
      <p className="mt-2 font-mono text-[10px] text-[var(--text-muted)]">
        Effective {doc.effectiveDate}
      </p>
    </Link>
  );
}

export default function LegalIndexPage(): ReactElement {
  return (
    <article>
      <header className="pb-1">
        <p className={KICKER}>{LEGAL_ENTITY}</p>
        <h1 className="mt-2.5 font-serif text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[var(--text-primary)] sm:text-[34px]">
          Legal &amp; Trust
        </h1>
        <p className="mt-4 max-w-[46ch] text-[14px] leading-[1.7] text-[var(--text-secondary)]">
          Every agreement, privacy notice, AI-transparency artifact, and trust
          commitment we publish. Each document states the product it governs and
          the date it took effect.
        </p>
      </header>

      <section className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] border-l-2 border-l-[var(--brand)] bg-[var(--surface-inset)] px-5 py-4">
        <p className={KICKER}>Start with your own relationship</p>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3 sm:divide-x sm:divide-[var(--border-subtle)]">
          {READERS.map((reader, i) => (
            <div key={reader.href} className="sm:px-5 sm:first:pl-0 sm:last:pr-0">
              <p className="m-0 font-mono text-[10px] tabular-nums text-[var(--text-muted)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1.5 text-[13px] font-bold text-[var(--text-primary)]">
                {reader.label}
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
                {reader.text}
              </p>
              <Link
                href={reader.href}
                className="mt-2 inline-block text-[12.5px] font-bold text-[var(--brand)] no-underline hover:underline"
              >
                {reader.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-9 space-y-9">
        {CATEGORY_ORDER.map((category) => {
          const docs = documentsIn(category);
          if (docs.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="border-b border-[var(--border-subtle)] pb-2 font-mono text-[10.5px] font-normal uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {CATEGORY_LABELS[category]}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {docs.map((doc) => (
                  <DocRow key={doc.slug} doc={doc} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
