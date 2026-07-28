// =============================================================
// NeoWork Data Retention & Deletion Policy — customer-facing.
//
// DRAFTING BASELINE. Concrete default periods derived from a legal-research pass
// (US EEOC/ADEA/OFCCP recordkeeping, IRS/EU invoice retention, GDPR storage
// limitation, IL AIVIA/BIPA, PCI-DSS log retention). Full legal basis + primary
// citations for counsel are in docs/compliance/data-retention-basis.md. Where a
// period is "employer-configurable", the employer's setting governs within the
// stated floor/ceiling. Counsel to confirm the EU member-state invoice periods
// and the unsuccessful-candidate window for the customers' jurisdictions.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const DATA_RETENTION_VERSION = "2026-07-03";
export const DATA_RETENTION_EFFECTIVE_DATE = "July 3, 2026";

export const DATA_RETENTION_DOC: LegalDocument = {
  slug: "data-retention",
  scope: "emergences",
  title: "Data Retention & Deletion",
  description:
    "How long NeoWork keeps each category of data, and how deletion works.",
  version: DATA_RETENTION_VERSION,
  effectiveDate: DATA_RETENTION_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  summary: [
    {
      label: "Keep only as long as needed",
      text: "Each category has a default period; we delete or de-identify data when it lapses, unless the law requires us to keep it.",
    },
    {
      label: "Recordings go early",
      text: "We delete raw assessment recordings soon after scoring, and always within 30 days of a candidate's request.",
    },
    {
      label: "You can ask us to delete",
      text: "Candidates and customers can request deletion; we honor it except for the limited records the law makes us keep.",
    },
  ],
  preamble:
    `We keep personal data only as long as we need it, then delete or ` +
    `de-identify it. This policy sets the default periods for the main ` +
    `categories of data on ${PRODUCT_NAME}. For candidate data, the employer ` +
    `that ran the assessment (the controller) can set a shorter period within ` +
    `the limits below and can request deletion at any time. Some periods are ` +
    `floors or ceilings fixed by law and cannot be changed.`,
  sections: [
    {
      n: 1,
      title: "Retention schedule",
      blocks: [
        {
          kind: "table",
          columns: ["Data", "Default retention", "Notes"],
          rows: [
            [
              "Candidate assessment data — not hired",
              "12 months after the hiring decision",
              "Employer-configurable 6–24 months; a longer “talent pool” only with the candidate's consent.",
            ],
            [
              "Candidate assessment data — hired",
              "24 months after the hire decision",
              "Employer-configurable up to employment + 1 year.",
            ],
            [
              "Assessment session recordings / video",
              "Purged 30 days after scoring (max 90 days)",
              "Always deleted within 30 days of a candidate's request.",
            ],
            [
              "AI evaluation outputs (scores, reports)",
              "Kept with the candidate record they belong to",
              "Not deleted ahead of the underlying application — these are the selection records.",
            ],
            [
              "Résumé & professional-profile data",
              "Résumé follows the candidate record",
              "Third-party-enriched fields are purged 30 days after the decision if not hired.",
            ],
            [
              "Customer account & profile",
              "Life of the subscription; deleted/anonymized within 90 days of account closure",
              "Subject to billing/tax retention and legal holds.",
            ],
            [
              "Billing, invoice & tax records",
              "7 years (US); up to 10 years (EU), as tax law requires",
              "A legal floor — not shortened on request.",
            ],
            [
              "Security & audit logs",
              "12 months",
              "~90 days immediately queryable; longer for finance-relevant trails.",
            ],
            [
              "Support & email communications",
              "24 months after the ticket is resolved",
              "",
            ],
            [
              "Ephemeral / bookkeeping (sessions, rate-limit buckets)",
              "30 days or less; automatically purged",
              "No legal retention need — the shortest period wins.",
            ],
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Recordings, video, and biometrics",
      blocks: [
        {
          kind: "p",
          text:
            "Raw assessment recordings are the most sensitive and shortest-lived " +
            "data we hold. Our commitment is to delete them once scoring is " +
            "complete, and always within 30 days of a candidate's request, and to " +
            "keep the derived evaluation (not the footage) as the record of the " +
            "assessment.",
        },
        {
          kind: "callout",
          label: "No biometric identifiers",
          text:
            "NeoWork does not extract or analyze biometric identifiers (such as " +
            "facial geometry or voiceprints) from candidates. If that ever " +
            "changes, such data would be governed by a published " +
            "retention-and-destruction schedule and destroyed at the earlier of " +
            "purpose completion or three years from the last interaction, with " +
            "consent.",
        },
      ],
    },
    {
      n: 3,
      title: "Legal holds override deletion",
      blocks: [
        {
          kind: "p",
          text:
            "If data is relevant to an actual or anticipated legal claim, audit, " +
            "or investigation — for example, a discrimination charge or a " +
            "compliance evaluation — the normal clock stops: we preserve the " +
            "affected records and do not delete them until the matter is finally " +
            "resolved, as the law requires, ahead of any scheduled deletion.",
        },
      ],
    },
    {
      n: 4,
      title: "Deletion on request",
      blocks: [
        {
          kind: "p",
          text:
            "Customer administrators can delete their organization's data, which " +
            "cascades to associated records and cancels billing. Candidates can " +
            "request deletion via the employer or us. On a verified request we " +
            "delete the personal data within the period the law requires, except " +
            "where we must retain limited data for legal, tax, security, or " +
            "records-keeping reasons — in which case we isolate it and stop " +
            "actively using it.",
        },
      ],
    },
    {
      n: 5,
      title: "Backups and residual copies",
      blocks: [
        {
          kind: "p",
          text:
            "Deleted data may persist briefly in encrypted backups until those " +
            "backups rotate out on their normal cycle, after which it is " +
            "overwritten. Backups are protected by the same access controls as " +
            "production data.",
        },
      ],
    },
    {
      n: 6,
      title: "Questions",
      blocks: [
        {
          kind: "p",
          text: `Questions about retention or deletion: ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This policy supports the retention commitments in the Privacy Policy and " +
    "the Data Processing Addendum.",
};
