import { arrFrom } from 'src/constants'

/**
 * Merges two arrays and removes duplicates, returning a new array with unique elements.
 *
 * @template T - The type of the array elements, constrained to any array type.
 * @param arr1 - The first input array.
 * @param arr2 - The second input array (optional). If not provided, only `arr1` is processed.
 * @returns A new array containing unique elements from both input arrays, in the order of their first appearance.
 */
export default function uniqueMerge<T extends unknown[]>(arr1: T, arr2?: T): T {
    let arr = arr1.slice()
    if (arr2) arr = arr.concat(arr2)
    return arrFrom(new Set(arr)) as T
}
