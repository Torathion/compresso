import { isSymbol } from 'src'
import { describe, it, expect } from 'vitest'

describe('isSymbol', () => {
  it('returns true for symbol values', () => {
    expect(isSymbol(Symbol('test'))).toBe(true)
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })

  it('returns false for non-symbol values', () => {
    expect(isSymbol('hello')).toBe(false)
    expect(isSymbol(42)).toBe(false)
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol([])).toBe(false)
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(() => {})).toBe(false)
  })

  it('returns false for objects with a custom `Symbol` property', () => {
    const obj = {
      [Symbol('test')]: 'value'
    }
    expect(isSymbol(obj)).toBe(false)
  })

  it('returns false for other primitive types', () => {
    expect(isSymbol('hello')).toBe(false)
    expect(isSymbol(42)).toBe(false)
    expect(isSymbol(true)).toBe(false)
  })

  it('returns false for objects with a `Symbol` key', () => {
    const obj = {
      [Symbol('key')]: 'value'
    }
    expect(isSymbol(obj)).toBe(false)
  })
})
