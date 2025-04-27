import type { AnyArray, Primitive } from 'typestar'
import { arrFrom } from 'src/constants'

/**
 *  Creates a new array with unique elements from the input array.
 *
 *  @template T - The type of the array elements, constrained to any array type.
 *  @param arr - The input array from which to remove duplicates.
 *  @returns A new array containing only unique elements from the input array, in the order of their first appearance.
 */
export default function unique<T extends AnyArray<Primitive>>(arr: T): T {
  return arrFrom(new Set(arr)) as T
}
