// =============================================================
// NeoWork Candidate Privacy Notice — the data-subject "layer 1" notice for
// people being assessed (distinct from the customer-facing Privacy Policy).
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Candidates are data subjects but not our
// customer, so GDPR Art 13/14 and CCPA notice-at-collection require a notice
// written to THEM, in plain language, at the point of collection. The employer
// is the controller; NeoWork is the processor. Counsel to review — especially
// the Art 14 third-party-source disclosure and the automated-decision framing.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const CANDIDATE_PRIVACY_VERSION = "2026-07-22";
export const CANDIDATE_PRIVACY_EFFECTIVE_DATE = "July 22, 2026";

export const CANDIDATE_PRIVACY_DOC: LegalDocument = {
  slug: "candidate-privacy",
  title: "Candidate Privacy Notice",
  description:
    "For candidates: what NeoWork collects when you take an assessment, how " +
    "the AI evaluation works, and the rights you have.",
  version: CANDIDATE_PRIVACY_VERSION,
  effectiveDate: CANDIDATE_PRIVACY_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  ledgerExtra: [{ label: "Your role", value: "Data subject" }],
  summary: [
    {
      label: "AI helps evaluate",
      text: "Your work is assessed with AI to produce a descriptive report. A person at the employer makes the hiring decision — not the AI.",
    },
    {
      label: "The employer decides",
      text: "The organization that invited you controls your data and the process. NeoWork runs the assessment on their behalf.",
    },
    {
      label: "You have rights",
      text: "You can ask for a human review, an explanation, access to your data, a correction, deletion, or an alternative to an AI assessment.",
    },
  ],
  preamble:
    `This notice explains how your personal data is handled across the ` +
    `NeoHuman candidate platform (reskill.neo-human.ai), the NeoHuman desktop ` +
    `app assessments run in, and public Arena postings — all operated by ` +
    `${PRODUCT_NAME}. Two roles apply. For your NeoHuman account and profile — ` +
    `things you create yourself — ${PRODUCT_NAME} is responsible for your ` +
    `data. For an assessment, the organization behind it (the “Employer”) ` +
    `decides why you are being assessed and is the controller of the results ` +
    `it receives; ${PRODUCT_NAME} provides the assessment technology and ` +
    `processes your data on the Employer's instructions. For questions about a ` +
    `specific hiring process, contact the Employer; for questions about the ` +
    `platform, you can also contact us.`,
  sections: [
    {
      n: 1,
      title: "What we collect about you",
      blocks: [
        {
          kind: "list",
          items: [
            "Identity and contact details — your name and email, and your invitation.",
            "Your NeoHuman account and profile — the preferences, links, and experience you add yourself (target roles, salary floor, locations, skills, socials, imported positions).",
            "Identity verification — we store only the verification status and timestamps. Your documents and biometric data stay with our verification partner (Stripe Identity), which shows you its own consent and retention notice in the flow.",
            "Your work — the files, code, project, or video you submit for the assessment.",
            "A record of your assessment session, including how you worked with AI tools during the task.",
            "Professional background — details from a résumé you provide or, where applicable, from a public professional profile.",
            "The evaluation the platform generates about your work.",
            "Your pseudonymous handle, where you keep the public-profile option on.",
            "Technical data such as your IP address, used to keep the assessment secure.",
          ],
        },
      ],
    },
    {
      n: 2,
      title: "Where your data comes from",
      blocks: [
        {
          kind: "p",
          text:
            "Most data comes from you directly or from the Employer that invited " +
            "you. Some professional-background data may be obtained from a " +
            "third-party professional-data provider using a professional-profile " +
            "URL, rather than collected from you. Where that happens, this notice " +
            "is your notice of that source.",
        },
      ],
    },
    {
      n: 3,
      title: "How the AI evaluation works",
      blocks: [
        {
          kind: "p",
          text:
            "The platform uses AI to review your submitted work and produce " +
            "descriptive results — for example, how effectively you worked and a " +
            "set of competency indicators, each supported by specific evidence from " +
            "your work. It describes your demonstrated level; it does not label you " +
            "“hire” or “no-hire”.",
        },
        {
          kind: "callout",
          label: "A human decides",
          text:
            "The evaluation is one input. A person at the Employer reviews it and " +
            "makes the hiring decision. The evaluation is designed to flag " +
            "uncertain observations for human review rather than penalize them, " +
            "and never to infer protected characteristics.",
        },
      ],
    },
    {
      n: 4,
      title: "Why your data is used",
      blocks: [
        {
          kind: "p",
          text:
            "Your data is used to run and evaluate the assessment for the " +
            "Employer's hiring decision, to keep the assessment secure and fair, " +
            "and to comply with law. It is not sold, and it is not used to train " +
            "general-purpose AI models for unrelated purposes.",
        },
      ],
    },
    {
      n: 5,
      title: "Your rights",
      blocks: [
        {
          kind: "list",
          items: [
            "Ask for a human review of an evaluation and an explanation of how it was reached.",
            "Request a reasonable accommodation, or an alternative to an AI-based assessment.",
            "Access the personal data held about you, and receive a copy.",
            "Correct inaccurate data, or ask for your data to be deleted.",
            "Object to or restrict certain processing, and withdraw any consent you gave.",
          ],
        },
        {
          kind: "sub",
          heading: "How to exercise them",
          text:
            `Because the Employer controls your data, the fastest route is to ` +
            `contact them. You can also contact ${PRODUCT_NAME} at ` +
            `${LEGAL_CONTACTS.privacy}; we will help the Employer respond and, ` +
            `where we must act, respond within the time the law requires. ` +
            `Exercising a right will not be held against you.`,
        },
      ],
    },
    {
      n: 6,
      title: "How long your data is kept",
      blocks: [
        {
          kind: "p",
          text:
            "The Employer decides how long to keep your assessment data for its " +
            "hiring process, within the limits of our Data Retention & Deletion " +
            "Policy. You can ask the Employer, or us, about deletion at any time.",
        },
      ],
    },
    {
      n: 7,
      title: "Security and where data is processed",
      blocks: [
        {
          kind: "p",
          text:
            "We protect your data with encryption, access controls, and " +
            "monitoring, and use vetted service providers listed on our " +
            "Sub-processors page. We are based in the United States and may process " +
            "data there and elsewhere with appropriate safeguards.",
        },
      ],
    },
    {
      n: 8,
      title: "Contact",
      blocks: [
        {
          kind: "p",
          text:
            `Questions about your data on ${PRODUCT_NAME}: ` +
            `${LEGAL_CONTACTS.privacy}. If you are in the EEA or UK, you may also ` +
            `contact your local data-protection authority. For decisions about a ` +
            `specific role, contact the Employer that invited you.`,
        },
      ],
    },
  ],
  colophon:
    "This Candidate Privacy Notice sits alongside the employer's own privacy " +
    "notice and our Privacy Policy, and works with the Candidate Bill of Rights.",
};
