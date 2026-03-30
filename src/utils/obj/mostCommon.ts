import type { Obj } from 'typestar'

/**
 *  Determines the most common value of a given property name in an array of objects.
 *
 *  @param arr - target array of objects.
 *  @param prop - the property name to evaluate.
 *  @returns the most common value of the given property name.
 */
export default function mostCommon<T extends Obj>(arr: T[], prop: keyof T): T[keyof T] | undefined {
  if (!arr.length) return
  const map = new Map<T[keyof T], number>()
  let max = 0
  let commonItem: T[keyof T] | undefined

  for (let i = 0, len = arr.length; i < len; i++) {
    const val = arr[i][prop]
    const currentCount = (map.get(val) || 0) + 1
    map.set(val, currentCount)

    if (currentCount > max) {
      max = currentCount
      commonItem = val
    }
  }

  return commonItem
}
