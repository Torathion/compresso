import { refMergeObj } from "src/constants"
import type { AsyncSafeFunction } from "src/types"
import type { AsyncFunction } from "typestar"

/**
 * Wraps an async function to safely handle errors by returning a Promise that
 * resolves to either the function's result or `undefined` if an error occurs.
 * The original function's properties are merged into the wrapped function.
 *
 * @param f - The async function to wrap
 * @returns A wrapped async function that never throws.
 */
export default function safeAsync<T extends AsyncFunction>(f: T): AsyncSafeFunction<T> {
    const fn = async (...args: Parameters<T>): Promise<undefined | ReturnType<T>> => {
        try {
            return (await f(...args)) as any
        } catch {}
    }
    refMergeObj(fn, f)
    return fn as AsyncSafeFunction<T>
}
