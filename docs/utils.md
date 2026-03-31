# Errors

| Name                  |    Description                                                                                  |
|-----------------------|-------------------------------------------------------------------------------------------------|
| `IndexOutOfBoundsError` | Semantic error for array operations to avoid JS heavy auto index out of bounds error handling |

# Helpers

| Name              |  Description                                                                   |
|-------------------|--------------------------------------------------------------------------------|
| `bindSelf`        | Shortcut to self-bind objects to preserve contexts                             |
| `noop`            | Utility doing nothing to have a global function reference for "empty function" |
| `once`            | Function wrapper to call a function only once                                  |
| `onceAsync`       | `once`, but `async`                                                            |
| `safe`            | Function wrapper to catch all errors of a function and proceed without issue   |
| `safeAsync`       | `safe`, but `async`                                                            |
| `safeConstruct`   | `safe`, but for class constructors                                             |
| `safeParseNumber` | Safely parses a number excluding `NaN`                                         |

# Utils

## Array

| Name                   | Description                                                                       |
|------------------------|-----------------------------------------------------------------------------------|
| `arrContainsDeep`      | Check nested arrays for a value                                                   |
| `arrEquals`            | Check if two arrays are equal                                                     |
| `arrIsUnique`          | Check if an array only contains unique items                                      |
| `arrRangesInclude`     | Check in a flat pair-wise number array if a number is within a range              |
| `arrRangesIndexOf`     | Get the starting index of the range inside a flat pair-wise number array by value |
| `arrRemove`            | Shortcut to remove an item from an array in-place                                 |
| `arrSwap`              | Shortcut to swap two elements in an array in-place                                |
| `containsElementsFrom` | Check if one elements contains elements from another                              |
| `deepArrEquals`        | `arrEquals` but recursive                                                         |
| `ensureArr`            | Wraps an element into an array if it's not an array                               |
| `last`                 | Shortcut to get the last element of an array. Aimed to be faster than `at(-1)`    |
| `mergeArr`             | Merges two arrays                                                                 |
| `permutate`            | Get all item permutations of an array                                             |
| `shuffle`              | Shuffles all elements of an array                                                 |
| `sortedIndexOf`        | Binary index search                                                               |
| `sortedMergeArr`       | Merges and sorts two already sorted arrays                                        |
| `toAsyncIterator`      | Converts an array into an async iterator                                          |

## Guard Functions

| Name                   | Description                                                                       |
|------------------------|-----------------------------------------------------------------------------------|
| `canCopyProps`         | Checks if a property value can be copied from one descriptor to the other         |
| `isAsync`              | Checks if the value is an async function                                          |
| `isAsyncIterable`      | Checks for async iterables                                                        |
| `isBigInt`             | Check if value is `bigint`                                                        |
| `isBlob`               | Check if value is `Blob`                                                          |
| `isBool`               | Check if value is `boolean`                                                       |
| `isCustomObj`          | Check if value is not a built-in object                                           |
| `isDeepEmptyObj`       | Check if a nested object is empty                                                 |
| `isDefined`            | Check if value is neither `null` or `undefined`                                   |
| `isEditable`           | Check if `PropertyDescriptor` can be edited                                       |
| `isEmptyObj`           | Check if object is empty                                                          |
| `isError`              | Check if object is an `Error`                                                     |
| `isFunction`           | Check if value is a `function`                                                    |
| `isGenerator`          | Check if value is a generator function                                            |
| `isIterable`           | Check if object can be iterated through (Has an iterator symbol)                  |
| `isNull`               | Check if value is null                                                            |
| `isNumber`             | Check if value is `number`                                                        |
| `isObj`                | Check if value is an `object` and not an equivalent (array, `null`)               |
| `isString`             | Check if value is `string`                                                        |
| `isSymbol`             | Check if value is `symbol`                                                        |

## Object

| Name                   | Description                                                                       |
|------------------------|-----------------------------------------------------------------------------------|
| `copyObj`              | Shallow copies an object                                                          |
| `deepEqualsObj`        | Check if two nested objects are equal in value                                    |
| `deepMergeObj`         | Deeply merges two objects                                                         |
| `deleteProp`           | Shortcut to delete a prop from an object                                          |
| `equalsObj`            | Check if two objects shallowy equal by value                                      |
| `extractProp`          | Returns the property value and deletes the corresponding property from the object |
| `findByNested`         | Finds a value in array of objects through a nested property string `a.b.c`        |
| `getNested`            | Gets a value from a nested property string `a.b.c`                                |
| `mergeObj`             | Merges two objects                                                                |
| `mostCommon`           | Finds the most common value of a property in an array of objects                  |
| `objDiff`              | Creates a simple object diff of two objects                                       |
| `occurrences`          | Gets all value occurrences of a property in an array of objects as a map          |
| `tiedMostCommon`       | Like `mostCommon`, but respects ties between most common value counts             |
| `toObjString`          | Converts an object to an object string                                            |
