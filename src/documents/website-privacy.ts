// =============================================================
// Emergences website Privacy Notice — the CORPORATE-SITE notice for visitors to
// emergences.ai (marketing, blog/research, careers, demo requests). Distinct
// from BOTH the platform Privacy Policy (privacy/privacy-content.ts, customers
// of NeoWork) and the Candidate Privacy Notice (data subjects being assessed).
// Here Emergences AI, Inc. is the CONTROLLER in its own right — it is not acting
// as anyone's processor.
//
// PORTED from the live Framer page at emergences.ai/legal/privacy-policy
// (2026-07-28), deliberately faithful to that text. Only confirmed defects were
// corrected; this is not a rewrite. What changed and why:
//   1. VERSION + EFFECTIVE DATE added. The Framer page carried none, while its
//      own §11 promised "an updated effective date" — so it could not support
//      the GDPR Art 5(2)/24 question "which notice was in effect on date X".
//   2. The cookie reference no longer points at the PLATFORM Cookie Policy.
//      That document describes the product's cookies, not this website's. The
//      website's own handling is now stated inline (§6).
//   3. Retention no longer points at the PLATFORM Data Retention & Deletion
//      Policy — that document is about assessment recordings and candidate
//      records, which a website visitor never generates. Stated inline (§9).
//   4. The California section no longer points at the platform's Your Privacy
//      Choices page (different controller, different scope). Stated inline (§10).
//   5. The stray assessment-processor sentence was removed from §2 — §2 says
//      this notice does NOT cover assessments, so the sentence contradicted its
//      own section. That statement lives in the Candidate Privacy Notice.
//
// STILL OWED (do not mistake for done): a website-scoped Cookie Notice with the
// actual cookie inventory for emergences.ai, and a concrete retention period for
// web logs/analytics in §9 — both need the live Framer/analytics configuration,
// which could not be inspected when this was ported. §6 and §9 therefore state
// the CRITERIA (permitted by GDPR Art 13(2)(a)) rather than invented numbers.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Counsel to review.
// =============================================================

import {
  LEGAL_CONTACTS,
  LEGAL_ENTITY,
  LEGAL_HQ_ADDRESS,
  PRODUCT_NAME,
} from "../company.js";
import type { LegalDocument } from "../model.js";

export const WEBSITE_PRIVACY_VERSION = "2026-07-28";
export const WEBSITE_PRIVACY_EFFECTIVE_DATE = "July 28, 2026";

export const WEBSITE_PRIVACY_DOC: LegalDocument = {
  slug: "website-privacy",
  title: "Website Privacy Notice",
  description:
    "For visitors to emergences.ai: what we collect on our website, why, and " +
    "the rights you have.",
  version: WEBSITE_PRIVACY_VERSION,
  effectiveDate: WEBSITE_PRIVACY_EFFECTIVE_DATE,
  omitGoverningLaw: true,
  ledgerExtra: [{ label: "Scope", value: "emergences.ai" }],
  summary: [
    {
      label: "This website only",
      text: "It covers emergences.ai — visitors, people who contact us, readers, and job applicants. The platform and candidate assessments have their own notices.",
    },
    {
      label: "No ad tracking",
      text: "We do not sell personal information, and we use no advertising or cross-site tracking cookies on this site.",
    },
    {
      label: "We are the controller",
      text: `For personal data collected on this website, ${LEGAL_ENTITY} decides why and how it is processed.`,
    },
  ],
  preamble:
    `This notice explains how ${LEGAL_ENTITY} collects, uses, and protects ` +
    `personal information when you visit emergences.ai or interact with us ` +
    `through it. Two other notices cover different things and apply instead ` +
    `where they fit: if you use the ${PRODUCT_NAME} platform as a customer, the ` +
    `${PRODUCT_NAME} Privacy Policy applies; if you are a candidate completing ` +
    `an assessment, the Candidate Privacy Notice applies. Both are published ` +
    `alongside this one.`,
  sections: [
    {
      n: 1,
      title: "Who we are",
      blocks: [
        {
          kind: "p",
          text:
            `This website is operated by ${LEGAL_ENTITY}, a Delaware ` +
            `corporation (“Emergences”, “we”, “us”). Our principal place of ` +
            `business is ${LEGAL_HQ_ADDRESS}. For personal data processed on ` +
            `this website, ${LEGAL_ENTITY} is the data controller. For anything ` +
            `in this notice, contact us at ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
    {
      n: 2,
      title: "What this notice covers",
      blocks: [
        {
          kind: "p",
          text:
            "This notice covers only this website — emergences.ai and its " +
            "subpages, including our blog, research, and careers pages.",
        },
        {
          kind: "list",
          items: [
            `The ${PRODUCT_NAME} platform is governed by the ${PRODUCT_NAME} Privacy Policy, not by this notice.`,
            "Candidate assessments, including the NeoHuman desktop application, are governed by the Candidate Privacy Notice.",
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Personal data we collect",
      blocks: [
        {
          kind: "sub",
          heading: "Data you give us",
          text:
            "When you contact us or request a demo, we collect your name, work " +
            "email, company, and the content of your message. When you apply " +
            "for a job, we collect your name, contact details, your CV or " +
            "résumé, any links you share such as a portfolio, LinkedIn, or " +
            "GitHub, and anything else you choose to include. If you sign up to " +
            "receive updates from us, we collect your email address.",
        },
        {
          kind: "sub",
          heading: "Data we collect automatically",
          text:
            "We collect standard web log data such as your IP address, browser " +
            "type, the pages you view, and the page that referred you, and — " +
            "where you allow it — website analytics as described below. Our " +
            "website host processes this data to serve and secure the site.",
        },
        {
          kind: "p",
          text:
            "We do not intentionally collect sensitive personal data through " +
            "this website, and we ask that you not include any in free-text " +
            "fields.",
        },
      ],
    },
    {
      n: 4,
      title: "How we use your data",
      blocks: [
        {
          kind: "list",
          items: [
            "To respond to inquiries and demo requests, and to follow up about our services.",
            "To evaluate job applications and communicate with applicants.",
            "To publish and improve our content, and to measure aggregate site usage.",
            "To protect the site against abuse and to comply with our legal obligations.",
          ],
        },
        {
          kind: "p",
          text:
            "Where the GDPR or UK GDPR applies, our legal bases are: taking " +
            "steps you request before entering a contract (demo requests and " +
            "applications); our legitimate interests in operating, promoting, " +
            "and securing our business; your consent where we ask for it " +
            "(non-essential cookies and marketing email); and compliance with " +
            "legal obligations.",
        },
        {
          kind: "callout",
          label: "No automated decisions",
          text:
            "We do not use website data to make automated decisions that " +
            "produce legal or similarly significant effects on you. The AI " +
            "evaluation that runs inside an assessment is a different process, " +
            "described in the Candidate Privacy Notice.",
        },
      ],
    },
    {
      n: 5,
      title: "Marketing communications",
      blocks: [
        {
          kind: "p",
          text:
            "We send marketing email only where the law allows, and with your " +
            "consent where it is required. Every marketing message includes an " +
            "unsubscribe link. A direct reply to an inquiry you sent us is not " +
            "marketing.",
        },
      ],
    },
    {
      n: 6,
      title: "Cookies and analytics",
      blocks: [
        {
          kind: "p",
          text:
            "This site uses strictly necessary cookies so that it loads, works, " +
            "and stays secure. Where you allow it, we also use website " +
            "analytics to understand aggregate usage — which pages are read, " +
            "and how people arrive.",
        },
        {
          kind: "p",
          text:
            "We use no advertising cookies and no cross-site tracking on this " +
            "website. Analytics cookies are set only with your consent, you can " +
            "withdraw that consent at any time, and withdrawing it does not " +
            "affect your ability to use the site.",
        },
      ],
    },
    {
      n: 7,
      title: "Who we share your data with",
      blocks: [
        {
          kind: "p",
          text:
            "We share personal data with service providers that host and " +
            "operate this site and our business systems, including Framer " +
            "(website hosting) and Google Workspace (email), along with the " +
            "tools we use to handle inquiries and job applications. These " +
            "providers process data under contract for us.",
        },
        {
          kind: "p",
          text:
            "We also share data with professional advisers and authorities " +
            "where the law requires, and with a successor entity in the event " +
            "of a merger, acquisition, or asset sale, with notice where " +
            "required.",
        },
        {
          kind: "callout",
          label: "We do not sell",
          text:
            "We do not sell personal information, and we do not share it for " +
            "cross-context behavioral advertising, as those terms are defined " +
            "by the CCPA and CPRA.",
        },
      ],
    },
    {
      n: 8,
      title: "International transfers",
      blocks: [
        {
          kind: "p",
          text:
            "We are based in the United States and process data there. Where we " +
            "receive personal data from the EEA, the UK, or Switzerland, we " +
            "rely on appropriate safeguards, such as the European Commission's " +
            "Standard Contractual Clauses, to protect it.",
        },
      ],
    },
    {
      n: 9,
      title: "Retention",
      blocks: [
        {
          kind: "p",
          text:
            "We keep inquiries and correspondence for as long as we need to " +
            "handle them and for a reasonable period afterwards. We keep " +
            "applicant data for the recruitment process and for up to 12 months " +
            "afterwards, or longer if you agree to be considered for future " +
            "roles.",
        },
        {
          kind: "p",
          text:
            "We keep web server logs and analytics data only as long as we need " +
            "them to secure the site and measure aggregate usage, and delete or " +
            "aggregate them after that.",
        },
      ],
    },
    {
      n: 10,
      title: "Your rights and choices",
      blocks: [
        {
          kind: "list",
          items: [
            "Access the personal data we hold about you, and receive a copy.",
            "Correct inaccurate data, or ask us to delete it.",
            "Object to or restrict certain processing, and withdraw consent you gave.",
            "Receive your data in a portable form where that right applies.",
          ],
        },
        {
          kind: "sub",
          heading: "California",
          text:
            "California residents have the rights to know, delete, and correct, " +
            "and the right to opt out of the sale or sharing of personal " +
            "information. As stated above, we do not sell or share personal " +
            "information for cross-context behavioral advertising, so there is " +
            "nothing to opt out of on this website. We will not treat you " +
            "differently for exercising any right.",
        },
        {
          kind: "sub",
          heading: "How to exercise them",
          text:
            `Email ${LEGAL_CONTACTS.privacy}. If your request concerns an ` +
            `assessment you completed for a hiring organization, we will route ` +
            `it as described in the Candidate Privacy Notice — in most cases ` +
            `that organization is the controller, and we will refer or support ` +
            `your request. Residents of the EEA and UK may also complain to ` +
            `their local supervisory authority.`,
        },
      ],
    },
    {
      n: 11,
      title: "Children",
      blocks: [
        {
          kind: "p",
          text:
            "This is a business website. It is not directed to children under " +
            "16, and we do not knowingly collect their personal data.",
        },
      ],
    },
    {
      n: 12,
      title: "Changes and contact",
      blocks: [
        {
          kind: "p",
          text:
            `We will post any changes here with an updated version and ` +
            `effective date, and give more prominent notice of material ` +
            `changes. Questions: ${LEGAL_CONTACTS.privacy}, or write to us at ` +
            `the address above.`,
        },
      ],
    },
  ],
  colophon:
    "This notice covers the emergences.ai website only. The NeoWork Privacy " +
    "Policy and the Candidate Privacy Notice cover the platform and " +
    "assessments respectively.",
};
