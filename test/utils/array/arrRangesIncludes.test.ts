import { describe, it, expect } from 'vitest'
import { arrRangesIncludes } from '../../../src'

describe('arrRangesIncludes', () => {
  it('returns false for an empty array', () => {
    expect(arrRangesIncludes([], 5)).toBe(false)
  })

  it('returns false for an odd-length array', () => {
    expect(arrRangesIncludes([1, 3, 5], 2)).toBe(false)
  })

  it('returns false for value below the minimum', () => {
    expect(arrRangesIncludes([1, 3, 6, 8], 0)).toBe(false)
  })

  it('returns false for value above the maximum', () => {
    expect(arrRangesIncludes([1, 3, 6, 8], 9)).toBe(false)
  })

  it('returns true for value within the first range', () => {
    expect(arrRangesIncludes([1, 3, 6, 8], 2)).toBe(true)
  })

  it('returns true for value within the second range', () => {
    expect(arrRangesIncludes([1, 3, 6, 8], 7)).toBe(true)
  })

  it('returns false for value between ranges', () => {
    expect(arrRangesIncludes([1, 3, 6, 8], 5)).toBe(false)
  })

  it('returns true for value at range boundary', () => {
    expect(arrRangesIncludes([1, 3, 6, 8], 3)).toBe(true)
    expect(arrRangesIncludes([1, 3, 6, 8], 6)).toBe(true)
  })

  it('works with a single range pair', () => {
    expect(arrRangesIncludes([2, 5], 3)).toBe(true)
    expect(arrRangesIncludes([2, 5], 1)).toBe(false)
  })

  it('works with multiple range pairs', () => {
    expect(arrRangesIncludes([1, 2, 4, 5, 7, 8], 4)).toBe(true)
    expect(arrRangesIncludes([1, 2, 4, 5, 7, 8], 6)).toBe(false)
  })

  it('works with TypedArrays', () => {
    expect(arrRangesIncludes(new Int32Array([1, 2, 4, 5, 7, 8]), 4)).toBe(true)
    expect(arrRangesIncludes(new Float64Array([1, 2, 4, 5, 7, 8]), 6)).toBe(false)
  })
})
