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

export const SUBPROCESSORS_VERSION = "2026-11-12";
export const SUBPROCESSORS_EFFECTIVE_DATE = "November 12, 2026";

export const SUBPROCESSORS_DOC: LegalDocument = {
  slug: "subprocessors",
  scope: "emergences",
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
              "Hosting for the AI workforce-agent service and the live-call service",
              "Org and candidate content forwarded to models/tools; transcripts of live calls",
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
              "OpenRouter, Inc.",
              "AI model gateway — every AI model request from the platform and the AI workforce agent is sent through it",
              "Prompts, conversation content, tool inputs and results, and uploaded content",
            ],
            [
              "Google (Vertex AI)",
              "Runs the Claude models we use, reached through OpenRouter with zero data retention",
              "The same prompt content as OpenRouter",
            ],
            [
              "Additional model providers",
              "Other AI models reached through OpenRouter (for example, OpenAI to draft scoring rubrics and Google Gemini to analyze video); for candidate assessments see section 3",
              "The same prompt content as OpenRouter",
            ],
            [
              "Anthropic",
              "File storage and agent sessions used to generate assessments",
              "Job and company material, assessment files, and instructions for each step",
            ],
            [
              "Code-execution sandboxes",
              "Run candidate code/take-homes to build reviewer previews",
              "Candidate-submitted code and project files",
            ],
            [
              "Exa",
              "Web search for the AI agent and for market and competitor research",
              "Search queries and web addresses",
            ],
            [
              "Apify",
              "Reading public LinkedIn profiles: a hiring manager's own profile when they provide it at onboarding, and people a customer asks the agent to research",
              "A person's LinkedIn profile address or name, and the profile details returned",
            ],
            [
              "Crustdata",
              "Company and people data lookups for the AI agent's research, where enabled",
              "Company names, person names or profile addresses, and the data returned",
            ],
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Candidate assessments",
      blocks: [
        {
          kind: "p",
          text:
            `When a candidate takes an assessment in the ${PRODUCT_NAME} ` +
            `assessment app (app.neo-work.ai) or the ${PRODUCT_NAME} desktop app, ` +
            `their data is processed by the providers below, in addition to ` +
            `Vercel and Supabase (section 1) and the email and error-monitoring ` +
            `providers in section 4. Where an assessment includes a live call, ` +
            `its transcript is also held by the live-call service on Railway ` +
            `(section 1) and read by an AI model through OpenRouter (section 2).`,
        },
        {
          kind: "table",
          columns: ["Sub-processor", "Purpose", "Data processed"],
          rows: [
            [
              "Google Cloud",
              "Storage and background processing for assessment sessions (Cloud Storage, Cloud Run), in the United States",
              "Screen recordings, captured session activity, submitted work",
            ],
            [
              "Google (Gemini models, via Vertex AI and the Gemini API)",
              "Screening recordings for personal content; analyzing how the work was done; one of the models that scores the work; the in-assessment AI guide",
              "Screen recordings, captured session activity, submitted work, guide conversations",
            ],
            [
              "OpenAI",
              "Extracting evidence from the work; one of the models that scores it; the in-assessment AI guide",
              "Submitted work, session evidence, guide conversations",
            ],
            [
              "Anthropic",
              "One of the models that scores the work",
              "Submitted work and session evidence",
            ],
            [
              "Nuance (nuancelabs.ai)",
              "Running the live call that some assessments include: the AI voice and video the candidate speaks with, and the call's recording and transcript",
              "The candidate's voice and camera video during the call (and an employer user's own, when they try a call before publishing it), the call's recording and transcript, an identifier in place of the person's name, and the employer's brief for the call",
            ],
            [
              "Reducto",
              "Reading the text and structure of submitted documents",
              "Submitted documents",
            ],
            [
              "Datalab",
              "Converting some document formats (such as office and e-book files) so they can be read",
              "Submitted documents",
            ],
            [
              "xAI",
              "Backup reading of documents that contain only images (rarely used)",
              "Page images of submitted documents",
            ],
          ],
        },
      ],
    },
    {
      n: 4,
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
              "Error traces and request context, with credentials and request bodies removed; may include user and organization identifiers",
            ],
            [
              "Langfuse",
              "Tracing of AI workforce-agent runs, to understand and debug what the agent did",
              "Which steps and tools ran, timings, token usage and cost, and user, organization and session identifiers; depending on configuration, also tool inputs and results and the model's replies, which can include organization and candidate content. Email addresses, names, salary and similar fields are removed before sending",
            ],
            [
              "PostHog",
              "Product analytics and, where enabled, session replay, with on-screen text masked by default",
              "Pages visited and actions taken, user and organization identifiers, device and browser data, and masked session recordings",
            ],
            [
              "Slack",
              "Customer support conversations through Slack Connect, and internal service alerts",
              "Support messages and the names and workspace details of the people who write them",
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
            "Minor providers that process little or no personal data (for " +
            "example, company-logo lookup) are omitted for clarity and disclosed " +
            "on request.",
        },
      ],
    },
    {
      n: 5,
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
