import isFunction from './isFunction'
import isObj from './isObj'

/**
 *  Checks if a value is iterable.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is iterable, otherwise `false`.
 */
export default function isIterable(value: any): value is Iterable<unknown> {
  return !!value && isObj(value) && isFunction((value as any)[Symbol.iterator])
}
