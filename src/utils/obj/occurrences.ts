import type { Obj } from 'typestar'

/**
 *  Counts all occurrences of all property values of a given property name in an array of objects.
 *
 * @param arr - target array of objects.
 * @param prop - the target property name
 * @returns all occurrences of each value in a map.
 */
export default function occurrences<T extends Obj>(arr: T[], prop: keyof T): Map<T[keyof T], number> {
  const map = new Map<T[keyof T], number>()
  for (const item of arr) {
    const val = item[prop]
    map.set(val, (map.get(val) ?? 0) + 1)
  }

  return map
}
