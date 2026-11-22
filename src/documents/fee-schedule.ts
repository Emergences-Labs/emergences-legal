// =============================================================
// Fee Schedule — the price schedule the Terms of Service incorporate by
// reference (and the Fee Terms did before them).
//
// DRAFTING BASELINE, and BILLING-CANON SENSITIVE. Per the billing canon
// (CLAUDE.md): plan prices are customer-facing;
// per-report price, price per person, markup, and cost are NEVER shown.
// So this schedule states plan prices, each plan's monthly credits (the figure
// the plan cards already print), its features, and, since 2026-11-19, the
// pack prices and recharge rates the app's own pack cards print. The
// one-assessment-is-about-10,000-credits figure is a reading aid, never a charge.
//
// 2026-11-13: rewritten for the Pro / Max / Ultra plans. The figures mirror the
// product's catalogue (neowork-hiring src/lib/billing/subscription-plans.ts and
// plan-features.ts, themselves held equal to the database); change them there
// first, then here.
//
// 2026-11-19: the pricing revision (neowork-hiring
// docs/billing/2026-11-18-pricing-revision.md). Pro and Max only, yearly at ten
// months' price, Enterprise quoted and invoiced by us, Ultra and its invoice
// payment retired, three packs at one rate table on both plans, and the limit
// on open work samples. Later the same day the monthly credits moved to 50,000
// (Pro) and 160,000 (Max), prices unchanged; the version stays 2026-11-19
// because a version is a date.
//
// 2026-11-22: Max keeps 5 work samples open at once, down from 10 (operator:
// 「Max 改成同时开放 5 个吧」). Nothing else changed.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const FEE_SCHEDULE_VERSION = "2026-11-22";
export const FEE_SCHEDULE_EFFECTIVE_DATE = "November 22, 2026";

export const FEE_SCHEDULE_DOC: LegalDocument = {
  slug: "fee-schedule",
  scope: "neowork",
  title: "Fee Schedule",
  description:
    "The Pro and Max plans and Enterprise: prices, monthly credits, features, " +
    "credit packs, and the trial allowance.",
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
            ["Pro", "$399", "$3,990", "50,000"],
            ["Max", "$1,199", "$11,990", "160,000"],
          ],
        },
        {
          kind: "p",
          text:
            "Annual billing is the price of ten monthly payments, charged upfront " +
            "for the year. Every plan grants its monthly credits once for each " +
            "month, including each month of an annual plan, once the payment for " +
            "the period has succeeded. Credits do not expire and remain usable " +
            "after a plan ends. Seats are not limited on any plan. Plans renew " +
            "automatically until cancelled. An organization still subscribed to " +
            "an earlier Starter, Growth, or Enterprise plan keeps that plan's " +
            "price and terms until the subscription ends or it moves to one of " +
            "the plans above.",
        },
        {
          kind: "sub",
          heading: "Enterprise",
          text:
            "Enterprise is a yearly agreement that we quote and invoice under a " +
            "signed order form. It is not sold in the app, and no plan in the app " +
            "is paid by invoice. To arrange one, book a call from the plan page " +
            `in the app or contact ${LEGAL_CONTACTS.legal}.`,
        },
      ],
    },
    {
      n: 2,
      title: "Features by plan",
      blocks: [
        {
          kind: "table",
          columns: ["Feature", "Pro", "Max", "Enterprise"],
          rows: [
            ["Assessments, scoring, and reports", "Included", "Included", "Included"],
            ["Work samples open at the same time", "2", "5", "Unlimited"],
            ["Unlimited seats", "Included", "Included", "Included"],
            ["Finding candidates", "Included", "Included", "Included"],
            ["ATS connections", "Included", "Included", "Included"],
            ["Live interview role-play", "—", "Coming soon", "Coming soon"],
            ["SSO, SCIM, and company domains", "—", "—", "Included"],
            ["Audit log", "—", "—", "Included"],
            ["Greenhouse assessment key", "—", "—", "Included"],
            ["Scheduled company research refresh", "—", "—", "Included"],
            ["Early access to new features", "—", "—", "Included"],
          ],
        },
        {
          kind: "p",
          text:
            "Scoring is the same on every plan. A feature an organization was " +
            "already using before the plans launched on November 13, 2026 remains " +
            "available to it whatever its plan. The limit on open work samples " +
            "applies when a work sample is opened: it never closes one that is " +
            "already open, and publishing a new version of an open work sample " +
            "does not count as opening another.",
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
            "is metered in credits drawn from a single balance. No assessment " +
            "carries a fixed charge, reports are not separately priced, and apart " +
            "from the limit on open work samples in Section 2 there is no limit " +
            "on how many assessments you can run. As a guide, one assessment uses " +
            "about 10,000 credits; this is an estimate, not a price, and the " +
            "credits an assessment uses vary with the work it involves.",
        },
        {
          kind: "p",
          text:
            "While a plan is active you can buy more credits in packs. The packs " +
            "are the same on every plan, and larger packs buy more credits for " +
            "each dollar:",
        },
        {
          kind: "table",
          columns: ["Pack", "Credits"],
          rows: [
            ["$500", "50,000"],
            ["$1,800", "200,000"],
            ["$4,000", "500,000"],
          ],
        },
        {
          kind: "p",
          text:
            "You can also turn on automatic recharge, which buys credits when your " +
            "balance falls below a threshold you set, for an amount you set from " +
            "$200 to $10,000, up to a monthly limit you set. Automatic recharge " +
            "uses the same rates as the packs: $100 for each 10,000 credits on a " +
            "purchase below $1,800, $90 from $1,800, and $80 from $4,000, rounded " +
            "down to a whole credit.",
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
