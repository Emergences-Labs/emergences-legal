// =============================================================
// Assessment Model Card — documentation of the candidate-evaluation system.
//
// DRAFTING BASELINE. Written to the model-card / system-card convention and
// grounded in the canonical competency model (docs/reference/competency-model.md:
// AI Quotient vs Competency, 3 competencies × 14 constructs, 0–5 scores with
// null for insufficient evidence, two-stage scoring, six signal sources,
// three-valued logic). This is the artifact enterprise diligence and EU AI Act
// technical documentation expect. Reconcile specifics (model providers,
// validation data, measured performance) with engineering before publication —
// several values are intentionally left as clearly-marked placeholders.
// =============================================================

import { PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const MODEL_CARD_VERSION = "2026-07-03";
export const MODEL_CARD_EFFECTIVE_DATE = "July 3, 2026";

export const MODEL_CARD_DOC: LegalDocument = {
  slug: "model-card",
  title: "Assessment Model Card",
  description:
    "How the NeoWork assessment works: what it takes in, what it produces, how " +
    "it is scored, its oversight, and its known limitations.",
  version: MODEL_CARD_VERSION,
  effectiveDate: MODEL_CARD_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  ledgerExtra: [
    { label: "System", value: "Candidate assessment" },
    { label: "Risk tier", value: "High-risk (employment)" },
  ],
  preamble:
    `This Model Card describes the AI system ${PRODUCT_NAME} uses to evaluate ` +
    `candidates, so employers, candidates, and reviewers can understand what it ` +
    `does and does not do. It is written to be read by non-specialists as well as ` +
    `technical and compliance reviewers.`,
  sections: [
    {
      n: 1,
      title: "What the system does",
      blocks: [
        {
          kind: "p",
          text:
            "The system evaluates a candidate's work on a realistic task and " +
            "produces a descriptive report of how effectively they worked — with " +
            "particular attention to how well they work with AI. It is a " +
            "decision-support tool: it does not decide who is hired and does not " +
            "output a “hire/no-hire” label.",
        },
      ],
    },
    {
      n: 2,
      title: "Intended use and users",
      blocks: [
        {
          kind: "sub",
          heading: "Intended users",
          text:
            "Employers and recruiters evaluating candidates for roles, who apply " +
            "human review and make the hiring decision.",
        },
        {
          kind: "sub",
          heading: "Intended use",
          text:
            "As one input into a human-made employment decision, alongside other " +
            "evidence.",
        },
        {
          kind: "sub",
          heading: "Out-of-scope uses",
          text:
            "Automated hire/reject decisions; using a score as the sole basis for " +
            "a decision; ranking or filtering by protected characteristics; any use " +
            "prohibited by the Acceptable Use Policy.",
        },
      ],
    },
    {
      n: 3,
      title: "Inputs",
      blocks: [
        {
          kind: "p",
          text:
            "The system reads observable signals from the assessment session — " +
            "the candidate's screen recording, the on-screen content, the software " +
            "and tools used, input behavior, the submitted files (the deliverable), " +
            "and the process/event timeline. It does not take, request, or infer " +
            "protected characteristics.",
        },
      ],
    },
    {
      n: 4,
      title: "Outputs",
      blocks: [
        {
          kind: "table",
          columns: ["Output", "What it means", "Scale"],
          rows: [
            [
              "AI Quotient",
              "Result level — what the candidate shipped with AI, graded against the same task done by AI alone. Reported by domain.",
              "0–100",
            ],
            [
              "Competency",
              "Process level — the AI-independent judgment (how they reason, verify, frame, and self-regulate) that holds as tools change.",
              "0–100",
            ],
            [
              "Construct scores",
              "14 constructs across 3 competencies, each supported by cited evidence from the work.",
              "0–5 (or “insufficient evidence”)",
            ],
          ],
        },
        {
          kind: "p",
          text:
            "Every construct score is tied to specific evidence. Where the evidence " +
            "is insufficient, the system records “insufficient evidence” rather " +
            "than a low score.",
        },
      ],
    },
    {
      n: 5,
      title: "How it is scored",
      blocks: [
        {
          kind: "list",
          items: [
            "Two-stage scoring: first identify observable evidence, then combine that evidence to infer a level — no “overall impression” judgments.",
            "Explicit criteria: every rubric reduces to a defined observable variable with inclusion/exclusion thresholds.",
            "Three-valued logic: each criterion is confirmed-true, confirmed-false, or undeterminable — the last is distinct from a failure.",
            "Unobserved is never penalized: a behavior that was not observed is flagged for human review, not scored as absent.",
            "Multi-source corroboration: no single signal is decisive; the submitted deliverable wins on conflicts about the result.",
          ],
        },
      ],
    },
    {
      n: 6,
      title: "Human oversight",
      blocks: [
        {
          kind: "p",
          text:
            "The employer reviews the report and makes the decision. Evaluation " +
            "logic is authored and changed under review. Low-evidence and " +
            "conflicting signals are surfaced for a human rather than resolved " +
            "silently.",
        },
      ],
    },
    {
      n: 7,
      title: "Limitations",
      blocks: [
        {
          kind: "list",
          items: [
            "Results describe performance on one task and may not generalize to every aspect of a role.",
            "Assessment of work done with AI depends on the quality and completeness of the captured session signals.",
            "Like any AI system, the underlying models can make mistakes; this is why evidence is cited and human review is required.",
            "The system is not a measure of a person's worth, intelligence, or fixed ability.",
          ],
        },
      ],
    },
    {
      n: 8,
      title: "Fairness and evaluation",
      blocks: [
        {
          kind: "p",
          text:
            "The design choices above — evidence-based scoring, not penalizing " +
            "the unobserved, excluding protected characteristics and their proxies " +
            "— are fairness controls. We assess the system for disparate impact and " +
            "publish a summary when it is independently audited. [Measured " +
            "performance and demographic-parity results to be added from the " +
            "current validation and audit.]",
        },
      ],
    },
    {
      n: 9,
      title: "Data, privacy, and versioning",
      blocks: [
        {
          kind: "p",
          text:
            "Inputs and outputs are handled under the Candidate Privacy Notice and " +
            "Privacy Policy; sub-processors (including AI model providers) are " +
            "disclosed. This card is versioned; material changes to the assessment " +
            "update the version and are noted in the Legal Updates archive.",
        },
      ],
    },
  ],
  colophon:
    "This Model Card complements the Responsible AI statement and the Bias " +
    "Audit, and is grounded in NeoWork's canonical competency model.",
};
