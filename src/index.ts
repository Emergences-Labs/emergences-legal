// =============================================================
// Public surface of @emergences/legal — DATA ONLY.
//
// No React and no Node built-ins are reachable from this entry point, and that
// is load-bearing rather than tidy: the product hashes these documents
// server-side (node:crypto) and renders them in client components, and neither
// bundle may pull in the other's dependencies. Components live behind
// `@emergences/legal/render`.
//
// Two name collisions are resolved here rather than at every import site,
// because both predate the package and both are real:
//   - `TERMS_EFFECTIVE_DATE` is exported by BOTH the platform Terms of Service
//     and the Fee Terms. The Fee Terms' is re-exported as
//     FEE_TERMS_EFFECTIVE_DATE, which is what the consumer already aliased it to.
//   - `GOVERNING_LAW` is exported by BOTH company.ts and the Fee Terms module
//     (which declares its own copy). They agree today; the Fee Terms' is
//     re-exported as FEE_TERMS_GOVERNING_LAW so a future divergence is visible
//     instead of silently shadowed.
// =============================================================

export type {
  LegalBlock,
  LegalSection,
  LegalSummaryPoint,
  LegalDocument,
} from "./model.js";

export {
  LEGAL_ENTITY,
  GOVERNING_LAW,
  PRODUCT_NAME,
  DOMAINS,
  LEGAL_CONTACTS,
  LEGAL_MAILING_ADDRESS,
  LEGAL_HQ_ADDRESS,
} from "./company.js";

// THE REGISTRY DELIBERATELY DOES NOT LIVE HERE.
// `LEGAL_REGISTRY` maps each document to an in-app route href — "/legal/terms",
// "/trust/security" — with no origin field. That is one application's URL
// space, not portable document content: the moment a second product consumes
// this package, those paths are wrong for it. It stays in each consumer, and
// each consumer keeps the assertion that every document it publishes has an
// entry (see legal-doc-integrity.test.ts there) — an assertion this package
// cannot make, because only the consumer knows where it serves them.
// If it is ever centralized, it must carry `slug` and let the consumer supply
// the base path.

// ---- Documents authored against the shared LegalDocument model ----
export * from "./documents/acceptable-use.js";
export * from "./documents/accessibility.js";
export * from "./documents/arena-terms.js";
export * from "./documents/bias-audit.js";
export * from "./documents/candidate-privacy.js";
export * from "./documents/candidate-rights.js";
export * from "./documents/cookies.js";
export * from "./documents/data-retention.js";
export * from "./documents/do-not-sell.js";
export * from "./documents/dpa.js";
export * from "./documents/fee-schedule.js";
export * from "./documents/government-requests.js";
export * from "./documents/imprint.js";
export * from "./documents/model-card.js";
export * from "./documents/modern-slavery.js";
export * from "./documents/privacy.js";
export * from "./documents/refunds.js";
export * from "./documents/responsible-ai.js";
export * from "./documents/security.js";
export * from "./documents/subprocessors.js";
export * from "./documents/terms.js";
export * from "./documents/vulnerability-disclosure.js";
export * from "./documents/website-privacy.js";
export * from "./documents/website-terms.js";

// ---- Fee Terms: its own older block model, kept verbatim ----
// Its shape is NOT LegalDocument. Do not "harmonize" it without bumping
// FEE_TERMS_VERSION: TERMS_PREAMBLE and TERMS_SECTIONS are hashed at every
// acceptance, so a shape change silently changes what new acceptances record
// while old ones keep the previous hash under the same version string.
export {
  FEE_TERMS_VERSION,
  TERMS_EFFECTIVE_DATE as FEE_TERMS_EFFECTIVE_DATE,
  CONTRACTING_ENTITY,
  GOVERNING_LAW as FEE_TERMS_GOVERNING_LAW,
  NEOWORK_CONTACT_EMAIL,
  TERMS_ASSENT_NOTICE,
  TERMS_PREAMBLE,
  TERMS_SECTIONS,
  FEE_TERMS_DOC,
} from "./documents/fee-terms.js";
export type { TermsBlock, TermsSection } from "./documents/fee-terms.js";

export { ALL_LEGAL_DOCUMENTS, legalDocumentBySlug } from "./all.js";
