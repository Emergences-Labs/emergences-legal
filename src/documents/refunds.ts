// =============================================================
// Refund & Cancellation Policy. DRAFTING BASELINE. Consistent with the billing
// canon: subscriptions, prepaid credits (non-refundable except the defined
// refund path), and the placement-fee revoke/guarantee live in the Fee Terms.
// Do NOT introduce a per-report price or auto-reload. Counsel/ops to confirm
// proration and annual-prepay handling.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const REFUNDS_VERSION = "2026-07-03";
export const REFUNDS_EFFECTIVE_DATE = "July 3, 2026";

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
    `The binding terms are in the Fee Terms; this is a plain-language guide.`,
  sections: [
    {
      n: 1,
      title: "Cancelling a subscription",
      blocks: [
        {
          kind: "p",
          text:
            "You can cancel your subscription at any time from billing settings. " +
            "Cancellation stops future renewals; your plan remains active through " +
            "the end of the current paid period, after which its paid features " +
            "stop. Cancelling does not affect your usage-credit balance — credits " +
            "come from your starter allowance and any prepaid packs, not from the " +
            "subscription.",
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
            "Subscription fees and prepaid credit purchases are paid in advance " +
            "and are generally non-refundable, and are not contingent on your " +
            "actual usage. Annual plans are paid upfront; we do not provide " +
            "pro-rata refunds of a paid term except where required by law.",
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
            "Usage credits are prepaid, have no cash value, do not expire, and are " +
            "non-refundable, except where our Fee Terms provide a specific refund " +
            "(for example, a placement-fee guarantee refund you elect to take as " +
            "credits). Credits are redeemable only for platform usage.",
        },
      ],
    },
    {
      n: 4,
      title: "Placement fee: revoke and guarantee",
      blocks: [
        {
          kind: "p",
          text:
            "The 15% placement fee has its own protections in the Fee Terms — a " +
            "7-day revocation window if an accepted offer falls through, and a " +
            "90-day guarantee that refunds the fee (as cash or credits) if a hire " +
            "leaves — subject to the conditions there.",
        },
      ],
    },
    {
      n: 5,
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
  colophon: "The binding billing terms are in the Fee Terms.",
};
