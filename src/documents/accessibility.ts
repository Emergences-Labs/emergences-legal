// =============================================================
// NeoWork Accessibility Statement — customer- and candidate-facing.
//
// DRAFTING BASELINE. States a WCAG 2.2 AA target and an HONEST "partially
// conformant / actively improving" status (do not claim full conformance
// without an audit/VPAT). Emphasizes the accommodation route for TIMED
// assessments, where inaccessibility is itself an ADA exposure. Confirm the
// conformance status and produce a VPAT before making stronger claims.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const ACCESSIBILITY_VERSION = "2026-07-03";
export const ACCESSIBILITY_EFFECTIVE_DATE = "July 3, 2026";

export const ACCESSIBILITY_DOC: LegalDocument = {
  slug: "accessibility",
  scope: "emergences",
  title: "Accessibility",
  description:
    "NeoWork's commitment to an accessible platform and assessment, our " +
    "conformance target, and how to request help or an accommodation.",
  version: ACCESSIBILITY_VERSION,
  effectiveDate: ACCESSIBILITY_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `${PRODUCT_NAME} is committed to making the platform — and especially the ` +
    `candidate assessment — usable by everyone, including people who use assistive ` +
    `technologies. Being evaluated for a job should never be gated by an ` +
    `inaccessible interface.`,
  sections: [
    {
      n: 1,
      title: "Our target",
      blocks: [
        {
          kind: "p",
          text:
            "We aim to conform to the Web Content Accessibility Guidelines (WCAG) " +
            "2.2 at Level AA. We design with keyboard operability, sufficient " +
            "contrast, resizable text, and screen-reader compatibility in mind.",
        },
      ],
    },
    {
      n: 2,
      title: "Current status",
      blocks: [
        {
          kind: "callout",
          label: "Honest status",
          text:
            "We are partially conformant and actively improving. Some areas may " +
            "not yet fully meet every criterion; we are auditing the platform, " +
            "prioritizing the candidate assessment flow, and will publish a " +
            "conformance report (VPAT) as that work completes.",
        },
      ],
    },
    {
      n: 3,
      title: "Timed assessments and accommodations",
      blocks: [
        {
          kind: "p",
          text:
            "If you are a candidate and need an adjustment to take an assessment — " +
            "such as extra time, an alternative format, or an alternative to an " +
            "AI-based assessment — you can request a reasonable accommodation. The " +
            "fastest route is to ask the employer that invited you; we will support " +
            "that request. Requesting an accommodation will not be held against you.",
        },
      ],
    },
    {
      n: 4,
      title: "Feedback and contact",
      blocks: [
        {
          kind: "p",
          text:
            `If you encounter an accessibility barrier, tell us so we can fix it ` +
            `and help you in the meantime. Contact ${LEGAL_CONTACTS.support} for ` +
            `general accessibility help, or ${LEGAL_CONTACTS.privacy} for a ` +
            `candidate accommodation or data request. We aim to respond promptly.`,
        },
      ],
    },
  ],
  colophon:
    "This statement reflects our current status and will be updated as our " +
    "accessibility work and conformance testing progress.",
};
