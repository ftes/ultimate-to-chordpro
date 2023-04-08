#
# Makefile for Ultimate-to-Chordpro Converter
#
# Directions:
#  - 'make bootstrap' to get webpack installed
#  - 'make' to rebuild the dist directory
#

default: build


bootstrap:
	npm install webpack webpack-cli --save-dev


DIST := ./dist
build:
	rm -rf $(DIST)/*
	npm run build
TO_CLEAN += $(DIST)/*


clean:
	rm -rf $(TO_CLEAN) *~

distclean: clean
	rm -rf node_modules/*
