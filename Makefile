PACKAGE_VERSION=$(shell node -p -e "require('./package.json').version")

node_modules/:
	npm install

dist/:
	make test
	make build

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
publish-preview: dist/
	npm publish --dry-run

.PHONY: publish
publish: dist/
	npm login
	npm publish --tag=latest
	git tag "v${PACKAGE_VERSION}" && git push --tags

# TODO: add task to use alternative npm distribution tag
