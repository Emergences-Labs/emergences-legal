// =============================================================
// NeoHuman Privacy Policy — the product policy for NeoHuman, the personal
// career growth partner at reskill.neo-human.ai (scope `neohuman`).
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Drafted 2026-11-05 from the NeoHuman
// code and its doc5 handover (G58) by an AI assistant; not reviewed by counsel.
// It is the page Google's OAuth consent screen and brand verification will link
// to, so it carries a Google user data section with the Limited Use statement,
// which the NeoWork Privacy Policy does not yet have.
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
//   credit records that must be kept; connector data helps the person only and
//   is never training data.
// - Google sign-in through Clerk is the only Google data access today.
// - The first connector, Notion (read-only), is being built, not live.
// - Vendors are those the NeoHuman code calls; contracts and regions unchecked.
// =============================================================

import {
  LEGAL_CONTACTS,
  LEGAL_ENTITY,
  LEGAL_MAILING_ADDRESS,
} from "../company.js";
import type { LegalDocument } from "../model.js";

export const NEOHUMAN_PRIVACY_VERSION = "2026-11-05";
export const NEOHUMAN_PRIVACY_EFFECTIVE_DATE = "November 5, 2026";

const GOOGLE_USER_DATA_POLICY =
  "https://developers.google.com/terms/api-services-user-data-policy";

export const NEOHUMAN_PRIVACY_DOC: LegalDocument = {
  slug: "neohuman-privacy",
  scope: "neohuman",
  title: "NeoHuman Privacy Policy",
  description:
    "What NeoHuman collects, how it uses your information and the accounts " +
    "you connect, who it shares it with, and how to delete it.",
  version: NEOHUMAN_PRIVACY_VERSION,
  effectiveDate: NEOHUMAN_PRIVACY_EFFECTIVE_DATE,
  summary: [
    {
      label: "Only to help you",
      text: "What you share and what NeoHuman reads from accounts you connect is used to help you with your own career. It is not sold, and connected-account content is not used to train AI models.",
    },
    {
      label: "Read-only connections",
      text: "Connected accounts are read only when NeoHuman needs them to answer you, and you can disconnect them at any time.",
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
          heading: "Content from connected accounts",
          text:
            "If you connect an account, the content NeoHuman reads from it to " +
            "answer you (see “Connected accounts”).",
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
      title: "Connected accounts",
      blocks: [
        {
          kind: "p",
          text:
            "You can choose to connect other accounts so NeoHuman can use your " +
            "own notes and documents when helping you. The first connection is " +
            "Notion, with read-only access. [TO CONFIRM: no connection is live " +
            "on 2026-11-05; publish this section only once Notion is, or " +
            "reword it as planned, and check every point below against the " +
            "shipped feature.]",
        },
        {
          kind: "sub",
          heading: "Read-only, and only when needed",
          text:
            "NeoHuman reads from a connected account only when it needs to " +
            "answer something you asked, and tells you where the information " +
            "came from. It cannot create, change or delete anything there.",
        },
        {
          kind: "sub",
          heading: "Not added to your memory unless you ask",
          text:
            "Content read from a connected account is not added to what " +
            "NeoHuman remembers about you unless you explicitly ask it to. A " +
            "copy of what was read may be kept with that conversation as the " +
            "record of the answer's source, and is deleted with the " +
            "conversation. [TO CONFIRM: the agent keeps a snapshot of a Notion " +
            "page it reads as a file of the session; confirm it is deleted " +
            "with the session.]",
        },
        {
          kind: "sub",
          heading: "Only to help you",
          text:
            "We use content from connected accounts only to help you with your " +
            "own career. We do not use it to train AI models, and we do not " +
            "use it for anyone else.",
        },
        {
          kind: "sub",
          heading: "You can disconnect at any time",
          text:
            "You can disconnect a connected account at any time in NeoHuman's " +
            "settings, under Connections, or remove NeoHuman's access from the " +
            "connected service's own settings. After you disconnect, NeoHuman " +
            "can no longer read from that account. [TO CONFIRM: settings has no " +
            "Connections section yet.] [TO BE DECIDED: what happens to the " +
            "stored access credentials on disconnect, for example deleted at " +
            "once and revoked with the provider.]",
        },
        {
          kind: "sub",
          heading: "Your workplace may control access",
          text:
            "If you connect an account provided by your employer or school, " +
            "its administrators may limit or remove NeoHuman's access, and the " +
            "content may belong to them. Connect only accounts you are allowed " +
            "to use this way.",
        },
        {
          kind: "p",
          text:
            "Access credentials for connected accounts are stored encrypted " +
            "and used only by NeoHuman's own systems to read on your behalf. " +
            "[TO CONFIRM: the credential store is not built yet.]",
        },
      ],
    },
    {
      n: 5,
      title: "Google user data",
      blocks: [
        {
          kind: "p",
          text:
            "Today NeoHuman receives Google user data only when you choose " +
            "“Continue with Google” to sign in: your name, email address and " +
            "profile picture. We use them to create and identify your account " +
            "and to show your name and picture in NeoHuman.",
        },
        {
          kind: "p",
          text:
            "If we offer connections to other Google services, such as files " +
            "you pick from Google Drive, we will ask for your permission on " +
            "Google's own screen, request only the access the feature needs, " +
            "and use the data only to provide the feature you turned on.",
        },
        {
          kind: "callout",
          label: "Limited Use",
          text:
            "NeoHuman's use and transfer to any other app of information " +
            "received from Google APIs will adhere to the Google API Services " +
            "User Data Policy, including the Limited Use requirements. The " +
            `policy is published at ${GOOGLE_USER_DATA_POLICY}.`,
        },
        {
          kind: "list",
          items: [
            "We use Google user data only to provide or improve the user-facing features you asked for.",
            "We do not transfer Google user data to others except as needed to provide those features, for security, to comply with the law, or as part of a merger, acquisition or sale of assets with your explicit prior consent.",
            "We do not use Google user data for advertising, and we do not sell it.",
            "We do not allow humans to read Google user data, except with your permission for specific content, for security (such as investigating abuse), to comply with the law, or for internal operations where the data is aggregated and anonymised.",
            "We do not use Google user data to develop, improve or train generalized AI or machine learning models.",
          ],
        },
        {
          kind: "p",
          text:
            "When NeoHuman uses content from a Google service to answer you, " +
            "the relevant parts are sent to the AI model provider that " +
            "generates the answer, only to produce that answer. [TO CONFIRM: " +
            "written terms from the model-routing service and model providers " +
            "that such content is not retained beyond processing or used for " +
            "training.]",
        },
      ],
    },
    {
      n: 6,
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
            ["AI model routing", "Sends requests to the models that generate answers", "OpenRouter and the model providers it routes to [TO CONFIRM: named providers]"],
            ["AI model", "Reads your profile during intake, for some accounts", "Google (Gemini API) [TO CONFIRM: whether this direct route is still used]"],
            ["Public profile retrieval", "Retrieves public LinkedIn profiles from links you give us", "Apify, ScrapIn, Crustdata"],
            ["Payments", "Processes purchases", "Stripe"],
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
            "Some providers process information in the United States and other " +
            "countries. [TO CONFIRM: the international transfer mechanism, if " +
            "NeoHuman serves people in the EU, UK or elsewhere.]",
        },
      ],
    },
    {
      n: 7,
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
            "can no longer sign in. For 30 days you can change your mind and " +
            "ask us to restore it. After 30 days we delete or anonymise your " +
            "personal information, including your profile, conversations, " +
            "memory, files and connected-account access. We keep only records " +
            "we must keep for billing, tax and accounting, such as purchase " +
            "and credit records, for as long as the law requires, linked to as " +
            "little of your personal information as those records need. " +
            "Copies in backups are removed as the backups expire. [TO CONFIRM: " +
            "how a restore is requested; how long backups are kept.]",
        },
      ],
    },
    {
      n: 8,
      title: "How to delete",
      blocks: [
        {
          kind: "sub",
          heading: "Your account",
          text:
            "In settings, under Account, choose Delete account. Your account " +
            "is deactivated at once, and after 30 days your personal " +
            `information is deleted or anonymised as described above. You can ` +
            `also email ${LEGAL_CONTACTS.privacy} from the address on your ` +
            "account. [TO CONFIRM: the Delete account control is being built.]",
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
          kind: "sub",
          heading: "A connected account",
          text:
            "Disconnect it in settings at any time (see “Connected accounts”). " +
            "For Google, you can also remove NeoHuman's access at " +
            "https://myaccount.google.com/permissions.",
        },
        {
          kind: "p",
          text:
            `You can also ask for a copy of your information, or to correct ` +
            `it, at ${LEGAL_CONTACTS.privacy}. [TO CONFIRM: rights wording for ` +
            `the places NeoHuman serves, such as California and the EU/UK.]`,
        },
      ],
    },
    {
      n: 9,
      title: "Security",
      blocks: [
        {
          kind: "p",
          text:
            "We protect your information with access controls and encryption " +
            "in transit, and connected-account credentials are encrypted at " +
            "rest. No service is perfectly secure; if a breach affects you, we " +
            "will tell you as the law requires.",
        },
      ],
    },
    {
      n: 10,
      title: "Children",
      blocks: [
        {
          kind: "p",
          text:
            "NeoHuman is not intended for anyone under [TO CONFIRM: 16 or 18], " +
            "and we do not knowingly collect information from them.",
        },
      ],
    },
    {
      n: 11,
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
      n: 12,
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
