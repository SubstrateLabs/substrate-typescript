#!/usr/bin/env -S npm run ts-node --transpileOnly

import { execSync } from "node:child_process";

const DIR = "src/NewSchema";
const OPEN_API_URL = "https://substrate.run/openapi.json";
const ok = (message: string) => console.log("\x1b[32m✓\x1b[0m", message);

execSync(`mkdir -p ${DIR}`);

execSync(`npx openapi-typescript ${OPEN_API_URL} -o ${DIR}/OpenAPI.ts`);
ok(`Downloaded the OpenAPI schema from ${OPEN_API_URL}`);

execSync(
  `npx ts-to-zod --skipValidation ${DIR}/OpenAPI.ts ${DIR}/OpenAPIZod.ts`,
);
ok("Transformed OpenAPI types into Zod schema");
