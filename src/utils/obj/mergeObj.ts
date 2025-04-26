import type { ShallowMergeResult } from 'src/types'
import type { Table } from 'typestar'
import { refMergeObj } from 'src/constants'

/**
 *  Merges two or more objects into one, overwriting duplicating keys depending on the order of the passed arguments (left to right).
 *  This function creates a new object instance on merge.
 *
 *  @param sources - all target objects to merge.
 *  @returns the merged object.
 */
export default function merge<T extends Table<unknown>[]>(...sources: T): ShallowMergeResult<T> {
  return refMergeObj({}, ...sources) as unknown as ShallowMergeResult<T>
}
