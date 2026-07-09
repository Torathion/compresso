import type { Obj } from 'typestar'
import { hasProp, keysOf } from 'src/constants'

// Preserve your original loose object check so Arrays are processed as Objects!
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

  // Do not process any further if it's primitive (Allows Arrays through!)
  if (!isObject(before) || !isObject(after)) return after

  const updated: Obj = {}
  let hasChanges = false // Tracks if we actually added anything to `updated`

  const beforeKeys = keysOf(before)
  let b = beforeKeys.length
  while (b-- > 0) {
    const key = beforeKeys[b]
    if (!hasProp(after, key)) {
      updated[key] = undefined
      hasChanges = true
    }
  }

  // 2. Replaces `for...in after`
  const afterKeys = keysOf(after)
  let a = afterKeys.length
  while (a-- > 0) {
    const key = afterKeys[a]
    if (hasProp(before, key)) {
      const difference = objDiff((before as any)[key], (after as any)[key], preserved)

      if (!isObject(difference) || keysOf(difference).length > 0) {
        updated[key] = difference
        hasChanges = true
      }
    } else {
      updated[key] = (after as any)[key]
      hasChanges = true
    }
  }

  if (preserved && hasChanges) {
    let p = preserved.length
    while (p-- > 0) {
      const key = preserved[p]
      if (hasProp(after, key)) {
        updated[key] = (after as Obj)[key]
      }
    }
  }

  return updated
}
