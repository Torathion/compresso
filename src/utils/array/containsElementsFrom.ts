import type { Stringifyable } from 'typestar'

/**
 *  Checks if the source array contains elements from the target array
 *
 *	@public
 *  @param source - source array
 *  @param target - target array
 *
 *  @returns whether the source array contains elements from the target array.
 */
export default function containsElementsFrom<T extends Stringifyable<unknown>>(source: T[], target: T[]): boolean {
  const lookup: Record<string, T> = {}
  let i = target.length
  while (i-- > 0) lookup[target[i].toString()] = target[i]
  i = source.length
  while (i-- > 0) if (lookup[source[i].toString()]) return true
  return false
}
