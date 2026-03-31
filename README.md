# compresso

<p align="center">
<h1 align="center">Performant utilities to quickly reduce your code size</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/compresso"><img src="https://img.shields.io/npm/v/compresso?style=for-the-badge&logo=npm"/></a>
  <a href="https://npmtrends.com/compresso"><img src="https://img.shields.io/npm/dm/compresso?style=for-the-badge"/></a>
  <a href="https://bundlephobia.com/package/compresso"><img src="https://img.shields.io/bundlephobia/minzip/compresso?style=for-the-badge"/></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/Torathion/compresso?style=for-the-badge"/></a>
  <a href="https://codecov.io/gh/torathion/compresso"><img src="https://codecov.io/gh/torathion/compresso/branch/main/graph/badge.svg?style=for-the-badge" /></a>
  <a href="https://github.com/torathion/compresso/actions"><img src="https://img.shields.io/github/actions/workflow/status/torathion/compresso/build.yml?style=for-the-badge&logo=esbuild"/></a>
  <a href="https://github.com/prettier/prettier#readme"><img alt="code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier"></a>
</p>
</p>

Bundle too big? Way too much code to write? Don't stress! Take a compresso!

Compresso is a quick utility library with micro-optimized utilities to reduce duplicated patterns of code while ensuring type security.

### List of utilities can be found [here](https://github.com/Torathion/compresso/blob/master/docs/utils.md)

## Aliases

`compresso` has a vast amount of global aliases. Instead of writing `Math.max`, `Array.isArray` or `Object.getOwnPropertyDescriptor`, you can simply import the aliases like `max`, `isArray` or`getPropDescriptor`. This was done because Bundlers performing [name-mangling](https://en.wikipedia.org/wiki/Name_mangling) can't mangle and shorten the names of property values, leaving `Math.max` like they are. Modern bundlers might be able to automatically alias them, but `compresso` providing aliases itself can also ease developing larger algorithms.

### List of aliases can be found [here](https://github.com/Torathion/compresso/blob/master/src/constants.ts)

---
@ 2026 Torathion
