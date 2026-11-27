// DealHunt hand-in.
//
// Copies the static site (app/) and its screenshots (screenshots/) from
// this repository into the output directory, then writes the dossier that
// buildDossier computes from them.
//
// The grader runs this twice, in a fresh container with a read-only
// repository and a writable /output, and both runs must write the same
// bytes. So nothing here deletes anything, reads the clock, or rolls dice:
// every path is resolved from this file's own location, and the output is
// a pure copy of the repository plus the dossier built from it.

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const repoRoot = dirname(fileURLToPath(import.meta.url));
// Absolute, so a relative MAKEFUN_OUTPUT_DIR can never land in the
// grader's working directory by accident.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
const appSource = join(repoRoot, "app");
const screenshotsSource = join(repoRoot, "screenshots");
const appTarget = join(outputDir, "app");
const screenshotsTarget = join(outputDir, "screenshots");

mkdirSync(outputDir, { recursive: true });
cpSync(appSource, appTarget, { recursive: true });
mkdirSync(screenshotsTarget, { recursive: true });
if (existsSync(screenshotsSource)) {
  cpSync(screenshotsSource, screenshotsTarget, { recursive: true });
}

const dossier = buildDossier(outputDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
  app_path_max_bytes: 1000,
});
writeFileSync(join(outputDir, "dossier.json"), dossier);
