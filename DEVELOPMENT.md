# Development Guide

Hello! This guide is meant for the developers of this package.

## Up and Running

```sh
# ensure you're using the correct node version (see .node-version)

# install deps
npm i

# run tests
npm test

# build
npm run build

# generate schema
./bin/generate_schema.ts
```

## Releasing (TBD)

- Ensure everything is OK: `npm test && npm run build`
- Preview Pack: `npm publish --dry-run`
- Publish on NPM: `npm publish`
- Push tags to Github: `git push --follow-tags`

##
