import type { Obj } from 'typestar'
import { hasProp, keysOf } from '../../constants'

/**
 *  Compares two objects for shallow equality by checking if they have the same keys and values.
 *
 *  @param o1 - The first object to compare
 *  @param o2 - The second object to compare
 *  @returns `true`, if objects have same keys and values, otherwise `false`.
 */
export default function equalsObj(o1: Obj, o2: Obj): boolean {
  const o1Keys = keysOf(o1)
  let i = o1Keys.length

  if (keysOf(o2).length !== i) {
    return false
  }

  while (i-- > 0) {
    const key = o1Keys[i]
    if (!hasProp(o2, key) || o1[key] !== o2[key]) {
      return false
    }
  }

  return true
}
