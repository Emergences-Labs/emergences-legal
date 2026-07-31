/**
 * A ratchet on the seven design decisions of 2026-07-31.
 *
 * The renderer had drifted into devices this design system does not have —
 * bold headings, a framed three-column summary panel, disc bullets, a brand
 * accent rule down the left edge of static asides — and each one reached all 25
 * published documents at once, because one renderer serves the site and the
 * product's acceptance page. They were removed against named house rules. The
 * point of this file is that they cannot come back by accident: a comment saying
 * "headings are font-normal, deliberately" is not enforcement, and the next
 * person to open this file will see `font-normal` next to a `600` written in
 * globals.css and reasonably assume it is the mistake.
 *
 * Static source assertions, because that is what actually catches a reintroduced
 * utility class. The rendered LAYOUT is covered by the product's css-contract
 * suite, which needs a real browser and lives there.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const SOURCE = readFileSync(
  fileURLToPath(new URL("./legal-document.tsx", import.meta.url)),
  "utf8",
);

/** The class, and why the design system does not use it. */
const BANNED: { pattern: RegExp; label: string; because: string }[] = [
  {
    pattern: /\bfont-bold\b/,
    label: "font-bold",
    because:
      "Libre Baskerville loads 400 and 700 only, so a declared 600 already " +
      "resolves to the 700 file. Headings render in the regular face here; " +
      "`.no-access-card h2` (declares 500, resolves to 400) is the precedent. " +
      "Run-in emphasis inside a paragraph uses font-semibold, matching " +
      "`.jd-posting strong`.",
  },
  {
    pattern: /\blist-disc\b/,
    label: "list-disc",
    because:
      "`.jd-posting li::before` overrides the browser disc on purpose: " +
      "list-style none, a 5px round brand dot at 0.7 opacity, a 20px hang.",
  },
  {
    pattern: /border-l-\[var\(--brand\)\]/,
    label: "a brand rule down the left edge",
    because:
      "In this app `border-left: 3px solid var(--accent-brown)` means the row " +
      "is selected or active (.challenge-item.active, " +
      ".leaderboard-item.previewing). On a static aside it borrows a state " +
      "signal for decoration.",
  },
  {
    pattern: /font-variant:\s*small-caps/,
    label: "font-variant: small-caps",
    because:
      "Nothing in the app sets it. The two comments that say “mono " +
      "small-caps” describe an uppercased mono label, which is a " +
      "different thing.",
  },
];

/** The summary section's own source, so its checks cannot be satisfied by the
 *  masthead ledger. The ledger is a row of short mono key/value pairs and keeps
 *  its `divide-x` legitimately — that is the shape the app already divides that
 *  way (the admin stat grids). Prose is not. */
const SUMMARY_SOURCE = SOURCE.slice(
  SOURCE.indexOf('aria-label="Summary"'),
  SOURCE.indexOf("{/* Preamble */}"),
);

describe("legal renderer house style", () => {
  for (const { pattern, label, because } of BANNED) {
    it(`does not use ${label}`, () => {
      expect(
        pattern.test(SOURCE),
        `legal-document.tsx uses ${label}. ${because}`,
      ).toBe(false);
    });
  }

  it("keeps the summary as a stack, so any number of points renders", () => {
    // arena-terms has four. The three-column grid this replaced dropped the
    // fourth onto a second row carrying a divider on its left and no rule
    // above it — a defect no amount of taste would have found.
    expect(
      SUMMARY_SOURCE.length,
      "The summary section could not be located in the source, so the two " +
        "assertions below would pass on an empty string.",
    ).toBeGreaterThan(200);

    for (const banned of [/grid-cols-\d/, /\bdivide-x\b/]) {
      expect(
        banned.test(SUMMARY_SOURCE),
        "The plain-language summary is a stack, not a fixed-column grid with " +
          "vertical dividers: it has to hold for a document with four points, " +
          "and arena-terms has four.",
      ).toBe(false);
    }
  });
});
