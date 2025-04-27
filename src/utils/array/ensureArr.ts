import type { MaybeArray } from 'typestar'
import { isArray } from 'src/constants'
import { isDefined } from '../guards'

/**
 *  Ensures the given value is always returned as an array.
 *
 *  @param value - target value
 *  @returns either the same value, if it is an array, otherwise the target value wrapped inside an array.
 */
export default function ensureArr<T>(value: MaybeArray<T>): T[] {
  if (!isDefined(value)) return []
  return isArray(value) ? value : [value]
}
