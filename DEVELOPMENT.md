# Development Guide

👋 Hello! This guide is an aid meant for developers of this package.

## Up and Running

```sh
# ensure you're using the correct node version (see .node-version)

# install deps
npm install

# run tests (default is in watch mode)
npm test

# build
npm run build
```

## Generated Code

There's a handful of files that we generate via our main repo for the SDK. (See `Nodes.ts`, `index.ts`, `OpenAPI.ts`)

When you need to make a change to these files you will need to rerun the codegen scripts in [SubstrateLabs/substrate](https://github.com/SubstrateLabs/substrate)
and then copy them into this project. Make sure to commit these changes.

```#sh
# (in SubstrateLabs/substrate) run the codegen tasks
make generate

# (in SubstrateLabs/substrate-typescript) copy the generated files
npm run sync-codegen

# (ensure the project builds)
npm run build
```

## Running Examples

We have code in the `examples/` directory that can be used to demonstrate the SDK in action. It's a good
idea to run through some of these when making changes to ensure everything works as expected end-to-end
and that the docs and types are rendered as expected via editor LSP integrations.

```sh
# all the examples are executable, so you can run them directly

# run an example using ts-node (with typescript, using esm)
./examples/basic.ts

# run an example using node (no typescript, using esm)
./examples/basic.js

# run an example using node (no typescript, using commonjs)
./examples/basic.cjs
```

## Using Local Package in another Local Project

Testing the local package in another local project requires making the local package available to that project.
`npm` provides a simple way to do this using symlinks. (See `npm help link` for more details)

```sh
# in the local SubstrateLabs/substrate-typescript directory
npm link

# see that the local package has been sym linked
npm ls --link --global

# in the local project that wants to import the local package
npm link substrate

# see the local project contains a link to the globally linked local package
npm ls --link

# remove the symlinks (if you don't want to use them anymore)
npm unlink substrate # in local project
npm unlink --global substrate
```

## Build Config Highlights

This project uses a few tools to help with building and packaging it up: `typescript`, [`tsup`](https://github.com/egoist/tsup), and `npm`.
Their respective configuration files work together to produce the the library and this section contains a few highlights to
help better understand how it works.

* Compiled and bundled up code lives in `dist/` (set in `tsconfig.json` "outDir")
* We're targeting ES2022 as our output language, which is supprted by Node 18+ (see `tsconfig.json` "target")
* We're building both ESM (.js) and CJS (.cjs) compatible artifacts (see `tsup.config.ts` "formats")
* During build we're generating TypeScript declaration files and making them available to package consumers (see `tsup.config.ts` "dts")
* Our package uses conditional exports so that the consumer will automatically get the right ESM or CJS based on how they import (see `package.json` "exports")
* When we publish the package to NPM we're only including the `dist/`, `src/` and "default files", eg. `README`, `LICENCE` (see `package.json` "files")

## Versioning

We're using a somewhat custom versioning scheme that allows us to incorporate information about the API version
and SDK version. We update version references via the `npm run sync-codegen` script currently.

The version string looks like the following:

```js
  `${major}${version}.${minor}.${patch}`
```

* `major` is set manually and is the MAJOR version of the SDK code
* `version` is a date string (`yyyymmdd`) we use as the API Version (from our OpenAPI schema)
* `minor` is set manually and is the MINOR version of the SDK code
* `patch` is set manually and is the PATCH version of the SDK code

The version of the SDK should be updated in branches being merged into `main` according to the semantic versioning scheme:

* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backward compatible manner
* PATCH version when you make backward compatible bug fixes

## Releasing

**Prerequisites**:
* Have an [npmjs.com](https://www.npmjs.com/) account and it must be a member of our organization
* Have an GitHub account and it must be a member of our organization with write permissions on the repo
* The changes that are currently in the branch are the one you would like to release (typically `main`)
* The `version` field in the `package.json` is the one you would like to use for the release already

**Production Releases**:

We've not automated this process just yet since there are a few more steps that would be nice to incorporate once
we start up a more regular cadence. The following should be done manually on the publishers machine in the branch
that we'd like to publish.

1. Ensure everything is OK: `npm test -- --run`
2. Build the package: `npm run build`
3. Preview the "pack" (tarball we publish to npm): `npm publish --dry-run`
5. Login to NPM: `npm login`
6. Publish on NPM & push tag to GitHub: `npm publish --tag latest`
7. Create new Release on GitHub (using the web UI). Add release notes, mentions, etc.

**Non-Production Releases** 

The previous workflow assumes that the tag being published should be marked as `latest` for the NPM
[distribution tag](https://docs.npmjs.com/adding-dist-tags-to-packages). If you would like to mark a release as
a "release candidate", "experimental" or something else, then specify this tag when publishing:

```
npm publish --tag [rc|experimental]
```
