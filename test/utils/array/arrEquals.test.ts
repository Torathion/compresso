import { describe, it, expect } from 'vitest'
import { arrEquals } from '../../../src'

describe('arrEquals', () => {
  it('returns true for equal arrays', () => {
    expect(arrEquals([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  it('returns false for arrays with different elements', () => {
    expect(arrEquals([1, 2, 3], [3, 2, 1])).toBe(false)
  })

  it('returns false for arrays with different lengths', () => {
    expect(arrEquals([1, 2, 3], [1, 2])).toBe(false)
  })

  it('returns true for two empty arrays', () => {
    expect(arrEquals([], [])).toBe(true)
  })

  it('returns false if one array is empty and the other is not', () => {
    expect(arrEquals([], [1, 2, 3])).toBe(false)
    expect(arrEquals([1, 2, 3], [])).toBe(false)
  })

  it('works with arrays of strings', () => {
    expect(arrEquals(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true)
    expect(arrEquals(['a', 'b', 'c'], ['c', 'b', 'a'])).toBe(false)
  })

  it('works with arrays of mixed types', () => {
    expect(arrEquals([1, '2', true], [1, '2', true])).toBe(true)
    expect(arrEquals([1, '2', true], [1, 2, true])).toBe(false)
  })

  it('works with TypedArrays', () => {
    expect(arrEquals(new Int32Array([1, 2, 3, 4, 5]), new Int32Array([1, 2, 3, 4, 5]))).toBe(true)
    expect(arrEquals(new Float64Array([1, 2, 3, 4, 5]), new Int16Array([1, 2, 3, 4, 5]))).toBe(true)
    expect(arrEquals(new Int32Array([1, 2, 3, 4, 5]), new Int32Array([5, 6, 7, 8, 9]))).toBe(false)
    expect(arrEquals(new Float64Array([1.1, 2.2, 3.3, 4.4, 5.5]), new Int32Array([1.1, 2.2, 3.3, 4.4, 5.5]))).toBe(false)
  })
})
