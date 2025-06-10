import type { Obj } from 'typestar'
import { refMergeObj } from 'src/constants'

/**
 *  Creates a shallow copy of the provided object.
 *  Top-level properties are copied to a new object, but nested objects or arrays retain the same references as in the original.
 *
 *  @template T - The type of the input object.
 *  @param obj - The input object to be copied.
 *  @returns A shallow copy of the input object.
 */
export default function copyObj<T extends Obj>(obj: T): T {
  return refMergeObj({}, obj)
}
