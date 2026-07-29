# emergences-legal

Canonical source for every Emergences AI, Inc. legal and trust document.
Products depend on it at **build time**; `legal.emergences.ai` publishes it.

Design record: `docs/design/2026-07-28-legal-docs-repo.md` in
`Emergences-Labs/neohuman-hiring`.

---

## The one rule that shapes everything here

**This package is never fetched at runtime.**

Every Fee Terms acceptance stores a SHA-256 over the *canonical JSON of the
actual terms data* — `{version, preamble, sections}` — because a version string
does not prove the wording, and the wording is what a customer agreed to. The
ATS DPA acknowledgment does the same. Two consequences:

- **The text must be in-process at the moment of acceptance.** Hashing text
  pulled over the network means an outage in a documents service can stop
  fee-terms acceptance, which stops candidate invitations, which is the revenue
  path. A documents repo must never hold that power.
- **The hashed artifact is structured data, not rendered HTML.** So this package
  exports the typed `LegalDocument` objects. Anything that ships Markdown or
  pre-rendered HTML instead breaks the existing evidence chain silently — old
  acceptances keep verifying, new ones hash something else.

Consumers therefore pin a git tag and take the text at build time:

```json
"@emergences/legal": "github:Emergences-Labs/emergences-legal#v2026.07.28"
```

The tag *is* the version identity. Upgrading is a one-line diff that says
exactly which legal text the product moved to.

## Two entry points, deliberately

| Import | Contains | Why separate |
|---|---|---|
| `@emergences/legal` | Documents, `LegalDocument` model, registry, company constants. **No React, no Node built-ins.** | So a server module can hash it and a client component can render it without dragging a renderer or `node:crypto` into either bundle. |
| `@emergences/legal/render` | `LegalDocumentView` and friends. | So the text a customer accepts in-product looks identical to the text published on the site. Two renderers would make one document look like two. |

`/render` expects the host application to define the design tokens it uses
(`--text-primary`, `--surface-card`, `--border-subtle`, the serif/mono families)
and the print stylesheet. It is not self-contained CSS, by design — it inherits
the surface it is dropped into.

## Layout

```
src/
  model.ts        LegalBlock / LegalSection / LegalDocument
  company.ts      entity, governing law, contacts, addresses, domains
  registry.ts     slug -> title / blurb / category / status
  documents/      one module per document
  index.ts        re-exports everything above
render/           LegalDocumentView, PrintButton, footer
site/             (planned) the Next app serving legal.emergences.ai
```

## Invariants the tests enforce

`src/integrity.test.ts` — every document is datable, numbers its clauses `1..n`
with no gap, has no empty section, is reachable from the registry, and has a
unique slug. Ported from `neohuman-hiring`, where it was written after the two
emergences.ai website documents were found published with no version, no
effective date, and a clause numbering that skipped 1.

## Deploying the site

`site/` is the Next app behind `legal.emergences.ai`.

**Vercel's Root Directory must be set to `site`.** With it left at the repo root,
Vercel installs THIS package as the project, which runs its `prepare` script —
and a production install has no devDependencies, so it fails with
`tsc: command not found`. That is what the first deploy did.

The site compiles the package itself in `prebuild`, using its own TypeScript. A
`file:` dependency is symlinked and npm never runs its `prepare`, so nothing
else would build `dist/` — and a missing `dist/` surfaces as "cannot find module
@emergences/legal/render", which reads like a bad import rather than a missing
build step.

## Publishing a change

1. Edit the document. Bump its `version` and `effectiveDate`.
2. `npm run verify`.
3. Tag `v<YYYY.MM.DD>` and push the tag.
4. Bump the pin in each consuming product, in its own reviewed commit.

Step 4 is not a formality. It is the moment a product's legal text changes, and
it should read like one in the history.
