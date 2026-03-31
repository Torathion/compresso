import type { Fn, Obj } from 'typestar'
import isFunction from '../utils/guards/isFunction'

/**
 *  Creates a bound function that maintains its context from wherever it's called.
 *
 *  @param context - The object containing the function to bind.
 *  @param key - The key of the function property to bind.
 *  @returns rhe bound function.
 *  @throws if the property at the specified key is not a function.
 */
export default function bindSelf<T extends Obj>(context: T, key: keyof T): Fn {
  const f = context[key]
  if (isFunction(f)) return f.bind(context) as Fn
  throw new Error(`Can not bind context to property type ${typeof f}`)
}
