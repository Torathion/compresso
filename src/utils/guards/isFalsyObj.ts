import type { Obj } from 'typestar'
import { keysOf } from 'src'

/**
 * Checks if an object only has falsy properties.
 *
 * @param obj - The object to check.
 * @returns `true` if the object is false or not defined, `false` otherwise.
 */
export default function isFalsyObj(obj?: Obj): boolean {
  if (!obj) return true

  const keys = keysOf(obj)
  let i = keys.length

  while (i-- > 0) {
    if (obj[keys[i]]) return false
  }

  return true
}
