import type { Obj } from 'typestar'
import getKeysForEqualsObj from 'src/internal/getKeysForObjEquals'

/**
 *  Compares two objects for shallow equality by checking if they have the same keys and values.
 *
 *  @param o1 - The first object to compare
 *  @param o2 - The second object to compare
 *  @returns `true`, if objects have same keys and values, otherwise `false`.
 */
export default function equalsObj(o1: Obj, o2: Obj): boolean {
  const keys = getKeysForEqualsObj(o1, o2)
  if (!keys) return false
  for (const key of keys) {
    if (o1[key] !== o2[key]) return false
  }
  return true
}
