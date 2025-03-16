import { describe, it, expect } from 'vitest'
import { arrRangesIndexOf } from 'src'

describe('arrRangesIndexOf', () => {
  it('should return -1 for empty array', () => {
    expect(arrRangesIndexOf([], 5)).toBe(-1)
  })

  it('should return -1 for array with odd length', () => {
    expect(arrRangesIndexOf([1, 2, 3], 5)).toBe(-1)
  })

  it('should return -1 when value is less than first range', () => {
    expect(arrRangesIndexOf([2, 4, 6, 8], 1)).toBe(-1)
  })

  it('should return -1 when value is greater than last range', () => {
    expect(arrRangesIndexOf([2, 4, 6, 8], 9)).toBe(-1)
  })

  it('should find value in first range', () => {
    expect(arrRangesIndexOf([1, 3, 6, 8], 2)).toBe(0)
  })

  it('should find value in second range', () => {
    expect(arrRangesIndexOf([1, 3, 6, 8], 7)).toBe(1)
  })

  it('should find exact boundary values', () => {
    const arr = [1, 3, 6, 8]
    expect(arrRangesIndexOf(arr, 1)).toBe(0) // left boundary of first range
    expect(arrRangesIndexOf(arr, 3)).toBe(0) // right boundary of first range
    expect(arrRangesIndexOf(arr, 6)).toBe(1) // left boundary of second range
    expect(arrRangesIndexOf(arr, 8)).toBe(1) // right boundary of second range
  })

  it('should handle multiple ranges correctly', () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15]
    expect(arrRangesIndexOf(arr, 2)).toBe(0) // in [1,3]
    expect(arrRangesIndexOf(arr, 6)).toBe(1) // in [5,7]
    expect(arrRangesIndexOf(arr, 10)).toBe(2) // in [9,11]
    expect(arrRangesIndexOf(arr, 14)).toBe(3) // in [13,15]
  })

  it('should return -1 for value between ranges', () => {
    const arr = [1, 3, 6, 8]
    expect(arrRangesIndexOf(arr, 5)).toBe(-1) // between [1,3] and [6,8]
  })

  it('should handle single range pair', () => {
    const arr = [1, 5]
    expect(arrRangesIndexOf(arr, 3)).toBe(0)
    expect(arrRangesIndexOf(arr, 1)).toBe(0)
    expect(arrRangesIndexOf(arr, 5)).toBe(0)
    expect(arrRangesIndexOf(arr, 0)).toBe(-1)
    expect(arrRangesIndexOf(arr, 6)).toBe(-1)
  })

  it('should handle negative numbers', () => {
    const arr = [-5, -3, 0, 2]
    expect(arrRangesIndexOf(arr, -4)).toBe(0)
    expect(arrRangesIndexOf(arr, 1)).toBe(1)
    expect(arrRangesIndexOf(arr, -6)).toBe(-1)
    expect(arrRangesIndexOf(arr, 3)).toBe(-1)
  })
})
