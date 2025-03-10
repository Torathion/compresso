import toObjString from '../obj/toObjString'

const errorTags = new Set(['[object Error]', '[object DOMException]', '[object DOMError]', '[object Exception]'])

/**
 * Checks if a value is an `Error`.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is an `Error`, otherwise `false`.
 */
export default function isError(value: unknown): value is Error {
  return value instanceof Error || errorTags.has(toObjString(value))
}
