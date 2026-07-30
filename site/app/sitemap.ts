import type { MetadataRoute } from "next";
import { ALL_LEGAL_DOCUMENTS } from "@emergences/legal";
import { PENDING_FRAMER_RETIREMENT } from "./pending-framer-retirement";
import { SITE_ORIGIN } from "./origin";

// Generated from the document manifest, not a hand-written list. The product's
// sitemap advertised only the two hub pages, so a document added to the registry
// never reached a crawler — and nothing said so.
//
// `lastModified` is the document's own version date, which is the only date that
// means anything here: a build does not change a legal document, and a crawler
// told otherwise learns to distrust the signal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_ORIGIN, changeFrequency: "monthly" as const, priority: 1 },
    {
      url: `${SITE_ORIGIN}/updates`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...ALL_LEGAL_DOCUMENTS.filter(
      (doc) => !PENDING_FRAMER_RETIREMENT.has(doc.slug),
    ).map((doc) => ({
      url: `${SITE_ORIGIN}/${doc.slug}`,
      lastModified: new Date(doc.version),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
