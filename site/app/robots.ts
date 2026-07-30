import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "./origin";

// Legal documents must be findable. This file exists to say so explicitly rather
// than leave it to a default, and to point crawlers at the sitemap — which is
// generated from the document manifest, so it cannot omit a document someone
// forgot to list.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
