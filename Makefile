PACKAGE_VERSION=$(shell node -p -e "require('./package.json').version")

# override this when publishing with an alternative distribution, eg. rc | experimental | demo
NPM_TAG=latest

node_modules/:
	npm install

.PHONY: ensure
ensure: node_modules/

.PHONY: setup-git-hooks
setup-git-hooks: 
	cp bin/pre-push-git-hook .git/hooks/pre-push

.PHONY: test
test: ensure
	npx vitest --run

.PHONY: test-watch
test-watch: ensure
	npx vitest

.PHONY: update-version
update-version: ensure
	bin/update-version.ts

.PHONY: sync-codegen
sync-codegen: ensure
	bin/sync-codegen.ts
	make update-version

.PHONY: format-check
format-check: ensure
	npx prettier . --check

.PHONY: format-fix
format-fix: ensure
	npx prettier . --write

.PHONY: build
build: ensure
	npx tsup

.PHONY: build-watch
build-watch: ensure
	npx tsup --watch

.PHONY: publish-preview
publish-preview: test build
	npm publish --tag=${NPM_TAG} --dry-run

.PHONY: verify-publish
verify-publish:
	@echo
	@echo "🌀 Publishing to NPM"
	@echo "Version: ${PACKAGE_VERSION}"
	@echo "Distribution Tag: ${NPM_TAG}"
	@echo "This will be live. Continue? [y/N] " && read ans && [ $${ans:-N} == y ]

.PHONY: publish
publish: verify-publish test build
	npm login
	npm publish --tag=${NPM_TAG}
	git tag "v${PACKAGE_VERSION}" && git push --tags
