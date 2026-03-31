import type { Obj } from 'typestar'
import isObj from '../guards/isObj'

/**
 *  Searches an array of objects for the first object where a nested property (specified by a dot-separated key path)
 *  matches the given value.
 *
 *  @template T - The type of objects in the source array
 *  @param source - The array of objects to search.
 *  @param key - The property key, which may include dot-separated segments for nested access.
 *  @param value - The value to match against the nested property.
 *  @returns The first matching object from the array, or `undefined` if none found.
 *  @example
 *  const users = [
 *    { id: 1, profile: { name: 'Alice' } },
 *    { id: 2, profile: { name: 'Bob' } }
 *  ];
 *  findByNested(users, 'profile.name', 'Alice'); // Returns { id: 1, profile: { name: 'Alice' } }
 */
export default function findByNested<T extends Obj>(source: T[], key: string, value: unknown): T | undefined {
  const segments = key.includes('.') ? key.split('.') : [key]
  const depth = segments.length
  for (let i = 0, len = source.length; i <= len; i++) {
    let current = source[i]

    // Walk down the segments
    for (let d = 0; d < depth; d++) {
      if (!isObj(current)) break
      current = current[segments[d]]
    }

    if (current === value) return source[i]
  }
  return undefined
}
