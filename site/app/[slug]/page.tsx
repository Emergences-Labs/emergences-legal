import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { ALL_LEGAL_DOCUMENTS, legalDocumentBySlug } from "@emergences/legal";
import { LegalDocumentView } from "@emergences/legal/render";
import { PrintButton } from "../print-button";

export const dynamic = "force-static";

export function generateStaticParams(): { slug: string }[] {
  return ALL_LEGAL_DOCUMENTS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const doc = legalDocumentBySlug((await params).slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function LegalDocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactElement> {
  const doc = legalDocumentBySlug((await params).slug);
  if (!doc) notFound();
  // Same renderer the product uses at the moment of acceptance — one document,
  // not two renderings of it.
  return <LegalDocumentView doc={doc} printSlot={<PrintButton />} />;
}
