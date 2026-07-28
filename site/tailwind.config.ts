import type { Config } from "tailwindcss";

// The content globs MUST include the package's renderer. LegalDocumentView is
// written in Tailwind utilities, so a build that does not scan it emits a
// stylesheet with none of those classes — and the page still renders, unstyled
// but structurally intact, which is the quiet-wrongness this whole arrangement
// keeps trying to avoid. Both paths are listed because the package resolves to
// a symlink in the workspace and to a real directory once installed from git.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./node_modules/@emergences/legal/dist/**/*.js",
    "../dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
