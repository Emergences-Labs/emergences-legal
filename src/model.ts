// =============================================================
// Shared content model for /legal/* policy documents.
//
// Generalized from the Fee Terms' typed clause model
// (src/app/legal/fee-terms/terms-content.ts) so every policy — Privacy, Terms,
// Cookie, Acceptable Use, DPA, … — is authored as data, not JSX, and rendered
// by one component (LegalDocument) for pixel-identical styling. Counsel edits
// copy in these typed modules; the rendering never changes.
//
// Versioning: each document carries its own `version` (date-stamped, like the
// Fee Terms) and `effectiveDate`. Bumping the version is what signals a material
// change for the legal-updates archive.
// =============================================================

/** One rendered block inside a section. Mirrors the Fee Terms block kinds and
 *  adds `table` (data-category / sub-processor / retention grids) and `callout`
 *  (emphasized aside) which the policies need. */
export type LegalBlock =
  | { kind: "p"; text: string }
  /** Defined term: rendered as “Term” means … */
  | { kind: "def"; term: string; text: string }
  /** Run-in numbered sub-clause: **Heading.** body (auto-labelled n.m). */
  | { kind: "sub"; heading: string; text: string }
  /** Bulleted list. */
  | { kind: "list"; items: string[] }
  /** A small data grid (e.g. data categories, sub-processors, retention). */
  | { kind: "table"; columns: string[]; rows: string[][] }
  /** An emphasized aside with a mono kicker label. */
  | { kind: "callout"; label: string; text: string };

export interface LegalSection {
  /** 1-based clause number, shown as the section-heading prefix. */
  n: number;
  title: string;
  blocks: LegalBlock[];
}

/** A single plain-language summary point (the framed non-binding orientation
 *  aside that opens the Fee Terms). */
export interface LegalSummaryPoint {
  label: string;
  text: string;
}

export interface LegalDocument {
  /** Route slug under /legal (e.g. "privacy"). */
  slug: string;
  /** Document title, shown in the masthead and <title>. */
  title: string;
  /** One-line description for <meta> and the /legal index. */
  description: string;
  /** Date-stamped version string, e.g. "2026-07-03". */
  version: string;
  /** Human-readable effective date, e.g. "July 3, 2026". */
  effectiveDate: string;
  /** Hide the "Governing law" ledger item (for non-contract artifacts like a
   *  model card or bias audit, where it does not apply). */
  omitGoverningLaw?: boolean;
  /** Extra masthead ledger items appended after the defaults. */
  ledgerExtra?: { label: string; value: string }[];
  /** Optional plain-language summary (non-binding orientation). */
  summary?: LegalSummaryPoint[];
  /** Optional conspicuous top-of-document notice (e.g. a consent recital). */
  notice?: { label: string; text: string };
  /** Lead paragraph shown under the masthead, before the numbered clauses. */
  preamble?: string;
  /** The numbered clauses. */
  sections: LegalSection[];
  /** Closing colophon note (defaults handled by the renderer). */
  colophon?: string;
}
