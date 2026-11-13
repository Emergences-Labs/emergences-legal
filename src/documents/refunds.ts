// =============================================================
// Refund & Cancellation Policy. DRAFTING BASELINE, a plain-language guide to
// Section 5 of the Terms of Service (plans, credits, cancellation) as of the
// Pro / Max / Ultra plans (2026-11-13). The placement-fee revoke and guarantee
// remain in the Fee Terms for the organizations that accepted them.
// Counsel/ops to confirm annual-prepay handling.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const REFUNDS_VERSION = "2026-11-13";
export const REFUNDS_EFFECTIVE_DATE = "November 13, 2026";

export const REFUNDS_DOC: LegalDocument = {
  slug: "refunds",
  scope: "neowork",
  title: "Refunds & Cancellation",
  description:
    "How subscription cancellation, prepaid credits, and refunds work on " +
    "NeoWork.",
  version: REFUNDS_VERSION,
  effectiveDate: REFUNDS_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `This page summarizes how cancellation and refunds work for ${PRODUCT_NAME}. ` +
    `The binding terms are in Section 5 of the Terms of Service; this is a ` +
    `plain-language guide.`,
  sections: [
    {
      n: 1,
      title: "Cancelling a plan",
      blocks: [
        {
          kind: "p",
          text:
            "You can cancel your plan at any time from billing settings. " +
            "Cancellation stops future renewals; your plan remains active through " +
            "the end of the period you have paid for, after which its features " +
            "stop. Credits you hold when the plan ends stay in your balance and " +
            "remain usable. Buying credit packs needs an active plan.",
        },
      ],
    },
    {
      n: 2,
      title: "Fees paid in advance",
      blocks: [
        {
          kind: "p",
          text:
            "Plan fees and credit purchases are paid in advance and are not " +
            "contingent on your actual usage. Annual plans are paid upfront. We " +
            "do not refund a paid period in whole or in part, except where the " +
            "law requires.",
        },
      ],
    },
    {
      n: 3,
      title: "Usage credits",
      blocks: [
        {
          kind: "p",
          text:
            "Credits from your plan, from packs, and from automatic recharge do " +
            "not expire, have no cash value, and are redeemable only for platform " +
            "usage. They are not refundable, except where the law requires or " +
            "where Fee Terms you accepted provide a specific refund (for example, " +
            "a placement-fee guarantee refund you elect to take as credits).",
        },
      ],
    },
    {
      n: 4,
      title: "Automatic recharge",
      blocks: [
        {
          kind: "p",
          text:
            "Automatic recharge only runs if you turn it on, and you can turn it " +
            "off at any time from billing settings. It never charges more than " +
            "the monthly limit you set.",
        },
      ],
    },
    {
      n: 5,
      title: "Placement fee: revoke and guarantee",
      blocks: [
        {
          kind: "p",
          text:
            "Plans carry no placement fee. If your organization accepted our Fee " +
            "Terms or signed a recruiting services agreement, a hire recorded " +
            "under it keeps the protections it sets out (under the Fee Terms, a " +
            "7-day revocation window if an accepted offer falls through and a " +
            "90-day guarantee that refunds the fee if a hire leaves), subject to " +
            "the conditions there.",
        },
      ],
    },
    {
      n: 6,
      title: "Questions and billing errors",
      blocks: [
        {
          kind: "p",
          text:
            `If you think you were billed in error, contact ` +
            `${LEGAL_CONTACTS.legal} within a reasonable time and we will review ` +
            `it promptly.`,
        },
      ],
    },
  ],
  colophon:
    "The binding billing terms are in Section 5 of the Terms of Service and the " +
    "Fee Schedule.",
};
