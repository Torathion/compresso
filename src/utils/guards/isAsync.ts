import type { AnyFn, AsyncFn } from 'typestar'

/**
 * Checks if a given function is an async function.
 *
 * @param func - The function to check
 * @returns `true` if the function is an async function, otherwise `false`
 */
export default function isAsync(func: AnyFn): func is AsyncFn {
  return !!func && func.constructor.name === 'AsyncFunction'
}
