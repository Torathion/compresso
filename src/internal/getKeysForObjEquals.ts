import type { AnyObject } from 'typestar'
import { keysOf } from 'src/constants'

/**
 *  Function to handle keys for `equalsObj` and `deepEqualsObj`.
 *
 * @param o1 - First object to compare.
 * @param o2 - Second object to compare.
 * @returns either `undefined`, if the comparison should terminate with `false`, otherwise the `Set` of keys.
 */
export default function getKeysForEqualsObj(o1: AnyObject, o2: AnyObject): Set<string> | undefined {
  const o1Keys = keysOf(o1)
  const o2Keys = keysOf(o2)
  if (o1Keys.length !== o2Keys.length) return
  const keys = new Set(o1Keys.concat(o2Keys))
  if (keys.size > o1Keys.length) return
  return keys
}
