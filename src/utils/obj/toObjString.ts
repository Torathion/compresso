/**
 *  Converts a value to its object string representation.
 *
 *  @param value - The value to convert to a string representation.
 *  @returns A string representing the object's class, such as "[object Number]", "[object String]", etc.
 */
export default function toObjString(value: unknown): string {
  return Object.prototype.toString.call(value)
}
