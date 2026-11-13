// =============================================================
// NeoWork Terms of Service — master customer agreement.
//
// DRAFTING BASELINE, NOT LEGAL ADVICE. This is the master ToS the shipped Fee
// Terms already incorporate by reference (warranty disclaimers, limitation of
// liability, indemnities, dispute resolution). Written to the Fee Terms' rigor
// and scoped to this platform. Licensed counsel must review before publication —
// especially the liability cap, the arbitration / class-waiver clause, and the
// AI-deployer allocation, which interacts with the Fee Terms' Section 10.
//
// Rendered at /legal/terms by the shared LegalDocumentView. Acceptable use is
// governed by the separate Acceptable Use Policy and data handling by the
// Privacy Policy and DPA — each incorporated by reference here.
//
// 2026-11-13: the Pro / Max / Ultra subscription plans. Section 5 now states the
// subscription, credit and cancellation terms itself, with prices in the Fee
// Schedule. The Fee Terms (clickwrap, version 2026-07-03) are no longer offered
// to new customers and keep binding only the organizations that accepted them;
// their text is hashed at acceptance, so it is never edited here. A recruiting
// fee now arises only under a separately signed recruiting services agreement
// (product decision record: neowork-hiring
// docs/billing/2026-11-13-subscription-tiers.md, decision 14).
// =============================================================

import { GOVERNING_LAW, LEGAL_CONTACTS, LEGAL_ENTITY, PRODUCT_NAME } from "../company.js";
import type { LegalDocument } from "../model.js";

export const TERMS_VERSION = "2026-11-13";
export const TERMS_EFFECTIVE_DATE = "November 13, 2026";

export const TERMS_DOC: LegalDocument = {
  slug: "terms",
  scope: "neowork",
  title: "Terms of Service",
  description:
    "The master agreement governing use of the NeoWork hiring platform — " +
    "accounts, acceptable use, the customer's role as employer/deployer, " +
    "warranties, liability, and dispute resolution.",
  version: TERMS_VERSION,
  effectiveDate: TERMS_EFFECTIVE_DATE,
  summary: [
    {
      label: "You decide who to hire",
      text: "The Platform is a decision-support tool. You apply human review and make every employment decision; you are the employer/deployer.",
    },
    {
      label: "Plans and credits",
      text: "Plans renew until you cancel. Credits do not expire and stay usable after you cancel. Prices are in the Fee Schedule. A self-serve plan carries no hiring fee.",
    },
    {
      label: "As-is, with limits",
      text: "The Platform is provided “as is”, our liability is capped, and disputes are resolved as described below. Please read the full terms.",
    },
  ],
  preamble:
    `These Terms of Service (the “Terms”) are a binding agreement between ` +
    `${LEGAL_ENTITY} (“${PRODUCT_NAME}”, “we”, “us”) and the organization that ` +
    `accepts them or uses the Platform (“Customer”, “you”). They govern access to ` +
    `and use of the ${PRODUCT_NAME} hiring and assessment platform, together with ` +
    `the Fee Schedule, the Acceptable Use Policy, the Privacy Policy, any order ` +
    `form, and, where the Customer has accepted or signed them, the Fee Terms or ` +
    `a recruiting services agreement, each incorporated by reference (together, ` +
    `the “Agreement”).`,
  notice: {
    label: "Please read carefully",
    text:
      "By clicking to accept, signing an order form, or accessing or using the " +
      "Platform, you agree to these Terms on behalf of your organization and " +
      "represent that you are authorized to bind it. If you do not agree, do not " +
      "use the Platform.",
  },
  sections: [
    {
      n: 1,
      title: "Definitions",
      blocks: [
        {
          kind: "def",
          term: "Platform",
          text:
            "the NeoWork hiring and assessment software, websites, APIs, and " +
            "related services we make available.",
        },
        {
          kind: "def",
          term: "Candidate",
          text:
            "an individual the Customer evaluates, assesses, or sources through " +
            "the Platform.",
        },
        {
          kind: "def",
          term: "Customer Data",
          text:
            "data the Customer or its users submit to the Platform, and data about " +
            "Candidates processed on the Customer's behalf.",
        },
        {
          kind: "def",
          term: "Output",
          text:
            "the assessments, scores, evidence notes, and reports the Platform " +
            "generates for the Customer.",
        },
      ],
    },
    {
      n: 2,
      title: "The Platform and accounts",
      blocks: [
        {
          kind: "sub",
          heading: "Access",
          text:
            "Subject to the Agreement, we grant the Customer a non-exclusive, " +
            "non-transferable right to access and use the Platform for its internal " +
            "hiring and evaluation during the term.",
        },
        {
          kind: "sub",
          heading: "Accounts and security",
          text:
            "The Customer is responsible for its account, for the acts of its " +
            "users, and for keeping credentials secure. The Customer must promptly " +
            "notify us of any unauthorized use. Administrators are responsible for " +
            "managing user access within their organization.",
        },
        {
          kind: "sub",
          heading: "Changes to the Platform",
          text:
            "We may improve, modify, or discontinue features from time to time. We " +
            "will not materially reduce the core functionality of a paid " +
            "subscription during its paid term without reasonable notice.",
        },
      ],
    },
    {
      n: 3,
      title: "Customer as employer and deployer",
      blocks: [
        {
          kind: "p",
          text:
            "The Platform uses AI and automated processes to evaluate Candidates " +
            "and produce descriptive Output. It is a decision-support tool: it does " +
            "not make hiring decisions and does not label a Candidate “hire” or " +
            "“no-hire”. The Customer is the employer or employment agency for every " +
            "Candidate it evaluates and is the sole decision-maker for all " +
            "employment decisions.",
        },
        {
          kind: "sub",
          heading: "Human review",
          text:
            "The Customer will apply meaningful human review to every decision, " +
            "exercise independent judgment, and not use Output as the sole basis " +
            "for any employment decision. As between the parties, we are the " +
            "provider of the Platform and the Customer is the deployer that " +
            "determines the purpose and manner of its use.",
        },
        {
          kind: "sub",
          heading: "Compliance with employment and AI laws",
          text:
            "The Customer is responsible for compliance with all laws applicable " +
            "to its use of the Platform, including anti-discrimination, employment, " +
            "and automated-employment-decision and AI laws. This includes providing " +
            "required candidate notices, obtaining any required consent, arranging " +
            "any required bias audit and public posting, offering reasonable " +
            "accommodation and an alternative process on request, and monitoring " +
            "its own selection outcomes. We will provide reasonable documentation " +
            "to support the Customer's compliance, but do not assume the Customer's " +
            "legal obligations. Where the Customer has accepted the Fee Terms, this " +
            "Section is consistent with, and supplemented by, their Section 10.",
        },
      ],
    },
    {
      n: 4,
      title: "Acceptable use",
      blocks: [
        {
          kind: "p",
          text:
            "The Customer and its users must comply with the Acceptable Use " +
            "Policy, which is incorporated by reference. Among other things, the " +
            "Customer must not use Output as the sole basis for a decision, " +
            "re-identify or scrape Candidates, misuse the Platform to build a " +
            "competing product, or submit unlawful content or others' personal " +
            "data without a lawful basis. We may suspend use that violates the " +
            "Acceptable Use Policy or poses a security or legal risk.",
        },
      ],
    },
    {
      n: 5,
      title: "Plans, credits, and fees",
      blocks: [
        {
          kind: "p",
          text:
            "The Customer may subscribe to a plan (Pro, Max, or Ultra), billed " +
            "monthly or annually at the prices in the Fee Schedule and on the " +
            "checkout screen, which controls if they differ. Fees are charged in " +
            "advance for each billing period and are exclusive of taxes, which " +
            "the Customer pays except taxes on our net income. Seats are not " +
            "limited on any plan.",
        },
        {
          kind: "sub",
          heading: "Renewal",
          text:
            "A plan renews automatically at the end of each billing period, for a " +
            "period of the same length, until the Customer cancels it. By " +
            "subscribing, the Customer authorizes us and our payment processor to " +
            "charge the payment method entered at checkout for each renewal. We " +
            "will give reasonable advance notice of a price change, which applies " +
            "from the next renewal after the notice.",
        },
        {
          kind: "sub",
          heading: "Payment by invoice",
          text:
            "Where the checkout screen offers it (currently the Ultra plan billed " +
            "annually), the Customer may pay by invoice instead of by card. The " +
            "plan starts on subscription and the invoice is payable within thirty " +
            "(30) days of issue. The plan's monthly credits are granted once the " +
            "invoice is paid. We may suspend the plan while an invoice is overdue.",
        },
        {
          kind: "sub",
          heading: "Usage credits",
          text:
            "Platform usage is metered in usage credits drawn from one balance per " +
            "organization, and the credits an action uses reflect its underlying " +
            "compute. Each plan grants the monthly credits stated in the Fee " +
            "Schedule once for each month of the plan, including each month of an " +
            "annual plan. Credits do not expire and stay with the Customer's " +
            "organization; credits the Customer holds when a plan ends remain " +
            "usable after cancellation. Credits have no cash value, are redeemable " +
            "only for Platform usage, are not transferable, and are not refundable " +
            "except where the law requires. When the balance reaches zero, usage " +
            "that needs credits pauses until more are obtained. Nothing in this " +
            "Section limits any right or obligation under applicable " +
            "unclaimed-property law.",
        },
        {
          kind: "sub",
          heading: "Trial credits",
          text:
            "A new organization receives a one-time trial allowance of credits, " +
            "usable without a plan. The trial is offered once per company, " +
            "identified by the company email domain (or the full address for a " +
            "public email service); an organization created by a company that " +
            "has already received a trial does not receive another.",
        },
        {
          kind: "sub",
          heading: "Credit packs and automatic recharge",
          text:
            "While a plan is active, the Customer may buy additional credits in " +
            "packs at its plan's rate, with the volume terms shown at checkout. " +
            "The Customer may turn on automatic recharge, which buys credits at " +
            "its plan's rate when the balance falls below a threshold the Customer " +
            "sets, charging the saved payment method, up to a monthly limit the " +
            "Customer sets. Automatic recharge can be turned off at any time. A " +
            "failed recharge stops further recharges and does not withdraw credits " +
            "already held.",
        },
        {
          kind: "sub",
          heading: "Changing plans",
          text:
            "The Customer may change plans from billing settings, where the amount " +
            "due is shown before the change is confirmed. An upgrade takes effect " +
            "immediately and grants the difference in that month's credits. A " +
            "downgrade does not remove credits already granted. Features are " +
            "available according to the plan, as listed in the Fee Schedule; a " +
            "feature an organization was already using before the plans launched " +
            "on November 13, 2026 remains available to it.",
        },
        {
          kind: "sub",
          heading: "Cancellation and refunds",
          text:
            "The Customer may cancel a plan at any time from billing settings. " +
            "Cancellation stops future renewals; the plan stays active until the " +
            "end of the period already paid for, and fees already paid are not " +
            "refunded in whole or in part, except where the law requires. After a " +
            "plan ends, credits the Customer still holds remain usable, while " +
            "buying credit packs and plan features require an active plan.",
        },
        {
          kind: "sub",
          heading: "Hiring fees",
          text:
            "A plan does not include, and no subscription or credit purchase " +
            "creates, any placement or success fee. A fee for a hire arises only " +
            "under a recruiting services agreement the Customer signs separately " +
            "with us, and is governed by that agreement. Fee Terms the Customer " +
            "accepted before November 13, 2026 continue to govern the hires, " +
            "fees, revocations, and guarantees recorded under them. If these " +
            "Terms and a signed order form or recruiting services agreement " +
            "conflict on billing, the signed document controls.",
        },
      ],
    },
    {
      n: 6,
      title: "Intellectual property; feedback",
      blocks: [
        {
          kind: "sub",
          heading: "Our IP",
          text:
            "We and our licensors own the Platform and all related intellectual " +
            "property. Except for the rights expressly granted, no rights are " +
            "transferred to the Customer.",
        },
        {
          kind: "sub",
          heading: "Customer Data and Output",
          text:
            "As between the parties, the Customer owns its Customer Data. The " +
            "Customer may use Output for its internal hiring purposes. The Customer " +
            "grants us a limited license to host and process Customer Data to " +
            "provide the Platform and as permitted by the Privacy Policy and DPA.",
        },
        {
          kind: "sub",
          heading: "Feedback",
          text:
            "If the Customer gives us feedback or suggestions, we may use them " +
            "without restriction or obligation.",
        },
      ],
    },
    {
      n: 7,
      title: "Data protection and privacy",
      blocks: [
        {
          kind: "p",
          text:
            "Our handling of personal data is described in the Privacy Policy. " +
            "Where we process personal data on the Customer's behalf, the Data " +
            "Processing Addendum applies and, if executed, forms part of the " +
            "Agreement. The Customer is responsible for the lawfulness of the " +
            "Customer Data it provides and for having any notices and consents its " +
            "use of the Platform requires.",
        },
      ],
    },
    {
      n: 8,
      title: "Confidentiality",
      blocks: [
        {
          kind: "p",
          text:
            "Each party may access the other's non-public information. The " +
            "receiving party will use the disclosing party's confidential " +
            "information only to perform under the Agreement, protect it with " +
            "reasonable care, and not disclose it except to representatives bound " +
            "by confidentiality. This does not apply to information that is public, " +
            "independently developed, or rightfully received from a third party, or " +
            "to disclosures required by law.",
        },
      ],
    },
    {
      n: 9,
      title: "Third-party services",
      blocks: [
        {
          kind: "p",
          text:
            "The Platform relies on and may interoperate with third-party services " +
            "(for example, our sub-processors and any tools the Customer connects). " +
            "We are not responsible for third-party services the Customer chooses " +
            "to connect, and their use is governed by their own terms.",
        },
      ],
    },
    {
      n: 10,
      title: "Warranties and disclaimer",
      blocks: [
        {
          kind: "p",
          text:
            "We warrant that we will provide the Platform in a professional manner " +
            "consistent with the Agreement. EXCEPT AS EXPRESSLY STATED, THE " +
            "PLATFORM AND ALL OUTPUT ARE PROVIDED “AS IS” AND “AS AVAILABLE”, AND WE " +
            "DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING " +
            "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND " +
            "NON-INFRINGEMENT. We do not warrant that Output is accurate, complete, " +
            "unbiased, or compliant with the laws applicable to the Customer's " +
            "particular use, and Output is not legal advice. We do not guarantee " +
            "any hiring, retention, or business outcome.",
        },
      ],
    },
    {
      n: 11,
      title: "Limitation of liability",
      blocks: [
        {
          kind: "p",
          text:
            "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY IS LIABLE FOR " +
            "INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR " +
            "FOR LOST PROFITS, REVENUE, OR DATA, ARISING OUT OF THE AGREEMENT. EACH " +
            "PARTY'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THE AGREEMENT WILL " +
            "NOT EXCEED THE AMOUNTS THE CUSTOMER PAID OR OWED US IN THE TWELVE (12) " +
            "MONTHS BEFORE THE EVENT GIVING RISE TO THE LIABILITY.",
        },
        {
          kind: "sub",
          heading: "Exclusions",
          text:
            "These limits do not apply to a party's liability for its breach of " +
            "confidentiality, the Customer's payment obligations, a party's " +
            "indemnification obligations, or liability that cannot be limited by " +
            "law. The allocation of risk in this Section is a fundamental basis of " +
            "the bargain.",
        },
      ],
    },
    {
      n: 12,
      title: "Indemnification",
      blocks: [
        {
          kind: "sub",
          heading: "By us",
          text:
            "We will defend the Customer against a third-party claim that the " +
            "Platform infringes that third party's intellectual-property rights, " +
            "and pay resulting damages finally awarded, subject to the exclusions " +
            "and liability limits in the Agreement.",
        },
        {
          kind: "sub",
          heading: "By the Customer",
          text:
            "The Customer will defend, indemnify, and hold us harmless from any " +
            "third-party claim arising out of the Customer's employment decisions, " +
            "its use of the Platform in violation of the Agreement or law, its " +
            "Customer Data, or its failure to provide any required candidate " +
            "notice, consent, accommodation, bias audit, or posting. This mirrors " +
            "and supplements the Customer indemnity in the Fee Terms, where the " +
            "Customer has accepted them.",
        },
      ],
    },
    {
      n: 13,
      title: "Term, suspension, and termination",
      blocks: [
        {
          kind: "sub",
          heading: "Term",
          text:
            "The Agreement starts when the Customer first accepts it or uses the " +
            "Platform and continues until terminated. Plans renew and are " +
            "cancelled as described in Section 5.",
        },
        {
          kind: "sub",
          heading: "Suspension",
          text:
            "We may suspend access for a material breach, non-payment, or a " +
            "security or legal risk, with notice where practicable.",
        },
        {
          kind: "sub",
          heading: "Termination and effect",
          text:
            "Either party may terminate for the other's uncured material breach. " +
            "On termination, the Customer's right to use the Platform ends, accrued " +
            "fees remain payable, and each party will return or delete the other's " +
            "confidential information on request, subject to law and to Customer " +
            "Data handling in the Privacy Policy and DPA. Sections that by their " +
            "nature should survive will survive.",
        },
      ],
    },
    {
      n: 14,
      title: "Dispute resolution; governing law",
      blocks: [
        {
          kind: "sub",
          heading: "Governing law",
          text:
            `The Agreement is governed by the laws of the ${GOVERNING_LAW}, ` +
            `excluding its conflict-of-laws rules and the U.N. Convention on ` +
            `Contracts for the International Sale of Goods.`,
        },
        {
          kind: "sub",
          heading: "Informal resolution",
          text:
            "Before starting a formal proceeding, the parties will try in good " +
            "faith to resolve any dispute for thirty (30) days after written " +
            "notice.",
        },
        {
          kind: "sub",
          heading: "Arbitration and class waiver",
          text:
            "Any dispute not resolved informally will be finally settled by " +
            "binding arbitration on an individual basis; the parties waive any " +
            "right to a jury trial and to participate in a class or representative " +
            "action, to the extent permitted by law. Either party may seek " +
            "injunctive relief for intellectual-property or confidentiality " +
            "matters in court. [Counsel to confirm arbitral forum, rules, seat, and " +
            "any consumer/employment carve-outs.]",
        },
      ],
    },
    {
      n: 15,
      title: "Changes to these Terms",
      blocks: [
        {
          kind: "p",
          text:
            "We may update these Terms from time to time. The current version and " +
            "its effective date are shown at the top of this page, and prior " +
            "versions are available in the Legal Updates archive. For material " +
            "changes we will provide reasonable advance notice; continued use after " +
            "the changes take effect constitutes acceptance. No change applies " +
            "retroactively to obligations already accrued.",
        },
      ],
    },
    {
      n: 16,
      title: "General",
      blocks: [
        {
          kind: "sub",
          heading: "Entire agreement; order of precedence",
          text:
            "The Agreement is the entire agreement on its subject and supersedes " +
            "prior discussions. If there is a conflict, the order of precedence is: " +
            "an executed order form or recruiting services agreement, any accepted " +
            "Fee Terms and the Fee Schedule (for billing), " +
            "these Terms, and then the incorporated policies — except where a " +
            "document expressly overrides a specific provision.",
        },
        {
          kind: "sub",
          heading: "Assignment; miscellaneous",
          text:
            "The Customer may not assign the Agreement without our consent; we may " +
            "assign it to an affiliate or in a merger or asset sale. If any " +
            "provision is unenforceable it will be limited or severed and the rest " +
            "remains in effect. A failure to enforce is not a waiver. Notices to us " +
            `may be sent to ${LEGAL_CONTACTS.legal}. There are no third-party ` +
            "beneficiaries.",
        },
      ],
    },
    {
      n: 17,
      title: "Contact",
      blocks: [
        {
          kind: "p",
          text: `Questions about these Terms: ${LEGAL_CONTACTS.legal}.`,
        },
      ],
    },
  ],
  colophon:
    "These Terms, together with the Fee Schedule, the Acceptable Use Policy, the " +
    "Privacy Policy, the Data Processing Addendum, any order form, and any Fee " +
    "Terms or recruiting services agreement the Customer has accepted or signed, " +
    "form the entire Agreement.",
};
