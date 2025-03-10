import type { WithReadonly } from "typestar"

/**
 *	Binary searches an index inside a sorted array.
 *
 * @param arr - sorted target array
 * @param value - the value to find
 * @param comparator - function comparing neighboring values and returns either `-x`, `0` or `x` depending on the order structure.
 * @param min - the minimum index of the array
 * @param max - the maximum index of the array
 * @returns the index of the target element.
 */
export default function sortedIndexOf<T>(arr: WithReadonly<T[]>, value: T, comparator: (a: T, b: T) => number, min = 0, max = arr.length - 1): number {
  let currIndex: number, compareResult: number, x: T
  while (min <= max) {
    currIndex = (min + max) >>> 1
    x = arr[currIndex]
    compareResult = comparator(x, value)
    if (!compareResult) return currIndex
    if (compareResult <= 0) min = currIndex + 1
    else max = currIndex - 1
  }
  return -1
}
