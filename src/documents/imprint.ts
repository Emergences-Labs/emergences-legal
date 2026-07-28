// =============================================================
// Imprint & Contact — company identification (EU Impressum) + contact hub.
// DRAFTING BASELINE. Uses the entity's real registered/contact address and HQ
// (from LEGAL_MAILING_ADDRESS / LEGAL_HQ_ADDRESS); EU law (e.g. German TMG)
// requires a complete Impressum. Counsel to confirm the final entity details.
// =============================================================

import { DOMAINS, LEGAL_CONTACTS, LEGAL_ENTITY, LEGAL_HQ_ADDRESS, LEGAL_MAILING_ADDRESS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const IMPRINT_VERSION = "2026-07-03";
export const IMPRINT_EFFECTIVE_DATE = "July 3, 2026";

export const IMPRINT_DOC: LegalDocument = {
  slug: "imprint",
  scope: "emergences",
  title: "Imprint & Contact",
  description: "Who operates NeoWork, and how to reach us.",
  version: IMPRINT_VERSION,
  effectiveDate: IMPRINT_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `${PRODUCT_NAME} is operated by ${LEGAL_ENTITY}. This page identifies the ` +
    `provider and gives our contact details, including as required by ` +
    `information-provider laws in some jurisdictions.`,
  sections: [
    {
      n: 1,
      title: "Provider",
      blocks: [
        {
          kind: "table",
          columns: ["Field", "Detail"],
          rows: [
            ["Legal entity", `${LEGAL_ENTITY} (a Delaware corporation)`],
            ["Company site", `https://${DOMAINS.entity}`],
            ["Product", `${PRODUCT_NAME} (${DOMAINS.product})`],
            ["Registered address", LEGAL_MAILING_ADDRESS],
            ["Principal place of business", LEGAL_HQ_ADDRESS],
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Contact",
      blocks: [
        {
          kind: "table",
          columns: ["Purpose", "Address"],
          rows: [
            ["General & support", LEGAL_CONTACTS.support],
            ["Privacy & data requests", LEGAL_CONTACTS.privacy],
            ["Legal notices", LEGAL_CONTACTS.legal],
            ["Security", LEGAL_CONTACTS.security],
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Responsibility",
      blocks: [
        {
          kind: "p",
          text:
            "Responsibility for the content of this platform lies with the legal " +
            "entity named above. For consumer-dispute or regulatory-authority " +
            "details required in your jurisdiction, contact us and we will provide " +
            "them.",
        },
      ],
    },
  ],
  colophon: "This Imprint accompanies our Terms of Service and Privacy Policy.",
};
