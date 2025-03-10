import { isBool } from 'src'
import { describe, it, expect } from 'vitest'

describe('isBool', () => {
  it('should return true for boolean literals', () => {
    expect(isBool(true)).toBe(true)
    expect(isBool(false)).toBe(true)
  })

  it('should return false for numbers', () => {
    expect(isBool(0)).toBe(false)
    expect(isBool(1)).toBe(false)
    expect(isBool(-1)).toBe(false)
    expect(isBool(42)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isBool('true')).toBe(false)
    expect(isBool('false')).toBe(false)
    expect(isBool('')).toBe(false)
  })

  it('should return false for other primitive types', () => {
    expect(isBool(undefined)).toBe(false)
    expect(isBool(null)).toBe(false)
    expect(isBool(42n)).toBe(false)
    expect(isBool(Symbol('test'))).toBe(false)
  })

  it('should return false for objects', () => {
    expect(isBool({})).toBe(false)
    expect(isBool(new Boolean(true))).toBe(false) // Boolean object wrapper
    expect(isBool([])).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isBool(() => {})).toBe(false)
    expect(isBool(async () => {})).toBe(false)
  })

  it('should distinguish between boolean primitive and Boolean object', () => {
    expect(isBool(true)).toBe(true)
    expect(isBool(new Boolean(true))).toBe(false)
  })

  it('should work with TypeScript type narrowing', () => {
    const value: unknown = false
    if (isBool(value)) {
      // TypeScript knows value is boolean here
      expect(value === true || value === false).toBe(true)
    }
  })
})
