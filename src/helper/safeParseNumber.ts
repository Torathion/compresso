/**
 * Safely parses an unknown value into a number, returning 0 if the value cannot be converted.
 *
 * @param value - The value to parse into a number
 * @returns The parsed number, or 0 if the value cannot be converted
 */
export default function safeParseNumber(value: unknown): number {
  return value && !isNaN(+value) ? +value : 0
}
