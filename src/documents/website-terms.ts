// =============================================================
// Emergences website Terms of Use — governs BROWSING emergences.ai and nothing
// else. Distinct from the platform Terms of Service (terms/terms-content.ts),
// the Fee Terms, and the candidate-facing Arena Assessment Terms; §2 says so
// explicitly, and an enterprise MSA/Order Form outranks all of them.
//
// PORTED from the live Framer page at emergences.ai (2026-07-28), deliberately
// faithful to that text. Only confirmed defects were corrected:
//   1. VERSION + EFFECTIVE DATE added. The Framer page carried none while its
//      own closing section promised "a revised version with a new effective
//      date" — a term that changes on continued use has to be datable.
//   2. SECTION NUMBERING. The Framer page left its first section unnumbered and
//      then resumed at "2", so every clause after it was mis-cited. Numbering is
//      now generated from the model and cannot drift.
//   3. The careers clause said "our Website Privacy Notice" but linked to the
//      PLATFORM Privacy Policy — a different document with a different scope and
//      a different controller posture. It now names this site's own notice.
//   4. The closing address was truncated ("or Emergences AI, Inc..") and now
//      renders the registered mailing address from the company constants.
//
// Cross-references are by DOCUMENT NAME, not hyperlink: the LegalBlock model
// carries plain text only. That is the house style for every /legal document
// here, and it is why defect 3 above cannot recur in this form.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Counsel to review.
// =============================================================

import {
  LEGAL_CONTACTS,
  LEGAL_ENTITY,
  LEGAL_MAILING_ADDRESS,
  PRODUCT_NAME,
} from "../company.js";
import type { LegalDocument } from "../model.js";

export const WEBSITE_TERMS_VERSION = "2026-07-28";
export const WEBSITE_TERMS_EFFECTIVE_DATE = "July 28, 2026";

export const WEBSITE_TERMS_DOC: LegalDocument = {
  slug: "website-terms",
  title: "Website Terms of Use",
  description:
    "The terms that govern browsing emergences.ai — separate from the terms " +
    "that govern the platform.",
  version: WEBSITE_TERMS_VERSION,
  effectiveDate: WEBSITE_TERMS_EFFECTIVE_DATE,
  ledgerExtra: [{ label: "Scope", value: "emergences.ai" }],
  summary: [
    {
      label: "Browsing only",
      text: "These terms govern this website. The platform, and candidate assessments, are governed by their own agreements.",
    },
    {
      label: "Nothing here is an offer",
      text: "Product descriptions, plans, and prices shown on this site are informational and may change.",
    },
    {
      label: "Content stays ours",
      text: "You may read the site for your own evaluation. You may not scrape it, copy it at scale, or republish it.",
    },
  ],
  preamble:
    `This website, emergences.ai, is operated by ${LEGAL_ENTITY}, a Delaware ` +
    `corporation (“Emergences”, “we”). By using the site, you accept these ` +
    `Terms of Use. If you do not agree, please do not use the site.`,
  sections: [
    {
      n: 1,
      title: "These terms cover the website only",
      blocks: [
        {
          kind: "p",
          text:
            "These terms govern browsing this website and its content. They do " +
            "not govern the products described on it.",
        },
        {
          kind: "list",
          items: [
            `Use of the ${PRODUCT_NAME} platform is governed by the ${PRODUCT_NAME} Terms of Service and, for enterprise customers, a signed Master Services Agreement and Order Form that take precedence.`,
            "Candidate assessments, including the NeoHuman desktop application, are governed by the candidate terms and privacy notice shown in the assessment flow.",
          ],
        },
        {
          kind: "p",
          text:
            "Nothing on this website is an offer capable of acceptance; the " +
            "product descriptions, plans, and prices shown here are " +
            "informational and may change.",
        },
      ],
    },
    {
      n: 2,
      title: "Content and intellectual property",
      blocks: [
        {
          kind: "p",
          text:
            `The site and its content — text, graphics, logos, product names ` +
            `including “${PRODUCT_NAME}”, research posts, and design — are owned ` +
            `by Emergences or its licensors and protected by ` +
            `intellectual-property laws. We grant you a limited, revocable, ` +
            `non-exclusive license to view the site for your internal business ` +
            `or personal evaluation. You may not scrape, copy at scale, frame, ` +
            `or republish our content without our written permission, except as ` +
            `the law allows.`,
        },
      ],
    },
    {
      n: 3,
      title: "Acceptable use",
      blocks: [
        {
          kind: "p",
          text:
            "You agree not to probe or breach the site's security, interfere " +
            "with its operation, misrepresent your affiliation, use the site to " +
            "send unsolicited communications, or use automated means to extract " +
            "content at scale, except for search indexing permitted by our " +
            "robots directives.",
        },
        {
          kind: "callout",
          label: "Security research",
          text:
            "Good-faith security research is welcome and is governed by our " +
            "Vulnerability Disclosure Policy, which carries a safe harbour. " +
            "Nothing in this section is intended to prohibit research conducted " +
            "in line with that policy.",
        },
      ],
    },
    {
      n: 4,
      title: "Blog, research, and third-party links",
      blocks: [
        {
          kind: "p",
          text:
            "Content on our blog and research pages is provided for general " +
            "information as of its publication date. It is not professional " +
            "advice, and we may update or remove it at any time. Links to " +
            "third-party sites are provided for convenience, and we are not " +
            "responsible for their content or practices.",
        },
      ],
    },
    {
      n: 5,
      title: "Careers submissions",
      blocks: [
        {
          kind: "p",
          text:
            "Applying for a role does not create any obligation on either " +
            "side. Please do not include any other employer's confidential " +
            "information in your application. Our Website Privacy Notice " +
            "explains how we handle applicant data.",
        },
      ],
    },
    {
      n: 6,
      title: "Feedback",
      blocks: [
        {
          kind: "p",
          text:
            "If you send us ideas or suggestions about our products, you grant " +
            "us a perpetual, irrevocable, royalty-free license to use them " +
            "without restriction or any obligation to you.",
        },
      ],
    },
    {
      n: 7,
      title: "Disclaimers",
      blocks: [
        {
          kind: "p",
          text:
            "The site is provided “as is” and “as available”, without " +
            "warranties of any kind, whether express or implied, including " +
            "merchantability, fitness for a particular purpose, and " +
            "non-infringement. We do not warrant that the site will be " +
            "uninterrupted, error-free, or secure.",
        },
      ],
    },
    {
      n: 8,
      title: "Limitation of liability",
      blocks: [
        {
          kind: "p",
          text:
            "To the maximum extent permitted by law, Emergences will not be " +
            "liable for any indirect, incidental, special, consequential, or " +
            "punitive damages, or any loss of profits, data, or goodwill, " +
            "arising out of your use of this website. Our total liability " +
            "arising out of the website will not exceed 100 US dollars.",
        },
        {
          kind: "callout",
          label: "Scope of this cap",
          text:
            "Nothing here limits liability that cannot be limited by law, and " +
            "this section does not apply to the platform services, which have " +
            "their own terms and their own limitation of liability.",
        },
      ],
    },
    {
      n: 9,
      title: "Governing law",
      blocks: [
        {
          kind: "p",
          text:
            "These terms are governed by the laws of the State of Delaware, " +
            "without regard to its conflict-of-laws rules. The courts located " +
            "in Delaware have exclusive jurisdiction, and you agree to that " +
            "venue.",
        },
      ],
    },
    {
      n: 10,
      title: "Changes and contact",
      blocks: [
        {
          kind: "p",
          text:
            `We may update these terms by posting a revised version with a new ` +
            `effective date. If you continue to use the site after a change, ` +
            `you accept the revised terms. You can reach us at ` +
            `${LEGAL_CONTACTS.legal}, or write to ${LEGAL_ENTITY}, ` +
            `${LEGAL_MAILING_ADDRESS}.`,
        },
      ],
    },
  ],
  colophon:
    "These Terms of Use govern the emergences.ai website only. The NeoWork " +
    "Terms of Service govern the platform.",
};
