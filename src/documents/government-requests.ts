// =============================================================
// Government / Law-Enforcement Data Request Policy. DRAFTING BASELINE. States
// how NeoWork handles legal process for user/candidate data and its
// notice-to-customer stance. Counsel to confirm the notification commitment and
// any jurisdictional carve-outs before publication.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const GOV_REQUESTS_VERSION = "2026-07-03";
export const GOV_REQUESTS_EFFECTIVE_DATE = "July 3, 2026";

export const GOV_REQUESTS_DOC: LegalDocument = {
  slug: "government-requests",
  title: "Government & Law-Enforcement Requests",
  description:
    "How NeoWork responds to government and law-enforcement requests for data.",
  version: GOV_REQUESTS_VERSION,
  effectiveDate: GOV_REQUESTS_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `We take the privacy of customer and candidate data seriously, including when ` +
    `a government or law-enforcement body requests it. This policy explains how ` +
    `${PRODUCT_NAME} handles such requests.`,
  sections: [
    {
      n: 1,
      title: "We require valid legal process",
      blocks: [
        {
          kind: "p",
          text:
            "We disclose data only where compelled by valid legal process " +
            "appropriate to the data sought, or where an emergency involving a risk " +
            "of serious harm justifies it. We review requests for legal " +
            "sufficiency and scope, and push back on overbroad or improper demands.",
        },
      ],
    },
    {
      n: 2,
      title: "We tell affected customers where we can",
      blocks: [
        {
          kind: "p",
          text:
            "Where the data belongs to a customer's account (including candidate " +
            "data we process for that customer), our policy is to notify the " +
            "customer before disclosing, so they can seek to protect their " +
            "interests — unless we are legally prohibited from doing so, or in an " +
            "emergency. Where possible, we redirect requesters to the customer as " +
            "the controller of that data.",
        },
      ],
    },
    {
      n: 3,
      title: "Minimization",
      blocks: [
        {
          kind: "p",
          text:
            "When we must respond, we disclose the narrowest set of data that is " +
            "legally required, and keep a record of the request.",
        },
      ],
    },
    {
      n: 4,
      title: "How to submit a request",
      blocks: [
        {
          kind: "p",
          text:
            `Law-enforcement and government requests should be sent to ` +
            `${LEGAL_CONTACTS.legal} with the legal basis and scope clearly stated.`,
        },
      ],
    },
  ],
  colophon: "This policy works with our Privacy Policy and DPA.",
};
