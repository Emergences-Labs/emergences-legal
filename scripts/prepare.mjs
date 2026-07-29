// =============================================================
// `prepare` runs in two situations that want opposite behaviour, and the
// difference is invisible from inside the script except by looking for the
// toolchain.
//
// AS A DEPENDENCY. A consumer running
// `npm i github:Emergences-Labs/emergences-legal#<sha>` gets this package
// cloned into a temp directory, npm installs its devDependencies so `prepare`
// can run, and the build produces the dist/ the consumer imports. This MUST
// build, and MUST fail loudly if it cannot.
//
// AS THE REPOSITORY ITSELF. A production install here — Vercel doing
// `npm install` at the repo root, or anyone running `npm ci --omit=dev` — has
// no TypeScript, so there is nothing to build with. The first two deploys of
// the legal site died exactly here, with `tsc: command not found` and no hint
// that the cause was a project setting. Nothing needs dist/ in that situation:
// site/ compiles the package itself in its own prebuild step.
//
// So: build when the toolchain is present, say plainly why not when it isn't,
// and never fail the second case for the sake of the first.
// =============================================================
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const hasTypeScript = existsSync(
  new URL("../node_modules/typescript/package.json", import.meta.url),
);

if (!hasTypeScript) {
  console.warn(
    "[@emergences/legal] prepare: no TypeScript installed, so dist/ was not " +
      "built.\n" +
      "  Expected for a production install of this repository (site/ builds the " +
      "package itself).\n" +
      "  A consumer installing this package as a git dependency gets " +
      "devDependencies and builds normally.",
  );
  process.exit(0);
}

execFileSync("npm", ["run", "build"], { stdio: "inherit" });
