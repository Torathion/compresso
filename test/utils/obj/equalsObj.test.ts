import { equalsObj } from 'src'
import { describe, it, expect } from 'vitest'

describe('equalsObj', () => {
  it('should return true for identical simple objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }
    expect(equalsObj(obj1, obj2)).toBe(true)
  })

  it('should return false for objects with different values', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 3 }
    expect(equalsObj(obj1, obj2)).toBe(false)
  })

  it('should return false for objects with different key counts', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1 }
    expect(equalsObj(obj1, obj2)).toBe(false)
  })

  it('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, c: 2 }
    expect(equalsObj(obj1, obj2)).toBe(false)
  })

  it('should return true for empty objects', () => {
    expect(equalsObj({}, {})).toBe(true)
  })

  it('should handle various primitive value types', () => {
    const obj1 = {
      num: 42,
      str: 'test',
      bool: true,
      nullVal: null,
      undef: undefined
    }
    const obj2 = {
      num: 42,
      str: 'test',
      bool: true,
      nullVal: null,
      undef: undefined
    }
    expect(equalsObj(obj1, obj2)).toBe(true)
  })

  it('should perform strict equality comparison', () => {
    const obj1 = { a: '1' }
    const obj2 = { a: 1 }
    expect(equalsObj(obj1, obj2)).toBe(false)
  })

  it('should not perform deep comparison', () => {
    const obj1 = { a: { nested: 1 } }
    const obj2 = { a: { nested: 1 } }
    expect(equalsObj(obj1, obj2)).toBe(false) // Different object references
  })
})
