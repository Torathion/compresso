/**
 * Checks if a value is a BigInt.
 *
 *  @param value - The value to check
 *  @returns `true` if the value is a BigInt, otherwise `false`.
 */
export default function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}
