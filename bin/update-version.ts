#!/usr/bin/env -S npx ts-node --transpileOnly

import { readFileSync, writeFileSync } from "fs";
import { execSync } from "node:child_process";

// NOTE: Merged with API version to produce the full SDK version string
// https://docs.substrate.run/versioning
const SDK_VERSION = "1.0.9";

const ok = (message: string) => console.log("\x1b[32m✓\x1b[0m", message);

try {
  const version = readFileSync("src/GEN_VERSION", "utf-8").split(".")[0];
  const [major, minor, patch] = SDK_VERSION.split(".");
  const newVersion = `${major}${version}.${minor}.${patch}`;
  const packageJsonPath = "package.json";
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  packageJson.version = newVersion;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  ok(`Updated package.json to version ${newVersion}`);
  execSync(`npm install`); // updates package-lock.json
  ok(`Updated package-lock.json`);
  const versionTsPath = "src/version.ts";
  const versionExport = `export const VERSION = "${newVersion}";\n`;
  writeFileSync(versionTsPath, versionExport);
  ok(`Updated version.ts to version ${newVersion}`);
} catch (error) {
  console.error("Error reading or parsing openapi.json:", error);
}
