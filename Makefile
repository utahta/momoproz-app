
install:
	@npm install

build:
	@./node_modules/.bin/webpack

run: build
	@./node_modules/.bin/electron .

