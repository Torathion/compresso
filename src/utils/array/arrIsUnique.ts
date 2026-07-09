import type { Arr, WithReadonly } from 'typestar'

/**
 * Guard function to check if every element of the given array is unique.
 *
 * @param arr - target array.
 * @returns `true`, if the array only has unique elements, otherwise `false`.
 */
export default function arrIsUnique<T>(arr: WithReadonly<Arr<T>>): boolean {
  if (!arr.length) return false
  const set = new Set()
  let item
  let i = arr.length
  while (i-- > 0) {
    item = arr[i]
    if (set.has(item)) return false
    set.add(item)
  }
  return true
}
