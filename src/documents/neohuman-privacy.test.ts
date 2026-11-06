/**
 * NeoHuman Privacy Policy (doc5 G58).
 *
 * NeoHuman uses Google only for sign-in today and has not requested any Google
 * API data access (operator, 2026-11-06), so the policy carries no Google user
 * data section; add one, with the Limited Use statement and its test, in the
 * version that ships the first Google data scope. It promises nothing about
 * how long AI providers keep requests: their published terms keep them for
 * abuse monitoring, and only some routes run with zero retention. The deletion clause
 * states the operator's 2026-11-05 decision: deactivate at once, 30 days to
 * change your mind, then delete or anonymise, keeping only records the law or
 * the books require.
 */
import { describe, expect, it } from "vitest";
import { ALL_LEGAL_DOCUMENTS, legalDocumentBySlug } from "../all.js";
import { LEGAL_CONTACTS, LEGAL_ENTITY } from "../company.js";
import type { LegalBlock, LegalDocument } from "../model.js";
import { draftMarkers } from "../draft.js";

const doc = legalDocumentBySlug("neohuman-privacy") as LegalDocument;

const blockText = (block: LegalBlock): string => {
  switch (block.kind) {
    case "list":
      return block.items.join("\n");
    case "table":
      return [block.columns, ...block.rows].map((row) => row.join(" | ")).join("\n");
    case "def":
      return `${block.term} ${block.text}`;
    case "sub":
      return `${block.heading} ${block.text}`;
    case "callout":
      return `${block.label} ${block.text}`;
    default:
      return block.text;
  }
};

const sectionText = (title: RegExp): string | null => {
  const section = doc.sections.find((s) => title.test(s.title));
  return section ? section.blocks.map(blockText).join("\n") : null;
};

const allText = (): string =>
  [doc.preamble ?? "", ...doc.sections.map((s) => s.blocks.map(blockText).join("\n"))].join("\n");

describe("NeoHuman Privacy Policy", () => {
  it("is published from the roll as a NeoHuman document", () => {
    expect(ALL_LEGAL_DOCUMENTS).toContain(doc);
    expect(doc.scope).toBe("neohuman");
    expect(doc.title).toBe("NeoHuman Privacy Policy");
  });

  it.each([
    ["who we are", /^Who we are$/],
    ["connected accounts", /^Connected accounts$/],
    ["who we share it with", /^Who we share/],
    ["how long we keep it", /^How long we keep/],
    ["how to delete", /^How to delete/],
  ])("has a %s section with a body", (_name, title) => {
    const body = sectionText(title);
    expect(body, `missing section ${title}`).not.toBeNull();
    expect((body as string).trim().length).toBeGreaterThan(80);
  });

  it("names the contracting entity and the privacy inbox from company.ts", () => {
    expect(sectionText(/^Who we are$/)).toContain(LEGAL_ENTITY);
    expect(allText()).toContain(LEGAL_CONTACTS.privacy);
  });

  it("says a connected account can be disconnected at any time", () => {
    expect(sectionText(/^Connected accounts$/)).toMatch(/disconnect[^.]*at any time/i);
  });

  it("promises nothing about how long AI providers keep what they are sent", () => {
    // Provider terms read 2026-11-06 keep requests for abuse monitoring (Google
    // 55 days, OpenAI up to 30), and zero-retention routing covers only some
    // calls, so no sentence may say AI processing leaves nothing behind.
    const text = allText();
    expect(text).not.toMatch(/zero[- ]data[- ]retention|zero retention/i);
    expect(text).not.toMatch(/not (be )?retain(ed)?\b[^.]*(processing|provider|model)/i);
    expect(text).not.toMatch(/(provider|model)s?[^.]*(do|does|will) not (keep|store|retain)/i);
  });

  it("states the 30-day window, then deletion or anonymisation, keeping billing and credit records", () => {
    const keep = sectionText(/^How long we keep/) as string;
    const del = sectionText(/^How to delete/) as string;
    for (const body of [keep, del]) expect(body).toMatch(/30 days/);
    // One window, stated the same way everywhere it appears, summary included.
    const windows = [allText(), ...(doc.summary ?? []).map((p) => p.text)]
      .join("\n")
      .match(/\b\d+ days\b/g);
    expect(new Set(windows)).toEqual(new Set(["30 days"]));
    expect(keep).toMatch(/delete[^.]*or anonymi[sz]e/i);
    expect(keep).toMatch(/billing/i);
    expect(keep).toMatch(/credit/i);
    expect(del).toMatch(/deactivat/i);
  });

  it("is still a draft: unresolved markers keep it off the published site", () => {
    // The site refuses to build while any document carries one (site/app/catalog.ts).
    // Delete this test with the last marker, when counsel and the operator sign off.
    expect(draftMarkers(doc).length).toBeGreaterThan(0);
  });
});

describe("draftMarkers", () => {
  const base: LegalDocument = {
    slug: "x",
    scope: "neohuman",
    title: "X",
    description: "x",
    version: "2026-11-05",
    effectiveDate: "November 5, 2026",
    sections: [{ n: 1, title: "One", blocks: [{ kind: "p", text: "Plain." }] }],
  };

  it("finds none in a finished document, including every published one", () => {
    expect(draftMarkers(base)).toEqual([]);
    for (const published of ALL_LEGAL_DOCUMENTS.filter((d) => d !== doc)) {
      expect(draftMarkers(published), published.slug).toEqual([]);
    }
  });

  it.each<LegalBlock>([
    { kind: "p", text: "Keep it [TO CONFIRM: days] days." },
    { kind: "list", items: ["a", "[TO BE DECIDED: b]"] },
    { kind: "table", columns: ["A"], rows: [["[TO CONFIRM: c]"]] },
    { kind: "callout", label: "[TO CONFIRM: l]", text: "t" },
  ])("finds a marker in a %j block", (block) => {
    const marked = { ...base, sections: [{ n: 1, title: "One", blocks: [block] }] };
    expect(draftMarkers(marked).length).toBe(1);
  });

  it("finds a marker in the preamble and the summary", () => {
    expect(draftMarkers({ ...base, preamble: "[TO CONFIRM: p]" }).length).toBe(1);
    expect(draftMarkers({ ...base, summary: [{ label: "s", text: "[TO BE DECIDED: s]" }] }).length).toBe(1);
  });
});
