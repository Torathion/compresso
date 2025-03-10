import type { TypedArray } from 'typestar'
import arrContainsDeep from './arrContainsDeep'

type AnyArray<T> = T[] | TypedArray

/**
 * Generates all possible permutations of a given array using Heap's algorithm.
 * The function returns an array of arrays, where each sub-array is a unique
 * permutation of the input array.
 *
 * @param arr - The input array to permutate. Must contain distinct or non-distinct elements.
 * @returns An array of all possible permutations, where each permutation is a new array of type T[].
 *
 * @remarks
 * - The number of permutations is `n!` (factorial of the input array length).
 * - If the input array has duplicate elements, permutations will reflect those duplicates,
 *   but the total count will be reduced accordingly (e.g., [1, 1] yields [[1, 1]]).
 */
export default function permutate<T>(arr: AnyArray<T>): AnyArray<T>[] {
  const len = arr.length
  const perms: AnyArray<T>[] = [arr.slice()]
  const cache = new Array(len).fill(0)
  let i = 1,
    k: number,
    p,
    perm: AnyArray<T>

  while (i < len) {
    if (cache[i] < i) {
      k = i & 1 && cache[i]
      p = arr[i]
      arr[i] = arr[k]
      arr[k] = p
      ++cache[i]
      i = 1
      perm = arr.slice()
      if (!arrContainsDeep(perms, perm)) perms.push(perm)
    } else {
      cache[i] = 0
      ++i
    }
  }

  return perms
}
