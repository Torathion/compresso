import toObjString from '../obj/toObjString'

const errorTags = new Set(['[object DOMError]', '[object DOMException]', '[object Error]', '[object Exception]'])

/**
 * Checks if a value is an `Error`.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is an `Error`, otherwise `false`.
 */
export default function isError(value: unknown): value is Error {
  return value instanceof Error || errorTags.has(toObjString(value))
}
