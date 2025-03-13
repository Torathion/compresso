import type { ClassConstructor } from 'typestar'

/**
 *  Wraps a class constructor to safely create instances, returning `undefined`
 *  instead of throwing an error if construction fails.
 *
 *  @param ctor - The class constructor to wrap
 *  @returns A wrapped constructor function that returns an instance of T or undefined
 */
export default function safeConstruct<T>(ctor: ClassConstructor<T>): (...args: any[]) => T | undefined {
  return (...args: ConstructorParameters<ClassConstructor<T>>): T | undefined => {
    try {
      return new ctor(...args)
    } catch {}
  }
}
