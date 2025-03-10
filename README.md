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

Compresso is a quick, zero-dependency utility library with micro-optimized utilities to reduce duplicated, long code while ensuring type security.

```powershell
    pnpm i compresso
```

## Motivation

Bundler can not optimize and minify everything. While the concept of [name-mangling](https://en.wikipedia.org/wiki/Name_mangling) exists, it's not very well used in [`esbuild`](https://esbuild.github.io/)-based bundlers like [`vite`](https://vite.dev/) when it comes to object properties. Built-Ins like `Number`, `Math`, `Object`, `Array` and more can't be minified at all. But with compresso, it can quickly turn code like `Object.getOwnPropertyDescriptors` that can't be minified into `getPropDescriptor` that be minified to just `g()`.

Beware that the bundle can only be reduced by heavy use of those built-ins. This is most likely the case in very large projects. `compresso` always comes with an overhead of 100 - 200 bytes for just the built-in compressions.

---
@ 2025 Torathion
