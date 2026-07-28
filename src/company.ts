// =============================================================
// Canonical company, entity, and legal-contact constants — the single source
// of truth for every /legal/* document and the trust surfaces.
//
// These mirror the values already hard-coded in the shipped Fee Terms
// (src/app/legal/fee-terms/terms-content.ts): contracting entity
// "Emergences AI, Inc.", governing law Delaware. Centralizing them here means a
// change of entity name, address, or contact channel is a one-file edit that
// propagates to Privacy, Terms, DPA, and the rest.
//
// CONTACT ADDRESSES — one unified inbox. Per operator decision, every
// legal/privacy/security/support channel routes to the single monitored
// customer contact, contact@emergences.ai (no separate mailboxes to provision).
// The role KEYS below are kept distinct so the documents read semantically and
// so a role can be split onto its own address later by editing one line here —
// but today they all resolve to the same inbox. Do NOT scatter raw addresses
// through the documents; reference these constants.
// =============================================================

/** Legal contracting entity (the party that contracts with customers). */
export const LEGAL_ENTITY = "Emergences AI, Inc.";

/** Governing-law jurisdiction, matching the Fee Terms. */
export const GOVERNING_LAW = "State of Delaware";

/** Consumer-facing product/brand name. */
export const PRODUCT_NAME = "NeoWork";

/** Domains, for canonical URLs inside policy text. */
export const DOMAINS = {
  /** Corporate / legal-entity site (the business URL on file with Stripe). */
  entity: "emergences.ai",
  /** Product marketing site. */
  marketing: "neo-work.ai",
  /** This product (recruiter/admin) app. */
  product: "hiring.neo-work.ai",
  /** Candidate-facing assessment runtime (the separate Arena app). */
  candidate: "app.neo-work.ai",
} as const;

/**
 * Legal-contact addresses, keyed by role. All route to the single unified
 * contact inbox; the distinct keys let a role be split onto its own address
 * later without touching the documents.
 */
const UNIFIED_CONTACT = "contact@emergences.ai";
export const LEGAL_CONTACTS = {
  /** Privacy questions, DSARs, candidate data requests. */
  privacy: UNIFIED_CONTACT,
  /** Legal notices, contracts, abuse, law-enforcement requests. */
  legal: UNIFIED_CONTACT,
  /** Security reports / security.txt contact. */
  security: UNIFIED_CONTACT,
  /** Data Protection Officer / EU-representative channel. */
  dpo: UNIFIED_CONTACT,
  /** General support. */
  support: UNIFIED_CONTACT,
} as const;

/**
 * Registered / official contact address — used verbatim in the CAN-SPAM email
 * footer and the Impressum ("Registered address"). This is the entity's
 * incorporation / official contact address.
 */
export const LEGAL_MAILING_ADDRESS =
  "1145 Elmwood Drive, Millbrae, CA 94030, USA";

/** Principal place of business (headquarters), shown in the Impressum. */
export const LEGAL_HQ_ADDRESS = "1680 Mission St, San Francisco, CA 94103, USA";
