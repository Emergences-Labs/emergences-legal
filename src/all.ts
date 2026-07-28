// =============================================================
// The document roll — every LegalDocument in one array.
//
// It exists so that "all the documents" is a value rather than a list each
// consumer maintains. Before extraction there were THREE such lists in the
// product (the /legal index, the /trust index, and the legal-updates archive),
// and the integrity test now added a fourth; a document could be published and
// missing from any of them without anything failing.
//
// Fee Terms IS included, via the FEE_TERMS_DOC wrapper. It keeps its own older
// block shape for the hashed values (TERMS_PREAMBLE / TERMS_SECTIONS, which the
// consumer fingerprints at every acceptance), and the wrapper simply points at
// them — so the one document carrying stored legal evidence is also covered by
// the structural checks, which it never was before.
// =============================================================

import type { LegalDocument } from "./model.js";
import { AUP_DOC } from "./documents/acceptable-use.js";
import { ACCESSIBILITY_DOC } from "./documents/accessibility.js";
import { ARENA_TERMS_DOC } from "./documents/arena-terms.js";
import { BIAS_AUDIT_DOC } from "./documents/bias-audit.js";
import { CANDIDATE_PRIVACY_DOC } from "./documents/candidate-privacy.js";
import { CANDIDATE_RIGHTS_DOC } from "./documents/candidate-rights.js";
import { COOKIES_DOC } from "./documents/cookies.js";
import { DATA_RETENTION_DOC } from "./documents/data-retention.js";
import { DO_NOT_SELL_DOC } from "./documents/do-not-sell.js";
import { DPA_DOC } from "./documents/dpa.js";
import { FEE_SCHEDULE_DOC } from "./documents/fee-schedule.js";
import { FEE_TERMS_DOC } from "./documents/fee-terms.js";
import { GOV_REQUESTS_DOC } from "./documents/government-requests.js";
import { IMPRINT_DOC } from "./documents/imprint.js";
import { MODEL_CARD_DOC } from "./documents/model-card.js";
import { MODERN_SLAVERY_DOC } from "./documents/modern-slavery.js";
import { PRIVACY_DOC } from "./documents/privacy.js";
import { REFUNDS_DOC } from "./documents/refunds.js";
import { RESPONSIBLE_AI_DOC } from "./documents/responsible-ai.js";
import { SECURITY_DOC } from "./documents/security.js";
import { SUBPROCESSORS_DOC } from "./documents/subprocessors.js";
import { TERMS_DOC } from "./documents/terms.js";
import { VULN_DISCLOSURE_DOC } from "./documents/vulnerability-disclosure.js";
import { WEBSITE_PRIVACY_DOC } from "./documents/website-privacy.js";
import { WEBSITE_TERMS_DOC } from "./documents/website-terms.js";

export const ALL_LEGAL_DOCUMENTS: readonly LegalDocument[] = [
  TERMS_DOC,
  FEE_TERMS_DOC,
  AUP_DOC,
  FEE_SCHEDULE_DOC,
  REFUNDS_DOC,
  PRIVACY_DOC,
  COOKIES_DOC,
  DPA_DOC,
  SUBPROCESSORS_DOC,
  DATA_RETENTION_DOC,
  DO_NOT_SELL_DOC,
  CANDIDATE_PRIVACY_DOC,
  ARENA_TERMS_DOC,
  CANDIDATE_RIGHTS_DOC,
  RESPONSIBLE_AI_DOC,
  MODEL_CARD_DOC,
  BIAS_AUDIT_DOC,
  SECURITY_DOC,
  ACCESSIBILITY_DOC,
  VULN_DISCLOSURE_DOC,
  GOV_REQUESTS_DOC,
  MODERN_SLAVERY_DOC,
  IMPRINT_DOC,
  WEBSITE_PRIVACY_DOC,
  WEBSITE_TERMS_DOC,
];

const BY_SLUG = new Map(ALL_LEGAL_DOCUMENTS.map((doc) => [doc.slug, doc]));

export function legalDocumentBySlug(slug: string): LegalDocument | undefined {
  return BY_SLUG.get(slug);
}
