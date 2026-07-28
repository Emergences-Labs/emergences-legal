// =============================================================
// Bias Audit — the public disparate-impact audit surface (NYC LL144 pattern).
//
// DRAFTING BASELINE / FRAMEWORK. This page implements the public-posting element
// of an AEDT bias audit: it explains what is measured, the categories, the
// methodology, and shows the results scaffold — with the results table left
// EMPTY pending a real INDEPENDENT audit (no fabricated impact ratios). The
// internal methodology + data plan for counsel/the auditor lives in
// docs/compliance/bias-audit-methodology.md. Update `ledgerExtra` status, the
// dates, and the results table once an independent auditor delivers findings.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const BIAS_AUDIT_VERSION = "2026-07-03";
export const BIAS_AUDIT_EFFECTIVE_DATE = "July 3, 2026";

export const BIAS_AUDIT_DOC: LegalDocument = {
  slug: "bias-audit",
  title: "Bias Audit",
  description:
    "How NeoWork's assessment is independently audited for disparate impact, " +
    "what we measure, and where the results are published.",
  version: BIAS_AUDIT_VERSION,
  effectiveDate: BIAS_AUDIT_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  ledgerExtra: [
    { label: "Status", value: "Audit not yet completed" },
    { label: "Most recent audit", value: "—" },
  ],
  preamble:
    `Where the law treats our assessment as an automated employment decision ` +
    `tool — for example under New York City Local Law 144 — an independent bias ` +
    `audit must be performed and a summary published. This page is where ` +
    `${PRODUCT_NAME} publishes that summary and explains how the audit works.`,
  notice: {
    label: "Current status",
    text:
      "An independent bias audit of the assessment has not yet been completed. " +
      "We have prepared the audit methodology and data plan below and are " +
      "engaging an independent auditor; the results table and the required dates " +
      "will be filled in here when the audit is delivered. Until then, employers " +
      "using the tool for roles in jurisdictions that require an AEDT audit are " +
      "responsible for their own compliance and should contact us for the data " +
      "needed to support it.",
  },
  sections: [
    {
      n: 1,
      title: "What a bias audit measures",
      blocks: [
        {
          kind: "p",
          text:
            "An independent bias audit examines whether the tool's outcomes differ " +
            "across demographic groups. Because our assessment produces a score, " +
            "the audit computes, for each group, the rate at which candidates are " +
            "scored at or above the selection threshold the employer uses (the " +
            "“selection rate”), and the ratio of each group's selection rate to " +
            "that of the highest-scoring group (the “impact ratio”). An impact " +
            "ratio below 0.80 — the U.S. Equal Employment Opportunity " +
            "Commission's four-fifths rule of thumb — flags a potential adverse " +
            "impact for closer review.",
        },
      ],
    },
    {
      n: 2,
      title: "Categories audited",
      blocks: [
        {
          kind: "list",
          items: [
            "Sex (as reported in the underlying data).",
            "Race/ethnicity, using the U.S. EEO-1 categories.",
            "The intersection of sex and race/ethnicity.",
          ],
        },
        {
          kind: "p",
          text:
            "Categories with too few records to report reliably are marked as " +
            "such rather than shown with an unreliable number.",
        },
      ],
    },
    {
      n: 3,
      title: "Methodology",
      blocks: [
        {
          kind: "list",
          items: [
            "The audit is performed by an independent auditor with no financial interest in the outcome.",
            "It uses historical outcome data where available and, where it is not, test data representative of the candidate population.",
            "Selection rate and impact ratio are computed per category using the EEOC four-fifths benchmark, alongside the number of records (the sample) for each group.",
            "Scoring-threshold sensitivity is checked, since the impact ratio depends on where the employer sets its threshold.",
            "The full method and data plan are documented for the auditor and counsel and summarized here.",
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Results",
      blocks: [
        {
          kind: "p",
          text:
            "When the independent audit is complete, the impact-ratio results " +
            "appear in the table below. We do not publish provisional or " +
            "self-generated figures in their place.",
        },
        {
          kind: "table",
          columns: ["Category", "Selection rate", "Impact ratio", "Records"],
          rows: [
            ["Sex", "—", "—", "Pending"],
            ["Race / ethnicity", "—", "—", "Pending"],
            ["Sex × race/ethnicity", "—", "—", "Pending"],
          ],
        },
        {
          kind: "callout",
          label: "Results — pending independent audit",
          text:
            "The dashes above are placeholders for the audited figures. The audit " +
            "date and the tool's distribution date will be published alongside " +
            "them.",
        },
      ],
    },
    {
      n: 5,
      title: "What we publish when complete",
      blocks: [
        {
          kind: "list",
          items: [
            "The name and independence of the auditor.",
            "The date of the most recent bias audit.",
            "The date the tool was first offered for use (distribution date).",
            "The impact ratios for each category, with the source and number of records used.",
            "A summary of the results and any resulting changes.",
          ],
        },
      ],
    },
    {
      n: 6,
      title: "How our design reduces bias in the meantime",
      blocks: [
        {
          kind: "list",
          items: [
            "Scoring is based on cited evidence from the work against explicit criteria, not overall impression.",
            "Protected characteristics and their proxies are excluded from inputs and are never inferred.",
            "An unobserved behavior is treated as insufficient evidence and flagged for human review, not penalized.",
            "A human at the employer makes every decision.",
          ],
        },
      ],
    },
    {
      n: 7,
      title: "For employers and candidates",
      blocks: [
        {
          kind: "p",
          text:
            `Employers who need audit data for their own AEDT obligations, and ` +
            `candidates with questions about fairness, can contact us at ` +
            `${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This page implements the public-posting element of an AEDT bias audit and " +
    "works together with the Model Card and Responsible AI statement.",
};
