// =============================================================
// Modern Slavery / Anti-Slavery Statement. DRAFTING BASELINE. A UK MSA s.54 /
// CA Transparency-in-Supply-Chains-style statement expected in enterprise
// vendor onboarding. Confirm the specifics with leadership before publication.
// =============================================================

import { LEGAL_CONTACTS, LEGAL_ENTITY, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const MODERN_SLAVERY_VERSION = "2026-07-03";
export const MODERN_SLAVERY_EFFECTIVE_DATE = "July 3, 2026";

export const MODERN_SLAVERY_DOC: LegalDocument = {
  slug: "modern-slavery",
  title: "Modern Slavery Statement",
  description:
    "NeoWork's commitment against slavery and human trafficking in its " +
    "operations and supply chain.",
  version: MODERN_SLAVERY_VERSION,
  effectiveDate: MODERN_SLAVERY_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `${LEGAL_ENTITY} is committed to acting ethically and with integrity, and to ` +
    `preventing slavery and human trafficking in its operations and supply ` +
    `chain. This statement sets out the steps we take.`,
  sections: [
    {
      n: 1,
      title: "Our business and supply chain",
      blocks: [
        {
          kind: "p",
          text:
            `${PRODUCT_NAME} is a software platform. Our supply chain consists ` +
            `primarily of cloud-infrastructure and software service providers ` +
            `(our disclosed sub-processors) rather than physical-goods suppliers, ` +
            `which lowers, but does not eliminate, modern-slavery risk.`,
        },
      ],
    },
    {
      n: 2,
      title: "Our commitments",
      blocks: [
        {
          kind: "list",
          items: [
            "We have zero tolerance for slavery, forced labor, and human trafficking.",
            "We expect our suppliers and partners to uphold the same standards, and prefer reputable providers with their own commitments.",
            "We treat our own workforce lawfully and fairly, and pay in line with applicable law.",
            "We will investigate and act on any concern raised about these issues.",
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Reporting a concern",
      blocks: [
        {
          kind: "p",
          text:
            `Concerns about modern slavery in our operations or supply chain can ` +
            `be raised at ${LEGAL_CONTACTS.legal}. We review this statement ` +
            `periodically and update it as our business grows.`,
        },
      ],
    },
  ],
  colophon:
    "This statement is made on behalf of the company and reviewed periodically.",
};
