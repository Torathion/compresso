import { isNumber } from 'src'
import { describe, it, expect } from 'vitest'

describe('isNumber', () => {
  it('should return true for valid numbers', () => {
    expect(isNumber(42)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-42)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
  })

  it('should return false for NaN', () => {
    expect(isNumber(NaN)).toBe(false)
  })

  it('should return false for non-number values', () => {
    expect(isNumber('42')).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(() => {})).toBe(false)
  })

  it('should return true for Infinity and -Infinity', () => {
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
  })

  it('should return false for numeric strings', () => {
    expect(isNumber('42')).toBe(false)
    expect(isNumber('3.14')).toBe(false)
  })

  it('should return false for objects with numeric values', () => {
    expect(isNumber(new Number(42))).toBe(false) // eslint-disable-line no-new-wrappers
  })
})
