import type { AnyFunction, AsyncFunction } from 'typestar'

export type AsyncOnceFunction<T extends AnyFunction> = {
  (...args: Parameters<T>): Promise<ReturnType<T>>
  called?: boolean
  value?: ReturnType<T>
} & T
export type AsyncSafeFunction<T extends AsyncFunction> = ((...args: Parameters<T>) => undefined | ReturnType<T>) & T

export type OnceFunction<T extends AnyFunction> = {
  (...args: Parameters<T>): ReturnType<T>
  called?: boolean
  value?: ReturnType<T>
} & T

export type SafeFunction<T extends AnyFunction> = ((...args: Parameters<T>) => undefined | ReturnType<T>) & T
