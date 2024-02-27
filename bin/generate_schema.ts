#!/usr/bin/env -S npm run ts-node --transpileOnly

/* Note: this script is used in the monorepo via Github Action: .github/workflows/validate-model-gen.yml
   Please be careful when changing this. */
import { execSync } from "node:child_process";

const DIR = "src/API";
const OPEN_API_URL = "https://www.substrate.run/openapi.json";
const ok = (message: string) => console.log("\x1b[32m✓\x1b[0m", message);

execSync(`mkdir -p ${DIR}`);

// Used by the Github Action mentioned above
if (process.argv[2] && process.argv[2] === '--local') {
  console.log('Skipping OpenAPI download');
} else {
  execSync(`curl ${OPEN_API_URL} > ${DIR}/OpenAPI.json`);
  ok(`Downloaded the OpenAPI schema from ${OPEN_API_URL}`);
}

execSync(
  `npx json-refs resolve ${DIR}/OpenAPI.json > ${DIR}/OpenAPI.resolved.json`
);
ok(`Resolved internal references in OpenAPI schema`);

execSync(
  `npx openapi-typescript ${DIR}/OpenAPI.resolved.json -o ${DIR}/OpenAPI.ts`
);
ok(`Downloaded the OpenAPI schema from ${OPEN_API_URL}`);

execSync(`npx ts-to-zod ${DIR}/OpenAPI.ts ${DIR}/OpenAPIZod.ts`);
ok("Transformed OpenAPI types into Zod schema");
