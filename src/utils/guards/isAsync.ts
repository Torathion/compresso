import type { AnyFunction, AsyncFunction } from 'typestar'

/**
 * Checks if a given function is an async function.
 *
 * @param func - The function to check
 * @returns `true` if the function is an async function, otherwise `false`
 */
export default function isAsync(func: AnyFunction): func is AsyncFunction {
  return func.constructor.name === 'AsyncFunction'
}
