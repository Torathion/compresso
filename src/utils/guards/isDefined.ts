import isNull from './isNull'

/**
 *  Guard function narrowing the type to be defined.
 *
 *  @param value - target value that can be not defined.
 *  @returns `true`, if it's neither `null` or `undefined`, otherwise `false`.
 */
export default function isDefined<T>(value: T): value is NonNullable<T> {
  return !isNull(value) && value !== undefined
}
