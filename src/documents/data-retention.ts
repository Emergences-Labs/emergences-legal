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

export const DATA_RETENTION_VERSION = "2026-11-12";
export const DATA_RETENTION_EFFECTIVE_DATE = "November 12, 2026";

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
      label: "Kept until deleted",
      text: "Account, candidate and assessment data stays until the customer deletes it, the organization is deleted, or a verified deletion request is completed.",
    },
    {
      label: "Some data clears itself",
      text: "Short-lived records such as sessions and rate-limit counters are deleted automatically within 30 days, and an AI agent's working state after 30 days of inactivity.",
    },
    {
      label: "You can ask us to delete",
      text: "Candidates and customers can request deletion, including of assessment recordings; we honor it except for the limited records the law makes us keep.",
    },
  ],
  preamble:
    `We keep personal data until it is deleted, and delete or de-identify it ` +
    `when a customer deletes it, when an organization is deleted, or when we ` +
    `complete a verified deletion request. A few short-lived categories are ` +
    `deleted automatically, as the schedule below shows. For candidate data, ` +
    `the employer that ran the assessment (the controller) can delete it or ` +
    `ask us to delete it at any time. Records the law requires us to keep are ` +
    `kept for as long as the law requires.`,
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
              "Candidate assessment data (invitations, submissions, decisions)",
              "Until deleted",
              "Kept until the employer deletes the assessment or its organization, or until a verified deletion request is completed. On a candidate's request we delete or de-identify the candidate's record.",
            ],
            [
              "Assessment session recordings and captured activity (screen recording, on-screen text, typing, copy and paste, app activity)",
              "Until deleted",
              "Deleted when the employer asks us to, or on a candidate's verified request made through the employer or to us — unless the law requires us to keep them (for example, California's four-year rule for hiring records) or they are under a legal hold.",
            ],
            [
              "Live call records, where an assessment includes a call (the transcript, and what the evaluation quoted from it)",
              "Until deleted",
              "Deleted with the candidate's other assessment data: when the employer asks us to, or on a candidate's verified request. The provider that runs the call keeps its own recording and transcript; that copy is not removed by our deletion and takes a separate request to the provider.",
            ],
            [
              "AI evaluation outputs (scores, reports)",
              "Kept with the candidate record they belong to",
              "Not deleted ahead of the underlying application — these are the selection records.",
            ],
            [
              "Résumé & profile data",
              "Follows the candidate record",
              "",
            ],
            [
              "Customer account & profile",
              "Life of the organization",
              "Deleted when an owner deletes the organization in the product, which starts immediately, or on request. Subject to billing/tax retention and legal holds.",
            ],
            [
              "AI workforce-agent conversations and work",
              "Life of the organization",
              "Deleted when the organization is deleted or on request. The agent's internal working state for a conversation is deleted automatically after 30 days of inactivity.",
            ],
            [
              "Billing, invoice & tax records",
              "7 years (US); up to 10 years (EU), as tax law requires",
              "A legal floor — not shortened on request.",
            ],
            [
              "Security & audit logs",
              "Life of the organization, then 12 months",
              "Kept while the organization exists, and deleted 12 months after the organization is deleted.",
            ],
            [
              "Support & email communications",
              "Until deleted",
              "Deleted on request.",
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
            "Assessment recordings are among the most sensitive data we hold. " +
            "Before the employer can review a recording, it is screened " +
            "automatically and passages that show personal content are removed. " +
            "We keep recordings and captured session activity so the employer can " +
            "review how the work was done during its hiring process, until the " +
            "employer asks us to delete them or a candidate's verified deletion " +
            "request is completed, unless the law requires us to keep them.",
        },
        {
          kind: "p",
          text:
            "Where an assessment includes a live call, the candidate's voice " +
            "and camera video are processed while the call runs so that the AI " +
            "can hold the conversation, and the provider that runs the call " +
            "records and transcribes it. We keep the transcript. We do not keep " +
            "the recording ourselves.",
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
            "An organization's owner can delete the organization's data in the " +
            "product, which cascades to associated records and cancels billing, " +
            "and can ask us to delete the assessment recordings and session data " +
            "held for their organization. Candidates can " +
            "request deletion via the employer or us. On a verified request we " +
            "delete or de-identify the personal data within the period the law requires, except " +
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
