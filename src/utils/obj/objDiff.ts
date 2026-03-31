import type { Obj } from 'typestar'
import { hasProp } from 'src/constants'
import isEmptyObj from '../guards/isEmptyObj'
import isObj from '../guards/isObj'

const isObject = (o: unknown): o is object => o != undefined && typeof o === 'object'

/**
 *  Generates a diff object between two same-shaped objects to only use a partial structure with only the changed values.
 *  Intended to be used for update requests in databases, therefore it has a third optional argument to preserve property names
 *  for nested objects identification.
 *
 *  @param before - object before the update.
 *  @param after - object after the update.
 *  @param opts - keys to preserve and keep in the update object. (optional)
 *  @returns the update object with only the updated (and preserved) property values.
 */
export default function objDiff<T>(before: T, after: T, preserved?: (string | number)[]): any {
  // Same reference, do not process any further
  if (before === after) return {}

  // Do not process any further if it's primitive
  if (!isObject(before) || !isObject(after)) return after // return updated after
  const updated: Obj = {}

  for (const key in before) {
    if (!hasProp(after, key)) {
      updated[key] = undefined
    }
  }

  for (const key in after) {
    if (hasProp(before, key)) {
      const difference = objDiff(before[key], after[key], preserved)

      // Only insert into update object if the difference object has properties or the difference is a primitive value.
      if (!isEmptyObj(difference) || !isObj(difference)) {
        updated[key] = difference
      }
    } else {
      updated[key] = after[key]
    }
  }

  // Preserve specified properties when the difference object is not empty.
  if (preserved && !isEmptyObj(updated)) {
    for (const key of preserved) {
      if (hasProp(after, key)) {
        updated[key] = (after as Obj)[key]
      }
    }
  }

  return updated
}
