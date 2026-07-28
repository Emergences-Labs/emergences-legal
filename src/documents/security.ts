// =============================================================
// Trust / Security overview — the public page an enterprise security review
// asks for by name. Summarizes the controls that already exist internally
// (docs/SOC2_READINESS.md, SOC2_REMEDIATION.md): encryption, tenant isolation
// (RLS), access control, monitoring, change management, incident response.
//
// HONESTY: SOC 2 is NOT claimed as attested — the readiness doc states the
// technical controls are implemented but formal Type II attestation is pending.
// This page says exactly that. Do not upgrade the wording to "SOC 2 certified"
// until a CPA firm issues the report.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const SECURITY_VERSION = "2026-07-03";
export const SECURITY_EFFECTIVE_DATE = "July 3, 2026";

export const SECURITY_DOC: LegalDocument = {
  slug: "security",
  title: "Security",
  description:
    "How NeoWork secures the platform and the personal data it processes — " +
    "encryption, tenant isolation, access control, monitoring, and our SOC 2 " +
    "status.",
  version: SECURITY_VERSION,
  effectiveDate: SECURITY_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  summary: [
    {
      label: "Encrypted",
      text: "Data is encrypted in transit and at rest, and sensitive secrets are additionally encrypted at the application layer.",
    },
    {
      label: "Isolated per tenant",
      text: "Row-level security and application-layer scoping keep each organization's data separate.",
    },
    {
      label: "Monitored",
      text: "Audit logging, error monitoring, and rate limiting protect and evidence the platform's operation.",
    },
  ],
  preamble:
    `Security is foundational to a platform that handles candidate data. This ` +
    `page summarizes how ${PRODUCT_NAME} protects data; for a deeper review, ` +
    `contact us for our security package.`,
  sections: [
    {
      n: 1,
      title: "Encryption",
      blocks: [
        {
          kind: "p",
          text:
            "All traffic is encrypted in transit with TLS, and data is encrypted " +
            "at rest. Particularly sensitive secrets, such as connected-tool " +
            "credentials, are additionally encrypted at the application layer with " +
            "authenticated encryption.",
        },
      ],
    },
    {
      n: 2,
      title: "Access control and tenant isolation",
      blocks: [
        {
          kind: "list",
          items: [
            "Row-level security in the database plus application-layer organization scoping isolate each tenant's data.",
            "Least-privilege access controls gate administrative and sensitive actions.",
            "Enterprise SSO and directory (SCIM) provisioning are supported for customer identity.",
            "Human-in-the-loop gating on outbound actions taken by the AI agent.",
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Monitoring and change management",
      blocks: [
        {
          kind: "p",
          text:
            "We maintain audit logging with request correlation, error and " +
            "performance monitoring (configured to scrub personal data), and rate " +
            "limiting against abuse. Code changes pass automated type, test, and " +
            "build checks on every change, and dependencies are kept current.",
        },
      ],
    },
    {
      n: 4,
      title: "Data handling and privacy",
      blocks: [
        {
          kind: "p",
          text:
            "Personal data is processed under our Privacy Policy and Data " +
            "Processing Addendum, shared only with the sub-processors we disclose, " +
            "and retained per our Data Retention & Deletion Policy. Candidate " +
            "assessment content is not sold and is not used to train " +
            "general-purpose AI models for unrelated purposes.",
        },
      ],
    },
    {
      n: 5,
      title: "Compliance status",
      blocks: [
        {
          kind: "callout",
          label: "SOC 2 — in progress",
          text:
            "Our technical controls are implemented and verified, mapped to the " +
            "SOC 2 Trust Services Criteria. Formal SOC 2 (Type II) attestation by " +
            "an independent CPA firm is in progress; we do not yet claim a " +
            "completed attestation. Contact us for our current status and, once " +
            "available, our report or bridge letter under NDA.",
        },
      ],
    },
    {
      n: 6,
      title: "Incident response and breach notification",
      blocks: [
        {
          kind: "p",
          text:
            "We maintain an incident-response process and will notify affected " +
            "customers without undue delay of a personal-data breach affecting " +
            "their data, consistent with our Data Processing Addendum and " +
            "applicable law, to support their own notification obligations.",
        },
      ],
    },
    {
      n: 7,
      title: "Reporting a vulnerability",
      blocks: [
        {
          kind: "p",
          text:
            `We welcome reports from security researchers. Please see our ` +
            `Vulnerability Disclosure policy, or email ${LEGAL_CONTACTS.security}.`,
        },
      ],
    },
  ],
  colophon:
    "This overview complements the Privacy Policy, the Data Processing " +
    "Addendum, and the Sub-processors list.",
};
