import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_ENTITY } from "@emergences/legal";

export const metadata: Metadata = {
  title: "Product updates",
  description: "Published updates for NeoWork, with release dates and any action you need to take.",
};

export const dynamic = "force-static";

export default function ProductUpdatesPage() {
  return (
    <article>
      <header>
        <p className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
          {LEGAL_ENTITY}
        </p>
        <h1 className="mt-2.5 font-serif text-[30px] font-normal leading-[1.14] tracking-[-0.02em] sm:text-[34px]">
          Product updates
        </h1>
        <p className="mt-4 text-[14px] leading-[1.7] text-[var(--text-secondary)]">
          This public record starts on October 20, 2026. Dates below distinguish
          when an update was released from when its note was published. It is not
          a complete history of earlier releases.
        </p>
      </header>

      <section aria-labelledby="web-maintenance" className="mt-8 border-t border-[var(--border-subtle)] pt-6">
        <p className="m-0 font-mono text-[11px] leading-[1.8] text-[var(--text-muted)]">
          NeoWork web · Released October 18, 2026 · Note published October 20, 2026
        </p>
        <h2 id="web-maintenance" className="mt-2 font-serif text-[22px] font-normal leading-[1.3]">
          Web application maintenance
        </h2>
        <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-secondary)]">
          We updated third-party software components used by the NeoWork web
          application, including its image processing components.
        </p>
        <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-secondary)]">
          <strong>What you need to do:</strong> No installation is required for
          this web update. This note does not announce a new desktop installer.
        </p>
      </section>

      <p className="mt-8 border-t border-[var(--border-subtle)] pt-5 text-[13px] leading-[1.7] text-[var(--text-secondary)]">
        Need help or want to report a problem? Visit the{" "}
        <a href="https://app.neo-work.ai/help" className="text-[var(--brand)] hover:underline">
          NeoWork Help Center
        </a>
        . Changes to our legal documents are recorded separately in the{" "}
        <Link href="/updates" className="text-[var(--brand)] hover:underline">
          version archive
        </Link>
        .
      </p>
    </article>
  );
}
