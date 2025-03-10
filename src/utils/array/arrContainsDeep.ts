import type { MaybeArray } from 'typestar'
import { isArray } from '../guards'
import deepArrEquals from './deepArrEquals'

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
export default function arrContainsDeep<T>(source: MaybeArray<T>[], target: MaybeArray<T>): boolean {
  const isTargetArray = isArray(target)
  for (const element of source) {
    const isElementArray = isArray(element)
    if (
      (isElementArray && isTargetArray && (deepArrEquals(element, target) || arrContainsDeep(element, target))) ||
      (isElementArray && arrContainsDeep(element, target)) ||
      (!isTargetArray && element === target)
    )
      return true
  }
  return false
}
