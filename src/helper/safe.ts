import type { SafeFunction } from 'src/types'
import type { Fn } from 'typestar'
import { refMergeObj } from 'src/constants'

/**
 *  Wraps a function to make it "safe" by catching any errors and returning silently without issues.
 *
 *  @param fn - The function to make safe
 *  @returns A wrapped function that returns either the original result or undefined.
 */
export default function safe<T extends Fn>(fn: T): SafeFunction<T> {
  const f = (...args: Parameters<T>): undefined | ReturnType<T> => {
    try {
      return fn(...args)
    } catch {}
  }
  refMergeObj(f, fn)
  return f as SafeFunction<T>
}
