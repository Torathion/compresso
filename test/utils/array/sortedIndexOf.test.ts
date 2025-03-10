import { describe, it, expect } from 'vitest'
import { sortedIndexOf } from '../../../src'

describe('sortedIndexOf', () => {
  // Default comparator for numbers (ascending order with arbitrary values)
  const numberComparator = (a: number, b: number) => {
    return a - b
  }

  // Basic functionality with numbers
  it('finds an element in a sorted array', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(sortedIndexOf(arr, 3, numberComparator)).toBe(2)
  })

  it('returns -1 when element is not in the array', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(sortedIndexOf(arr, 6, numberComparator)).toBe(-1)
  })

  it('finds the first element', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(sortedIndexOf(arr, 1, numberComparator)).toBe(0)
  })

  it('finds the last element', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(sortedIndexOf(arr, 5, numberComparator)).toBe(4)
  })

  // Edge cases
  it('returns -1 for an empty array', () => {
    const arr: number[] = []
    expect(sortedIndexOf(arr, 1, numberComparator)).toBe(-1)
  })

  it('works with a single-element array', () => {
    const arr = [1]
    expect(sortedIndexOf(arr, 1, numberComparator)).toBe(0)
    expect(sortedIndexOf(arr, 2, numberComparator)).toBe(-1)
  })

  // Custom min and max
  it('respects custom min and max bounds', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(sortedIndexOf(arr, 3, numberComparator, 2, 4)).toBe(2) // Search in [3, 4, 5]
    expect(sortedIndexOf(arr, 2, numberComparator, 2, 4)).toBe(-1) // 2 not in [3, 4, 5]
  })

  it('returns -1 when value is outside min-max range', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(sortedIndexOf(arr, 1, numberComparator, 2, 4)).toBe(-1) // 1 not in [3, 4, 5]
  })

  // Custom comparator (descending order with arbitrary values)
  it('works with descending order comparator', () => {
    const descendingComparator = (a: number, b: number) => {
      return b - a
    }
    const arr = [5, 4, 3, 2, 1]
    expect(sortedIndexOf(arr, 3, descendingComparator)).toBe(2)
    expect(sortedIndexOf(arr, 6, descendingComparator)).toBe(-1)
  })

  // Strings with default lexicographical order
  it('works with strings', () => {
    const stringComparator = (a: string, b: string) => {
      if (a < b) return -1 // Arbitrary negative value
      return a > b ? 1 : 0
    }
    const arr = ['apple', 'banana', 'cherry', 'date']
    expect(sortedIndexOf(arr, 'cherry', stringComparator)).toBe(2)
    expect(sortedIndexOf(arr, 'blueberry', stringComparator)).toBe(-1)
  })

  // Duplicates
  it('finds one of the duplicate elements', () => {
    const arr = [1, 2, 2, 3, 4]
    const result = sortedIndexOf(arr, 2, numberComparator)
    expect([1, 2]).toContain(result) // Could be 1 or 2 due to binary search
  })
})
