// =============================================================
// NeoHuman Arena Assessment Terms — the INDIVIDUAL taker's agreement for
// self-serve public assessments (/arena postings). Distinct from both the
// customer Terms (org-to-org) and the Candidate Privacy Notice (the data
// notice): this is what the Start checkbox binds a public taker to.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. The Start flow records acceptance
// per-individual (arena_takers.consent_terms_at) because the employer
// clickwrap cannot cover a member of the public. Counsel to review —
// especially the results-sharing scope, the public-profile default, and the
// IP/confidentiality framing of submitted work.
// =============================================================

import { PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const ARENA_TERMS_VERSION = "2026-07-22";
export const ARENA_TERMS_EFFECTIVE_DATE = "July 22, 2026";

export const ARENA_TERMS_DOC: LegalDocument = {
  slug: "arena-terms",
  scope: "neohuman",
  title: "Arena Assessment Terms",
  description:
    "For public takers: what you agree to when you start an assessment from " +
    "an open-role posting on the NeoHuman Arena.",
  version: ARENA_TERMS_VERSION,
  effectiveDate: ARENA_TERMS_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  ledgerExtra: [{ label: "Your role", value: "Assessment taker" }],
  summary: [
    {
      label: "Free to take",
      text: "Taking an assessment costs you nothing and creates no obligation on either side — it is not a job offer, an interview promise, or employment.",
    },
    {
      label: "Your result goes to the company",
      text: "The company behind the posting receives your scored report, your work, and a record of how you worked with AI during the task.",
    },
    {
      label: "You control your public profile",
      text: "A pseudonymous NeoHuman profile is optional at start and can be unpublished at any time.",
    },
    {
      label: "Directly between you and the company",
      text: "NeoWork runs the assessment. The role, and anything the company says, promises, or decides, is the company's own.",
    },
  ],
  notice: {
    label: "How you accept",
    text:
      "You accept these terms by checking the consent box — when you create " +
      "your NeoHuman account, or when you start an assessment from a public " +
      "Arena posting. We record the time of your acceptance either way.",
  },
  preamble:
    `These terms apply when you take an assessment on the NeoHuman Arena — ` +
    `whether you start it from the candidate platform at reskill.neo-human.ai, ` +
    `from a public posting link, or by claiming an emailed invitation — and ` +
    `they cover the NeoHuman desktop app the assessment runs in. The company ` +
    `behind the posting (the "Company") defines the role and receives your ` +
    `results; ${PRODUCT_NAME} operates NeoHuman and runs the assessment. The ` +
    `Candidate Privacy Notice explains the data handling in detail and ` +
    `applies alongside these terms.`,
  sections: [
    {
      n: 1,
      title: "What the assessment is",
      blocks: [
        {
          kind: "p",
          text:
            "An Arena assessment is a realistic work sample completed with AI in " +
            "the loop, run in the NeoHuman desktop app. Using AI tools during the " +
            "task is expected and instrumented — how you direct them is part of " +
            "what is evaluated.",
        },
        {
          kind: "list",
          items: [
            "Starting is free for you. The Company funds the evaluation.",
            "One attempt per person per posting, unless the posting says otherwise.",
            "Assessment materials are shown to you only after you start. They are the Company's or NeoWork's confidential material — do not republish or share them.",
            "A posting may carry additional Company-specific instructions. These Arena Assessment Terms govern if the two ever conflict.",
          ],
        },
      ],
    },
    {
      n: 2,
      title: "What the Company receives",
      blocks: [
        {
          kind: "p",
          text:
            "When your attempt is evaluated, the Company receives a scored " +
            "report describing your result against the NeoWork competency model, " +
            "the work you submitted, and a record of your assessment session, " +
            "including how you worked with AI tools. Reports describe your level " +
            "objectively; they never contain a hire recommendation.",
        },
        {
          kind: "callout",
          label: "No promise of process",
          text:
            "Taking an assessment does not entitle you to an interview, an " +
            "offer, feedback, or any response from the Company, and does not " +
            "create an employment or agency relationship with the Company or " +
            "with NeoWork.",
        },
        {
          kind: "p",
          text:
            "Anything beyond the assessment itself — the role, its terms, any " +
            "conversation or commitment that follows — is directly between you " +
            "and the Company. NeoWork operates the assessment platform and is " +
            "not responsible for a Company's postings, statements, promises, " +
            "decisions, or conduct.",
        },
      ],
    },
    {
      n: 3,
      title: "Your work",
      blocks: [
        {
          kind: "p",
          text:
            "You keep ownership of the work you submit. You grant NeoWork and " +
            "the Company a license to use it for evaluating your attempt, " +
            "operating and improving the assessment service, and — where you " +
            "keep the public profile option on — presenting derived scores and " +
            "levels on your pseudonymous profile. Neither NeoWork nor the " +
            "Company may pass your submission off as its own deliverable.",
        },
        {
          kind: "p",
          text:
            "Your submission is never published publicly and never placed " +
            "under an open license. Unlike open-competition platforms, your " +
            "work stays between you, the Company, and NeoWork — only derived " +
            "scores can appear publicly, pseudonymously, and only if you keep " +
            "the profile option on.",
        },
        {
          kind: "p",
          text:
            "Submit only work you are allowed to share: no confidential " +
            "material from an employer, no other people's personal data, and no " +
            "content you don't have rights to.",
        },
      ],
    },
    {
      n: 4,
      title: "Your public profile",
      blocks: [
        {
          kind: "p",
          text:
            "If you keep the profile option on at start, your verified scores " +
            "appear on a pseudonymous NeoHuman profile and on the public " +
            "leaderboards — under a generated handle, never your name. Your " +
            "work products, the assessment contents, and the Company's identity " +
            "in relation to your attempt are not published.",
        },
        {
          kind: "p",
          text:
            "You can decline the profile at start, or unpublish at any time " +
            "from your profile's manage view. Unpublishing removes your " +
            "profile and board rows from public view; the Company you applied " +
            "to keeps your report.",
        },
      ],
    },
    {
      n: 5,
      title: "Fair play",
      blocks: [
        {
          kind: "list",
          items: [
            "One identity: don't take assessments under multiple emails or on someone else's behalf.",
            "Your own effort: AI tools are expected, but the directing judgment must be yours — no outsourcing the attempt to another person.",
            "No probing: don't attempt to extract assessment materials, scoring logic, or other takers' data.",
          ],
        },
        {
          kind: "p",
          text:
            "We may invalidate attempts and remove profiles that break these " +
            "rules, and may pause or close postings at any time.",
        },
      ],
    },
    {
      n: 6,
      title: "Your data",
      blocks: [
        {
          kind: "p",
          text:
            "The Candidate Privacy Notice describes what is collected, how the " +
            "AI evaluation works, retention, and your rights (access, " +
            "correction, deletion, human review). For an Arena attempt, the " +
            "Company is the controller of the results it receives; NeoWork " +
            "processes your data to run the assessment and, where you opt in, " +
            "to operate your public profile. If you never complete the attempt, " +
            "your contact details are removed when the posting closes.",
        },
      ],
    },
  ],
};
