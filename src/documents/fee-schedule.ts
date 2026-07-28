// =============================================================
// Fee Schedule — the discrete artifact the Fee Terms reference "by reference".
//
// DRAFTING BASELINE, and BILLING-CANON SENSITIVE. Per the billing canon
// (CLAUDE.md): plan prices and the 15% placement fee are customer-facing;
// per-credit dollar value, per-report price, markup, and cost are NEVER shown.
// So this schedule states plan prices + the fee + that credits are included as
// an "≈ N reports/month" estimate, and points to the live plan/checkout screens
// for exact current figures (matching how the Fee Terms define the Fee
// Schedule). Do NOT add per-credit pricing here.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const FEE_SCHEDULE_VERSION = "2026-07-03";
export const FEE_SCHEDULE_EFFECTIVE_DATE = "July 3, 2026";

export const FEE_SCHEDULE_DOC: LegalDocument = {
  slug: "fee-schedule",
  title: "Fee Schedule",
  description:
    "Current subscription plans, the placement fee, and how usage credits are " +
    "included — the schedule referenced by the Fee Terms.",
  version: FEE_SCHEDULE_VERSION,
  effectiveDate: FEE_SCHEDULE_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `This Fee Schedule forms part of the Fee Terms and describes how ` +
    `${PRODUCT_NAME} is priced. The exact current figures are always shown on the ` +
    `plan-selection and checkout screens in the app, which control if they differ ` +
    `from any summary here.`,
  sections: [
    {
      n: 1,
      title: "Subscription plans",
      blocks: [
        {
          kind: "table",
          columns: ["Plan", "Price (monthly)", "Includes"],
          rows: [
            [
              "Starter",
              "$599 / month",
              "Unlimited seats, email support, and Starter features",
            ],
            [
              "Growth",
              "$1,799 / month",
              "Priority queue, priority support, and Growth features",
            ],
            [
              "Enterprise",
              "Custom",
              "SSO, seats, priority, and terms by order form",
            ],
          ],
        },
        {
          kind: "p",
          text:
            "A plan paid annually in a single upfront payment receives a discount " +
            "versus the monthly rate. Plans provide Platform features; they do not " +
            "include usage credits.",
        },
      ],
    },
    {
      n: 2,
      title: "Usage credits and top-up packs",
      blocks: [
        {
          kind: "p",
          text:
            "Platform usage — assessments, reports, and AI agent work — is metered " +
            "in usage credits drawn from a single balance. Each new organization " +
            "receives a one-time allowance of starter credits at sign-up, usable " +
            "without a subscription. When you need more, anyone can buy prepaid " +
            "top-up packs — a subscription is not required. Reports are not " +
            "separately priced and there is no limit on how many assessments you " +
            "can run. Current pack options and prices are shown at checkout.",
        },
      ],
    },
    {
      n: 3,
      title: "Placement success fee",
      blocks: [
        {
          kind: "p",
          text:
            "When a candidate you evaluated through the platform accepts an offer, " +
            "a placement success fee of 15% of the first-year base salary applies " +
            "per hire, as set out in the Fee Terms (with the revocation window and " +
            "guarantee described there). The fee is independent of your " +
            "subscription.",
        },
      ],
    },
    {
      n: 4,
      title: "Taxes and current figures",
      blocks: [
        {
          kind: "p",
          text:
            `Prices are exclusive of taxes. Because plans and packs can change, ` +
            `the authoritative current figures are those shown in the app at the ` +
            `time of purchase. Questions: ${LEGAL_CONTACTS.legal}.`,
        },
      ],
    },
  ],
  colophon:
    "This Fee Schedule forms part of the Fee Terms; where a figure here differs " +
    "from the app's checkout screens, the app controls.",
};
