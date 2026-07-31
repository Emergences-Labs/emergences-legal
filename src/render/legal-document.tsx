import type { ReactElement, ReactNode } from "react";
import { GOVERNING_LAW, LEGAL_CONTACTS, LEGAL_ENTITY } from "../company.js";
import { LEGAL_SCOPE_LABELS } from "../model.js";
import type { LegalBlock, LegalDocument } from "../model.js";

// =============================================================
// Shared renderer for /legal/* policy documents. Reproduces the Fee Terms
// "printed instrument" exactly — masthead + meta ledger, an optional
// plain-language summary and conspicuous notice, an auto-generated clause index,
// numbered sections with hung mono numerals, an end mark, and a colophon — but
// driven by a typed LegalDocument model so every policy is styled identically.
//
// Pure presentation; every color/space is a design token. The <article> is
// dropped into a `.legal-doc > .legal-sheet` shell supplied by the host app.
//
// HEADINGS ARE font-normal, DELIBERATELY. Libre Baskerville is loaded at 400
// and 700 only, with nothing in between, so CSS resolves a declared 600 UP to
// the 700 file and a declared 500 DOWN to 400. The house's own long-form
// surface (`.jd-posting h1/h2/h3`) declares 600 and therefore already renders
// heavy — matching its NUMBER would change nothing about what a reader sees.
// The one precedent for a large serif heading in the regular face is
// `.no-access-card h2`, which declares 500. Run-in emphasis inside a paragraph
// (`def`, `sub`) stays heavy, because that is exactly what `.jd-posting strong`
// does. Do not "restore" bold headings to match a 600 written elsewhere.
//
// IT LIVES HERE, IN THE PACKAGE, ON PURPOSE. The product renders this document
// at the moment a customer accepts it; the legal site publishes the same
// document to the world. Two renderers would make one document look like two,
// and the difference would show up in the version a reader prints. The host
// supplies the tokens (see tokens.css for the complete set this file reads and
// the print block it depends on) and the print control.
// =============================================================

/** Shared mono kicker/eyebrow. The label half of the app's labelled-block
 *  treatment (outcome-chain.tsx `Section`, executive-dashboard.tsx
 *  `DetailSection`), and the label on the two asides that stay framed. */
const KICKER =
  "m-0 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]";

/** Stable key for a block within its section — content-derived, not index. */
function blockKey(block: LegalBlock, i: number): string {
  switch (block.kind) {
    case "p":
      return block.text.slice(0, 40);
    case "def":
      return block.term;
    case "sub":
      return block.heading;
    case "list":
      return block.items.join("|").slice(0, 40);
    case "table":
      return `table-${block.columns.join("-").slice(0, 32)}-${i}`;
    case "callout":
      return `callout-${block.label}`;
  }
}

/** One rendered clause block. `subLabel` (e.g. "8.2") is supplied by the section
 *  renderer for run-in sub-headings so numbered sub-clauses read like a real
 *  contract; other block kinds ignore it. */
function Block({
  block,
  subLabel,
}: {
  block: LegalBlock;
  subLabel?: string;
}): ReactElement {
  switch (block.kind) {
    case "p":
      return (
        <p className="mt-4 text-[14px] leading-[1.75] text-[var(--text-secondary)] [text-wrap:pretty]">
          {block.text}
        </p>
      );
    case "def":
      return (
        <p className="mt-4 text-[14px] leading-[1.75] text-[var(--text-secondary)] [text-wrap:pretty]">
          <strong className="font-semibold text-[var(--text-primary)]">
            “{block.term}”
          </strong>{" "}
          means {block.text}
        </p>
      );
    case "sub":
      return (
        <p className="mt-4 text-[14px] leading-[1.75] text-[var(--text-secondary)] [text-wrap:pretty]">
          {subLabel ? (
            <span className="mr-1.5 font-mono text-[11.5px] tabular-nums text-[var(--text-muted)]">
              {subLabel}
            </span>
          ) : null}
          <strong className="font-semibold text-[var(--text-primary)]">
            {block.heading}.
          </strong>{" "}
          {block.text}
        </p>
      );
    case "list":
      // The disc is a browser default this design system overrides on purpose:
      // `.jd-posting li::before` (globals.css) is list-style none plus a 5px
      // round brand dot at 0.7 and a 20px hang, and it is the app's own
      // long-form document surface.
      return (
        <ul className="mt-3 list-none space-y-2 p-0 text-[14px] leading-[1.75] text-[var(--text-secondary)]">
          {block.items.map((item) => (
            <li
              key={item}
              className="relative pl-5 before:absolute before:left-[3px] before:top-[10px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[var(--brand)] before:opacity-70 before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="mt-5 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-5 py-4 print:break-inside-avoid">
          <p className={KICKER}>{block.label}</p>
          <p className="mt-2 text-[13.5px] leading-[1.7] text-[var(--text-secondary)] [text-wrap:pretty]">
            {block.text}
          </p>
        </aside>
      );
    case "table":
      return (
        <div className="mt-4 overflow-x-auto print:overflow-visible">
          <table className="w-full border-collapse text-left text-[12.5px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                {block.columns.map((col) => (
                  <th
                    key={col}
                    className="py-2 pr-4 align-bottom font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row.join("|").slice(0, 48)}
                  className="border-b border-[var(--border-subtle)] last:border-0 print:break-inside-avoid"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`py-2.5 pr-4 align-top leading-[1.6] ${
                        ci === 0
                          ? "font-medium text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/** Small labelled cell in the masthead meta ledger. */
function LedgerItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}): ReactElement {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>
      <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {label}
      </dt>
      <dd className="m-0 font-mono text-[12.5px] tabular-nums text-[var(--text-secondary)]">
        {value}
      </dd>
    </div>
  );
}

export function LegalDocumentView({
  doc,
  printSlot,
  afterDocumentSlot,
}: {
  doc: LegalDocument;
  /** The host app's print control. A slot rather than a component, so this
   *  package needs no "use client" boundary and no framework of its own. */
  printSlot?: ReactNode;
  /** Rendered between the end mark and the colophon — after the instrument is
   *  closed, before the imprint. The Fee Terms acceptance island goes here.
   *  A slot for the same reason `printSlot` is one: the island reads a Clerk
   *  session and posts to the host's own API, neither of which this package
   *  knows anything about. It exists so the product does not need a second
   *  renderer to add one interactive element to one document. */
  afterDocumentSlot?: ReactNode;
}): ReactElement {
  return (
    <article>
      {/* Masthead */}
      <header className="pb-1">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {LEGAL_ENTITY}
            </p>
            <h1 className="mt-2.5 font-serif text-[30px] font-normal leading-[1.14] tracking-[-0.02em] text-[var(--text-primary)] sm:text-[36px]">
              {doc.title}
            </h1>
          </div>
          {printSlot ? <div className="shrink-0">{printSlot}</div> : null}
        </div>
        <dl className="mt-6 grid grid-cols-1 gap-y-3 border-y border-[var(--border-subtle)] py-3.5 sm:flex sm:flex-wrap sm:items-stretch sm:gap-y-0 sm:divide-x sm:divide-[var(--border-subtle)]">
          <LedgerItem label="Version" value={doc.version} className="sm:pr-7" />
          <LedgerItem
            label="Effective"
            value={doc.effectiveDate}
            className="sm:px-7"
          />
          <LedgerItem
            label="Applies to"
            value={LEGAL_SCOPE_LABELS[doc.scope]}
            className="sm:px-7"
          />
          {doc.omitGoverningLaw ? null : (
            <LedgerItem
              label="Governing law"
              value={GOVERNING_LAW}
              className="sm:px-7"
            />
          )}
          {doc.ledgerExtra?.map((item) => (
            <LedgerItem
              key={item.label}
              label={item.label}
              value={item.value}
              className="sm:px-7"
            />
          ))}
        </dl>
      </header>

      {/* Plain-language summary — non-binding orientation, then the document.
          Rendered as the app's labelled-block treatment: a hairline above, a
          mono eyebrow, and the content in the reading column. No box, no fill,
          no accent rule. It STACKS rather than sitting in a three-column grid,
          which is also what makes it correct for a document with four points
          (arena-terms has four; the old grid dropped the fourth onto a second
          row carrying a divider on its left and no rule above it). */}
      {doc.summary && doc.summary.length > 0 ? (
        <section
          aria-label="Summary"
          className="mt-6 print:break-inside-avoid"
        >
          {/* No rule of its own: the masthead ledger directly above already
              closes with one, and two parallel hairlines 40px apart bound
              nothing. This is what the house pattern's `first` prop is for
              (outcome-chain.tsx `Section`), and the browser render is where it
              showed — the approved mockup carried the doubled rule. */}
          <p className={KICKER}>
            In plain language · summary only, not a substitute for the terms
            below
          </p>
          <div className="mt-1">
            {doc.summary.map((point, i) => (
              <div
                key={point.label}
                className="flex items-baseline gap-3 border-t border-[var(--border-subtle)] py-[11px] first:border-t-0 first:pt-1"
              >
                <span className="w-[18px] shrink-0 font-mono text-[11px] tabular-nums text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="m-0 text-[14px] text-[var(--text-primary)]">
                    {point.label}
                  </p>
                  <p className="mt-[3px] text-[13.5px] leading-[1.7] text-[var(--text-secondary)] [text-wrap:pretty]">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Preamble */}
      {doc.preamble ? (
        <p className="mt-8 text-[15px] leading-[1.8] text-[var(--text-primary)] [text-wrap:pretty]">
          {doc.preamble}
        </p>
      ) : null}

      {/* Conspicuous notice recital */}
      {doc.notice ? (
        <aside className="mt-6 rounded-[var(--radius-lg)] border border-[var(--brand-border)] bg-[var(--brand-subtle)] px-5 py-4 print:break-inside-avoid">
          <p className={KICKER}>{doc.notice.label}</p>
          <p className="mt-2 text-[13.5px] leading-[1.7] text-[var(--text-secondary)] [text-wrap:pretty]">
            {doc.notice.text}
          </p>
        </aside>
      ) : null}

      {/* Clause index */}
      <nav
        aria-label="Contents"
        className="mt-7 border-t border-[var(--border-subtle)] pt-4 print:break-inside-avoid"
      >
        <p className={KICKER}>Contents</p>
        <ol className="mt-2 grid list-none grid-cols-1 gap-x-8 gap-y-0.5 p-0 sm:grid-cols-2">
          {doc.sections.map((section) => (
            <li key={section.n}>
              <a
                href={`#clause-${section.n}`}
                className="group -mx-1.5 flex items-baseline gap-2.5 rounded-[var(--radius-xs)] px-1.5 py-1 no-underline transition-colors hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-card)]"
              >
                <span className="w-5 shrink-0 font-mono text-[11.5px] tabular-nums text-[var(--text-muted)] transition-colors group-hover:text-[var(--brand)]">
                  {section.n}
                </span>
                <span className="text-[13px] text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">
                  {section.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Numbered clauses */}
      <div className="mt-10">
        {doc.sections.map((section) => {
          let subCount = 0;
          return (
            <section
              key={section.n}
              id={`clause-${section.n}`}
              className="relative scroll-mt-24 border-t border-[var(--border-subtle)] pl-9 pt-7 first:border-t-0 sm:pl-14 [&:not(:first-child)]:mt-9"
            >
              <span
                className="absolute left-0 top-[1.75rem] font-mono text-[13px] tabular-nums text-[var(--text-muted)] sm:text-[14px]"
                aria-hidden
              >
                {section.n}.
              </span>
              <h2 className="m-0 font-serif text-[20px] font-normal tracking-[-0.01em] text-[var(--text-primary)]">
                {section.title}
              </h2>
              {section.blocks.map((block, i) => {
                let subLabel: string | undefined;
                if (block.kind === "sub") {
                  subCount += 1;
                  subLabel = `${section.n}.${subCount}`;
                }
                return (
                  <Block key={blockKey(block, i)} block={block} subLabel={subLabel} />
                );
              })}
            </section>
          );
        })}
      </div>

      {/* End mark */}
      <div className="mt-14 flex items-center gap-4" aria-hidden>
        <span className="h-px flex-1 bg-[var(--border-subtle)]" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
          End of {doc.title}
        </span>
        <span className="h-px flex-1 bg-[var(--border-subtle)]" />
      </div>

      {afterDocumentSlot}

      {/* Colophon */}
      <footer className="mt-12 border-t border-[var(--border-subtle)] pt-6">
        <p className="m-0 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
          {LEGAL_ENTITY} · {doc.title} {doc.version} · Effective{" "}
          {doc.effectiveDate}
        </p>
        <p className="mt-3 text-[11.5px] leading-relaxed text-[var(--text-muted)]">
          {doc.colophon ??
            "When we make material changes to this document we will update the version and notify affected users before the changes take effect."}{" "}
          Questions:{" "}
          <a
            href={`mailto:${LEGAL_CONTACTS.privacy}`}
            className="rounded-[var(--radius-xs)] font-medium text-[var(--brand)] no-underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-card)]"
          >
            {LEGAL_CONTACTS.privacy}
          </a>
          .
        </p>
      </footer>
    </article>
  );
}
