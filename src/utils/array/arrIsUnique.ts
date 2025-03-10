import type { AnyArray, WithReadonly } from 'typestar'

/**
 * Guard function to check if every element of the given array is unique.
 *
 * @param arr - target array.
 * @returns `true`, if the array only has unique elements, otherwise `false`.
 */
export default function arrIsUnique<T>(arr: WithReadonly<AnyArray<T>>): boolean {
  if (!arr.length) return false
  const set = new Set()
  let item
  for (let i = arr.length - 1; i >= 0; i--) {
    item = arr[i]
    if (set.has(item)) return false
    set.add(item)
  }
  return true
}
