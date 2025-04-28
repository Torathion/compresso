import type { ArrayToIntersect } from 'typestar'
import { refMergeObj } from 'src/constants'

/**
 *  Merges two or more objects into one, overwriting duplicating keys depending on the order of the passed arguments (left to right).
 *  This function creates a new object instance on merge.
 *
 *  @param sources - all target objects to merge.
 *  @returns the merged object.
 */
export default function merge<T extends object[]>(...sources: T): ArrayToIntersect<T> {
  return refMergeObj({}, ...sources)
}
