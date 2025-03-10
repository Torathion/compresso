import type { HasToString } from 'typestar'

/**
 *  Checks if the source array contains elements from the target array
 *
 *	@public
 *  @param source - source array
 *  @param target - target array
 *
 *  @returns whether the source array contains elements from the target array.
 */
export default function containsElementsFrom<T extends HasToString<unknown>>(source: T[], target: T[]): boolean {
  const lookup: Record<string, T> = {}
  let i: number
  for (i = target.length - 1; i >= 0; i--) lookup[target[i].toString()] = target[i]
  for (i = source.length - 1; i >= 0; i--) if (lookup[source[i].toString()]) return true
  return false
}
