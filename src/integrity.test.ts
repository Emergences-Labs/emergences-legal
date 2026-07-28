/**
 * Structural invariants every document must hold, plus the one that proves this
 * package did not change a word when the text was extracted from the product.
 *
 * THE FAILURE THE STRUCTURAL CHECKS PREVENT is a document that cannot answer
 * "which version was in effect on date X". For a privacy notice that question
 * is a GDPR Art 5(2)/24 accountability obligation; for a clickwrap agreement it
 * is the whole evidentiary point.
 *
 * They were written on 2026-07-28 from two defects found in the documents then
 * published on emergences.ai, both of which existed because nothing checked
 * them: neither carried a version or an effective date while both promised
 * "an updated effective date" in their own closing section, and the Terms of Use
 * left its first section unnumbered and resumed at "2", mis-citing every clause
 * in it by one.
 *
 * THE FEE-TERMS HASH CHECK is different in kind. `feeTermsHash()` in the
 * product hashes {version, preamble, sections} at every acceptance, and
 * `terms_acceptances.terms_hash` stores the result. If extraction had altered
 * so much as a space, existing acceptances would still verify against the old
 * hash while every new one recorded a different value under the SAME version
 * string — a silent fork in the evidence chain, invisible until a dispute.
 * The constant below is the hash the product pinned before the move.
 */
import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { ALL_LEGAL_DOCUMENTS, legalDocumentBySlug } from "./all.js";
import {
  FEE_TERMS_VERSION,
  TERMS_PREAMBLE,
  TERMS_SECTIONS,
} from "./documents/fee-terms.js";

/** ISO date, so the version sorts and is unambiguous across locales. */
const VERSION_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** Pinned in neohuman-hiring's src/lib/billing/fee-terms-hash.test.ts as
 *  CURRENT_TERMS_HASH before this text moved. It must not change here. */
const FEE_TERMS_HASH_BEFORE_EXTRACTION =
  "4ae819e90026dc0ba54f87b19b07befb8155be7c8f2b0373873d706862cbd3f5";

describe("legal document integrity", () => {
  it.each(ALL_LEGAL_DOCUMENTS.map((doc) => [doc.slug, doc] as const))(
    "%s is datable",
    (_slug, doc) => {
      expect(doc.version).toMatch(VERSION_PATTERN);
      expect(doc.effectiveDate.trim().length).toBeGreaterThan(0);
      expect(Number.isNaN(Date.parse(doc.version))).toBe(false);
      expect(Number.isNaN(Date.parse(doc.effectiveDate))).toBe(false);
    },
  );

  it.each(ALL_LEGAL_DOCUMENTS.map((doc) => [doc.slug, doc] as const))(
    "%s numbers its clauses 1..n with no gap",
    (_slug, doc) => {
      expect(doc.sections.length).toBeGreaterThan(0);
      expect(doc.sections.map((s) => s.n)).toEqual(
        doc.sections.map((_, i) => i + 1),
      );
    },
  );

  it.each(ALL_LEGAL_DOCUMENTS.map((doc) => [doc.slug, doc] as const))(
    "%s has no empty section",
    (_slug, doc) => {
      for (const section of doc.sections) {
        expect(section.title.trim().length).toBeGreaterThan(0);
        expect(section.blocks.length).toBeGreaterThan(0);
      }
    },
  );

  // "every document has a registry entry" is NOT asserted here on purpose. The
  // registry maps documents to one application's route hrefs, so it stays in
  // each consumer — and so does that assertion. See the note in index.ts.

  it("keeps slugs unique and resolvable", () => {
    const slugs = ALL_LEGAL_DOCUMENTS.map((doc) => doc.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(legalDocumentBySlug(slug)?.slug).toBe(slug);
    }
  });
});

describe("fee terms evidence chain", () => {
  it("hashes exactly as it did before extraction", () => {
    const canonical = JSON.stringify({
      version: FEE_TERMS_VERSION,
      preamble: TERMS_PREAMBLE,
      sections: TERMS_SECTIONS,
    });
    const hash = createHash("sha256").update(canonical, "utf8").digest("hex");
    expect(hash).toBe(FEE_TERMS_HASH_BEFORE_EXTRACTION);
  });
});
