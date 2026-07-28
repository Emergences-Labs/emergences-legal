// =============================================================
// NeoWork Data Processing Addendum (DPA) — customer-facing.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. This is the Art 28 processor agreement an
// EU/UK customer must be able to execute. It sets out the standard processor
// commitments and INCORPORATES the EU Standard Contractual Clauses and UK
// Addendum by reference rather than reproducing their (long, form) text — the
// executed DPA/order form should attach the actual SCC module selections.
// Counsel MUST review and confirm the module selections, the sub-processor
// annex, and the technical-and-organizational-measures schedule before use.
// =============================================================

import { GOVERNING_LAW, LEGAL_CONTACTS, LEGAL_ENTITY, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const DPA_VERSION = "2026-07-03";
export const DPA_EFFECTIVE_DATE = "July 3, 2026";

export const DPA_DOC: LegalDocument = {
  slug: "dpa",
  scope: "emergences",
  title: "Data Processing Addendum",
  description:
    "NeoWork's data-protection commitments as a processor of your data, " +
    "including international-transfer safeguards.",
  version: DPA_VERSION,
  effectiveDate: DPA_EFFECTIVE_DATE,
  summary: [
    {
      label: "We process on your instructions",
      text: "For candidate and other personal data you provide, you are the controller and NeoWork is your processor.",
    },
    {
      label: "Transfers are safeguarded",
      text: "Cross-border transfers rely on the EU Standard Contractual Clauses and the UK Addendum, incorporated here.",
    },
    {
      label: "How to execute",
      text: "This DPA applies to your use of the platform; a counter-signed copy is available on request for your records.",
    },
  ],
  preamble:
    `This Data Processing Addendum (“DPA”) forms part of the Agreement between ` +
    `${LEGAL_ENTITY} (“${PRODUCT_NAME}”, “Processor”) and the customer (“Customer”, ` +
    `“Controller”) and applies where ${PRODUCT_NAME} processes Personal Data on ` +
    `the Customer's behalf. Terms such as “Personal Data”, “Processing”, ` +
    `“Controller”, “Processor”, and “Data Subject” have the meaning given in ` +
    `applicable Data Protection Law (including the GDPR and UK GDPR).`,
  sections: [
    {
      n: 1,
      title: "Roles and scope",
      blocks: [
        {
          kind: "p",
          text:
            "The Customer is the Controller (or a processor acting for another " +
            "controller) of the Personal Data it submits, and NeoWork is its " +
            "Processor. The subject-matter, duration, nature, and purpose of the " +
            "processing, the types of Personal Data, and the categories of Data " +
            "Subjects are described in the Agreement and the Privacy Policy and " +
            "summarized in the processing details annex.",
        },
      ],
    },
    {
      n: 2,
      title: "Processor obligations",
      blocks: [
        {
          kind: "list",
          items: [
            "Process Personal Data only on the Customer's documented instructions, including for transfers, unless required by law (in which case we notify you where permitted).",
            "Ensure personnel authorized to process Personal Data are bound by confidentiality.",
            "Implement appropriate technical and organizational security measures (the measures schedule).",
            "Assist the Customer, taking into account the nature of processing, with data-subject requests and with security, breach-notification, and impact-assessment obligations.",
            "At the Customer's choice, delete or return Personal Data at the end of the services, subject to legal retention.",
            "Make available information necessary to demonstrate compliance and allow for audits as described below.",
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Sub-processors",
      blocks: [
        {
          kind: "p",
          text:
            "The Customer authorizes NeoWork to engage the sub-processors listed " +
            "on the Sub-processors page, each under a written contract imposing " +
            "data-protection obligations no less protective than this DPA. NeoWork " +
            "will give notice of intended changes (via the Sub-processors page and, " +
            "for subscribers, by notice) so the Customer may object on reasonable " +
            "data-protection grounds; NeoWork remains liable for its " +
            "sub-processors' performance.",
        },
      ],
    },
    {
      n: 4,
      title: "International transfers",
      blocks: [
        {
          kind: "p",
          text:
            "Where processing involves transfer of Personal Data out of the EEA, " +
            "UK, or Switzerland to a country without an adequacy decision, the " +
            "parties incorporate the European Commission's Standard Contractual " +
            "Clauses (and, for UK data, the UK International Data Transfer Addendum) " +
            "by reference, with NeoWork as data importer and the module selections " +
            "and annexes completed in the executed DPA or order form, together with " +
            "supplementary measures where needed.",
        },
      ],
    },
    {
      n: 5,
      title: "Security, breach notification, and audits",
      blocks: [
        {
          kind: "sub",
          heading: "Security",
          text:
            "NeoWork maintains technical and organizational measures appropriate " +
            "to the risk — including encryption in transit and at rest, tenant " +
            "isolation, access controls, logging, and monitoring — described in " +
            "the measures schedule and summarized on the Trust page.",
        },
        {
          kind: "sub",
          heading: "Breach notification",
          text:
            "NeoWork will notify the Customer without undue delay after becoming " +
            "aware of a personal-data breach affecting the Customer's Personal " +
            "Data, with the information reasonably available, to support the " +
            "Customer's own notification obligations.",
        },
        {
          kind: "sub",
          heading: "Audits",
          text:
            "NeoWork will make available compliance information and, on reasonable " +
            "request and subject to confidentiality, relevant third-party audit " +
            "reports (such as its SOC 2, once available), and will accommodate " +
            "reasonable audits as required by Data Protection Law.",
        },
      ],
    },
    {
      n: 6,
      title: "General",
      blocks: [
        {
          kind: "p",
          text:
            `This DPA is governed by the law of the Agreement (the ${GOVERNING_LAW} ` +
            `unless the Agreement states otherwise), except where Data Protection ` +
            `Law requires the law of the Controller's jurisdiction. If there is a ` +
            `conflict between this DPA and the rest of the Agreement on data ` +
            `protection, this DPA controls. To request a counter-signed copy, ` +
            `contact ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This DPA incorporates the Sub-processors list and the applicable Standard " +
    "Contractual Clauses, and forms part of the Agreement.",
};
