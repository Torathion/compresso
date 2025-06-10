# CHANGELOG

## [1.4.2] 06-10-2025

### Fix

- Updated `typestar` types to newest version (2.1.0)

## [1.4.1] 05-25-2025

### Added

- missing alias `round` for `Math.round`

## [1.4.0] 04-28-2025

### Added

- `isEmptyObj` to check if an element has no properties.

### Changed

- Fix: Simplify and broaden return types of `mergeObj` and `deepMergeObj`

## [1.3.0] 04-27-2025

### Added

- `copyObj` to shallow copy objects.
- `unique` and `uniqueMerge` to merge arrays uniquely.
- `arrFrom` as alias for `Array.from`

### Changed

- Changed implementation of `isArray` to become an alias of `Array.isArray`.

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
