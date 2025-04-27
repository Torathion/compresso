import type { AnyObject } from 'typestar'
import { isArray } from 'src/constants'
import getKeysForEqualsObj from 'src/internal/getKeysForObjEquals'
import deepArrEquals from '../array/deepArrEquals'
import isObj from '../guards/isObj'

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
export default function deepEqualsObj(o1: AnyObject, o2: AnyObject): boolean {
  const keys = getKeysForEqualsObj(o1, o2)
  if (!keys) return false
  for (const key of keys) {
    const v1 = o1[key]
    const v2 = o2[key]
    if (isObj(v1)) return isObj(v2) ? deepEqualsObj(v1, v2) : false
    else if (isArray(v1)) return isArray(v2) ? deepArrEquals(v1, v2) : false
    else if (v1 !== v2) return false
  }
  return true
}
