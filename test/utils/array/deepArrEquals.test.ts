import { describe, it, expect } from 'vitest'
import { deepArrEquals } from '../../../src'

describe('deepArrEquals', () => {
  // Basic flat array comparison
  it('returns true for identical flat arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    expect(deepArrEquals(arr1, arr2)).toBe(true)
  })

  it('returns false for different flat arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 4]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  // Nested array comparison
  it('returns true for identical nested arrays', () => {
    const arr1 = [1, [2, 3], 4]
    const arr2 = [1, [2, 3], 4]
    expect(deepArrEquals(arr1, arr2)).toBe(true)
  })

  it('returns false for nested arrays with different values', () => {
    const arr1 = [1, [2, 3], 4]
    const arr2 = [1, [2, 4], 4]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  it('returns false for nested vs flat arrays', () => {
    const arr1 = [1, [2, 3], 4]
    const arr2 = [1, 2, 3, 4]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  // Deeply nested arrays
  it('returns true for identical deeply nested arrays', () => {
    const arr1 = [1, [2, [3, 4]], 5]
    const arr2 = [1, [2, [3, 4]], 5]
    expect(deepArrEquals(arr1, arr2)).toBe(true)
  })

  it('returns false for deeply nested arrays with different values', () => {
    const arr1 = [1, [2, [3, 4]], 5]
    const arr2 = [1, [2, [3, 5]], 5]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  // Length differences
  it('returns false when arrays have different lengths', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  // Edge cases
  it('returns false when one array is empty and the other is not', () => {
    const arr1: number[] = []
    const arr2 = [1]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  it('returns true for two empty arrays', () => {
    const arr1: number[] = []
    const arr2: number[] = []
    expect(deepArrEquals(arr1, arr2)).toBe(true)
  })

  // Mixed types
  it('returns true for identical arrays with mixed types', () => {
    const arr1 = [1, 'two', [3, 'four']]
    const arr2 = [1, 'two', [3, 'four']]
    expect(deepArrEquals(arr1, arr2)).toBe(true)
  })

  it('returns false for arrays with same values but different types', () => {
    const arr1 = [1, '2']
    const arr2 = [1, 2]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })

  // Objects (non-array) vs arrays
  it('returns false when comparing array with nested object', () => {
    const arr1 = [1, { a: 2 }]
    const arr2 = [1, [2]]
    expect(deepArrEquals(arr1, arr2)).toBe(false)
  })
})
