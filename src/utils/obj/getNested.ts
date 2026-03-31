import type { Obj } from 'typestar'
import isObj from '../guards/isObj'

/**
 *  Retrieves the value of a nested property from an object, specified by a dot-separated key path.
 *
 *  @template T - The expected return type of the nested value.
 *  @param source - The source object to access.
 *  @param key - The property key, which may include dot-separated segments for nested access.
 *  @returns The value at the nested path, or `undefined` if not found.
 *  @example
 *  const user = { id: 1, profile: { name: 'Alice', address: { city: 'Berlin' } } };
 *  getNested<string>(user, 'profile.address.city'); // Returns 'Berlin'
 *  getNested(user, 'invalid.path'); // Returns undefined
 */
export default function getNested<T>(source: Obj, key: string): T | undefined {
  if (!key.includes('.')) return source[key]
  const segments = key.split('.')
  let current = source

  const depth = segments.length
  let d = 0
  for (; d < depth; d++) {
    if (!isObj(current)) break
    current = current[segments[d]]
  }

  return d === depth ? current : undefined
}
