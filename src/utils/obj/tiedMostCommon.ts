import type { Obj } from 'typestar'

/**
 *  Finds the most common values of a property name in an array of objects.
 *  Key difference towards `mostCommon` is that it returns an array of all values that have a tied most common occurrence.
 *
 *  @param arr - target array of objects.
 *  @param prop - target property to evaluate.
 *  @returns all values with the most common occurrence.
 */
export default function tiedMostCommon<T extends Obj>(arr: T[], prop: keyof T): T[keyof T][] {
  if (arr.length === 0) return []

  const freqMap = new Map<T[keyof T], number>()
  let maxCount = 0

  // First pass: build frequencies and find maxCount
  for (let i = 0, len = arr.length; i < len; i++) {
    const val = arr[i][prop]
    const currentCount = (freqMap.get(val) || 0) + 1
    freqMap.set(val, currentCount)
    if (currentCount > maxCount) {
      maxCount = currentCount
    }
  }

  // Second pass: collect all with maxCount (O(k), negligible)
  const mostCommon: T[keyof T][] = []
  for (const entry of freqMap.entries()) {
    if (entry[1] === maxCount) {
      mostCommon.push(entry[0])
    }
  }

  return mostCommon
}
