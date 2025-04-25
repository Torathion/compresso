import type { DeepMergeResult } from 'src/types'
import type { Table } from 'typestar'
import { keysOf, refMergeObj } from 'src/constants'
import { isObj } from '../guards'

/**
 *  Deeply merges multiple objects into a new one.
 *  Nested objects are recursively merged, while non-object values overwrite existing keys.
 *  Non-object sources are skipped.
 *
 *  @param sources - The source objects to merge.
 *  @returns A new object containing the merged properties.
 */
export function deepMergeObj<T extends Table<unknown>[]>(...sources: T): DeepMergeResult<T> {
  const target: Table<unknown> = {}

  for (const source of sources) {
    if (!isObj(source)) continue // Skip non-objects
    for (const key of keysOf(source)) {
      if (isObj(source[key])) {
        // Recursively merge nested objects
        target[key] = deepMergeObj(target[key] ?? {} as any, source[key])
      } else {
        // Directly assign non-object values
        refMergeObj(target, { [key]: source[key] })
      }
    }
  }
  return target as DeepMergeResult<T>
}
