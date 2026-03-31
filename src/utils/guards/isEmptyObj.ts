import type { Obj } from 'typestar'

/**
 * Checks if an object is empty (has no enumerable own properties).
 *
 * @param obj - The object to check for emptiness.
 * @returns `true` if the object is empty or not a valid object (e.g., null or undefined), `false` otherwise.
 */
export default function isEmptyObj(obj?: Obj): boolean {
  if (!obj) return true

  for (const x in obj) if (obj[x] != undefined) return false

  return true
}
