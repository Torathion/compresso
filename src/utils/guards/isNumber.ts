/**
 *  Checks if a value is a valid number.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a valid number, otherwise `false`.
 */
export default function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value)
}
