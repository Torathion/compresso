import type { AnyFunction, AsyncFunction, Table } from 'typestar'

export type AsyncOnceFunction<T extends AnyFunction> = {
  (...args: Parameters<T>): Promise<ReturnType<T>>
  called?: boolean
  value?: ReturnType<T>
} & T
export type AsyncSafeFunction<T extends AsyncFunction> = ((...args: Parameters<T>) => undefined | ReturnType<T>) & T

/**
 *  Computes the result type of deep merging multiple plain objects.
 *  Handles single objects, multiple objects, or empty inputs by recursively applying MergeObjects.
 *
 *  @template T - An array of plain object types.
 */
export type DeepMergeResult<T extends Table<unknown>[]> = T extends [infer First, ...infer Rest]
  ? Rest extends Table<unknown>[]
    ? First extends Table<unknown>
      ? Rest extends [infer _, ...infer Rest2]
        ? Rest2 extends Table<unknown>[]
          ? MergeObjects<First, DeepMergeResult<Rest>>
          : First
        : First
      : unknown
    : unknown
  : unknown

/**
 *  Merges two plain object types, recursively combining nested objects.
 *  For overlapping keys, nested objects are merged, while non-object values are in a union.
 *  Non-overlapping keys are preserved from either T or U.
 *
 *  @template T - The first object type.
 *  @template U - The second object type.
 */
export type MergeObjects<T, U> = {
  [K in keyof (T & U)]: K extends keyof T & keyof U
    ? T[K] extends Table<T>
      ? U[K] extends Table<unknown>
        ? MergeObjects<T[K], U[K]>
        : T[K] | U[K]
      : T[K] | U[K]
    : K extends keyof T
      ? T[K]
      : K extends keyof U
        ? U[K]
        : never
}

export type OnceFunction<T extends AnyFunction> = {
  (...args: Parameters<T>): ReturnType<T>
  called?: boolean
  value?: ReturnType<T>
} & T

export type SafeFunction<T extends AnyFunction> = ((...args: Parameters<T>) => undefined | ReturnType<T>) & T

/**
 *  Computes the return type of shallow merging multiple plain objects.
 *  Later objects overwrite earlier ones for overlapping keys.
 *  Handles single, multiple, or empty inputs.
 *
 *  @template T - An array of plain object types.
 */
export type ShallowMergeResult<T extends Table<unknown>[]> = T extends [infer First, ...infer Rest]
  ? Rest extends Table<unknown>[]
    ? First extends Table<unknown>
      ? Rest extends [infer _, ...infer Rest2]
        ? Rest2 extends Table<unknown>[]
          ? ShallowMergeObjects<First, ShallowMergeResult<Rest>>
          : First
        : First
      : unknown
    : unknown
  : unknown

/**
 *  Merges two plain object types for a shallow merge.
 *  Overlapping keys take the type of the second object (U).
 *  Non-overlapping keys are preserved from T or U.
 *
 *  @template T - The first object type.
 *  @template U - The second object type.
 */
type ShallowMergeObjects<T, U> = {
  [K in keyof (T & U)]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never
}
