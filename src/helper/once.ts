import { refMergeObj } from 'src/constants'
import type { OnceFunction } from 'src/types'
import type { AnyFunction } from 'typestar'

/**
 *  Creates a function that executes only once and caches its result.
 *
 *  Wraps the provided function so that it runs only on its first invocation.
 *  Subsequent calls return the cached result without re-executing the original function.
 *  The wrapped function includes `called` and `value` properties to track its state.
 *
 *  @template T - The type of the function to wrap, extending AnyFunction.
 *  @param fn - The function to execute only once.
 *  @returns A wrapped function that runs once and caches its result.
 */
export default function once<T extends AnyFunction>(fn: T): OnceFunction<T> {
  const f: OnceFunction<T> = ((...args: Parameters<T>): ReturnType<T> => {
    if (f.called) return f.value!
    f.called = true
    return (f.value = fn(...args))
  }) as any
  f.called = false
  refMergeObj(f, fn)
  return f
}
