import type { Table } from 'typestar'
import { hasProp } from 'src/constants'

/**
 *  Extracts a property from a given object and deletes said property from it.
 *
 * @param obj - target object to extract from
 * @param key - property key of the property to extract.
 * @returns
 */
export default function extractProp<T, U extends Table<T>>(obj: U, key: keyof U): T | undefined {
  if (hasProp(obj, key)) {
    const value = obj[key]
    delete obj[key]
    return value
  }
}
