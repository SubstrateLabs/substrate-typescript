#!/usr/bin/env -S npm run ts-node --transpileOnly

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "fs";

// NOTE: Merged with API version to produce the full SDK version string
// https://docs.substrate.run/versionin
const SDK_VERSION = "0.0.1";

const ok = (message: string) => console.log("\x1b[32m✓\x1b[0m", message);
const DIR = "../substrate/substrate-typescript";

execSync(`cp -r ${DIR}/src/* src/`);
execSync(`cp ../substrate/site/public/openapi.json src/openapi.json`);
execSync(`cp ${DIR}/GEN_VERSION GEN_VERSION`);
ok(`Copied generated code from ${DIR}`);

try {
  const version = readFileSync("GEN_VERSION", "utf-8").split(".")[0];
  const [major, minor, patch] = SDK_VERSION.split(".");
  const newVersion = `${major}${version}.${minor}.${patch}`;
  const packageJsonPath = "package.json";
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  packageJson.version = newVersion;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  ok(`Updated package.json to version ${newVersion}`);
  const versionTsPath = "src/version.ts";
  const versionExport = `export const VERSION = "${newVersion}";\n`;
  writeFileSync(versionTsPath, versionExport);
  ok(`Updated version.ts to version ${newVersion}`);
} catch (error) {
  console.error("Error reading or parsing openapi.json:", error);
}
