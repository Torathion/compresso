import type { AnyObject } from 'typestar'

/**
 *  Checks if a value is an object (non-null).
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a valid object, otherwise `false`.
 */
export default function isObj(value: unknown): value is AnyObject {
  return typeof value === 'object' && value !== null
}
