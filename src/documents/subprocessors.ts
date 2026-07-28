// =============================================================
// NeoWork Sub-processors — the public register of third parties that process
// personal data on our behalf, plus a change-notice commitment.
//
// DRAFTING BASELINE. The vendor list is derived from the verified data/
// sub-processor map (package.json deps + env). Confirm each entry, its
// processing location, and that a DPA is in place before publication; the
// "subscribe to changes" mechanism ([FILL] address) must be wired to a real
// list. Keep this in sync with the DPA's sub-processor annex.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const SUBPROCESSORS_VERSION = "2026-07-03";
export const SUBPROCESSORS_EFFECTIVE_DATE = "July 3, 2026";

export const SUBPROCESSORS_DOC: LegalDocument = {
  slug: "subprocessors",
  title: "Sub-processors",
  description:
    "The third-party service providers NeoWork uses to process personal data, " +
    "and how to be notified of changes.",
  version: SUBPROCESSORS_VERSION,
  effectiveDate: SUBPROCESSORS_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `To provide the ${PRODUCT_NAME} platform we use the sub-processors below. ` +
    `Each is bound by a data-processing agreement and may process personal data ` +
    `only on our documented instructions and with appropriate safeguards. This ` +
    `list is part of, and should be read with, our Data Processing Addendum.`,
  sections: [
    {
      n: 1,
      title: "Infrastructure and platform",
      blocks: [
        {
          kind: "table",
          columns: ["Sub-processor", "Purpose", "Data processed"],
          rows: [
            [
              "Vercel",
              "Application hosting, edge/runtime, cron",
              "All inbound request data, IP, headers",
            ],
            [
              "Supabase",
              "Primary database and file storage",
              "All account and candidate data, submissions, reports",
            ],
            [
              "Railway",
              "Hosting for the AI workforce-agent service",
              "Org and candidate content forwarded to models/tools",
            ],
            [
              "Clerk",
              "Authentication and identity for customer users",
              "Name, email, SSO identity, session",
            ],
          ],
        },
      ],
    },
    {
      n: 2,
      title: "AI model and tooling providers",
      blocks: [
        {
          kind: "table",
          columns: ["Sub-processor", "Purpose", "Data processed"],
          rows: [
            [
              "Anthropic",
              "Primary AI model for assessment and agent work",
              "Role/candidate content and transcripts in prompts",
            ],
            [
              "Additional model providers",
              "Optional alternative AI models (e.g. OpenAI, Google), when selected",
              "The same prompt content as the primary provider",
            ],
            [
              "OpenRouter, Inc.",
              "AI model gateway/router — selected models and Anthropic-outage failover",
              "The same prompt content and transcripts as the primary provider",
            ],
            [
              "Code-execution sandboxes",
              "Run candidate code/take-homes to build reviewer previews",
              "Candidate-submitted code and project files",
            ],
            [
              "Web-search / enrichment providers",
              "Agent web search; professional-profile enrichment",
              "Search queries; a candidate's professional-profile data",
            ],
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Business operations",
      blocks: [
        {
          kind: "table",
          columns: ["Sub-processor", "Purpose", "Data processed"],
          rows: [
            [
              "Stripe",
              "Subscription billing, credit packs, placement-fee invoices",
              "Customer identity, email, billing data",
            ],
            [
              "Email provider (Resend / SMTP)",
              "Transactional and notification email",
              "Recipient name and email, message content",
            ],
            [
              "Sentry",
              "Error and performance monitoring",
              "Error traces and request context (PII scrubbed)",
            ],
            [
              "Langfuse",
              "AI trace/observability",
              "Prompts and model outputs (may include content)",
            ],
            [
              "Inngest",
              "Durable background-job queue",
              "Job payloads referencing org/candidate records",
            ],
          ],
        },
        {
          kind: "p",
          text:
            "The candidate assessment runtime is operated by our affiliated " +
            "service, which shares the same database and safeguards. Minor " +
            "providers that process little or no personal data (for example, " +
            "company-logo lookup) are omitted for clarity and disclosed on request.",
        },
      ],
    },
    {
      n: 4,
      title: "Changes and notification",
      blocks: [
        {
          kind: "p",
          text:
            `We may add or replace sub-processors as the platform evolves. When ` +
            `we do, we update this page and, for customers who subscribe, provide ` +
            `advance notice so you can raise a reasonable objection as described in ` +
            `the Data Processing Addendum. To be notified of changes, or for the ` +
            `full processing-location detail, contact ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This Sub-processors list forms part of the Data Processing Addendum and " +
    "the Privacy Policy.",
};
