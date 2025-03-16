import type { WithReadonly } from 'typestar'

/**
 *  Gets the last element of an array.
 *
 * @param arr - target array.
 * @param fallback - fallback value if the array is empty.
 * @returns either the last element or the fallback element, if the array is empty.
 */
export default function last<T>(arr: WithReadonly<T[]>, fallback?: T): T | undefined {
  const len = arr.length
  return len > 0 ? arr.at(-1) : fallback
}
