// =============================================================
// NeoWork Acceptable Use Policy — customer-facing.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Incorporated by reference into the Terms
// of Service; the contractual hook to suspend or terminate abusive use. The
// AI-hiring-specific prohibitions (no sole-basis decisions, no re-identifying or
// scraping candidates, no unlawful inputs) are scoped to this product. Counsel
// to review before publication.
// =============================================================

import { LEGAL_CONTACTS, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const AUP_VERSION = "2026-07-03";
export const AUP_EFFECTIVE_DATE = "July 3, 2026";

export const AUP_DOC: LegalDocument = {
  slug: "acceptable-use",
  scope: "emergences",
  title: "Acceptable Use Policy",
  description:
    "The rules for using the NeoWork platform responsibly and lawfully — " +
    "including the AI-hiring-specific limits that protect candidates.",
  version: AUP_VERSION,
  effectiveDate: AUP_EFFECTIVE_DATE,
  preamble:
    `This Acceptable Use Policy (the “Policy”) governs use of the ${PRODUCT_NAME} ` +
    `platform and is incorporated into the Terms of Service. It applies to the ` +
    `Customer and everyone who uses the platform through the Customer's account. ` +
    `We may update it as the platform and the law evolve.`,
  notice: {
    label: "Enforcement",
    text:
      "We may investigate suspected violations and may suspend or terminate " +
      "access for conduct that violates this Policy or that poses a security, " +
      "legal, or safety risk — with notice where practicable, or immediately " +
      "where the risk requires.",
  },
  sections: [
    {
      n: 1,
      title: "Use the platform lawfully and fairly",
      blocks: [
        {
          kind: "p",
          text:
            "You must use the platform in compliance with the Agreement and all " +
            "applicable laws, including employment, anti-discrimination, privacy, " +
            "and AI laws. You are responsible for the conduct of your users and " +
            "for the content and data you submit.",
        },
      ],
    },
    {
      n: 2,
      title: "Protecting candidates (AI-hiring limits)",
      blocks: [
        {
          kind: "p",
          text:
            "Because the platform evaluates people for employment, these limits " +
            "protect candidates and are a condition of use. You must not:",
        },
        {
          kind: "list",
          items: [
            "Use the platform's assessment outputs as the sole basis for an employment decision, or otherwise skip meaningful human review.",
            "Fail to provide any candidate notice, consent, accommodation, alternative process, or bias audit that the law requires for your use.",
            "Attempt to re-identify, de-anonymize, or infer protected characteristics of candidates, or use assessment data to discriminate.",
            "Scrape, harvest, or bulk-export candidate data beyond what your legitimate hiring process requires.",
            "Submit others' personal data to the platform without a lawful basis and the right to do so.",
            "Use the platform to evaluate people for a purpose you did not disclose to them.",
          ],
        },
      ],
    },
    {
      n: 3,
      title: "Protecting the platform and others",
      blocks: [
        {
          kind: "p",
          text: "You must not, and must not allow anyone to:",
        },
        {
          kind: "list",
          items: [
            "Probe, scan, or breach security or authentication measures, or access data or accounts that are not yours.",
            "Interfere with or disrupt the platform, including through excessive load, denial-of-service, or automated abuse of rate limits.",
            "Reverse engineer, copy, or use the platform to build a competing product, or resell access without authorization.",
            "Upload malware, or content that is unlawful, infringing, defamatory, harassing, or otherwise harmful.",
            "Misuse AI features — for example, to generate unlawful content, to attempt to extract another organization's data, or to bypass safety controls.",
            "Remove or obscure any proprietary notices, or misrepresent your identity or authority.",
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Data and security responsibilities",
      blocks: [
        {
          kind: "p",
          text:
            "Keep credentials secure, use the platform's access controls " +
            "appropriately, and promptly report any suspected vulnerability " +
            "through our Vulnerability Disclosure process rather than exploiting " +
            "or publicizing it.",
        },
      ],
    },
    {
      n: 5,
      title: "Reporting and contact",
      blocks: [
        {
          kind: "p",
          text:
            `To report abuse or a suspected violation of this Policy, contact ` +
            `${LEGAL_CONTACTS.legal}. Security issues should go to ` +
            `${LEGAL_CONTACTS.security}.`,
        },
      ],
    },
  ],
  colophon:
    "This Policy is part of the Agreement and is enforced under the Terms of " +
    "Service.",
};
