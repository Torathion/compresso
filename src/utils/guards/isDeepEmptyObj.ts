import type { Obj } from 'typestar'
import { isArray } from 'src/constants'
import isObj from './isObj'

/**
 * Checks if an object is empty (has no enumerable own properties).
 *
 * @param obj - The object to check for emptiness.
 * @returns `true` if the object is empty or not a valid object (e.g., null or undefined), `false` otherwise.
 */
export default function isDeepEmptyObj(obj: Obj): boolean {
  if (!obj) return true
  /* eslint-disable  guard-for-in */
  for (const x in obj) {
    const prop = obj[x]
    if (isObj(prop)) {
      if (!isDeepEmptyObj(prop)) return false
    } else if (isArray(prop)) {
      if (!isDeepEmptyObj(prop)) return false
    } else if (prop != undefined) return false
  }
  /* eslint-enable  guard-for-in */
  return true
}
