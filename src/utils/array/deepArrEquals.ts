import type { AnyArray, MaybeArray } from 'typestar'
import isArray from '../guards/isArray'

/**
 *  Compares two arrays with each others and takes nested arrays into consideration.
 *
 * @param arr1 - first possibly nested array.
 * @param arr2 - second possible nested array.
 * @returns
 */
export default function deepArrEquals(arr1: MaybeArray<AnyArray<unknown>>, arr2: unknown[]): boolean {
  const len = arr1.length
  if (len !== arr2.length) return false
  let el, el2
  for (let i = len - 1; i >= 0; i--) {
    el = arr1[i]
    el2 = arr2[i]
    // Checks need to be separated like this for all tests to pass
    if (isArray(el) && isArray(el2)) {
      if (!deepArrEquals(el, el2)) return false
    } else if (el !== el2) return false
  }
  return true
}
