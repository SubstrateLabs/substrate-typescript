# Development Guide

:wave: Hello! This guide is meant to help developers of this package.

## Up and Running

```
# ensure you're using the correct node version (see .node-version)

# install deps
npm i

# run tests (using vitest)
npm test                    # watch mode
# or
npm test -- run             # run once

# build (using tsup/esbuild)
npm run build               # run once
# or
npm run build -- --watch    # watch mode
```

## Releasing (TBD)

* Ensure everything is OK: `npm test && npm run build`
* Preview Pack: `npm publish --dry-run`
* Publish on NPM: `npm publish`
* Push tags to Github: `git push --follow-tags`

## 
