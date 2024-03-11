#!/usr/bin/env -S npm run ts-node --transpileOnly

import { execSync } from "node:child_process";

const DIR = "../substrate/substrate-typescript";
const ok = (message: string) => console.log("\x1b[32m✓\x1b[0m", message);

execSync(`cp -r ${DIR}/src/* src/`);
execSync(`cp -r ../substrate/site/public/openapi.json src/`);
ok(`Copied generated code from ${DIR}`);
