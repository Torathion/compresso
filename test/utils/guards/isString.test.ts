import { isString } from 'src'
import { describe, it, expect } from 'vitest'

describe('isString', () => {
  it('should return true for string values', () => {
    expect(isString('hello')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString(`template literal`)).toBe(true)
  })

  it('should return false for non-string values', () => {
    expect(isString(42)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(() => {})).toBe(false)
  })

  it('should return false for string objects (created with `new String`)', () => {
    expect(isString(new String('hello'))).toBe(false) // eslint-disable-line no-new-wrappers
  })

  it('should return false for other primitive types', () => {
    expect(isString(42)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(Symbol('test'))).toBe(false)
  })

  it('should return false for objects with a custom `toString` method', () => {
    const obj = {
      toString: () => 'hello'
    }
    expect(isString(obj)).toBe(false)
  })
})
