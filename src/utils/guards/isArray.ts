import type { MaybeArray } from 'typestar'

/**
 * Determines whether a given value is an array or not.
 *
 * @param value - target value.
 * @returns `true`, if the value is an array, otherwise false.
 */
export default function isArray<T>(value: MaybeArray<T>): value is T[] {
  return value?.constructor === Array
}
