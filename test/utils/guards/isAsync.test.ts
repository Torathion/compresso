import isAsync from 'src/utils/guards/isAsync'
import { describe, it, expect } from 'vitest'

describe('isAsync', () => {
  it('should return true for async functions', () => {
    const asyncFunc = async () => 42
    expect(isAsync(asyncFunc)).toBe(true)
  })

  it('should return false for regular functions', () => {
    const syncFunc = () => 42
    expect(isAsync(syncFunc)).toBe(false)
  })

  it('should return false for arrow functions without async', () => {
    const arrowFunc = () => Promise.resolve(42)
    expect(isAsync(arrowFunc)).toBe(false)
  })

  it('should return true for async function with parameters', () => {
    const asyncFunc = async (a: number, b: string) => a + b
    expect(isAsync(asyncFunc)).toBe(true)
  })

  it('should return false for function returning Promise', () => {
    const promiseFunc = function () {
      return Promise.resolve(42)
    }
    expect(isAsync(promiseFunc)).toBe(false)
  })

  it('should return true for async method in object', () => {
    const obj = {
      async method() {
        return 42
      }
    }
    expect(isAsync(obj.method)).toBe(true)
  })

  it('should return false for non-function values', () => {
    expect(isAsync(42 as any)).toBe(false)
    expect(isAsync('string' as any)).toBe(false)
    expect(isAsync({} as any)).toBe(false)
    expect(isAsync(null as any)).toBe(false)
    expect(isAsync(undefined as any)).toBe(false)
  })

  it('should return true for bound async function', () => {
    const asyncFunc = async () => 42
    const boundFunc = asyncFunc.bind(null)
    expect(isAsync(boundFunc)).toBe(true)
  })
})
