import { isObj } from 'src'
import { describe, it, expect } from 'vitest'

describe('isObj', () => {
  it('should return true for plain objects', () => {
    expect(isObj({})).toBe(true)
    expect(isObj({ a: 1 })).toBe(true)
  })

  it('should return true for arrays', () => {
    expect(isObj([])).toBe(true)
    expect(isObj([1, 2, 3])).toBe(true)
  })

  it('should return false for null', () => {
    expect(isObj(null)).toBe(false)
  })

  it('should return false for primitive types', () => {
    expect(isObj(undefined)).toBe(false)
    expect(isObj(42)).toBe(false)
    expect(isObj('string')).toBe(false)
    expect(isObj(true)).toBe(false)
    expect(isObj(Symbol('test'))).toBe(false)
  })

  it('should return true for object instances', () => {
    expect(isObj(new Date())).toBe(true)
    expect(isObj(new Error())).toBe(true)
    expect(isObj(new Map())).toBe(true)
    expect(isObj(new Set())).toBe(true)
  })

  it('should return false for functions', () => {
    expect(isObj(() => {})).toBe(false)
    expect(isObj(function () {})).toBe(false)
  })

  it('should return true for object created with Object.create', () => {
    const obj = Object.create({})
    expect(isObj(obj)).toBe(true)
  })

  it('should work with TypeScript type narrowing', () => {
    const value: unknown = { a: 1 }
    if (isObj(value)) {
      // TypeScript knows value is AnyObject here
      expect(typeof value.a).toBe('number')
    }
  })
})
