import type { AnyFn } from 'typestar'

/**
 *  Checks if a value is a function.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a function, otherwise `false`.
 */
export default function isFunction(value: unknown): value is AnyFn {
  return typeof value === 'function'
}
