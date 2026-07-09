import type { Obj } from 'typestar'
import { isArray, keysOf } from 'src/constants'
import isObj from './isObj'

/**
 * Checks if an object is deeply falsy.
 *
 * @param obj - The object to check.
 * @returns `true` if the object is false or not a valid object (e.g., null or undefined), `false` otherwise.
 */
export default function isDeepFalsyObj(obj?: Obj): boolean {
  if (!obj) return true

  const keys = keysOf(obj)
  let i = keys.length

  while (i-- > 0) {
    const prop = obj[keys[i]]
    if (isObj(prop) || isArray(prop)) {
      if (!isDeepFalsyObj(prop)) return false
    } else if (prop) {
      return false
    }
  }
  return true
}
