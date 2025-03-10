import { refMergeObj } from "src/constants";
import type { AsyncOnceFunction } from "src/types";
import type { AnyFunction } from "typestar";

/**
 * Creates an async function that executes only once and caches its result.
 *
 * Wraps the provided async function so that it runs only on its first invocation.
 * Subsequent calls return the cached result without re-executing the original function.
 * The wrapped function includes `called` and `value` properties to track its state.
 *
 * @template T - The type of the async function to wrap, extending AnyFunction.
 * @param fn - The async function to execute only once.
 * @returns A wrapped async function that runs once and caches its result.
 */
export default function onceAsync<T extends AnyFunction>(fn: T): AsyncOnceFunction<T> {
    const f: AsyncOnceFunction<T> = (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
        if (f.called) return f.value!;
        f.called = true;
        return (f.value = await fn(...args));
    }) as any;
    f.called = false;
    refMergeObj(f, fn);
    return f;
}
