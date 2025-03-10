import { sortedMergeArr } from 'src'
import { describe, it, expect } from 'vitest'

describe('sortedMergeArr', () => {
  // Test basic merging of two sorted number arrays
  it('merges two sorted number arrays correctly', () => {
    const arr1 = [1, 3, 5]
    const arr2 = [2, 4, 6]
    const result = sortedMergeArr(arr1, arr2)
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  // Test arrays of different lengths
  it('handles arrays of different lengths', () => {
    const arr1 = [1, 2]
    const arr2 = [3, 4, 5, 6]
    const result = sortedMergeArr(arr1, arr2)
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  // Test empty arrays
  it('handles empty arrays', () => {
    const arr1: number[] = []
    const arr2 = [1, 2, 3]
    expect(sortedMergeArr(arr1, arr2)).toEqual([1, 2, 3])
    expect(sortedMergeArr(arr2, arr1)).toEqual([1, 2, 3])
    expect(sortedMergeArr(arr1, arr1)).toEqual([])
  })

  // Test with custom comparator
  it('works with custom comparator', () => {
    const arr1 = ['a', 'c']
    const arr2 = ['b', 'd']
    const comparator = (a: string, b: string) => a.localeCompare(b)
    const result = sortedMergeArr(arr1, arr2, comparator)
    expect(result).toEqual(['a', 'b', 'c', 'd'])
  })

  // Test with different types
  it('handles different types with custom comparator', () => {
    const arr1 = [1, 3]
    const arr2 = ['a', 'b']
    const comparator = (a: number, b: string) => a.toString().localeCompare(b)
    const result = sortedMergeArr(arr1, arr2, comparator)
    expect(result).toEqual([1, 3, 'a', 'b'])
  })

  // Test with provided output array
  it('uses provided output array', () => {
    const arr1 = [1, 3]
    const arr2 = [2, 4]
    const outputArr: number[] = []
    const result = sortedMergeArr(arr1, arr2, undefined, outputArr)
    expect(result).toBe(outputArr) // Should be the same reference
    expect(result).toEqual([1, 2, 3, 4])
  })

  // Test with single-element arrays
  it('merges single-element arrays', () => {
    const arr1 = [1]
    const arr2 = [2]
    const result = sortedMergeArr(arr1, arr2)
    expect(result).toEqual([1, 2])
  })

  // Test with duplicate values
  it('preserves duplicate values', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    const result = sortedMergeArr(arr1, arr2)
    expect(result).toEqual([1, 2, 2, 3, 3, 4])
  })
})
