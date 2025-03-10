import { isAsyncIterable } from 'src'
import { describe, it, expect } from 'vitest'

describe('isAsyncIterable', () => {
  it('should return true for async generator output', async () => {
    async function* asyncGen() {
      yield 1
    }
    const gen = asyncGen()
    expect(isAsyncIterable(gen)).toBe(true)
  })

  it('should return false for regular objects', () => {
    expect(isAsyncIterable({})).toBe(false)
    expect(isAsyncIterable({ a: 1 })).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isAsyncIterable(null)).toBe(false)
    expect(isAsyncIterable(undefined)).toBe(false)
  })

  it('should return false for primitive types', () => {
    expect(isAsyncIterable(42)).toBe(false)
    expect(isAsyncIterable('string')).toBe(false)
    expect(isAsyncIterable(true)).toBe(false)
    expect(isAsyncIterable(Symbol('test'))).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(isAsyncIterable([])).toBe(false)
    expect(isAsyncIterable([1, 2, 3])).toBe(false)
  })

  it('should return false for sync iterables', () => {
    function* syncGen() {
      yield 1
    }
    const syncIter = syncGen()
    expect(isAsyncIterable(syncIter)).toBe(false)
  })

  it('should return true for custom async iterable', () => {
    const customAsyncIterable = {
      async *[Symbol.asyncIterator]() {
        yield 1
        yield 2
      }
    }
    expect(isAsyncIterable(customAsyncIterable)).toBe(true)
  })

  it('should return false for object with non-function asyncIterator', () => {
    const fakeIterable = {
      [Symbol.asyncIterator]: 'not a function'
    }
    expect(isAsyncIterable(fakeIterable)).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isAsyncIterable(() => {})).toBe(false)
    expect(isAsyncIterable(async () => {})).toBe(false)
  })

  it('should work with TypeScript type narrowing', async () => {
    const value: unknown = {
      async *[Symbol.asyncIterator]() {
        yield 1
      }
    }
    if (isAsyncIterable(value)) {
      // TypeScript knows value is AsyncIterable<unknown> here
      const iterator = value[Symbol.asyncIterator]()
      expect(typeof iterator.next).toBe('function')
    }
  })
})
