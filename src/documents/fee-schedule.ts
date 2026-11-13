// =============================================================
// Fee Schedule — the price schedule the Terms of Service incorporate by
// reference (and the Fee Terms did before them).
//
// DRAFTING BASELINE, and BILLING-CANON SENSITIVE. Per the billing canon
// (CLAUDE.md): plan prices are customer-facing;
// per-credit dollar value, per-report price, markup, and cost are NEVER shown.
// So this schedule states plan prices, each plan's monthly credits (the figure
// the plan cards already print) and its features, and points to the live
// plan/checkout screens for pack figures. Do NOT add per-credit pricing here.
//
// 2026-11-13: rewritten for the Pro / Max / Ultra plans. The figures mirror the
// product's catalogue (neowork-hiring src/lib/billing/subscription-plans.ts and
// plan-features.ts, themselves held equal to the database); change them there
// first, then here.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const FEE_SCHEDULE_VERSION = "2026-11-13";
export const FEE_SCHEDULE_EFFECTIVE_DATE = "November 13, 2026";

export const FEE_SCHEDULE_DOC: LegalDocument = {
  slug: "fee-schedule",
  scope: "neowork",
  title: "Fee Schedule",
  description:
    "The Pro, Max, and Ultra plans: prices, monthly credits, features, credit " +
    "packs, and the trial allowance.",
  version: FEE_SCHEDULE_VERSION,
  effectiveDate: FEE_SCHEDULE_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `This Fee Schedule forms part of the Terms of Service and describes how ` +
    `${PRODUCT_NAME} is priced. Section 5 of the Terms of Service sets out how ` +
    `plans renew, how credits work, and how to cancel. The exact current figures ` +
    `are always shown on the plan-selection and checkout screens in the app, ` +
    `which control if they differ from any summary here.`,
  sections: [
    {
      n: 1,
      title: "Plans",
      blocks: [
        {
          kind: "table",
          columns: ["Plan", "Monthly", "Annual (per year)", "Credits each month"],
          rows: [
            ["Pro", "$399", "$3,830.40", "40,000"],
            ["Max", "$799", "$7,670.40", "80,000"],
            ["Ultra", "$1,599", "$15,350.40", "160,000"],
          ],
        },
        {
          kind: "p",
          text:
            "Annual billing is twenty percent (20%) less than twelve monthly " +
            "payments and is charged upfront for the year. Every plan grants its " +
            "monthly credits once for each month, including each month of an " +
            "annual plan. Credits do not expire and remain usable after a plan " +
            "ends. Seats are not limited on any plan. The Ultra plan billed " +
            "annually may be paid by invoice, due within thirty (30) days. An " +
            "organization still subscribed to an earlier Starter, Growth, or " +
            "Enterprise plan keeps that plan's price and terms until the " +
            "subscription ends or it moves to one of the plans above.",
        },
      ],
    },
    {
      n: 2,
      title: "Features by plan",
      blocks: [
        {
          kind: "table",
          columns: ["Feature", "Pro", "Max", "Ultra"],
          rows: [
            ["Assessments, scoring, and reports", "Included", "Included", "Included"],
            ["Unlimited seats", "Included", "Included", "Included"],
            ["Finding candidates", "—", "Included", "Included"],
            ["ATS connections", "—", "Included", "Included"],
            ["Live interview role-play", "—", "Coming soon", "Coming soon"],
            ["SSO, SCIM, and company domains", "—", "—", "Included"],
            ["Audit log", "—", "—", "Included"],
            ["Greenhouse assessment key", "—", "—", "Included"],
            ["Scheduled company research refresh", "—", "—", "Included"],
            ["New features released to Ultra first", "—", "—", "Included"],
          ],
        },
        {
          kind: "p",
          text:
            "Scoring is the same on every plan. A feature an organization was " +
            "already using before the plans launched on November 13, 2026 remains " +
            "available to it whatever its plan.",
        },
      ],
    },
    {
      n: 3,
      title: "Credit packs and automatic recharge",
      blocks: [
        {
          kind: "p",
          text:
            "Platform usage, including assessments, reports, and AI agent work, " +
            "is metered in credits drawn from a single balance. Reports are not " +
            "separately priced and there is no limit on how many assessments you " +
            "can run. While a plan is active you can buy more credits in packs at " +
            "your plan's rate: a higher plan gets more credits for each dollar, " +
            "and larger packs carry a volume bonus. You can also turn on automatic " +
            "recharge, which buys credits at your plan's rate when your balance " +
            "falls below a threshold you set, up to a monthly limit you set. " +
            "Current pack sizes and the credits each buys are shown at checkout.",
        },
      ],
    },
    {
      n: 4,
      title: "Trial allowance",
      blocks: [
        {
          kind: "p",
          text:
            "A new organization receives a one-time trial of 10,000 credits, usable " +
            "without a plan. The trial is offered once per company, identified by " +
            "the company email domain.",
        },
      ],
    },
    {
      n: 5,
      title: "Hiring fees",
      blocks: [
        {
          kind: "p",
          text:
            "Self-serve plans are priced by usage only: no placement or success " +
            "fee applies to a hire made with a plan. A recruiting fee applies only " +
            "under a recruiting services agreement signed separately with us; " +
            `contact ${LEGAL_CONTACTS.legal} to arrange one. Fee Terms accepted ` +
            "before November 13, 2026 continue to govern the hires recorded under " +
            "them.",
        },
      ],
    },
    {
      n: 6,
      title: "Taxes and current figures",
      blocks: [
        {
          kind: "p",
          text:
            `Prices are in U.S. dollars and exclusive of taxes. Because plans and ` +
            `packs can change, the authoritative current figures are those shown ` +
            `in the app at the time of purchase. Questions: ${LEGAL_CONTACTS.legal}.`,
        },
      ],
    },
  ],
  colophon:
    "This Fee Schedule forms part of the Terms of Service; where a figure here " +
    "differs from the app's checkout screens, the app controls.",
};
