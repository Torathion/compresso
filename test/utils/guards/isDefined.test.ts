import { isDefined } from 'src'
import { describe, it, expect } from 'vitest'

describe('isDefined', () => {
  // Test with null
  it('returns false for null', () => {
    expect(isDefined(null)).toBe(false)
  })

  // Test with undefined
  it('returns false for undefined', () => {
    expect(isDefined(undefined)).toBe(false)
  })

  // Test with 0
  it('returns true for 0', () => {
    expect(isDefined(0)).toBe(true)
  })

  // Test with empty string
  it('returns true for empty string', () => {
    expect(isDefined('')).toBe(true)
  })

  // Test with non-empty string
  it('returns true for non-empty string', () => {
    expect(isDefined('hello')).toBe(true)
  })

  // Test with number
  it('returns true for number', () => {
    expect(isDefined(42)).toBe(true)
  })

  // Test with boolean true
  it('returns true for true', () => {
    expect(isDefined(true)).toBe(true)
  })

  // Test with boolean false
  it('returns true for false', () => {
    expect(isDefined(false)).toBe(true)
  })

  // Test with object
  it('returns true for object', () => {
    expect(isDefined({})).toBe(true)
  })

  // Test with array
  it('returns true for array', () => {
    expect(isDefined([])).toBe(true)
  })

  // Test with function
  it('returns true for function', () => {
    expect(isDefined(() => {})).toBe(true)
  })

  // Test with symbol
  it('returns true for symbol', () => {
    expect(isDefined(Symbol('test'))).toBe(true)
  })

  // Test type narrowing - defined case
  it('narrows type to NonNullable in true branch', () => {
    const value: string | null | undefined = 'test'
    if (isDefined(value)) {
      // TypeScript should infer value as string here
      expect(typeof value).toBe('string')
      expect(value.toUpperCase()).toBe('TEST')
      // @ts-expect-error These should cause type errors
      expect(value === null).toBe(false)
      expect(value === undefined).toBe(false)
    }
  })

  // Test type narrowing - undefined/null case
  it('narrows type to null | undefined in false branch', () => {
    const value: string | null | undefined = null
    if (!isDefined(value)) {
      // TypeScript should infer value as null | undefined here
      expect(value == null).toBe(true) // Loose equality to match both null and undefined
      // @ts-expect-error This should cause a type error
      expect(value?.toUpperCase).toBeUndefined()
    }
  })
})
