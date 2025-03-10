import { AnyArray, AnyFunction, AnyNumberArray, AsyncFunction, ClassConstructor, HasToString, WithReadonly } from 'typestar';
// JSON methods

import { AnyObject, MaybeArray, Table } from "typestar";

/**
 * Parses a JSON string and returns the JavaScript value.
 * @param text A string to parse as JSON.
 * @param reviver A function that transforms the results.
 * @returns The parsed JavaScript value.
 * @throws {SyntaxError} If the string to parse is not valid JSON.
 */
export const parseJson: (text: string, reviver?: (this: any, key: string, value: any) => any) => any;

/**
 * Converts a JavaScript value to a JSON string.
 * @param value A JavaScript value, usually an object or array, to convert to JSON.
 * @param replacer A function that transforms the results or an array of strings/numbers.
 * @param space Adds indentation, white space, and line breaks to the return-value JSON text.
 * @returns The JSON string representation of the value.
 * @throws {TypeError} If the value contains circular references or BigInt.
 */
export const stringify: (
  value: any,
  replacer?: (this: any, key: string, value: any) => any | Array<number | string> | null,
  space?: string | number
) => string;

// Object methods
/**
 * Freezes an object, preventing new properties from being added and existing properties from being modified or deleted.
 * @param obj The object to freeze.
 * @returns The frozen object.
 */
export const freeze: <T>(obj: T) => Readonly<T>;

/**
 * Determines if an object is extensible (whether it can have new properties added to it).
 * @param obj The object to test.
 * @returns Whether the object is extensible.
 */
export const isExtensible: (obj: any) => boolean;

/**
 * Determines if an object is frozen (cannot be modified).
 * @param obj The object to test.
 * @returns Whether the object is frozen.
 */
export const isFrozen: (obj: any) => boolean;

/**
 * Determines if an object is sealed (cannot add/remove properties but can modify existing ones).
 * @param obj The object to test.
 * @returns Whether the object is sealed.
 */
export const isSealed: (obj: any) => boolean;

/**
 * Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
 * @param obj The object to seal.
 * @returns The sealed object.
 */
export const seal: <T>(obj: T) => T;

/**
 * Prevents new properties from being added to an object but allows modification of existing properties.
 * @param obj The object to restrict.
 * @returns The object with extensions prevented.
 */
export const preventExtensions: <T>(obj: T) => T;

/**
 * Merges the properties of one or more source objects into a target object.
 * @param target The target object to merge properties into.
 * @param sources One or more source objects.
 * @returns The target object with merged properties.
 */
export const refMergeObj: <T, U>(target: T, ...sources: U[]) => T & U;

/**
 * Defines a new property directly on an object or modifies an existing property.
 * @param obj The object on which to define the property.
 * @param prop The name or symbol of the property to define.
 * @param descriptor The descriptor for the property being defined or modified.
 * @returns The object with the defined property.
 */
export const defineProp: (
  obj: any,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
) => any;

/**
 * Returns the prototype of the specified object.
 * @param obj The object whose prototype is to be returned.
 * @returns The prototype of the object, or null if there is no inherited prototype.
 */
export const getProto: (obj: any) => any;

/**
 * Returns the property descriptor for an own property of the specified object.
 * @param obj The object whose property descriptor is to be returned.
 * @param prop The name or symbol of the property.
 * @returns The property descriptor, or undefined if the property does not exist.
 */
export const getPropDescriptor: (
  obj: any,
  prop: PropertyKey
) => PropertyDescriptor | undefined;

/**
 * Sets the prototype of a specified object to another object or null.
 * @param obj The object whose prototype is to be set.
 * @param proto The new prototype, or null.
 * @returns The object with the updated prototype.
 */
export const setProto: (obj: any, proto: object | null) => any;

/**
 * Returns an array of a given object's own enumerable property [key, value] pairs.
 * @param obj The object whose enumerable own property entries are to be returned.
 * @returns An array of the object's own enumerable property entries.
 */
export const entriesOf: <T>(obj: { [s: string]: T } | ArrayLike<T>) => [string, T][];

/**
 * Determines whether an object has a property with the specified name as its own property.
 * @param obj The object to check.
 * @param prop The property name or symbol to test.
 * @returns Whether the object has the specified property as its own property.
 */
export const hasProp: (obj: any, prop: PropertyKey) => boolean;

// String methods
/**
 * Returns a string created from the specified sequence of UTF-16 code units.
 * @param codePoints One or more UTF-16 code units.
 * @returns A string consisting of the specified code units.
 */
export const fromCharCode: (...codePoints: number[]) => string;

/**
 * Returns a string created from the specified sequence of Unicode code points.
 * @param codePoints One or more Unicode code points.
 * @returns A string consisting of the specified code points.
 * @throws {RangeError} If an invalid code point is provided.
 */
export const fromCodePoint: (...codePoints: number[]) => string;

// Error methods
/**
 * Captures a stack trace and attaches it to the specified object.
 * @param targetObject The object to attach the stack trace to.
 * @param constructorOpt Optional constructor function to start the stack trace from.
 */
export const createStackTrace: (
  targetObject: object,
  constructorOpt?: Function
) => void;

/**
 * Prepares a stack trace string for an error.
 * @param error The error object.
 * @param structuredStackTrace The structured stack trace.
 * @returns The formatted stack trace string.
 */
export const prepareStackTrace: (
  error: Error,
  structuredStackTrace: NodeJS.CallSite[]
) => any;
/**
 * Performs a deep equality comparison between two objects.
 *
 * Compares all properties recursively, including nested objects and arrays.
 * Returns true only if all properties and their values are strictly equal (===)
 * and the objects have identical structure.
 *
 * @param o1 - First object to compare
 * @param o2 - Second object to compare
 * @returns `true` if objects are deeply equal, otherwise `false`.
 */
export function deepEqualsObj(o1: AnyObject, o2: AnyObject): boolean
/**
 *  Deletes a specified property from an object.
 *
 *  @param o - The object from which to delete the property (can be partial)
 *  @param prop - The key of the property to delete
 */
export function deleteProp<T extends Table<any>>(o: Partial<T>, prop: keyof T): void
/**
 *  Compares two objects for shallow equality by checking if they have the same keys and values.
 *
 *  @param o1 - The first object to compare
 *  @param o2 - The second object to compare
 *  @returns `true`, if objects have same keys and values, otherwise `false`.
 */
export function equalsObj(o1: AnyObject, o2: AnyObject): boolean
/**
 *  Converts a value to its object string representation.
 *
 *  @param value - The value to convert to a string representation.
 *  @returns A string representing the object's class, such as "[object Number]", "[object String]", etc.
 */
export function toObjString(value: unknown): string
/**
 *  Determines if properties from one PropertyDescriptor can be copied to another.
 *
 * @param desc1 - The source property descriptor
 * @param desc2 - The target property descriptor
 * @returns `true` if the properties can be safely copied based on their descriptors, otherwise `false`.
 */
export function canCopyProps(desc1: PropertyDescriptor, desc2: PropertyDescriptor): boolean
/**
 * Determines whether a given value is an array or not.
 *
 * @param value - target value.
 * @returns `true`, if the value is an array, otherwise false.
 */
export function isArray<T>(value: MaybeArray<T>): value is T[]
/**
 * Checks if a given function is an async function.
 *
 * @param func - The function to check
 * @returns `true` if the function is an async function, otherwise `false`
 */
export function isAsync(func: AnyFunction): func is AsyncFunction
/**
 *  Checks if a value is an async iterable.
 *
 *  @param value - The value to check.
 *  @returns `true`, if the value implements the async iterable protocol, otherwise `false`.
 */
export function isAsyncIterable(value: unknown): value is AsyncIterable<unknown>
/**
 * Checks if a value is a BigInt.
 *
 *  @param value - The value to check
 *  @returns `true` if the value is a BigInt, otherwise `false`.
 */
export function isBigInt(value: unknown): value is bigint
/**
 * Checks if a value is a Blob.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a Blob instance, otherwise `false`.
 */
export function isBlob(value: unknown): value is Blob
/**
 *  Checks if a value is a boolean.
 *
 *  @param value - The value to check.
 *  @returns `true`, if the value is a boolean, otherwise `false`.
 */
export function isBool(value: unknown): value is boolean
/**
 * Checks if a value is a custom object (plain object excluding specific built-in types).
 *
 *  @param value - The value to check
 *  @returns `true` if the value is a custom object, otherwise `false`.
 */
export function isCustomObj(value: unknown): boolean
/**
 *  Guard function narrowing the type to be defined.
 *
 *  @param value - target value that can be not defined.
 *  @returns `true`, if it's neither `null` or `undefined`, otherwise `false`.
 */
export function isDefined<T>(value: T): value is NonNullable<T>
/**
 *  Checks if a property descriptor is editable.
 *
 *  @param descriptor - The property descriptor to check (optional).
 *  @returns `true` if the property descriptor is editable, otherwise `false`.
 */
export function isEditable(descriptor?: PropertyDescriptor): boolean
/**
 * Checks if a value is an `Error`.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is an `Error`, otherwise `false`.
 */
export function isError(value: unknown): value is Error
/**
 *  Checks if a value is a function.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a function, otherwise `false`.
 */
export function isFunction(value: unknown): value is AnyFunction
/**
 *  Checks if a function is a generator function.
 *
 *  @param func - The function to check.
 *  @returns `true` if the function is a generator function, otherwise `false`.
 */
export function isGenerator(func: unknown): func is GeneratorFunction
/**
 *  Checks if a value is iterable.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is iterable, otherwise `false`.
 */
export function isIterable(value: any): value is Iterable<unknown>
/**
 *  Guard function to narrow the type of the given value to `null`.
 *
 * @param value - target value
 * @returns `true`, if the value is `null`, otherwise `false`.
 */
export function isNull(value: unknown): value is null
/**
 *  Checks if a value is a valid number.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a valid number, otherwise `false`.
 */
export function isNumber(value: unknown): value is number
/**
 *  Checks if a value is an object (non-null).
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a valid object, otherwise `false`.
 */
export function isObj(value: unknown): value is AnyObject
/**
 *  Checks if a value is a string.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a string, otherwise `false`.
 */
export function isString(value: unknown): value is string
/**
 *  Checks if a value is a symbol.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a symbol, otherwise `false`.
 */
export function isSymbol(value: unknown): value is symbol
/**
 * Checks recursively if an array contains a value or sub-array deeply equal to the target value.
 *
 * @template T - The type of elements in the array and the target value.
 * @param arr - The array to search, which may contain nested arrays.
 * @param target - The value or array to search for.
 * @returns `true` if the array contains an element or sub-array deeply equal to the target, `false` otherwise.
 *
 * @remarks
 * - Time complexity: O(n * m) in worst case, where n is the total number of elements (including nested),
 *   and m is the maximum depth of nesting or length of the target array.
 */
export function arrContainsDeep<T>(source: MaybeArray<T>[], target: MaybeArray<T>): boolean
/**
 *  Checks whether two arrays are strictly equal.
 *
 *  @remarks
 *  Two arrays are considered strictly equal if:
 *  - Both arrays are not `null` or `undefined`.
 *  - Both arrays have the same length.
 *  - Corresponding elements at the same index are strictly equal (`===`).
 *
 *  @typeParam T - The type of elements in the arrays.
 *  @param arr1 - The first array to compare.
 *  @param arr2 - The second array to compare.
 *  @returns `true` if the arrays are strictly equal, otherwise `false`.
 */
export function arrEquals<T>(arr1: WithReadonly<AnyArray<T>>, arr2: AnyArray<T>): boolean
/**
 * Guard function to check if every element of the given array is unique.
 *
 * @param arr - target array.
 * @returns `true`, if the array only has unique elements, otherwise `false`.
 */
export function arrIsUnique<T>(arr: WithReadonly<AnyArray<T>>): boolean
/**
 *	Checks if a value is within a range inside the given array of sorted range pairs.
 *
 *	Example:
 *	```ts
 *		// the range pairs are [1, 3] and [6, 8]
 *		arrRangesIncludes([1, 3, 6, 8], 2)
 *		// returns true, because its between 1 and 3.
 *	```
 *	It fails if the array is empty or has an odd length (i.e. incomplete pairs).
 * @param arr - the sorted array of range pairs
 * @param value - the value to check for each range
 * @returns whether the value can be assigned to a range pair or not.
 */
export function arrRangesIncludes(arr: WithReadonly<AnyNumberArray>, value: number): boolean
/**
 *	Finds the index of the range pair the target number is in.
 *  The index is interpreted as the index of the minimum value of the range divided by 2 (and truncated if odd index).
 *
 *	Example:
 *	```ts
 *		// the range pairs are [1, 3] and [6, 8]
 *		arrRangesIndexOf([1, 3, 6, 8], 2)
 *		// returns 0, because its between 1 and 3.
 *	```
 *	It fails if the array is empty or has an odd length (i.e. incomplete pairs).
 * @param arr - the sorted array of range pairs
 * @param value - the value to check for each range
 * @returns the interpreted index of the pair
 */
export function arrRangesIndexOf(arr: WithReadonly<AnyNumberArray>, value: number): number
/**
 *  Removes a given element from a given array.
 *
 *  @param arr - target array.
 *  @param element - target element.
 */
export function arrRemove<T>(arr: T[], element: T): void
/**
 *  Swaps two values of given indices inside an array.
 *
 * @param arr - target array.
 * @param i1 - index of the first element to switch.
 * @param i2 - index of the second element to switch with.
 */
export function arrSwap(arr: unknown[], i1: number, i2: number): void
/**
 *  Checks if the source array contains elements from the target array
 *
 *	@public
 *  @param source - source array
 *  @param target - target array
 *
 *  @returns whether the source array contains elements from the target array.
 */
export function containsElementsFrom<T extends HasToString<unknown>>(source: T[], target: T[]): boolean
/**
 *  Compares two arrays with each others and takes nested arrays into consideration.
 *
 * @param arr1 - first possibly nested array.
 * @param arr2 - second possible nested array.
 * @returns
 */
export function deepArrEquals(arr1: MaybeArray<AnyArray<unknown>>, arr2: unknown[]): boolean
/**
 *  Ensures the given value is always returned as an array.
 *
 *  @param value - target value
 *  @returns either the same value, if it is an array, otherwise the target value wrapped inside an array.
 */
export function ensureArr<T>(value: MaybeArray<T>): T[]
/**
 *  Gets the last element of an array.
 *
 * @param arr - target array.
 * @param fallback - fallback value if the array is empty.
 * @returns either the last element or the fallback element, if the array is empty.
 */
export function last<T>(arr: WithReadonly<T[]>, fallback?: T): T | undefined
/**
 * Merges elements from a source array into a target array in place.
 * Appends all elements from the source array to the target array, modifying
 * the target directly.
 *
 * @param target - The target array to extend with elements from the source.
 * @param source - The source array (mutable or readonly) whose elements are appended to the target.
 *
 * @remarks
 * - Does not create a new array; modifies `target` directly.
 */
export function mergeArr<T, U>(target: WithReadonly<AnyArray<T>>, source: WithReadonly<AnyArray<U>>): void
/**
 * Generates all possible permutations of a given array using Heap's algorithm.
 * The function returns an array of arrays, where each sub-array is a unique
 * permutation of the input array.
 *
 * @param arr - The input array to permutate. Must contain distinct or non-distinct elements.
 * @returns An array of all possible permutations, where each permutation is a new array of type T[].
 *
 * @remarks
 * - The number of permutations is `n!` (factorial of the input array length).
 * - If the input array has duplicate elements, permutations will reflect those duplicates,
 *   but the total count will be reduced accordingly (e.g., [1, 1] yields [[1, 1]]).
 */
export function permutate<T>(arr: AnyArray<T>): AnyArray<T>[]
/**
 *  Shuffles an array in place using the Fisher-Yates (Knuth) shuffle algorithm
 *  and returns the shuffled array.
 *
 *  @param arr - The input array to be shuffled
 *  @returns The shuffled array (same reference as input)
 */
export function shuffle<T>(arr: AnyArray<T>): AnyArray<T>
/**
 *	Binary searches an index inside a sorted array.
 *
 * @param arr - sorted target array
 * @param value - the value to find
 * @param comparator - function comparing neighboring values and returns either `-x`, `0` or `x` depending on the order structure.
 * @param min - the minimum index of the array
 * @param max - the maximum index of the array
 * @returns the index of the target element.
 */
export function sortedIndexOf<T>(arr: WithReadonly<T[]>, value: T, comparator: (a: T, b: T) => number, min?: number, max?: number): number
/**
 *	Merges two sorted arrays. It's a binary merge algorithm that is faster than `mergeArr` of `compactor`.  Both arrays have to be sorted for it to work.
 *
 *  @param arr1 - array to merge
 *  @param arr2 - array to merge, can be of different type, but has to be handled in the comparator
 *  @param comparator - function to compare the both array values with. Works in the way of: negative number or 0 = first array, positive number = second array
 *  @param outputArr - the merged array. By passing it as a parameter, you can save extra time.
 *  @returns the merged array.
 */
export function sortedMergeArr<T, U = T>(
  arr1: T[],
  arr2: U[],
  comparator?: (a: T, b: U) => number,
  outputArr?: (T | U)[]
): (T | U)[]
/**
 *  Converts an array of Promises into an AsyncIterable.
 *
 *  @param arr - An array of Promises to be converted
 *  @returns An AsyncIterable that yields resolved values sequentially
 */
export function toAsyncIterable<T>(arr: Promise<T>[]): AsyncIterable<T>
/**
 *  Creates a bound function that maintains its context from wherever it's called.
 *
 *  @template T - The type of the context object extending AnyObject.
 *  @param context - The object containing the function to bind.
 *  @param key - The key of the function property to bind.
 *  @returns rhe bound function.
 *  @throws if the property at the specified key is not a function.
 */
export function bindSelf<T extends AnyObject>(context: T, key: keyof T): AnyFunction
/**
 *  A no-operation function that performs no action and returns undefined.
 *
 *  Useful as a default callback, placeholder, or when an empty function is required.
 *  This function intentionally does nothing and has no side effects.
 */
export function noop(...args: unknown[]): void
/**
 *  A type that represents a safe asynchronous function wrapper.
 */
export type AsyncSafeFunction<T extends (...args: any[]) => Promise<any>> =
    ((...args: Parameters<T>) => undefined | ReturnType<T>) & T;

/**
 *  A type that represents a safe synchronous function wrapper.
 */
export type SafeFunction<T extends (...args: any[]) => any> =
    ((...args: Parameters<T>) => undefined | ReturnType<T>) & T;

/**
 *  A type that represents a function that can only be successfully executed once.
 *  Subsequent calls reuse the result of the first successful execution.
 */
export type OnceFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): ReturnType<T>;
    called?: boolean;
    value?: ReturnType<T>;
} & T;

/**
 *  A type that represents an asynchronous function that can only be successfully executed once.
 *  Subsequent calls reuse the result of the first successful execution.
 */
export type AsyncOnceFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): Promise<ReturnType<T>>;
    called?: boolean;
    value?: ReturnType<T>;
} & T;
/**
 *  Creates a function that executes only once and caches its result.
 *
 *  Wraps the provided function so that it runs only on its first invocation.
 *  Subsequent calls return the cached result without re-executing the original function.
 *  The wrapped function includes `called` and `value` properties to track its state.
 *
 *  @template T - The type of the function to wrap, extending AnyFunction.
 *  @param fn - The function to execute only once.
 *  @returns A wrapped function that runs once and caches its result.
 */
export function once<T extends AnyFunction>(fn: T): OnceFunction<T>
/**
 * Creates an async function that executes only once and caches its result.
 *
 * Wraps the provided async function so that it runs only on its first invocation.
 * Subsequent calls return the cached result without re-executing the original function.
 * The wrapped function includes `called` and `value` properties to track its state.
 *
 * @template T - The type of the async function to wrap, extending AnyFunction.
 * @param fn - The async function to execute only once.
 * @returns A wrapped async function that runs once and caches its result.
 */
export function onceAsync<T extends AnyFunction>(fn: T): AsyncOnceFunction<T>
/**
 *  Wraps a function to make it "safe" by catching any errors and returning silently without issues.
 *
 *  @param fn - The function to make safe
 *  @returns A wrapped function that returns either the original result or undefined.
 */
export function safe<T extends AnyFunction>(fn: T): SafeFunction<T>
/**
 * Wraps an async function to safely handle errors by returning a Promise that
 * resolves to either the function's result or `undefined` if an error occurs.
 * The original function's properties are merged into the wrapped function.
 *
 * @param f - The async function to wrap
 * @returns A wrapped async function that never throws.
 */
export function safeAsync<T extends AsyncFunction>(f: T): AsyncSafeFunction<T>
/**
 *  Wraps a class constructor to safely create instances, returning `undefined`
 *  instead of throwing an error if construction fails.
 *
 *  @param ctor - The class constructor to wrap
 *  @returns A wrapped constructor function that returns an instance of T or undefined
 */
export function safeConstruct<T>(ctor: ClassConstructor<T>): (...args: any[]) => T | undefined
/**
 * Safely parses an unknown value into a number, returning 0 if the value cannot be converted.
 *
 * @param value - The value to parse into a number
 * @returns The parsed number, or 0 if the value cannot be converted
 */
export function safeParseNumber(value: unknown): number
