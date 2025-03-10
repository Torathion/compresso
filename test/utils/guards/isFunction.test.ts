import { isFunction } from 'src'
import { describe, it, expect } from 'vitest'

describe('isFunction', () => {
  it('should return true for arrow functions', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction((a: number) => a + 1)).toBe(true)
  })

  it('should return true for traditional functions', () => {
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(function namedFunc() {})).toBe(true)
  })

  it('should return true for async functions', () => {
    expect(isFunction(async () => {})).toBe(true)
    expect(isFunction(async function () {})).toBe(true)
  })

  it('should return true for bound functions', () => {
    const func = function () {}
    const boundFunc = func.bind(null)
    expect(isFunction(boundFunc)).toBe(true)
  })

  it('should return true for methods in objects', () => {
    const obj = {
      method() {}
    }
    expect(isFunction(obj.method)).toBe(true)
  })

  it('should return false for non-function values', () => {
    expect(isFunction(undefined)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(42)).toBe(false)
    expect(isFunction('string')).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction(new Date())).toBe(false)
    expect(isFunction(Symbol('test'))).toBe(false)
  })

  it('should return true for built-in functions', () => {
    expect(isFunction(Math.sin)).toBe(true)
    expect(isFunction(Object.create)).toBe(true)
  })

  it('should work with TypeScript type narrowing', () => {
    const value: unknown = () => 42
    if (isFunction(value)) {
      // TypeScript knows value is AnyFunction here
      expect(value()).toBe(42)
    }
  })
})
