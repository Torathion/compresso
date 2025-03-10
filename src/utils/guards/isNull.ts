/**
 *  Guard function to narrow the type of the given value to `null`.
 *
 * @param value - target value
 * @returns `true`, if the value is `null`, otherwise `false`.
 */
export default function isNull(value: unknown): value is null {
  return !value && typeof value === 'object'
}
