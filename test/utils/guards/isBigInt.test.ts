import { isBigInt } from 'src'
import { describe, it, expect } from 'vitest'

describe('isBigInt', () => {
  it('should return true for BigInt literals', () => {
    expect(isBigInt(42n)).toBe(true)
    expect(isBigInt(-123n)).toBe(true)
    expect(isBigInt(0n)).toBe(true)
  })

  it('should return true for BigInt constructed values', () => {
    expect(isBigInt(BigInt(42))).toBe(true)
    expect(isBigInt(BigInt('123'))).toBe(true)
    expect(isBigInt(BigInt(0))).toBe(true)
  })

  it('should return false for regular numbers', () => {
    expect(isBigInt(42)).toBe(false)
    expect(isBigInt(-123.45)).toBe(false)
    expect(isBigInt(0)).toBe(false)
  })

  it('should return false for numeric strings', () => {
    expect(isBigInt('42')).toBe(false)
    expect(isBigInt('-123')).toBe(false)
    expect(isBigInt('0')).toBe(false)
  })

  it('should return false for other primitive types', () => {
    expect(isBigInt(undefined)).toBe(false)
    expect(isBigInt(null)).toBe(false)
    expect(isBigInt(true)).toBe(false)
    expect(isBigInt('string')).toBe(false)
    expect(isBigInt(Symbol('test'))).toBe(false)
  })

  it('should return false for objects and arrays', () => {
    expect(isBigInt({})).toBe(false)
    expect(isBigInt([])).toBe(false)
    expect(isBigInt(new Date())).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isBigInt(() => {})).toBe(false)
    expect(isBigInt(function () {})).toBe(false)
  })

  it('should work with TypeScript type narrowing', () => {
    const value: unknown = 42n
    if (isBigInt(value)) {
      // TypeScript knows value is bigint here
      expect(value + 1n).toBe(43n)
    }
  })
})
