import type { Obj } from 'typestar'
import { hasProp, isArray, keysOf } from 'src/constants'
import deepArrEquals from '../array/deepArrEquals'
import isObj from '../guards/isObj'

/**
 *  Performs a deep equality comparison between two objects.
 *
 *  Compares all properties recursively, including nested objects and arrays.
 *  Returns true only if all properties and their values are strictly equal (===)
 *  and the objects have identical structure.
 *
 *  @param o1 - First object to compare
 *  @param o2 - Second object to compare
 *  @returns `true` if objects are deeply equal, otherwise `false`.
 */
export default function deepEqualsObj(o1: Obj, o2: Obj): boolean {
  const o1Keys = keysOf(o1)
  let i = o1Keys.length

  if (keysOf(o2).length !== i) {
    return false
  }

  while (i-- > 0) {
    const key = o1Keys[i]
    if (!hasProp(o2, key)) return false

    const v1 = o1[key]
    const v2 = o2[key]

    if (isObj(v1)) {
      if (!isObj(v2) || !deepEqualsObj(v1, v2)) return false
    } else if (isArray(v1)) {
      if (!isArray(v2) || !deepArrEquals(v1, v2)) return false
    } else if (v1 !== v2) {
      return false
    }
  }

  return true
}
