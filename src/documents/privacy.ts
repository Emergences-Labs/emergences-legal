// =============================================================
// NeoWork Privacy Policy — customer-facing notice.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. Written to the same rigor as the shipped
// Fee Terms and scoped to this product's actual data footprint (verified against
// the schema and sub-processor map). Licensed counsel must review before
// publication — in particular the controller/processor split, the CCPA/CPRA
// characterization, the People Data Labs (data-broker) sourcing disclosure, and
// the international-transfer mechanism.
//
// Rendered at /legal/privacy by the shared LegalDocumentView. A separate
// candidate-facing notice (Candidate Privacy Notice, Tier 2) covers the
// data-subject layer for people being assessed; this policy is the master notice
// and cross-references it.
// =============================================================

import { DOMAINS, LEGAL_CONTACTS, LEGAL_ENTITY, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const PRIVACY_VERSION = "2026-07-03";
export const PRIVACY_EFFECTIVE_DATE = "July 3, 2026";

export const PRIVACY_DOC: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How NeoWork collects, uses, shares, and protects personal data — for the " +
    "customers who use the platform and the candidates it helps evaluate.",
  version: PRIVACY_VERSION,
  effectiveDate: PRIVACY_EFFECTIVE_DATE,
  summary: [
    {
      label: "Two roles",
      text: "For our customers' account data we are the controller; for candidate data we act as a processor on behalf of the employer that runs the assessment.",
    },
    {
      label: "AI evaluation",
      text: "Candidates are evaluated with AI to produce descriptive scores. A human makes every hiring decision — see the Candidate Privacy Notice.",
    },
    {
      label: "Your rights",
      text: "You can access, correct, export, or delete personal data, and object to certain processing. We honor verified requests within the time the law requires.",
    },
  ],
  preamble:
    `This Privacy Policy explains how ${LEGAL_ENTITY} (“${PRODUCT_NAME}”, “we”, ` +
    `“us”) handles personal data in connection with the ${PRODUCT_NAME} hiring ` +
    `and assessment platform at ${DOMAINS.product} and the candidate assessment ` +
    `experience at ${DOMAINS.candidate} (together, the “Platform”). It applies ` +
    `to the recruiters and administrators who use the Platform (“Customer ` +
    `Users”) and to the candidates who are evaluated through it (“Candidates”). ` +
    `Capitalized terms not defined here have the meaning given in our Terms of ` +
    `Service.`,
  sections: [
    {
      n: 1,
      title: "Who we are and the two roles we play",
      blocks: [
        {
          kind: "p",
          text:
            "Data-protection law distinguishes the party that decides why and how " +
            "personal data is processed (the “controller”) from the party that " +
            "processes it on another's instructions (the “processor”). NeoWork " +
            "acts in both capacities depending on the data:",
        },
        {
          kind: "sub",
          heading: "We are a controller",
          text:
            "for the personal data of Customer Users — the account, billing, and " +
            "usage data we collect to provide and secure the Platform and to run " +
            "our business. This Policy is our controller notice for that data.",
        },
        {
          kind: "sub",
          heading: "We are a processor",
          text:
            "for Candidate data. The employer or recruiting organization that " +
            "runs an assessment is the controller of the Candidate's data and " +
            "decides the purpose of the evaluation; we process that data on the " +
            "employer's documented instructions under our Data Processing " +
            "Addendum. Candidates should read the Candidate Privacy Notice and, " +
            "for questions about a specific hiring process, contact the employer " +
            "that invited them.",
        },
        {
          kind: "p",
          text:
            "Where we determine our own purposes for Candidate data — for " +
            "example, securing the Platform against abuse — we act as a controller " +
            "for that limited purpose.",
        },
      ],
    },
    {
      n: 2,
      title: "Personal data we collect",
      blocks: [
        {
          kind: "p",
          text:
            "We collect the categories below. “Source” indicates whether the data " +
            "comes from you directly, from the customer organization, or from a " +
            "third party.",
        },
        {
          kind: "table",
          columns: ["Category", "Examples", "About", "Source"],
          rows: [
            [
              "Account & identity",
              "name, email, avatar, role, authentication identifiers",
              "Customer Users",
              "You / your organization",
            ],
            [
              "Enterprise directory (SSO/SCIM)",
              "identity-provider subject, verified email domain, directory attributes",
              "Customer Users",
              "Your organization's IdP",
            ],
            [
              "Billing & commercial",
              "plan, payment-processor identifiers, invoices, salary basis for the placement fee",
              "Customer Users",
              "You / payment processor",
            ],
            [
              "Usage & security metadata",
              "IP address, device/browser, audit and rate-limit logs",
              "Customer Users & Candidates",
              "Automatically",
            ],
            [
              "Candidate identity",
              "name, email, invitation details",
              "Candidates",
              "The employer / the Candidate",
            ],
            [
              "Candidate submissions",
              "uploaded files, source code, project deployments, submitted video links",
              "Candidates",
              "The Candidate",
            ],
            [
              "Assessment session record",
              "a recording/replay of the assessment session and AI-tool interactions",
              "Candidates",
              "Automatically during assessment",
            ],
            [
              "Résumé & profile",
              "employment history, headline, summary parsed from a résumé or enriched from a public professional profile",
              "Candidates",
              "The Candidate / a third-party data provider",
            ],
            [
              "Evaluation outputs",
              "descriptive scores, competency ratings, evidence notes, and the recruiter's decision",
              "Candidates",
              "Generated by the Platform",
            ],
            [
              "Connected-tool tokens",
              "OAuth tokens for tools a Customer User connects (e.g. email, chat)",
              "Customer Users",
              "You (on connection)",
            ],
          ],
        },
        {
          kind: "callout",
          label: "Third-party sourcing",
          text:
            "Some Candidate profile data is enriched from a third-party " +
            "professional-data provider using a professional-profile URL, rather " +
            "than collected from the Candidate. Where we obtain personal data " +
            "indirectly, we provide the transparency the law requires and identify " +
            "the source category in the Candidate Privacy Notice.",
        },
      ],
    },
    {
      n: 3,
      title: "How we use personal data",
      blocks: [
        {
          kind: "list",
          items: [
            "Provide, operate, secure, and improve the Platform.",
            "Create and evaluate assessments and generate descriptive reports on an employer's instruction.",
            "Authenticate users, enforce access controls, and prevent fraud and abuse.",
            "Process subscriptions, credits, and placement-fee invoices.",
            "Communicate about the service, including transactional and administrative messages.",
            "Comply with legal obligations and enforce our agreements.",
          ],
        },
        {
          kind: "p",
          text:
            "We do not sell personal data, and we do not use Candidate assessment " +
            "content to train general-purpose AI models for unrelated purposes.",
        },
      ],
    },
    {
      n: 4,
      title: "Automated evaluation and AI",
      blocks: [
        {
          kind: "p",
          text:
            "The Platform uses AI to evaluate a Candidate's work and produce " +
            "descriptive assessment outputs. These outputs are a decision-support " +
            "input: the Platform does not make hiring decisions and does not label " +
            "a Candidate “hire” or “no-hire”. The employer applies human review and " +
            "makes every employment decision.",
        },
        {
          kind: "p",
          text:
            "Because an automated evaluation can significantly affect a Candidate, " +
            "we support the employer in providing notice of AI use, a route to " +
            "human review and to contest an outcome, and a reasonable " +
            "accommodation or alternative process on request. These rights and how " +
            "to exercise them are described in the Candidate Privacy Notice and the " +
            "Candidate Bill of Rights.",
        },
      ],
    },
    {
      n: 5,
      title: "Legal bases (EEA/UK)",
      blocks: [
        {
          kind: "p",
          text:
            "Where the GDPR or UK GDPR applies to processing for which we are the " +
            "controller, we rely on: performance of a contract (to provide the " +
            "Platform to Customer Users); our legitimate interests (to secure and " +
            "improve the Platform and prevent abuse), balanced against your rights; " +
            "compliance with a legal obligation; and consent where required (for " +
            "example, non-essential cookies). Where we act as a processor of " +
            "Candidate data, the employer is responsible for the lawful basis of " +
            "that processing.",
        },
      ],
    },
    {
      n: 6,
      title: "How we share personal data",
      blocks: [
        {
          kind: "sub",
          heading: "Sub-processors",
          text:
            "We share personal data with vetted service providers who process it " +
            "on our behalf under contract — for hosting, database and storage, " +
            "authentication, AI model inference, payment processing, email, error " +
            "monitoring, and code execution. Our current sub-processors are listed " +
            "on the Sub-processors page, which you can subscribe to for change " +
            "notices.",
        },
        {
          kind: "sub",
          heading: "Within the hiring process",
          text:
            "Candidate data and evaluation outputs are shared with the employer " +
            "that runs the assessment, which is their intended purpose.",
        },
        {
          kind: "sub",
          heading: "Legal and corporate",
          text:
            "We may disclose data to comply with law or valid legal process (per " +
            "our Law-Enforcement Request Policy), to protect rights and safety, or " +
            "in connection with a merger, acquisition, or asset sale, subject to " +
            "this Policy.",
        },
      ],
    },
    {
      n: 7,
      title: "International transfers",
      blocks: [
        {
          kind: "p",
          text:
            "We are based in the United States and use sub-processors in the " +
            "United States and elsewhere. Where we transfer personal data out of " +
            "the EEA, UK, or Switzerland, we rely on an appropriate transfer " +
            "mechanism — such as the European Commission's Standard Contractual " +
            "Clauses and the UK Addendum — together with supplementary measures " +
            "where needed. A copy of the relevant safeguards is available on " +
            "request via our Data Processing Addendum.",
        },
      ],
    },
    {
      n: 8,
      title: "Retention",
      blocks: [
        {
          kind: "p",
          text:
            "We keep personal data for as long as needed to provide the Platform " +
            "and for legitimate business and legal purposes, then delete or " +
            "de-identify it. Customer Users' account data is retained for the life " +
            "of the account and deleted on request or after closure, subject to " +
            "records we must keep (for example, invoices). For Candidate data, " +
            "retention is governed by the employer's instructions and our Data " +
            "Retention & Deletion Policy. Specific retention periods are set out in " +
            "that Policy.",
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
            "We use administrative, technical, and organizational measures " +
            "appropriate to the risk — including encryption in transit and at " +
            "rest, tenant isolation, least-privilege access controls, audit " +
            "logging, and monitoring. No method of transmission or storage is " +
            "perfectly secure; if a breach affects your personal data we will " +
            "notify affected parties as required by law and our agreements. Our " +
            "security posture is summarized on our Trust page.",
        },
      ],
    },
    {
      n: 10,
      title: "Your rights and choices",
      blocks: [
        {
          kind: "p",
          text:
            "Depending on where you live, you may have rights to access, correct, " +
            "delete, port, or restrict personal data, to object to certain " +
            "processing, and to withdraw consent. You may also have the right not " +
            "to be subject to a solely automated decision with legal or similarly " +
            "significant effect, and to obtain human review.",
        },
        {
          kind: "sub",
          heading: "How to exercise them",
          text:
            `Customer Users can manage much of their data in the Platform, or ` +
            `contact us at ${LEGAL_CONTACTS.privacy}. Candidates should contact ` +
            `the employer that invited them (the controller); we will assist that ` +
            `employer in responding. We verify requests and respond within the ` +
            `period the applicable law requires, and we will not discriminate ` +
            `against you for exercising a right.`,
        },
        {
          kind: "sub",
          heading: "California",
          text:
            "California residents have rights under the CCPA/CPRA to know, delete, " +
            "correct, and to opt out of “sale” or “sharing” of personal " +
            "information. We do not sell personal information and do not share it " +
            "for cross-context behavioral advertising. You can still exercise your " +
            "choices via the “Your Privacy Choices” link, and we honor recognized " +
            "opt-out preference signals such as Global Privacy Control.",
        },
      ],
    },
    {
      n: 11,
      title: "Cookies and similar technologies",
      blocks: [
        {
          kind: "p",
          text:
            "We use strictly necessary cookies to run the Platform (for example, " +
            "authentication and session security) and, with consent where " +
            "required, limited analytics and error-monitoring technologies. You " +
            "can manage non-essential cookies through the consent banner and the " +
            "cookie-preferences link. See our Cookie Policy for details.",
        },
      ],
    },
    {
      n: 12,
      title: "Children",
      blocks: [
        {
          kind: "p",
          text:
            "The Platform is intended for use by adults in a professional hiring " +
            "context and is not directed to children. We do not knowingly collect " +
            "personal data from anyone under 16. An employer that assesses " +
            "early-career Candidates who may be minors is responsible for any " +
            "additional consent the law requires.",
        },
      ],
    },
    {
      n: 13,
      title: "Changes to this Policy",
      blocks: [
        {
          kind: "p",
          text:
            "We may update this Policy from time to time. The current version and " +
            "its effective date are always shown at the top of this page, and " +
            "prior versions are available in the Legal Updates archive. For " +
            "material changes we will provide reasonable notice (for example, by " +
            "notice in the Platform or by email).",
        },
      ],
    },
    {
      n: 14,
      title: "Contact us",
      blocks: [
        {
          kind: "p",
          text:
            `You can reach us about privacy at ${LEGAL_CONTACTS.privacy}. If you ` +
            `are in the EEA or UK, you also have the right to lodge a complaint ` +
            `with your local supervisory authority. Our privacy and data-protection ` +
            `contact for formal requests is available at the same address.`,
        },
      ],
    },
  ],
  colophon:
    "This Privacy Policy is a customer-facing notice and works together with " +
    "the Candidate Privacy Notice, the Cookie Policy, and the Data Processing " +
    "Addendum.",
};
