import type { AnyNumberArray, WithReadonly } from 'typestar'

/**
 *	Finds the index of the range pair the target number is in.
 *  The index is interpreted as the index of the minimum value of the range divided by 2 (and truncated if odd index).
 *
 *	Example:
 *	```ts
 *		// the range pairs are [1, 3] and [6, 8]
 *		arrRangesIndexOf([1, 3, 6, 8], 2)
 *		// returns 0, because its between 1 and 3.
 *	```
 *	It fails if the array is empty or has an odd length (i.e. incomplete pairs).
 * @param arr - the sorted array of range pairs
 * @param value - the value to check for each range
 * @returns the interpreted index of the pair
 */
export default function arrRangesIndexOf(arr: WithReadonly<AnyNumberArray>, value: number): number {
  let max = arr.length - 1
  if (!max || (max + 1) & 1 || value < arr[0] || value > arr[max]) return -1
  let min = 0

  while (max >= min) {
    let mid = ((min + max) >> 1) | 0
    // enforce the ranges to be pairwise
    if (mid & 1) mid--
    // check the range and go to the next ones.
    if (value > arr[mid + 1]) min = mid + 2
    else if (value < arr[mid]) max = mid - 1
    else return mid >> 1
  }
  return -1
}
