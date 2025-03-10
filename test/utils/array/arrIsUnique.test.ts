import { describe, it, expect } from 'vitest'
import { arrIsUnique } from '../../../src'

describe('arrIsUnique', () => {
  it('returns false for an empty array', () => {
    expect(arrIsUnique([])).toBe(false)
  })

  it('returns true for an array with all unique elements', () => {
    expect(arrIsUnique([1, 2, 3, 4])).toBe(true)
  })

  it('returns false for an array with duplicate elements', () => {
    expect(arrIsUnique([1, 2, 2, 3])).toBe(false)
  })

  it('returns true for an array with unique mixed types', () => {
    expect(arrIsUnique([1, '1', true])).toBe(true)
  })

  it('returns true for a single-element array', () => {
    expect(arrIsUnique([42])).toBe(true)
  })

  it('returns false for an array with multiple duplicate elements', () => {
    expect(arrIsUnique([1, 1, 2, 2])).toBe(false)
  })

  it('handles arrays with objects correctly', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: 2 }
    expect(arrIsUnique([obj1, obj2])).toBe(true) // Different objects
    expect(arrIsUnique([obj1, obj1])).toBe(false) // Same object reference
  })

  it('works with TypedArrays', () => {
    expect(arrIsUnique(new Int32Array([1, 2, 3, 4, 5]))).toBe(true)
    expect(arrIsUnique(new Float64Array([1, 1, 2, 2, 3, 3]))).toBe(false)
  })
})
