/**
 *  Checks if a value is a boolean.
 *
 *  @param value - The value to check.
 *  @returns `true`, if the value is a boolean, otherwise `false`.
 */
export default function isBool(value: unknown): value is boolean {
  return typeof value === 'boolean'
}
