// =============================================================
// Draft markers: the gap between "written" and "publishable".
//
// A drafted document carries `[TO CONFIRM: …]` for a fact the drafter could not
// verify and `[TO BE DECIDED: …]` for a decision nobody has made. Both are
// written into the text on purpose, so a reviewer sees them where they matter.
// Neither may reach a published page: the site refuses to build while any
// document in the roll carries one (site/app/catalog.ts), so merging a draft
// cannot publish it by accident.
// =============================================================

import type { LegalBlock, LegalDocument } from "./model.js";

const MARKER = /\[(?:TO CONFIRM|TO BE DECIDED)\b[^\]]*\]/g;

function blockStrings(block: LegalBlock): string[] {
  switch (block.kind) {
    case "list":
      return block.items;
    case "table":
      return [...block.columns, ...block.rows.flat()];
    case "def":
      return [block.term, block.text];
    case "sub":
      return [block.heading, block.text];
    case "callout":
      return [block.label, block.text];
    default:
      return [block.text];
  }
}

/** Every unresolved draft marker in the document's rendered text, in order. */
export function draftMarkers(doc: LegalDocument): string[] {
  const strings = [
    doc.title,
    doc.description,
    doc.preamble ?? "",
    doc.colophon ?? "",
    ...(doc.notice ? [doc.notice.label, doc.notice.text] : []),
    ...(doc.summary ?? []).flatMap((point) => [point.label, point.text]),
    ...(doc.ledgerExtra ?? []).flatMap((item) => [item.label, item.value]),
    ...doc.sections.flatMap((section) => [section.title, ...section.blocks.flatMap(blockStrings)]),
  ];
  return strings.flatMap((text) => text.match(MARKER) ?? []);
}
