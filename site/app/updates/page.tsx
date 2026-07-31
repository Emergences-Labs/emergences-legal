import Link from "next/link";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { ALL_LEGAL_DOCUMENTS, LEGAL_ENTITY, LEGAL_SCOPE_LABELS } from "@emergences/legal";

export const metadata: Metadata = {
  title: "Version archive",
  description:
    "The current version and effective date of every document we publish.",
};

export const dynamic = "force-static";

// Driven by ALL_LEGAL_DOCUMENTS, so a document cannot be published and missing
// from the record. The product's archive learned this the hard way: it kept its
// own hand-maintained list, and the Arena Assessment Terms fell out of it.
const ROWS = [...ALL_LEGAL_DOCUMENTS].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export default function UpdatesPage(): ReactElement {
  return (
    <article>
      <header className="pb-1">
        <p className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
          {LEGAL_ENTITY}
        </p>
        <h1 className="mt-2.5 font-serif text-[30px] font-normal leading-[1.14] tracking-[-0.02em] text-[var(--text-primary)] sm:text-[34px]">
          Version archive
        </h1>
        <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.7] text-[var(--text-secondary)]">
          The current version and effective date of each of our documents. When
          we make a material change, we update the version and give notice; this
          page is the record. Ask us for a prior version at any time.
        </p>
      </header>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-[var(--border-subtle)]">
              {["Document", "Applies to", "Version", "Effective"].map((h) => (
                <th
                  key={h}
                  className="py-2 pr-4 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((doc) => (
              <tr
                key={doc.slug}
                className="border-b border-[var(--border-subtle)] last:border-0"
              >
                <td className="py-2.5 pr-4 align-top">
                  <Link
                    href={`/${doc.slug}`}
                    className="font-medium text-[var(--brand)] no-underline hover:underline"
                  >
                    {doc.title}
                  </Link>
                </td>
                <td className="py-2.5 pr-4 align-top font-mono text-[12px] text-[var(--text-secondary)]">
                  {LEGAL_SCOPE_LABELS[doc.scope]}
                </td>
                <td className="py-2.5 pr-4 align-top font-mono text-[12px] tabular-nums text-[var(--text-secondary)]">
                  {doc.version}
                </td>
                <td className="py-2.5 align-top text-[var(--text-secondary)]">
                  {doc.effectiveDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
