import { isNull } from 'src'
import { describe, it, expect } from 'vitest'

describe('isNull', () => {
  // Test with null
  it('returns true for null', () => {
    expect(isNull(null)).toBe(true)
  })

  // Test with undefined
  it('returns false for undefined', () => {
    expect(isNull(undefined)).toBe(false)
  })

  // Test with 0
  it('returns false for 0', () => {
    expect(isNull(0)).toBe(false)
  })

  // Test with empty string
  it('returns false for empty string', () => {
    expect(isNull('')).toBe(false)
  })

  // Test with non-empty string
  it('returns false for non-empty string', () => {
    expect(isNull('hello')).toBe(false)
  })

  // Test with number
  it('returns false for number', () => {
    expect(isNull(42)).toBe(false)
  })

  // Test with boolean true
  it('returns false for true', () => {
    expect(isNull(true)).toBe(false)
  })

  // Test with boolean false
  it('returns false for false', () => {
    expect(isNull(false)).toBe(false)
  })

  // Test with object
  it('returns false for object', () => {
    expect(isNull({})).toBe(false)
  })

  // Test with array
  it('returns false for array', () => {
    expect(isNull([])).toBe(false)
  })

  // Test with function
  it('returns false for function', () => {
    expect(isNull(() => {})).toBe(false)
  })

  // Test with symbol
  it('returns false for symbol', () => {
    expect(isNull(Symbol('test'))).toBe(false)
  })

  // Test type narrowing
  it('narrows type to null in true branch', () => {
    const value: unknown = null
    if (isNull(value)) {
      // TypeScript should infer value as null here
      expect(value).toBe(null)
      // @ts-expect-error This should cause a type error if narrowing works
      expect(value?.toString).toBeUndefined()
    }
  })

  // Test type narrowing in false branch
  it('excludes null in false branch', () => {
    const value: string | null = 'test'
    if (!isNull(value)) {
      // TypeScript should infer value as string here
      expect(typeof value).toBe('string')
      expect(value.toUpperCase()).toBe('TEST')
    }
  })
})
