#!/usr/bin/env -S npx ts-node --transpileOnly

import { execSync } from "node:child_process";

const ok = (message: string) => console.log("\x1b[32m✓\x1b[0m", message);
const DIR = "../substrate/codegen/typescript";

execSync(`cp -r ${DIR}/src/* src/`);
execSync(`cp ../substrate/site/public/openapi.json src/openapi.json`);
execSync(`cp ${DIR}/GEN_VERSION GEN_VERSION`);
ok(`Copied generated code from ${DIR}`);
