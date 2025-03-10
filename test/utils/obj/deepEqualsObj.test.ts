import { deepEqualsObj } from 'src'
import { describe, it, expect } from 'vitest'

describe('deepEqualsObj', () => {
  it('returns true for identical primitive objects', () => {
    expect(deepEqualsObj({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
  })

  it('returns false for objects with different values', () => {
    expect(deepEqualsObj({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false)
  })

  it('returns false for objects with different keys', () => {
    expect(deepEqualsObj({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false)
  })

  it('handles nested objects correctly', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { a: 1, b: { c: 2, d: 3 } }
    const obj3 = { a: 1, b: { c: 2, d: 4 } }

    expect(deepEqualsObj(obj1, obj2)).toBe(true)
    expect(deepEqualsObj(obj1, obj3)).toBe(false)
  })

  it('handles arrays in objects', () => {
    const obj1 = { a: [1, 2, 3], b: 2 }
    const obj2 = { a: [1, 2, 3], b: 2 }
    const obj3 = { a: [1, 2, 4], b: 2 }

    expect(deepEqualsObj(obj1, obj2)).toBe(true)
    expect(deepEqualsObj(obj1, obj3)).toBe(false)
  })

  it('handles mixed nested structures', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, { d: 2 }],
        e: { f: 3 }
      }
    }
    const obj2 = {
      a: 1,
      b: {
        c: [1, { d: 2 }],
        e: { f: 3 }
      }
    }
    const obj3 = {
      a: 1,
      b: {
        c: [1, { d: 3 }],
        e: { f: 3 }
      }
    }

    expect(deepEqualsObj(obj1, obj2)).toBe(true)
    expect(deepEqualsObj(obj1, obj3)).toBe(false)
  })

  it('handles empty objects', () => {
    expect(deepEqualsObj({}, {})).toBe(true)
    expect(deepEqualsObj({}, { a: 1 })).toBe(false)
  })
})
