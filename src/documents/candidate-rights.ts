// =============================================================
// Candidate Bill of Rights — a plain-language, candidate-facing statement of
// what a person can expect from an AI-assisted assessment on NeoWork.
//
// This is a trust/values artifact, not a contract; it consolidates the concrete
// rights that appear in the Candidate Privacy Notice and the applicable AI-hiring
// laws into commitments a candidate can actually read. Counsel/leadership to
// confirm the commitments are ones the company will stand behind.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const CANDIDATE_RIGHTS_VERSION = "2026-07-03";
export const CANDIDATE_RIGHTS_EFFECTIVE_DATE = "July 3, 2026";

export const CANDIDATE_RIGHTS_DOC: LegalDocument = {
  slug: "candidate-rights",
  title: "Candidate Bill of Rights",
  description:
    "The commitments NeoWork makes to every candidate evaluated through the " +
    "platform — transparency, human judgment, fairness, and control of your data.",
  version: CANDIDATE_RIGHTS_VERSION,
  effectiveDate: CANDIDATE_RIGHTS_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  preamble:
    `Being evaluated for a job should feel fair and understandable — especially ` +
    `when AI is involved. This Bill of Rights states what you can expect when you ` +
    `are assessed through ${PRODUCT_NAME}. It reflects our values and the ` +
    `protections the law gives you; the specifics of how to exercise each right ` +
    `are in the Candidate Privacy Notice.`,
  sections: [
    {
      n: 1,
      title: "The right to know AI is involved",
      blocks: [
        {
          kind: "p",
          text:
            "You will be told, before you begin, that your work is evaluated with " +
            "AI, and in plain language what is being assessed. No hidden scoring, " +
            "no secret criteria.",
        },
      ],
    },
    {
      n: 2,
      title: "The right to a human decision",
      blocks: [
        {
          kind: "p",
          text:
            "The AI produces a descriptive evaluation; it does not decide whether " +
            "you are hired. A person at the employer reviews the results and makes " +
            "the decision. We do not label you “hire” or “no-hire”.",
        },
      ],
    },
    {
      n: 3,
      title: "The right to an explanation and to be heard",
      blocks: [
        {
          kind: "p",
          text:
            "You can ask for an explanation of how an evaluation about you was " +
            "reached, and you can ask a human to review it. Our evaluations are " +
            "built on specific, cited evidence from your work — not overall " +
            "impressions — so an explanation can point to what was actually " +
            "observed.",
        },
      ],
    },
    {
      n: 4,
      title: "The right to a fair assessment",
      blocks: [
        {
          kind: "p",
          text:
            "We design assessments to judge your work, not who you are. The system " +
            "does not try to infer protected characteristics, and treats an " +
            "unobserved behavior as “not enough evidence” rather than a failure. " +
            "When our results are audited for bias, we publish a summary.",
        },
      ],
    },
    {
      n: 5,
      title: "The right to an accommodation or alternative",
      blocks: [
        {
          kind: "p",
          text:
            "If you have a disability or another reason you cannot take the " +
            "assessment as presented, you can request a reasonable accommodation " +
            "or an alternative way to be evaluated. Ask the employer that invited " +
            "you, and we will support that request.",
        },
      ],
    },
    {
      n: 6,
      title: "The right to control your data",
      blocks: [
        {
          kind: "p",
          text:
            "You can access the data held about you, correct it, ask for it to be " +
            "deleted, and object to certain uses. Your assessment data is not sold " +
            "and is not used to train general-purpose AI models for unrelated " +
            "purposes. See the Candidate Privacy Notice for how.",
        },
      ],
    },
    {
      n: 7,
      title: "The right to no retaliation",
      blocks: [
        {
          kind: "p",
          text:
            `Exercising any of these rights — asking for a human review, an ` +
            `accommodation, or deletion — will never be held against you. ` +
            `Questions: ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This Bill of Rights is a statement of our commitments; the enforceable " +
    "detail lives in the Candidate Privacy Notice and applicable law.",
};
