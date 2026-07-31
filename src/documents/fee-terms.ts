// =============================================================
// NeoWork Platform Fee Terms — canonical customer-facing contract text.
//
// This is the plain-English contract rendered at /legal/fee-terms. It mirrors
// the counsel-review draft in docs/billing/tos-billing-terms.md and the billing
// canon in docs/billing/stripe-setup-plan.md (two money lines: a 15% placement
// success fee per accepted hire, and cost-metered usage credits).
//
// The clauses below were hardened against a July 2026 legal-research pass
// (clickwrap enforceability, recruiting/placement-fee mechanics, AI-hiring
// compliance allocation, and prepaid-credit / SaaS protective terms). It is a
// rigorous drafting baseline, NOT a substitute for sign-off by licensed counsel.
//
// IMPORTANT — no credit↔USD rate is stated in this document. The credit unit
// value and all specific prices live in the Fee Schedule (Section 4), surfaced
// on the plan-selection and checkout screens where a purchase actually happens.
// This keeps the contract free of usage-rate conversions while still binding the
// pricing by reference — the standard Fee-Schedule pattern.
//
// The version string is FEE_TERMS_VERSION, below. It moved here from the
// product's src/lib/billing/terms-version.ts when this text was extracted
// (2026-07-28): the version identifies THIS document, it is hashed together
// with this document's wording at every acceptance, and a version that lives in
// a different repo from the text it names is a version that can drift from it.
// The product now re-exports it, so every existing importer is unchanged.
// Bumping it forces re-acceptance and must accompany any material edit below.
// =============================================================

import type { LegalDocument } from "../model.js";

/** Current fee-terms version (clickwrap). Bumping forces every org to
 *  re-accept — `rpc_has_accepted_terms` is keyed per version. CLIENT-SAFE. */
export const FEE_TERMS_VERSION = "2026-07-03";

/** One rendered block inside a section. */
export type TermsBlock =
  | { kind: "p"; text: string }
  | { kind: "def"; term: string; text: string }
  | { kind: "sub"; heading: string; text: string }
  | { kind: "list"; items: string[] };

export interface TermsSection {
  /** 1-based clause number, shown as the section heading prefix. */
  n: number;
  title: string;
  blocks: TermsBlock[];
}

/** Human-readable effective date for the current version. Kept next to the
 *  version constant so the two move together. */
export const TERMS_EFFECTIVE_DATE = "July 3, 2026";

/** Contracting entity + governing law, surfaced in the masthead and Section 12. */
export const CONTRACTING_ENTITY = "Emergences AI, Inc.";
export const GOVERNING_LAW = "State of Delaware";

/** The single written-notice / billing-contact channel named in the contract
 *  (Notices, Section 12) and the closing colophon. Unified with the rest of the
 *  legal suite onto the single monitored company inbox (operator decision). */
export const NEOWORK_CONTACT_EMAIL = "contact@emergences.ai";

/** Conspicuous top-of-document assent recital, shown as an emphasized callout
 *  between the preamble and the numbered clauses so the reader meets the
 *  acceptance framing up front (not only at the foot). Rendered with the
 *  leading "PLEASE READ THESE FEE TERMS CAREFULLY." set apart. */
export const TERMS_ASSENT_NOTICE =
  `PLEASE READ THESE FEE TERMS CAREFULLY. By checking the acceptance box and ` +
  `clicking “I agree” on this page — and, where acceptance is required to ` +
  `continue, by accessing or using the Platform — the Customer agrees to be ` +
  `bound by these Fee Terms, the Fee Schedule, and the Terms of Service, which ` +
  `together form the Agreement. If the Customer does not agree to these Fee ` +
  `Terms, or if the individual acting does not have authority to bind the ` +
  `Customer, do not accept them and do not use the Platform.`;

/** Lead paragraph shown under the masthead, before the numbered clauses. */
export const TERMS_PREAMBLE =
  `These NeoWork Platform Fee Terms (the “Fee Terms”) form part of the NeoWork ` +
  `Terms of Service (together with the Fee Schedule and any order form, the ` +
  `“Agreement”) between ${CONTRACTING_ENTITY} (“NeoWork”, “we”, “us”) and the ` +
  `customer organization that accepts them (“Customer”, “you”). They describe ` +
  `how NeoWork charges for use of the NeoWork platform (the “Platform”). ` +
  `Specific prices, rates, and amounts are set out in the Fee Schedule ` +
  `referenced in Section 4 and shown on the Platform’s plan-selection and ` +
  `checkout screens; the Fee Schedule forms part of these Fee Terms. Capitalized ` +
  `terms used but not defined here have the meanings given in the Agreement.`;

export const TERMS_SECTIONS: TermsSection[] = [
  {
    n: 1,
    title: "Definitions",
    blocks: [
      {
        kind: "def",
        term: "Sourced Candidate",
        text:
          "a candidate whom the Customer evaluated, assessed, or was surfaced " +
          "through the Platform.",
      },
      {
        kind: "def",
        term: "Accepted Offer",
        text:
          "an offer of employment or engagement extended by the Customer to a " +
          "Sourced Candidate that the candidate accepts. An offer is accepted " +
          "upon the earlier of (a) the candidate’s written acceptance (including " +
          "electronic signature of an offer letter) or (b) the Customer’s written " +
          "confirmation to NeoWork that the offer has been accepted. An Accepted " +
          "Offer occurs at the moment of acceptance, not when the offer is " +
          "extended and not when employment begins.",
      },
      {
        kind: "def",
        term: "Qualified Hire",
        text:
          "a Sourced Candidate who receives an Accepted Offer, engaged in any " +
          "capacity (including as an employee, contractor, or consultant).",
      },
      {
        kind: "def",
        term: "First-Year Base Salary",
        text:
          "the annualized gross base salary stated in the Accepted Offer for the " +
          "first twelve (12) months of employment, denominated in U.S. dollars, " +
          "excluding bonuses, equity, commissions, and benefits. For contract or " +
          "contractor engagements, it means the total agreed remuneration for the " +
          "first twelve (12) months of the engagement.",
      },
      {
        kind: "def",
        term: "Success Fee",
        text: "the placement fee described in Section 2.",
      },
      {
        kind: "def",
        term: "Usage Credits (or Credits)",
        text:
          "the prepaid unit in which Platform usage is metered, as described in " +
          "Section 5.",
      },
      {
        kind: "def",
        term: "Subscription",
        text: "a paid platform plan under Section 4.",
      },
      {
        kind: "def",
        term: "Fee Schedule",
        text:
          "NeoWork’s then-current schedule of prices and rates, made available on " +
          "the Platform’s plan-selection and checkout screens, which forms part of " +
          "these Fee Terms.",
      },
    ],
  },
  {
    n: 2,
    title: "Placement Success Fee",
    blocks: [
      {
        kind: "p",
        text:
          "For every Qualified Hire — with no cap on the number of hires — the " +
          "Customer shall pay NeoWork a Success Fee equal to fifteen percent " +
          "(15%) of the First-Year Base Salary of the Accepted Offer, calculated " +
          "on the actual Accepted Offer at the time of confirmation (and not on " +
          "any planned or advertised salary entered when the role was created).",
      },
      {
        kind: "sub",
        heading: "When earned",
        text:
          "The Success Fee is fully earned at the moment of the Accepted Offer. " +
          "It is not contingent on the candidate’s start date or continued " +
          "employment, subject only to the Revocation Window (Section 6) and the " +
          "Guarantee (Section 9), which are the sole exceptions.",
      },
      {
        kind: "sub",
        heading: "Per individual, any role",
        text:
          "The Success Fee attaches to each hired individual and never to a job " +
          "posting or role: opening or listing a role is free; a role that fills " +
          "two seats incurs two Success Fees; a role that fills none incurs none. " +
          "A separate Success Fee is earned for each Qualified Hire regardless of " +
          "the position, title, department, or capacity in which the individual " +
          "is ultimately engaged. No Success Fee is due for candidates who are " +
          "evaluated but not hired.",
      },
      {
        kind: "p",
        text:
          "Each Success Fee, once paid, includes a bonus of Usage Credits added " +
          "to the Customer’s account. " +
          "The Success Fee applies whether or not the Customer holds a " +
          "Subscription and whether or not the Customer is in an " +
          "onboarding-exemption period (Section 5); an exemption waives usage " +
          "charges only and never the Success Fee.",
      },
    ],
  },
  {
    n: 3,
    title: "Billing Trigger; Records",
    blocks: [
      {
        kind: "p",
        text:
          "The Customer confirms a Qualified Hire by taking the “Mark as Hired” " +
          "action on the Platform. This action constitutes the Customer’s binding " +
          "confirmation that the candidate has accepted the offer and is the sole " +
          "event that triggers a Success Fee under Section 2. Assessment-stage " +
          "actions (such as Approve, Waitlist, or Decline) are workflow signals " +
          "only and never trigger any fee.",
      },
      {
        kind: "p",
        text:
          "When taking the Mark as Hired action, the Customer must enter the " +
          "First-Year Base Salary of the Accepted Offer; this figure is the basis " +
          "for the Success Fee. NeoWork records the timestamp, the acting user, " +
          "and the entered salary as evidence of the confirmation.",
      },
    ],
  },
  {
    n: 4,
    title: "Subscription Plans",
    blocks: [
      {
        kind: "p",
        text:
          "A Subscription unlocks Platform features by tier: each tier provides " +
          "its feature set, and a higher tier unlocks more capability. A " +
          "Subscription does not include Usage Credits — Credits are obtained as " +
          "described in Section 5.",
      },
      {
        kind: "p",
        text:
          "Subscriptions are independent of hiring outcomes — no hire triggers, " +
          "changes, or is required for a Subscription, and the Success Fee in " +
          "Section 2 is a separate charge. The Customer may subscribe to one of " +
          "three tiers — Starter, Growth, or Enterprise — at the rates set out in " +
          "the Fee Schedule; a tier paid annually in a single upfront payment " +
          "receives a discount versus the monthly rate. Enterprise terms are " +
          "established by separate order. Current rates are stated in the Fee " +
          "Schedule, which forms part of these Fee Terms.",
      },
    ],
  },
  {
    n: 5,
    title: "Usage Credits; Onboarding Exemption",
    blocks: [
      {
        kind: "p",
        text:
          "Platform usage — including assessments, evaluation reports, and AI " +
          "workforce-agent work — is metered in Usage Credits, and the Credit cost " +
          "of an action reflects its underlying compute. There is no limit on the " +
          "number of assessments the Customer may run. Each organization receives " +
          "a one-time allowance of Usage Credits when it first registers, usable " +
          "without a Subscription. Additional Credits are prepaid: they are " +
          "purchased in Credit packs at the prices stated in the Fee Schedule, and " +
          "any organization may buy them without a Subscription. A Subscription " +
          "does not include Usage Credits. When the Credit balance reaches zero, " +
          "the Platform will not produce further reports until additional Credits " +
          "are obtained.",
      },
      {
        kind: "sub",
        heading: "Nature of Credits",
        text:
          "Usage Credits have no cash value, are redeemable solely for Platform " +
          "usage, and are non-transferable. Credits are not a deposit, a " +
          "stored-value account, or a gift card redeemable for cash, and they do " +
          "not expire. Credits themselves are non-refundable; where the Guarantee " +
          "in Section 9 provides a refund of a Success Fee, that refund may, at " +
          "the Customer’s election, be paid in Credits. Nothing in this Section " +
          "limits any right or obligation arising under applicable " +
          "unclaimed-property (escheat) law, which governs notwithstanding the " +
          "foregoing.",
      },
      {
        kind: "sub",
        heading: "Onboarding exemption",
        text:
          "NeoWork may, in its discretion, grant the Customer a time-limited " +
          "onboarding-exemption period during which Platform usage is not charged. " +
          "The exemption affects usage charges only; the Success Fee (Section 2) " +
          "remains fully payable. This Section operates independently of the " +
          "Success Fee: purchasing or receiving Credits does not reduce, replace, " +
          "or offset any Success Fee, and vice versa.",
      },
    ],
  },
  {
    n: 6,
    title: "Revocation Window",
    blocks: [
      {
        kind: "p",
        text:
          "The Customer may revoke a Mark as Hired confirmation within seven (7) " +
          "days of the confirmation — for example, where the confirmation was made " +
          "in error, the candidate revoked acceptance, or the candidate failed to " +
          "commence employment on the agreed start date. Upon timely revocation, " +
          "the corresponding Success Fee is fully rolled back: an unpaid invoice " +
          "is voided, and a paid invoice is credited or refunded in full.",
      },
    ],
  },
  {
    n: 7,
    title: "Attribution; Pre-Existing Candidates",
    blocks: [
      {
        kind: "sub",
        heading: "Pre-existing-candidate exclusion",
        text:
          "No Success Fee is due for a candidate who, within the fourteen (14) " +
          "days immediately before NeoWork first surfaced that candidate to the " +
          "Customer, was already actively engaged in the Customer’s own recruiting " +
          "process for the same or a substantially similar position (that is, the " +
          "candidate had already applied, been interviewed, or been scheduled to " +
          "interview for that role). To claim this exclusion, the Customer must " +
          "notify NeoWork in writing within fourteen (14) days of the Mark as " +
          "Hired confirmation and provide reasonable supporting evidence (such as " +
          "a dated application, applicant-tracking record, or interview " +
          "correspondence predating the NeoWork evaluation). Merely holding a " +
          "candidate’s resume, or prior contact unrelated to the role, does not " +
          "qualify, and failure to give timely, documented notice waives the " +
          "exclusion.",
      },
      {
        kind: "sub",
        heading: "Evidence",
        text:
          "NeoWork’s platform records — including time-stamped candidate " +
          "submissions and assessments — are evidence of the date NeoWork " +
          "surfaced a candidate to the Customer, which determines the " +
          "pre-existing-candidate window above.",
      },
    ],
  },
  {
    n: 8,
    title: "Payment Terms",
    blocks: [
      {
        kind: "p",
        text:
          "Success Fee invoices are issued upon Mark as Hired and are payable " +
          "within thirty (30) days of the offer-acceptance confirmation (net 30) " +
          "by the payment methods stated on the invoice. Subscription fees and " +
          "Credit-pack purchases are charged as stated in the Fee Schedule. Except " +
          "as expressly stated in these Fee Terms, all Fees are non-cancelable and " +
          "non-refundable; subscription fees and prepaid Credit purchases are due " +
          "and payable in advance and are not contingent on the Customer’s actual " +
          "usage. All amounts are in U.S. dollars.",
      },
      {
        kind: "sub",
        heading: "Late payment",
        text:
          "Overdue amounts accrue interest at the lesser of one and one-half " +
          "percent (1.5%) per month or the maximum rate permitted by applicable " +
          "law, from the due date until paid, and the Customer will reimburse " +
          "NeoWork’s reasonable costs of collection, including reasonable " +
          "attorneys’ fees. The parties agree this charge is a reasonable estimate " +
          "of the costs of late payment and is not a penalty. NeoWork may suspend " +
          "the Customer’s ability to run new assessments and to confirm new hires " +
          "while any invoice remains more than forty-five (45) days past due.",
      },
      {
        kind: "sub",
        heading: "Payment method on file",
        text:
          "The Customer shall keep a valid payment method on file and authorizes " +
          "NeoWork to charge it for any amount more than thirty (30) days overdue, " +
          "after notice to the Customer’s billing contact.",
      },
      {
        kind: "sub",
        heading: "Taxes",
        text:
          "All Fees are exclusive of all taxes, levies, duties, or similar " +
          "governmental assessments, including value-added, sales, use, GST, and " +
          "withholding taxes (collectively, “Taxes”). The Customer is responsible " +
          "for all Taxes associated with its purchases, except Taxes based on " +
          "NeoWork’s net income, property, or employees. If NeoWork is legally " +
          "obligated to collect or pay Taxes for which the Customer is " +
          "responsible, NeoWork will invoice the Customer, and the Customer will " +
          "pay that amount unless it provides a valid tax-exemption certificate. " +
          "If any Taxes must be withheld, the Customer will gross up its payment " +
          "so that NeoWork receives the full amount invoiced.",
      },
    ],
  },
  {
    n: 9,
    title: "Guarantee",
    blocks: [
      {
        kind: "p",
        text:
          "If a Qualified Hire’s employment ends — because the individual " +
          "voluntarily resigns or is terminated by the Customer for cause — within " +
          "ninety (90) days of the start date, NeoWork will refund the Success Fee " +
          "paid for that hire in full, subject to the conditions below. The refund " +
          "is made, at the Customer’s election, either as a cash refund to the " +
          "original payment method or as an equivalent value of Usage Credits.",
      },
      {
        kind: "sub",
        heading: "Notification",
        text:
          "Because the separation occurs outside the Platform, the Customer must " +
          "notify NeoWork within fourteen (14) days of the hire’s last day of " +
          "employment to claim this guarantee. Claims made after this period are " +
          "waived.",
      },
      {
        kind: "sub",
        heading: "Exclusions",
        text:
          "The guarantee is tied to the departure of the individual and does not " +
          "apply where the separation results from: a layoff, reduction in force, " +
          "restructuring, or elimination of the role; the Customer’s breach of the " +
          "Agreement (including any unpaid or overdue invoice); a change in the " +
          "Customer’s business conditions; the individual’s death or disability; " +
          "or any cause other than the individual’s voluntary resignation or " +
          "termination for cause. The guarantee applies once per placement.",
      },
    ],
  },
  {
    n: 10,
    title: "AI Assessment; Roles and Responsibilities",
    blocks: [
      {
        kind: "sub",
        heading: "Nature of the Platform",
        text:
          "The Platform uses artificial intelligence and automated processes to " +
          "evaluate candidates through real-world challenges and to produce " +
          "descriptive assessment reports. The Platform is a decision-support " +
          "tool: it does not make hiring decisions, does not label candidates as " +
          "“hire” or “no-hire”, and describes a candidate’s demonstrated level " +
          "objectively. The Customer alone decides whom to interview, advance, " +
          "hire, or reject.",
      },
      {
        kind: "sub",
        heading: "Customer as employer and deployer; human review",
        text:
          "The Customer is the employer or employment agency for every candidate " +
          "it evaluates through the Platform and is the sole decision-maker for " +
          "all employment decisions. The Platform’s assessments, scores, and " +
          "reports are an informational input only and must not be used to make " +
          "any employment decision automatically or as the sole basis for a " +
          "decision. The Customer will apply meaningful human review to every " +
          "decision and exercise independent judgment. As between the parties, " +
          "NeoWork acts as the provider or developer of the Platform, and the " +
          "Customer acts as the deployer that determines the purpose and manner of " +
          "its use.",
      },
      {
        kind: "sub",
        heading: "Compliance with employment and AI laws",
        text:
          "As between the parties, the Customer is responsible for compliance " +
          "with all laws applicable to its use of the Platform, including Title " +
          "VII of the Civil Rights Act, the Americans with Disabilities Act, the " +
          "Age Discrimination in Employment Act, and applicable state and local " +
          "automated-employment-decision and AI laws (such as, where applicable, " +
          "NYC Local Law 144, the Illinois Human Rights Act and Artificial " +
          "Intelligence Video Interview Act, the California Fair Employment and " +
          "Housing Act automated-decision-system regulations, and the Colorado AI " +
          "Act, each as amended). This includes providing any required notice " +
          "that AI or an automated tool is used; obtaining any required candidate " +
          "consent (including written consent before analyzing any recorded video " +
          "interview); arranging any required independent bias audit or impact " +
          "assessment and any required public posting; monitoring its own " +
          "selection outcomes for adverse or disparate impact; providing " +
          "reasonable accommodations and an alternative selection process on " +
          "request; refraining from prohibited inputs (such as using ZIP code as a " +
          "proxy for a protected characteristic); and retaining records for the " +
          "periods applicable law requires. NeoWork will provide reasonable " +
          "documentation about the Platform, and bias-audit materials where " +
          "NeoWork has commissioned an audit, to support the Customer’s " +
          "compliance, but NeoWork does not thereby assume the Customer’s legal " +
          "obligations and does not act as the Customer’s independent auditor.",
      },
      {
        kind: "sub",
        heading: "No guarantee of outcomes; not legal advice",
        text:
          "The Platform and its assessments, scores, and reports are provided on " +
          "an “as is” and “as available” basis. NeoWork does not guarantee any " +
          "hiring, retention, or business outcome and does not warrant that the " +
          "Platform or its outputs are accurate, complete, unbiased, or compliant " +
          "with the laws applicable to the Customer’s particular use. NeoWork’s " +
          "materials, assessments, and reports are not legal advice; the Customer " +
          "is responsible for obtaining its own legal counsel regarding lawful use " +
          "of the Platform in its jurisdictions.",
      },
      {
        kind: "sub",
        heading: "Customer indemnification",
        text:
          "The Customer will defend, indemnify, and hold harmless NeoWork from any " +
          "third-party claim, and any resulting loss or penalty, arising out of or " +
          "relating to (a) the Customer’s employment decisions; (b) the Customer’s " +
          "use of the Platform in violation of the Agreement or applicable law; or " +
          "(c) the Customer’s failure to provide any required notice, consent, " +
          "accommodation, bias audit, or posting. This obligation survives " +
          "termination and is subject to the limitations of liability in the " +
          "Terms of Service.",
      },
    ],
  },
  {
    n: 11,
    title: "Acceptance; Authority; Changes; Records",
    blocks: [
      {
        kind: "sub",
        heading: "Authority to bind",
        text:
          "Acceptance is given as described in Section 13. By accepting, the " +
          "acting user represents and warrants that they are the owner or an " +
          "authorized administrator of the Customer organization and have " +
          "authority to bind it. NeoWork is entitled to rely on this " +
          "representation, and the accepting individual is personally responsible " +
          "for any breach of it. A user who lacks such authority must not accept " +
          "these Fee Terms.",
      },
      {
        kind: "sub",
        heading: "Changes to these Fee Terms",
        text:
          "NeoWork may update these Fee Terms from time to time. The current " +
          "version is always available at this page and identified by its version " +
          "number, and for material changes NeoWork will provide reasonable advance " +
          "notice (for example, by notice within the Platform or by email to the " +
          "account administrator). The Customer accepts an updated version by " +
          "affirmatively agreeing at the next clickwrap prompt, or by continuing to " +
          "use the Platform after the update takes effect. If the Customer does not " +
          "agree to an update, its remedy is to stop using the paid Services and " +
          "cancel its Subscription. No change applies retroactively to obligations " +
          "already accrued (including any Success Fee already earned).",
      },
      {
        kind: "sub",
        heading: "Records",
        text:
          "NeoWork retains the accepting user, the acceptance timestamp, the " +
          "version of the Fee Terms accepted, and a cryptographic fingerprint " +
          "(hash) of the accepted text for that version as evidence of acceptance.",
      },
    ],
  },
  {
    n: 12,
    title: "General Provisions",
    blocks: [
      {
        kind: "sub",
        heading: "Order of precedence",
        text:
          "To the extent of any conflict, the following order of precedence " +
          "applies: (1) an executed order form; (2) the Fee Schedule; (3) these " +
          "Fee Terms; (4) the NeoWork Terms of Service; and (5) the Privacy " +
          "Policy — except that a lower-ranked document controls to the extent it " +
          "expressly states that it overrides a specific provision of a " +
          "higher-ranked document.",
      },
      {
        kind: "sub",
        heading: "Entire agreement",
        text:
          "These Fee Terms, together with the Fee Schedule, any executed order " +
          "form, and the Terms of Service and Privacy Policy incorporated by " +
          "reference, are the entire agreement between the Customer and NeoWork " +
          "regarding Platform fees and billing, and supersede all prior or " +
          "contemporaneous proposals, quotes, discussions, and representations on " +
          "that subject. No term of any purchase order or other Customer-issued " +
          "document has any effect, even if NeoWork accepts or does not object to " +
          "it. Except for changes NeoWork makes under Section 11, any amendment " +
          "must be in a writing that NeoWork agrees to.",
      },
      {
        kind: "sub",
        heading: "Assignment",
        text:
          "The Customer may not assign or transfer these Fee Terms or the " +
          "Agreement, in whole or in part, by operation of law or otherwise, " +
          "without NeoWork’s prior written consent; any attempted assignment " +
          "without that consent is void. NeoWork may assign these Fee Terms to an " +
          "affiliate or in connection with a merger, acquisition, reorganization, " +
          "or sale of all or substantially all of its assets. These Fee Terms bind " +
          "and benefit the parties and their permitted successors and assigns. A " +
          "change of control of the Customer does not release any Success Fee or " +
          "other Fee already earned or accrued.",
      },
      {
        kind: "sub",
        heading: "Notices",
        text:
          "Except where these Fee Terms specify a particular in-Platform action, " +
          "any notice the Customer must give NeoWork — including a revocation " +
          "under Section 6, a pre-existing-candidate exclusion claim under " +
          "Section 7, a guarantee claim under Section 9, a rejection of changed " +
          `terms under Section 11, or any billing question or dispute — must be in ` +
          `writing and sent to NeoWork at ${NEOWORK_CONTACT_EMAIL} (or to any ` +
          "billing or legal contact address NeoWork later designates in the " +
          "Platform or on an invoice), and is effective when NeoWork receives it. " +
          "A notice asserting a time-limited right under Sections 6, 7, or 9 must " +
          "be received within the applicable window to be effective. NeoWork gives " +
          "notices to the Customer by email to the account administrator or by " +
          "notice within the Platform, each effective when sent.",
      },
      {
        kind: "sub",
        heading: "Disclaimers, liability, and indemnities",
        text:
          "The warranty disclaimers, limitation of liability, and NeoWork’s " +
          "indemnities set out in the Terms of Service apply to these Fee Terms " +
          "and are incorporated by reference. Except as expressly stated here, the " +
          "Platform is provided without warranties of any kind to the maximum " +
          "extent permitted by law.",
      },
      {
        kind: "sub",
        heading: "Severability; no waiver",
        text:
          "If any provision of these Fee Terms is held unenforceable, that " +
          "provision will be limited or severed to the minimum extent necessary " +
          "and the remaining provisions remain in full force. NeoWork’s failure to " +
          "enforce any right or provision is not a waiver of that or any other " +
          "right.",
      },
      {
        kind: "sub",
        heading: "Governing law; contracting entity",
        text:
          `These Fee Terms are governed by the laws of the ${GOVERNING_LAW}, ` +
          `excluding its conflict-of-laws rules. The contracting entity is ` +
          `${CONTRACTING_ENTITY}. These Fee Terms form part of, and are subject ` +
          `to, the NeoWork Terms of Service and Privacy Policy, which govern ` +
          `dispute resolution and all other terms of the Agreement.`,
      },
    ],
  },
  {
    n: 13,
    title: "Acceptance and Electronic Signature",
    blocks: [
      {
        kind: "sub",
        heading: "How assent is given; who is bound; when effective",
        text:
          "The Customer accepts these Fee Terms electronically by checking the " +
          "acceptance box and clicking “I agree” on this page. That action binds " +
          "the Customer organization on whose behalf the accepting individual " +
          "acts, takes effect at the moment it is completed, and forms a contract " +
          "between the Customer and NeoWork consisting of these Fee Terms, the Fee " +
          "Schedule, and the Terms of Service. NeoWork records the accepting user, " +
          "the date and time of acceptance, and the version accepted (Section 11), " +
          "and that record is conclusive evidence of the Customer’s acceptance " +
          "absent manifest error.",
      },
      {
        kind: "sub",
        heading: "Electronic acceptance and signatures",
        text:
          "The Customer consents to transact electronically and agrees that its " +
          "click of “I agree” is an electronic signature having the same legal " +
          "force and effect as a handwritten signature, and that these Fee Terms, " +
          "once accepted, are an electronic record enforceable under the U.S. " +
          "Electronic Signatures in Global and National Commerce Act (E-SIGN), the " +
          "Uniform Electronic Transactions Act (UETA), and any comparable law. " +
          "Where the Customer and NeoWork instead execute an order form, it may be " +
          "signed electronically and in one or more counterparts, each of which is " +
          "an original and all of which together constitute one instrument. " +
          "NeoWork may deliver invoices, receipts, and notices under these Fee " +
          "Terms electronically.",
      },
      {
        kind: "sub",
        heading: "Effective date; continuing effect; survival",
        text:
          `These Fee Terms are version ${FEE_TERMS_VERSION} and are effective ` +
          `${TERMS_EFFECTIVE_DATE}. Once accepted, they remain in effect and bind ` +
          "the Customer for so long as the Customer uses the Platform or any Fee " +
          "remains payable, until superseded by a later version accepted or made " +
          "effective under Section 11. Provisions that by their nature should " +
          "survive — including any accrued payment obligation, the Customer " +
          "indemnity (Section 10), and Sections 8, 11, and 12 — survive " +
          "termination or expiration of the Agreement.",
      },
    ],
  },
];

// =============================================================
// Fee Terms as a LegalDocument.
//
// A WRAPPER, deliberately — it points at TERMS_PREAMBLE and TERMS_SECTIONS
// rather than re-authoring them. The consumer's `feeTermsHash()` serializes
// JSON.stringify({version, preamble, sections}) and stores the digest in
// `terms_acceptances.terms_hash` for every org that has accepted. That digest
// depends on key INSERTION ORDER as literally authored above, so re-typing the
// section literals into "proper" LegalSections would risk changing the
// fingerprint of a contract people have already signed. Referencing the same
// objects cannot: they are the same objects. integrity.test.ts proves it by
// pinning the pre-extraction hash.
//
// Why bother: Fee Terms is the one document with legal evidence attached and
// was the one document no structural check covered.
// =============================================================

/** Fee Terms in the shared document model. BOTH surfaces render from this since
 *  2026-07-31 — the published page on the legal site and the product's
 *  acceptance page, whose hand-rolled copy of the renderer was deleted. That
 *  copy had drifted: it carried a plain-language summary the published document
 *  did not, so one contract said different things at its two addresses. */
export const FEE_TERMS_DOC: LegalDocument = {
  slug: "fee-terms",
  scope: "neowork",
  title: "Fee Terms",
  description:
    "How NeoWork charges: a 15% placement success fee per accepted hire and " +
    "usage credits for platform usage, with revoke, guarantee, and attribution " +
    "protections.",
  version: FEE_TERMS_VERSION,
  effectiveDate: TERMS_EFFECTIVE_DATE,
  preamble: TERMS_PREAMBLE,
  sections: TERMS_SECTIONS,
  notice: { label: "Acceptance", text: TERMS_ASSENT_NOTICE },
  // Non-binding orientation, lifted from the product page it used to live on.
  // The credits point is REWRITTEN: it said usage credits were "included
  // monthly with a subscription", which the 2026-07-05 billing reform retired.
  // Subscriptions grant zero credits, the only free allowance is a one-time
  // signup trial, and paid credits come from prepaid packs — so that sentence
  // was a false pricing statement sitting on the page where a customer accepts
  // the fee. Nothing here reaches feeTermsHash(), which digests version,
  // preamble and sections only.
  summary: [
    {
      label: "Usage credits",
      text:
        "Platform usage is metered in prepaid credits. New organizations start " +
        "with a one-time trial allowance; after that you buy credit packs. " +
        "Prices are on your plan and checkout screens.",
    },
    {
      label: "15% placement fee",
      text:
        "When a candidate you sourced through NeoWork accepts an offer, we " +
        "invoice 15% of their first-year base salary, net 30. It applies to " +
        "every hire.",
    },
    {
      label: "Your protections",
      text:
        "7-day revoke if an accepted offer falls through, a 90-day leave " +
        "guarantee (full refund), and a 14-day attribution window.",
    },
  ],
  colophon:
    "These Fee Terms, the Fee Schedule, and the Terms of Service together form " +
    "the Agreement. When we make material changes we will update the version " +
    "and notify subscribed organizations before the changes take effect.",
};
