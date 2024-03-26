PACKAGE_VERSION=$(shell node -p -e "require('./package.json').version")

# override this when publishing with an alternative distribution, eg. rc | experimental | demo
NPM_TAG=latest

node_modules/:
	npm install

.PHONY: ensure
ensure: node_modules/

.PHONY: test
test: ensure
	npx vitest --run

.PHONY: test-watch
test-watch: ensure
	npx vitest

.PHONY: sync-codegen
sync-codegen: ensure
	bin/sync-codegen.ts

.PHONY: typecheck
typecheck: ensure
	npx tsc -noEmit

.PHONY: build
build: ensure
	npx tsup

.PHONY: build-watch
build-watch: ensure
	npx tsup --watch

.PHONY: publish-preview
publish-preview: test build
	npm publish --dry-run

.PHONY: publish
publish: test build
	npm login
	npm publish --tag=${NPM_TAG}
	git tag "v${PACKAGE_VERSION}" && git push --tags
