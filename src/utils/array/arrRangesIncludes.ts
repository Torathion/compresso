import type { AnyNumberArray, WithReadonly } from 'typestar'

/**
 *	Checks if a value is within a range inside the given array of sorted range pairs.
 *
 *	Example:
 *	```ts
 *		// the range pairs are [1, 3] and [6, 8]
 *		arrRangesIncludes([1, 3, 6, 8], 2)
 *		// returns true, because its between 1 and 3.
 *	```
 *	It fails if the array is empty or has an odd length (i.e. incomplete pairs).
 * @param arr - the sorted array of range pairs
 * @param value - the value to check for each range
 * @returns whether the value can be assigned to a range pair or not.
 */
export default function arrRangesIncludes(arr: WithReadonly<AnyNumberArray>, value: number): boolean {
  let max = arr.length - 1
  if (!max || (max + 1) & 1 || value < arr[0] || value > arr[max]) return false
  let min = 0

  while (max >= min) {
    let mid = ((min + max) >> 1) | 0
    // enforce the ranges to be pairwise
    if (mid & 1) mid--
    // check the range and go to the next ones.
    if (value > arr[mid + 1]) min = mid + 2
    else if (value < arr[mid]) max = mid - 1
    else return true
  }
  return false
}
