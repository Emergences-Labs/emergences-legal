// =============================================================
// NeoHuman Privacy Policy — the product policy for NeoHuman, the personal
// career growth partner at reskill.neo-human.ai (scope `neohuman`).
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Drafted 2026-11-05 from the NeoHuman
// code and its doc5 handover (G58) by an AI assistant; not reviewed by counsel.
// NeoHuman uses Google only for "Continue with Google" sign-in (Clerk's default
// openid/email/profile; production config read 2026-11-06 shows no extra
// scopes), and no Google API data access has been applied for (operator,
// 2026-11-06). So this version has no Google user data section: add one, with
// the Limited Use statement, in the version that ships the first Google scope.
//
// It is a DRAFT: every `[TO CONFIRM: …]` is a fact the drafter could not
// verify, every `[TO BE DECIDED: …]` a decision not yet made. The site refuses
// to build while any remain (see src/draft.ts), so merging this cannot publish
// it. Sign-off means resolving each one and deleting the "is still a draft"
// test in neohuman-privacy.test.ts.
//
// Distinct from the Candidate Privacy Notice (candidate-privacy), which a
// person assents to before an assessment and which stays as it is.
//
// Facts used, as read on 2026-11-05:
// - Operator decisions: entity Emergences AI, Inc.; contact through
//   LEGAL_CONTACTS; account deletion deactivates at once, keeps a 30-day window
//   to change your mind, then deletes or anonymises, keeping only billing and
//   credit records that must be kept.
// - No account connections in this version (operator, 2026-11-06): Notion is
//   not live, so the Connected accounts section, and with it the open question
//   of what happens to stored credentials on disconnect, return in the version
//   that ships the first connection. The operator's 2026-11-04 rule for that
//   section: connector data helps the person only and is never training data.
// - Google sign-in through Clerk is the only Google data access today.
// - No promise about how long AI providers keep requests (operator, 2026-11-06):
//   provider terms keep them for abuse monitoring, and zero retention covers
//   only some routes. Nor a promise that every provider never trains: read
//   2026-11-06, Moonshot AI's platform terms allow training unless agreed
//   otherwise in writing, and the website's routed calls do not ask OpenRouter
//   to exclude providers that train.
// - Photos, voice and identity checks (read from the code 2026-11-06): portraits
//   are painted by an image model from the person's photo; voice input is the
//   browser's own speech recognition; Stripe Identity (ID plus selfie) ran for
//   earlier accounts, and NeoHuman keeps the result, the verified name and an
//   HMAC of the document number. No current page starts a new check.
// - Vendors are those the NeoHuman code calls; contracts and regions unchecked.
// - Delete account (read 2026-11-06): built on reskill.neo-human.ai's branch
//   claude/account-deletion (Settings > Account > Your account; typed email;
//   refused while a paid plan renews; hidden at once; employer access paused,
//   deleted at the purge), NOT yet on main or live. Publish this policy only
//   after that branch ships and its migration is applied.
// =============================================================

import {
  LEGAL_CONTACTS,
  LEGAL_ENTITY,
  LEGAL_MAILING_ADDRESS,
} from "../company.js";
import type { LegalDocument } from "../model.js";

export const NEOHUMAN_PRIVACY_VERSION = "2026-11-05";
export const NEOHUMAN_PRIVACY_EFFECTIVE_DATE = "November 5, 2026";

export const NEOHUMAN_PRIVACY_DOC: LegalDocument = {
  slug: "neohuman-privacy",
  scope: "neohuman",
  title: "NeoHuman Privacy Policy",
  description:
    "What NeoHuman collects, how it uses your information, who it shares it " +
    "with, and how to delete it.",
  version: NEOHUMAN_PRIVACY_VERSION,
  effectiveDate: NEOHUMAN_PRIVACY_EFFECTIVE_DATE,
  summary: [
    {
      label: "Only to help you",
      text: "What you share with NeoHuman is used to help you with your own career. It is not sold, and it is not used for advertising.",
    },
    {
      label: "Deletion you can undo, then real",
      text: "Deleting your account deactivates it at once. You have 30 days to change your mind; after that your personal data is deleted or anonymised.",
    },
  ],
  preamble:
    `This policy explains what information NeoHuman collects, how we use it, ` +
    `who we share it with, and how you can remove it. It applies to NeoHuman ` +
    `at neo-human.ai and reskill.neo-human.ai. If you take an assessment, the ` +
    `Candidate Privacy Notice also applies to that assessment.`,
  sections: [
    {
      n: 1,
      title: "Who we are",
      blocks: [
        {
          kind: "p",
          text:
            "NeoHuman is a personal career growth partner. It helps you plan " +
            "your career, choose challenges, build training plans, practise " +
            "with feedback, and understand the gap between where you are and " +
            "where you want to be.",
        },
        {
          kind: "p",
          text:
            `NeoHuman is operated by ${LEGAL_ENTITY}, ${LEGAL_MAILING_ADDRESS} ` +
            `(“we”, “us”), which is responsible for the personal information ` +
            `described in this policy. You can reach us about privacy at ` +
            `${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
    {
      n: 2,
      title: "Information we collect",
      blocks: [
        {
          kind: "sub",
          heading: "Account information",
          text:
            "Your name and email address and, if you choose “Continue with " +
            "Google”, the basic profile Google shares for sign-in: name, email " +
            "address and profile picture. Sign-in is handled by our " +
            "authentication provider; we never see your Google password.",
        },
        {
          kind: "sub",
          heading: "What you give us",
          text:
            "Your career goals and preferences, the roles you target, a résumé " +
            "or other files you upload, links you give us (such as a LinkedIn " +
            "profile or a personal website), what you write to NeoHuman, and " +
            "anything you ask it to remember.",
        },
        {
          kind: "sub",
          heading: "Photos",
          text:
            "If a profile link you give us or a file you upload includes a " +
            "photo of you, we may use it to create an illustrated portrait for " +
            "your NeoHuman profile. An AI image model receives the photo to " +
            "draw the portrait.",
        },
        {
          kind: "sub",
          heading: "Voice input",
          text:
            "If you speak instead of typing, your browser's own speech " +
            "recognition turns your voice into text, and NeoHuman receives only " +
            "the text.",
        },
        {
          kind: "sub",
          heading: "Identity verification",
          text:
            "If you verified your identity in an earlier version of NeoHuman, " +
            "our verification partner, Stripe Identity, checked a government ID " +
            "and a matching selfie. We keep only the result, the name on the " +
            "document and a one-way code derived from the document number, " +
            "which tells us whether the same document was used twice. We never " +
            "receive the images or keep the number itself.",
        },
        {
          kind: "sub",
          heading: "Information from links you give us",
          text:
            "When you give us a public profile or website link, we retrieve " +
            "the public information at that link to understand your " +
            "background. For LinkedIn profile links we use third-party data " +
            "services to retrieve the public profile.",
        },
        {
          kind: "sub",
          heading: "Assessment results",
          text:
            "If you take an assessment, your answers, results and the evidence " +
            "behind them.",
        },
        {
          kind: "sub",
          heading: "Payments",
          text:
            "If you buy credits or a plan, our payment processor handles your " +
            "card details. We receive a record of the purchase, not your full " +
            "card number.",
        },
        {
          kind: "sub",
          heading: "Usage and device information",
          text:
            "Pages you visit, features you use, error reports, and basic device " +
            "and browser information.",
        },
        {
          kind: "p",
          text:
            "Apart from the identity check above, which Stripe performs, we do " +
            "not analyse faces or voice characteristics, and we do not use your " +
            "photo or voice to identify you.",
        },
      ],
    },
    {
      n: 3,
      title: "How we use your information",
      blocks: [
        {
          kind: "list",
          items: [
            "To provide NeoHuman to you: career planning, training plans, guided practice, feedback and gap analysis.",
            "To remember your goals and background across sessions, as you have shared them.",
            "To run your account, process payments and send you service messages, such as sign-in codes and receipts.",
            "To keep NeoHuman secure, prevent abuse and fix problems.",
            "To understand, in aggregate, how NeoHuman is used so we can improve it.",
          ],
        },
        {
          kind: "p",
          text:
            "To generate answers, NeoHuman sends the relevant parts of your " +
            "request and context to AI model providers, mostly through a " +
            "model-routing service and in some cases directly to Google's " +
            "Gemini models (see “Who we share it with”).",
        },
        {
          kind: "p",
          text:
            "We do not sell your personal information, and we do not use it " +
            "for advertising.",
        },
      ],
    },
    {
      n: 4,
      title: "Who we share it with",
      blocks: [
        {
          kind: "p",
          text:
            "We share personal information with the service providers below, " +
            "which process it for us to run NeoHuman under terms that limit " +
            "their use of it, and otherwise only as this section describes. " +
            "[TO CONFIRM: each provider, and that terms are in place with each.]",
        },
        {
          kind: "table",
          columns: ["Service", "What it does for us", "Provider"],
          rows: [
            ["Authentication", "Sign-up and sign-in, including Google sign-in", "Clerk"],
            ["Hosting", "Runs the NeoHuman website and its servers", "Vercel"],
            ["Hosting", "Runs NeoHuman's personal agent", "Railway"],
            ["Database and storage", "Stores your account, conversations, memory and files", "Supabase"],
            ["AI model routing", "Sends requests to the models that generate answers", "OpenRouter, which routes each request to a model from Anthropic, OpenAI, Google or Moonshot AI"],
            ["AI model", "Reads your profile during intake, for a limited group of accounts in a pilot", "Google (Gemini API)"],
            ["AI image model", "Draws your illustrated portrait from your photo", "OpenRouter, which routes the request to an image model"],
            ["Public profile retrieval", "Retrieves public LinkedIn profiles from links you give us", "Apify, ScrapIn, Crustdata"],
            ["Payments and identity verification", "Processes purchases, and ran identity checks for accounts verified in an earlier version", "Stripe"],
            ["Email", "Sends sign-in, notification and invitation emails", "Resend, Loops"],
            ["Product analytics", "Measures, in aggregate, how features are used", "PostHog, Vercel Analytics"],
            ["Error monitoring", "Records errors so we can fix them", "Sentry"],
          ],
        },
        {
          kind: "p",
          text:
            "We may also disclose information when the law requires it, or to " +
            "protect the rights, safety and security of our users, the public " +
            "or NeoHuman. If NeoHuman is part of a merger, acquisition or sale " +
            "of assets, your information may transfer with it, and we will " +
            "tell you before it becomes subject to a different policy.",
        },
        {
          kind: "p",
          text:
            "Your information is stored in the United States, and some of our " +
            "providers may process it in other countries. When information about " +
            "people in the EEA, the UK or Switzerland is transferred, we rely on " +
            "the EU–U.S. Data Privacy Framework where a provider is certified, " +
            "and otherwise on the European Commission's Standard Contractual " +
            "Clauses (with the UK Addendum).",
        },
      ],
    },
    {
      n: 5,
      title: "How long we keep it",
      blocks: [
        {
          kind: "p",
          text:
            "We keep your information while your account is open and as long " +
            "as needed to provide NeoHuman to you.",
        },
        {
          kind: "p",
          text:
            "When you delete your account, it is deactivated at once and you " +
            "can no longer sign in. Your public profile and results are hidden " +
            "from others at once, and any access you gave an employer to your " +
            "results is paused, then removed with the rest of your " +
            "information. For 30 days you can change your mind and " +
            "ask us to restore it. After 30 days we delete or anonymise your " +
            "personal information, including your profile, conversations, " +
            "memory and files. We keep only records " +
            "we must keep for billing, tax and accounting, such as purchase " +
            "and credit records, for as long as the law requires, linked to as " +
            "little of your personal information as those records need. " +
            "To restore your account within those 30 days, email " +
            `${LEGAL_CONTACTS.privacy} from the address on your account. ` +
            "Deleted information may persist briefly in encrypted backups until " +
            "those backups rotate out on their normal cycle, after which it is " +
            "overwritten.",
        },
      ],
    },
    {
      n: 6,
      title: "How to delete",
      blocks: [
        {
          kind: "sub",
          heading: "Your account",
          text:
            "In settings, under Account, choose Delete account and type the " +
            "email address on your account to confirm. Your account is " +
            "deactivated at once and you are signed out on every device, and " +
            "after 30 days your personal information is deleted or anonymised " +
            "as described above. If a paid plan is still set to renew, cancel " +
            "it in Billing first. You can also email " +
            `${LEGAL_CONTACTS.privacy} from the address on your account.`,
        },
        {
          kind: "sub",
          heading: "A conversation",
          text: "Open the session and choose Delete session.",
        },
        {
          kind: "sub",
          heading: "What NeoHuman remembers",
          text:
            "In settings, under Memory, you can see what you have told " +
            "NeoHuman to remember and remove any item.",
        },
        {
          kind: "p",
          text:
            "Depending on where you live, you may have rights to access, " +
            "correct, delete, port or restrict your personal information, to " +
            "object to certain processing, and to withdraw consent. To exercise " +
            `them, or to ask for a copy of your information, email ` +
            `${LEGAL_CONTACTS.privacy}. We verify requests, respond within the ` +
            "period the applicable law requires, and will not discriminate " +
            "against you for exercising a right.",
        },
        {
          kind: "sub",
          heading: "California",
          text:
            "California residents have rights under the CCPA/CPRA to know, " +
            "delete and correct personal information, and to opt out of its " +
            "“sale” or “sharing”. We do not sell personal information and do " +
            "not share it for cross-context behavioral advertising. NeoHuman " +
            "treats a Global Privacy Control or Do Not Track signal from your " +
            "browser as an opt-out of optional analytics.",
        },
      ],
    },
    {
      n: 7,
      title: "Security",
      blocks: [
        {
          kind: "p",
          text:
            "We protect your information with access controls and encryption " +
            "in transit. No service is perfectly secure; if a breach affects you, we " +
            "will tell you as the law requires.",
        },
      ],
    },
    {
      n: 8,
      title: "Children",
      blocks: [
        {
          kind: "p",
          text:
            "NeoHuman is not intended for anyone under 16, " +
            "and we do not knowingly collect information from them.",
        },
      ],
    },
    {
      n: 9,
      title: "Changes to this policy",
      blocks: [
        {
          kind: "p",
          text:
            "We will post any change on this page and update its version and " +
            "effective date. If a change materially affects how we use " +
            "information we already hold, we will tell you before it takes " +
            "effect.",
        },
      ],
    },
    {
      n: 10,
      title: "Contact",
      blocks: [
        {
          kind: "p",
          text:
            `Questions or requests: ${LEGAL_CONTACTS.privacy}, or write to ` +
            `${LEGAL_ENTITY}, ${LEGAL_MAILING_ADDRESS}.`,
        },
      ],
    },
  ],
};
