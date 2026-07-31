import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactElement } from "react";
import {
  LEGAL_ENTITY,
  LEGAL_SCOPE_LABELS,
  type LegalDocument,
} from "@emergences/legal";
import { CATEGORY_LABELS, CATEGORY_ORDER, documentsIn } from "./catalog";

export const dynamic = "force-static";

/**
 * Every row on this page is the same shape: the DocRow from the product's
 * /legal index, down to the ArrowUpRight that nudges on hover.
 *
 * The "Start here" group at the top is a CATEGORY SECTION, not a new component.
 * An earlier draft had a framed three-column panel there, which was invented for
 * this page and existed nowhere in the design system — so it read as a different
 * product. Routing a reader to the right document is a list of links, and the
 * system already has a list of links.
 */
function Row({
  title,
  blurb,
  href,
  chip,
}: {
  title: string;
  blurb: string;
  href: string;
  chip?: string;
}): ReactElement {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-card)] px-4 py-3.5 no-underline transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-card)]"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-[var(--text-primary)]">
            {title}
          </span>
          <ArrowUpRight
            className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]"
            strokeWidth={2}
            aria-hidden
          />
          {chip ? (
            <span className="shrink-0 rounded-full border border-[var(--border-subtle)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              {chip}
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
          {blurb}
        </p>
      </div>
    </Link>
  );
}

const START_HERE = [
  {
    title: "You are a customer",
    blurb:
      "You use NeoWork to redesign roles and assess candidates. Start with the Terms of Service.",
    href: "/terms",
  },
  {
    title: "You are a candidate",
    blurb:
      "You were invited to an assessment, or took one from a public posting. Start with the Candidate Privacy Notice.",
    href: "/candidate-privacy",
  },
  {
    title: "You are visiting our website",
    blurb:
      "You are reading emergences.ai and nothing more. Start with the Website Privacy Notice.",
    href: "/website-privacy",
  },
];

export default function LegalIndexPage(): ReactElement {
  return (
    <article>
      <header className="pb-1">
        <p className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
          {LEGAL_ENTITY}
        </p>
        <h1 className="mt-2.5 font-serif text-[30px] font-normal leading-[1.14] tracking-[-0.02em] text-[var(--text-primary)] sm:text-[36px]">
          Legal &amp; Trust
        </h1>
        <p className="mt-4 max-w-[46ch] text-[14px] leading-[1.7] text-[var(--text-secondary)]">
          Our agreements, privacy notices, AI-transparency artifacts, and trust
          commitments, in one place. Each document states the product it governs
          and the date it took effect.
        </p>
      </header>

      <div className="mt-9 space-y-9">
        <section>
          <h2 className="border-b border-[var(--border-subtle)] pb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Start here
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {START_HERE.map((entry) => (
              <Row key={entry.href} {...entry} />
            ))}
          </div>
        </section>

        {CATEGORY_ORDER.map((category) => {
          const docs = documentsIn(category);
          if (docs.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="border-b border-[var(--border-subtle)] pb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {CATEGORY_LABELS[category]}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {docs.map((doc: LegalDocument) => (
                  <Row
                    key={doc.slug}
                    title={doc.title}
                    blurb={doc.description}
                    href={`/${doc.slug}`}
                    chip={LEGAL_SCOPE_LABELS[doc.scope]}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="mt-12 border-t border-[var(--border-subtle)] pt-6">
        <p className="m-0 text-[11.5px] leading-relaxed text-[var(--text-muted)]">
          Looking for something you don&apos;t see here? Contact us and we&apos;ll
          point you to the right document or prepare one.
        </p>
      </footer>
    </article>
  );
}
