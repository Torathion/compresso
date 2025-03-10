import { toAsyncIterable } from 'src'
import type { Primitive } from 'typestar'
import { describe, it, expect } from 'vitest'

describe('toAsyncIterable', () => {
  it('should convert an array of resolved promises to an async iterable', async () => {
    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
    const asyncIterable = toAsyncIterable(promises)
    const results: number[] = []

    for await (const value of asyncIterable) {
      results.push(value)
    }

    expect(results).toEqual([1, 2, 3])
  })

  it('should handle empty array of promises', async () => {
    const promises: Promise<number>[] = []
    const asyncIterable = toAsyncIterable(promises)
    const results: number[] = []

    for await (const value of asyncIterable) {
      results.push(value)
    }

    expect(results).toEqual([])
  })

  it('should preserve order of promises', async () => {
    const promises: Promise<number>[] = [
      new Promise(resolve => setTimeout(() => resolve(1), 30)),
      new Promise(resolve => setTimeout(() => resolve(2), 10)),
      new Promise(resolve => setTimeout(() => resolve(3), 20))
    ]
    const asyncIterable = toAsyncIterable(promises)
    const results: number[] = []

    for await (const value of asyncIterable) {
      results.push(value)
    }

    expect(results).toEqual([1, 2, 3])
  })

  it('should handle rejected promises', async () => {
    const promises = [Promise.resolve(1), Promise.reject(new Error('Test error')), Promise.resolve(3)]
    const asyncIterable = toAsyncIterable(promises)

    const iterator = asyncIterable[Symbol.asyncIterator]()

    expect(await iterator.next()).toEqual({ value: 1, done: false })

    await expect(iterator.next()).rejects.toThrow('Test error')
  })

  it('should work with different types', async () => {
    const promises: Promise<Primitive>[] = [Promise.resolve('hello'), Promise.resolve(42), Promise.resolve(true)]
    const asyncIterable = toAsyncIterable(promises)
    const results: Primitive[] = []

    for await (const value of asyncIterable) {
      results.push(value)
    }

    expect(results).toEqual(['hello', 42, true])
  })
})
