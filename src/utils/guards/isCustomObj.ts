import isArray from './isArray'
import isObj from './isObj'

/**
 * Checks if a value is a custom object (plain object excluding specific built-in types).
 *
 *  @param value - The value to check
 *  @returns `true` if the value is a custom object, otherwise `false`.
 */
export default function isCustomObj(value: unknown): boolean {
  return (isArray(value) || isObj(value)) && !(value instanceof RegExp) &&
  !(value instanceof Error) && !(value instanceof Date) && !(value instanceof Blob)
}
