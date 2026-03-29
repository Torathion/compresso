import type { Arr, WithReadonly } from 'typestar'

/**
 * Merges elements from a source array into a target array in place.
 * Appends all elements from the source array to the target array, modifying
 * the target directly.
 *
 * @param target - The target array to extend with elements from the source.
 * @param source - The source array (mutable or readonly) whose elements are appended to the target.
 *
 * @remarks
 * - Does not create a new array; modifies `target` directly.
 */
export default function mergeArr<T, U>(target: WithReadonly<Arr<T>>, source: WithReadonly<Arr<U>>): void {
  Array.prototype.push.apply(target, source as any)
}
