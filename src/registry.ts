// =============================================================
// Registry of NeoWork legal & trust documents — the single source of truth for
// the /legal index and the global footer, so a document only has to be listed
// once. Flip `status` to "live" as each page ships; the index links live docs
// and shows planned ones as "in preparation", and the footer surfaces only live
// docs.
// =============================================================

export type LegalDocStatus = "live" | "planned";

export type LegalCategory =
  | "agreements"
  | "privacy"
  | "ai-transparency"
  | "trust"
  | "company";

export interface LegalRegistryEntry {
  slug: string;
  /** Absolute in-app path. Most live under /legal; trust docs under /trust. */
  href: string;
  title: string;
  blurb: string;
  status: LegalDocStatus;
  category: LegalCategory;
  /** Show in the compact global footer (a curated subset). */
  footer?: boolean;
}

export const LEGAL_CATEGORY_LABELS: Record<LegalCategory, string> = {
  agreements: "Agreements",
  privacy: "Privacy & data",
  "ai-transparency": "AI & candidates",
  trust: "Security & trust",
  company: "Company",
};

export const LEGAL_REGISTRY: LegalRegistryEntry[] = [
  // ---- Agreements ----
  {
    slug: "terms",
    href: "/legal/terms",
    title: "Terms of Service",
    blurb: "The master agreement governing use of the platform.",
    status: "live",
    category: "agreements",
    footer: true,
  },
  {
    slug: "fee-terms",
    href: "/legal/fee-terms",
    title: "Fee Terms",
    blurb: "How we charge: the placement fee and usage credits.",
    status: "live",
    category: "agreements",
    footer: true,
  },
  {
    slug: "acceptable-use",
    href: "/legal/acceptable-use",
    title: "Acceptable Use Policy",
    blurb: "What you may and may not do on the platform.",
    status: "live",
    category: "agreements",
  },
  {
    slug: "fee-schedule",
    href: "/legal/fee-schedule",
    title: "Fee Schedule",
    blurb: "Current plans, credit packs, and the placement fee.",
    status: "live",
    category: "agreements",
  },
  {
    slug: "refunds",
    href: "/legal/refunds",
    title: "Refunds & Cancellation",
    blurb: "Cancellation, prepaid credits, and refunds.",
    status: "live",
    category: "agreements",
  },
  // ---- Privacy & data ----
  {
    slug: "privacy",
    href: "/legal/privacy",
    title: "Privacy Policy",
    blurb: "How we collect, use, share, and protect personal data.",
    status: "live",
    category: "privacy",
    footer: true,
  },
  {
    slug: "cookies",
    href: "/legal/cookies",
    title: "Cookie Policy",
    blurb: "The cookies we use and how to manage them.",
    status: "live",
    category: "privacy",
    footer: true,
  },
  {
    slug: "dpa",
    href: "/legal/dpa",
    title: "Data Processing Addendum",
    blurb: "Our processor commitments and transfer safeguards.",
    status: "live",
    category: "privacy",
  },
  {
    slug: "subprocessors",
    href: "/legal/subprocessors",
    title: "Sub-processors",
    blurb: "The third parties that process data, and change notices.",
    status: "live",
    category: "privacy",
  },
  {
    slug: "data-retention",
    href: "/legal/data-retention",
    title: "Data Retention & Deletion",
    blurb: "How long we keep data and when we delete it.",
    status: "live",
    category: "privacy",
  },
  {
    slug: "do-not-sell",
    href: "/legal/do-not-sell",
    title: "Your Privacy Choices",
    blurb: "Do-not-sell/share and Global Privacy Control.",
    status: "live",
    category: "privacy",
    footer: true,
  },
  // ---- AI & candidates ----
  {
    slug: "candidate-privacy",
    href: "/legal/candidate-privacy",
    title: "Candidate Privacy Notice",
    blurb: "For candidates: what we collect and your rights.",
    status: "live",
    category: "ai-transparency",
  },
  {
    slug: "arena-terms",
    href: "/legal/arena-terms",
    title: "Arena Assessment Terms",
    blurb: "For public takers: what starting an Arena assessment means.",
    status: "live",
    category: "ai-transparency",
  },
  {
    slug: "candidate-rights",
    href: "/trust/candidate-rights",
    title: "Candidate Bill of Rights",
    blurb: "What every candidate can expect from an AI evaluation.",
    status: "live",
    category: "ai-transparency",
  },
  {
    slug: "responsible-ai",
    href: "/trust/responsible-ai",
    title: "Responsible AI",
    blurb: "How we govern model risk, bias, and human oversight.",
    status: "live",
    category: "ai-transparency",
  },
  {
    slug: "model-card",
    href: "/trust/model-card",
    title: "Assessment Model Card",
    blurb: "Intended use, inputs, limits, and oversight of the model.",
    status: "live",
    category: "ai-transparency",
  },
  {
    slug: "bias-audit",
    href: "/trust/bias-audit",
    title: "Bias Audit",
    blurb: "Independent disparate-impact audit results.",
    status: "live",
    category: "ai-transparency",
  },
  // ---- Security & trust ----
  {
    slug: "trust",
    href: "/trust",
    title: "Trust Center",
    blurb: "How we secure the platform and your data.",
    status: "live",
    category: "trust",
    footer: true,
  },
  {
    slug: "security",
    href: "/trust/security",
    title: "Security",
    blurb: "Encryption, tenant isolation, monitoring, and SOC 2 status.",
    status: "live",
    category: "trust",
  },
  {
    slug: "accessibility",
    href: "/legal/accessibility",
    title: "Accessibility",
    blurb: "Our WCAG conformance and how to get help.",
    status: "live",
    category: "trust",
  },
  {
    slug: "vulnerability-disclosure",
    href: "/trust/vulnerability-disclosure",
    title: "Vulnerability Disclosure",
    blurb: "How to responsibly report a security issue.",
    status: "live",
    category: "trust",
  },
  {
    slug: "government-requests",
    href: "/trust/government-requests",
    title: "Government & Law-Enforcement Requests",
    blurb: "How we handle legal process for data.",
    status: "live",
    category: "trust",
  },
  // ---- Company ----
  {
    slug: "modern-slavery",
    href: "/legal/modern-slavery",
    title: "Modern Slavery Statement",
    blurb: "Our anti-slavery and supply-chain commitments.",
    status: "live",
    category: "company",
  },
  {
    slug: "imprint",
    href: "/legal/imprint",
    title: "Imprint & Contact",
    blurb: "Our legal entity and how to reach us.",
    status: "live",
    category: "company",
  },
  // The two emergences.ai WEBSITE documents. They are entity-level (the
  // corporate site, not the platform), which is why they sit under "company"
  // beside the Imprint rather than with the platform agreements — a reader must
  // not mistake the website Terms of Use for the platform Terms of Service.
  // Deliberately not `footer: true`: the product footer should surface the
  // documents that govern the product. Both pages are noindex until the Framer
  // originals on emergences.ai are retired (see their page.tsx).
  {
    slug: "website-privacy",
    href: "/legal/website-privacy",
    title: "Website Privacy Notice",
    blurb: "For visitors to emergences.ai, not the platform or assessments.",
    status: "live",
    category: "company",
  },
  {
    slug: "website-terms",
    href: "/legal/website-terms",
    title: "Website Terms of Use",
    blurb: "The terms for browsing emergences.ai, not for using the platform.",
    status: "live",
    category: "company",
  },
  {
    slug: "updates",
    href: "/legal/updates",
    title: "Legal Updates",
    blurb: "Effective dates and prior versions of every document.",
    status: "live",
    category: "company",
  },
];

/** Live documents that opt into the compact global footer. */
export function footerLegalLinks(): LegalRegistryEntry[] {
  return LEGAL_REGISTRY.filter((e) => e.footer && e.status === "live");
}
