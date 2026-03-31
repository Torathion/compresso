import type { AsyncFn, Fn } from 'typestar'

export type AsyncOnceFunction<T extends Fn> = {
  (...args: Parameters<T>): Promise<ReturnType<T>>
  called?: boolean
  value?: ReturnType<T>
} & T
export type AsyncSafeFunction<T extends AsyncFn> = ((...args: Parameters<T>) => undefined | ReturnType<T>) & T

export type OnceFunction<T extends Fn> = {
  (...args: Parameters<T>): ReturnType<T>
  called?: boolean
  value?: ReturnType<T>
} & T

export type SafeFunction<T extends Fn> = ((...args: Parameters<T>) => undefined | ReturnType<T>) & T
