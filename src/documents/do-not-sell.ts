// =============================================================
// "Your Privacy Choices" / Do-Not-Sell-or-Share (CPRA) + Global Privacy Control.
// DRAFTING BASELINE. Even where the company does not "sell" data, CPRA expects a
// choices link and honoring GPC. Counsel to confirm the no-sale/no-share
// position before publication.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const DO_NOT_SELL_VERSION = "2026-07-03";
export const DO_NOT_SELL_EFFECTIVE_DATE = "July 3, 2026";

export const DO_NOT_SELL_DOC: LegalDocument = {
  slug: "do-not-sell",
  title: "Your Privacy Choices",
  description:
    "Your choices about the sale or sharing of personal information, and how we " +
    "honor opt-out signals.",
  version: DO_NOT_SELL_VERSION,
  effectiveDate: DO_NOT_SELL_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `This page describes your choices about how ${PRODUCT_NAME} uses personal ` +
    `information, including under the California Consumer Privacy Act as amended ` +
    `(CPRA).`,
  sections: [
    {
      n: 1,
      title: "We do not sell or share your personal information",
      blocks: [
        {
          kind: "p",
          text:
            "We do not sell personal information for money, and we do not share it " +
            "for cross-context behavioral advertising, as those terms are defined " +
            "under the CPRA. Candidate assessment data is used to run the " +
            "assessment for the employer, not for advertising.",
        },
      ],
    },
    {
      n: 2,
      title: "Global Privacy Control",
      blocks: [
        {
          kind: "p",
          text:
            "Because we do not sell or share personal information, there is nothing " +
            "to opt out of for advertising purposes. Where an opt-out applies, we " +
            "honor recognized browser opt-out signals such as Global Privacy " +
            "Control (GPC).",
        },
      ],
    },
    {
      n: 3,
      title: "Your other choices",
      blocks: [
        {
          kind: "p",
          text:
            `You can manage cookie choices through the “Cookie preferences” link, ` +
            `and exercise access, deletion, and correction rights as described in ` +
            `our Privacy Policy. To make a request, contact ` +
            `${LEGAL_CONTACTS.privacy}. We will not discriminate against you for ` +
            `exercising your rights.`,
        },
      ],
    },
  ],
  colophon: "This page supplements the Privacy Policy and Cookie Policy.",
};
