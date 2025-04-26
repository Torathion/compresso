# CHANGELOG

## [1.2.1] 04-26-2025

- Fixed type declaration of `mergeObj`. Before it was the default import of this package and was named `merge`.

## [1.2.0] 04-26-2025

### Added

- `keysOf` and `valuesOf` to reduce bundle size when using `Object.keys` or `Object.values` multiple times.
- `mergeObj` and `deepMergeObj` for merging objects.
- `DeepMergeResult<T>` and `ShallowMergeResult<T>` to type `mergeObj` and `deepMergeObj` strictly.

### Changed

- `isObj` now returns `false` for arrays to correctly distinguish between arrays and objects.
- `deepArrEquals` handles objects deeply as well now.

## [1.1.0] 03-16-2025

- Add built-in `Math` properties to minify
- Add built-in `Number` properties to minify
