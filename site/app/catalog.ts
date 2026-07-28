import { ALL_LEGAL_DOCUMENTS, type LegalDocument } from "@emergences/legal";

// The site's own routing and grouping. The package deliberately does not ship a
// registry, because a registry maps documents to ONE application's URL space —
// see the note in the package's index.ts.

export const CATEGORY_ORDER = [
  "agreements",
  "privacy",
  "ai",
  "trust",
  "company",
] as const;
export type Category = (typeof CATEGORY_ORDER)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  agreements: "Agreements",
  privacy: "Privacy & data",
  ai: "AI & candidates",
  trust: "Security & trust",
  company: "Company",
};

const CATEGORY_BY_SLUG: Record<string, Category> = {
  terms: "agreements",
  "fee-terms": "agreements",
  "fee-schedule": "agreements",
  refunds: "agreements",
  "acceptable-use": "agreements",
  "arena-terms": "agreements",
  "website-terms": "agreements",
  privacy: "privacy",
  cookies: "privacy",
  dpa: "privacy",
  subprocessors: "privacy",
  "data-retention": "privacy",
  "do-not-sell": "privacy",
  "website-privacy": "privacy",
  "candidate-privacy": "ai",
  "candidate-rights": "ai",
  "responsible-ai": "ai",
  "model-card": "ai",
  "bias-audit": "ai",
  security: "trust",
  accessibility: "trust",
  "vulnerability-disclosure": "trust",
  "government-requests": "trust",
  "modern-slavery": "company",
  imprint: "company",
};

// A document with no category would silently vanish from the index, which is
// the exact failure this site exists to stop making. Fail the build instead.
const UNCATEGORIZED = ALL_LEGAL_DOCUMENTS.filter(
  (doc) => !CATEGORY_BY_SLUG[doc.slug],
).map((doc) => doc.slug);
if (UNCATEGORIZED.length > 0) {
  throw new Error(
    `Documents with no category, so they would not appear on the index: ` +
      `${UNCATEGORIZED.join(", ")}. Add them to CATEGORY_BY_SLUG.`,
  );
}

export function documentsIn(category: Category): LegalDocument[] {
  return ALL_LEGAL_DOCUMENTS.filter(
    (doc) => CATEGORY_BY_SLUG[doc.slug] === category,
  );
}
