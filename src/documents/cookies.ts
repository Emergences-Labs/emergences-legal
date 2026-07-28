// =============================================================
// NeoWork Cookie Policy — customer-facing notice.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Scoped to the technologies the app
// actually uses (Clerk session/auth cookies, Supabase session, Sentry client
// instrumentation, and — consent-gated — PostHog product analytics with
// optional session replay). The specific cookie names/durations in the table are
// representative and MUST be reconciled against the live Set-Cookie headers and
// the Sentry SDK config before publication. Pairs with the consent banner
// (which gates non-essential technologies) and the Privacy Policy.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

// Bumping this version invalidates every stored consent choice and re-prompts
// the banner (see src/lib/consent/cookie-consent.ts) — required whenever the
// factual basis of a category changes (2026-07-04: analytics went from "none
// in use" to consent-gated PostHog product analytics + optional replay).
export const COOKIES_VERSION = "2026-07-04";
export const COOKIES_EFFECTIVE_DATE = "July 4, 2026";

export const COOKIES_DOC: LegalDocument = {
  slug: "cookies",
  scope: "neowork",
  title: "Cookie Policy",
  description:
    "The cookies and similar technologies NeoWork uses, why, and how to " +
    "control them.",
  version: COOKIES_VERSION,
  effectiveDate: COOKIES_EFFECTIVE_DATE,
  summary: [
    {
      label: "Essential by default",
      text: "We use strictly necessary cookies to sign you in and keep the platform secure and reliable. These are always on.",
    },
    {
      label: "No ad tracking",
      text: "We do not use advertising or cross-site tracking cookies. Any optional cookies load only where you allow them.",
    },
    {
      label: "Change any time",
      text: "You can review or withdraw your choices at any time through the cookie-preferences link.",
    },
  ],
  preamble:
    `This Cookie Policy explains how ${PRODUCT_NAME} uses cookies and similar ` +
    `technologies (together, “cookies”) on the platform, and how you can control ` +
    `them. It supplements our Privacy Policy.`,
  sections: [
    {
      n: 1,
      title: "What cookies are",
      blocks: [
        {
          kind: "p",
          text:
            "Cookies are small files a site stores in your browser, and “similar " +
            "technologies” include local storage and SDKs that behave like " +
            "cookies. They let a site remember you between requests — for example, " +
            "to keep you signed in — and can help us understand and improve how the " +
            "platform performs.",
        },
      ],
    },
    {
      n: 2,
      title: "The categories we use",
      blocks: [
        {
          kind: "sub",
          heading: "Strictly necessary",
          text:
            "Required to provide the platform: authentication and session " +
            "management, security and abuse prevention, and load balancing. The " +
            "platform will not work correctly without these, so they are set " +
            "without needing consent.",
        },
        {
          kind: "sub",
          heading: "Security & reliability monitoring",
          text:
            "We use error and performance monitoring (configured to scrub " +
            "personal data, and which may capture a diagnostic session replay when " +
            "an error occurs) to keep the platform secure and working. We run this " +
            "on the basis of our legitimate interest in a safe, reliable service; " +
            "if you have concerns you can contact us to object.",
        },
        {
          kind: "sub",
          heading: "Functional",
          text:
            "Remember preferences such as your theme. These improve your " +
            "experience but are not essential, and you can decline them.",
        },
        {
          kind: "sub",
          heading: "Analytics & advertising",
          text:
            "With your consent, we use a product-analytics service (PostHog) to " +
            "understand how the platform is used: page views, feature usage, and " +
            "— where enabled — session replays in which on-screen text is masked " +
            "by default. Analytics loads only after you allow it through the " +
            "consent banner, and you can withdraw at any time. We do not use " +
            "advertising or cross-site tracking cookies.",
        },
      ],
    },
    {
      n: 3,
      title: "Cookies in use",
      blocks: [
        {
          kind: "p",
          text:
            "The table below lists representative cookies by the party that sets " +
            "them and their category. Exact names and lifetimes can change as our " +
            "providers update their software.",
        },
        {
          kind: "table",
          columns: ["Set by", "Purpose", "Category"],
          rows: [
            [
              "Authentication provider",
              "Keep you signed in; protect the session",
              "Strictly necessary",
            ],
            [
              "Platform",
              "Session security, CSRF protection, load balancing",
              "Strictly necessary",
            ],
            ["Platform", "Remember theme and interface preferences", "Functional"],
            [
              "Error-monitoring provider",
              "Detect and diagnose client-side errors (PII scrubbed)",
              "Security & reliability",
            ],
            [
              "Analytics provider (PostHog)",
              "Understand product usage: page views, feature usage, optional session replay (text masked)",
              "Analytics (only with your consent)",
            ],
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Managing your choices",
      blocks: [
        {
          kind: "p",
          text:
            "When required, we show a consent banner on your first visit so you " +
            "can accept or reject non-essential cookies. You can change your choice " +
            "at any time through the “Cookie preferences” link, and you can also " +
            "block or delete cookies in your browser settings — though blocking " +
            "strictly necessary cookies may break parts of the platform. We honor " +
            "recognized opt-out preference signals, such as Global Privacy Control, " +
            "where they apply.",
        },
      ],
    },
    {
      n: 5,
      title: "Changes and contact",
      blocks: [
        {
          kind: "p",
          text:
            `We may update this Cookie Policy as our technologies change. ` +
            `Questions: ${LEGAL_CONTACTS.privacy}.`,
        },
      ],
    },
  ],
  colophon:
    "This Cookie Policy supplements the Privacy Policy and is governed by it.",
};
