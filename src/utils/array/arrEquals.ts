import type { AnyArray, WithReadonly } from 'typestar'

/**
 *  Checks whether two arrays are strictly equal.
 *
 *  @remarks
 *  Two arrays are considered strictly equal if:
 *  - Both arrays are not `null` or `undefined`.
 *  - Both arrays have the same length.
 *  - Corresponding elements at the same index are strictly equal (`===`).
 *
 *  @typeParam T - The type of elements in the arrays.
 *  @param arr1 - The first array to compare.
 *  @param arr2 - The second array to compare.
 *  @returns `true` if the arrays are strictly equal, otherwise `false`.
 */
export default function arrEquals<T>(arr1: WithReadonly<AnyArray<T>>, arr2: AnyArray<T>): boolean {
  const len = arr1.length
  if (len !== arr2.length) return false
  for (let i = len - 1; i >= 0; i--) if (arr1[i] !== arr2[i]) return false
  return true
}
