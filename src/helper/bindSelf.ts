import type { AnyFunction, AnyObject } from 'typestar'
import isFunction from '../utils/guards/isFunction'

/**
 *  Creates a bound function that maintains its context from wherever it's called.
 *
 *  @template T - The type of the context object extending AnyObject.
 *  @param context - The object containing the function to bind.
 *  @param key - The key of the function property to bind.
 *  @returns rhe bound function.
 *  @throws if the property at the specified key is not a function.
 */
export default function bindSelf<T extends AnyObject>(context: T, key: keyof T): AnyFunction {
  const f = context[key]
  if (isFunction(f)) return f.bind(context) as AnyFunction
  throw new Error(`Can not bind context to property type ${typeof f}`)
}
