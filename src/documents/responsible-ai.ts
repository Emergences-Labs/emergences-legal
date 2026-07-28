// =============================================================
// Responsible AI — how NeoWork governs the AI that evaluates candidates.
//
// DRAFTING BASELINE. A public statement of AI governance: intended use, human
// oversight, fairness, transparency, security, and prohibited uses. Increasingly
// an enterprise/public-sector RFP gate and the public face of the EU AI Act
// risk-management posture. Reconcile the commitments with the internal AI
// governance record and DPIA before publication.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const RESPONSIBLE_AI_VERSION = "2026-07-03";
export const RESPONSIBLE_AI_EFFECTIVE_DATE = "July 3, 2026";

export const RESPONSIBLE_AI_DOC: LegalDocument = {
  slug: "responsible-ai",
  scope: "emergences",
  title: "Responsible AI",
  description:
    "How NeoWork governs the AI used to evaluate candidates — human oversight, " +
    "fairness, transparency, and the limits we hold ourselves to.",
  version: RESPONSIBLE_AI_VERSION,
  effectiveDate: RESPONSIBLE_AI_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `${PRODUCT_NAME} uses AI to help employers evaluate how well candidates work ` +
    `— including how well they work with AI. Because these evaluations affect ` +
    `people's opportunities, we hold the technology to a higher standard than ` +
    `“does it work”. This document describes how we govern it.`,
  sections: [
    {
      n: 1,
      title: "Intended use — and where it stops",
      blocks: [
        {
          kind: "p",
          text:
            "The platform is a decision-support tool for employment assessment. It " +
            "produces descriptive results about a candidate's demonstrated work, " +
            "supported by evidence. It is not designed or permitted to be the sole " +
            "basis of an employment decision, to rank people by protected " +
            "characteristics, or to make automated hire/reject decisions. Using it " +
            "that way violates our Acceptable Use Policy.",
        },
      ],
    },
    {
      n: 2,
      title: "Human oversight",
      blocks: [
        {
          kind: "p",
          text:
            "Every consequential use keeps a human in the loop: the employer " +
            "reviews the evaluation and decides. On our side, evaluation logic is " +
            "built and changed under review, and outputs flag low-evidence " +
            "observations for human attention rather than guessing.",
        },
      ],
    },
    {
      n: 3,
      title: "Fairness and bias mitigation",
      blocks: [
        {
          kind: "list",
          items: [
            "Assessments are scored against observable evidence from the work, using explicit criteria — not overall impression.",
            "An unobserved behavior is treated as “insufficient evidence”, never as a failure, so quiet or unconventional working styles are not penalized.",
            "The system does not use, request, or infer protected characteristics, and does not use proxies (such as location) for them.",
            "We are building disparate-impact testing into the assessment, support employers' own bias audits, and will publish a summary once our tool is independently audited.",
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Transparency",
      blocks: [
        {
          kind: "p",
          text:
            "Candidates are told AI is used before they begin, and can ask for an " +
            "explanation and a human review. We publish a Model Card describing how " +
            "the assessment works, its inputs and outputs, and its known limits.",
        },
      ],
    },
    {
      n: 5,
      title: "Privacy and security",
      blocks: [
        {
          kind: "p",
          text:
            "Assessment data is protected with encryption, access controls, and " +
            "monitoring, is not sold, and is not used to train general-purpose AI " +
            "models for unrelated purposes. Our sub-processors are disclosed, and " +
            "AI-provider traffic is governed by contract.",
        },
      ],
    },
    {
      n: 6,
      title: "Accountability",
      blocks: [
        {
          kind: "p",
          text:
            "We maintain internal documentation of the system and an impact " +
            "assessment of its discrimination and privacy risks, review material " +
            "changes, and take reports seriously. Concerns about how the AI " +
            `evaluates people can be raised at ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This statement works together with the Model Card, the Bias Audit, the " +
    "Candidate Bill of Rights, and our internal AI governance and impact records.",
};
