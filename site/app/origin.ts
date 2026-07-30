/** The published origin. Vercel sets VERCEL_PROJECT_PRODUCTION_URL without a
 *  scheme; the fallback is the domain this site is served from. */
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://legal.emergences.ai")
).replace(/\/$/, "");
