import type { AnyArray, MaybeArray } from 'typestar'
import { isArray } from 'src/constants'
import { isObj } from '../guards'
import { deepEqualsObj } from '../obj'

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
  let v1, v2
  for (let i = len - 1; i >= 0; i--) {
    v1 = arr1[i]
    v2 = arr2[i]
    // Checks need to be separated like this for all tests to pass
    if (isArray(v1) && isArray(v2)) return deepArrEquals(v1, v2)
    else if (isObj(v1) && isObj(v2)) return deepEqualsObj(v1, v2)
    else if (v1 !== v2) return false
  }
  return true
}
