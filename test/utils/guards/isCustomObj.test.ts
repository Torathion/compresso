import { isCustomObj } from 'src'
import { describe, it, expect } from 'vitest'

describe('isCustomObj', () => {
  it('should return true for plain objects', () => {
    expect(isCustomObj({})).toBe(true)
    expect(isCustomObj({ a: 1, b: 'test' })).toBe(true)
  })

  it('should return true for objects created with Object.create', () => {
    const obj = Object.create({})
    expect(isCustomObj(obj)).toBe(true)
  })

  it('should return false for RegExp instances', () => {
    expect(isCustomObj(/test/)).toBe(false)
    expect(isCustomObj(new RegExp('test'))).toBe(false)
  })

  it('should return false for Error instances', () => {
    expect(isCustomObj(new Error('test'))).toBe(false)
    expect(isCustomObj(new TypeError('test'))).toBe(false)
  })

  it('should return false for Date instances', () => {
    expect(isCustomObj(new Date())).toBe(false)
  })

  it('should return false for Blob instances', () => {
    const blob = new Blob(['test'], { type: 'text/plain' })
    expect(isCustomObj(blob)).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isCustomObj(null)).toBe(false)
    expect(isCustomObj(undefined)).toBe(false)
  })

  it('should return false for primitive types', () => {
    expect(isCustomObj(42)).toBe(false)
    expect(isCustomObj('string')).toBe(false)
    expect(isCustomObj(true)).toBe(false)
    expect(isCustomObj(42n)).toBe(false)
    expect(isCustomObj(Symbol('test'))).toBe(false)
  })

  it('should return true for arrays', () => {
    expect(isCustomObj([])).toBe(true)
    expect(isCustomObj([1, 2, 3])).toBe(true)
  })

  it('should return true for other custom objects not explicitly excluded', () => {
    expect(isCustomObj(new Map())).toBe(true)
    expect(isCustomObj(new Set())).toBe(true)
  })

  it('should return false for functions', () => {
    expect(isCustomObj(() => {})).toBe(false)
    expect(isCustomObj(async () => {})).toBe(false)
  })
})
