import isFunction from './isFunction'
import isObj from './isObj'

/**
 *  Checks if a value is an async iterable.
 *
 *  @param value - The value to check.
 *  @returns `true`, if the value implements the async iterable protocol, otherwise `false`.
 */
export default function isAsyncIterable(value: any): value is AsyncIterable<unknown> {
  return !!value && isObj(value) && isFunction((value as any)[Symbol.asyncIterator])
}
