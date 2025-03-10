import { describe, it, expect } from 'vitest'
import { arrContainsDeep } from '../../../src'

describe('arrContainsDeep', () => {
  it('finds a simple value in a flat array', () => {
    const arr = [1, 2, 3]
    expect(arrContainsDeep(arr, 2)).toBe(true)
    expect(arrContainsDeep(arr, 4)).toBe(false)
  })

  it('returns false for empty array', () => {
    const arr: number[] = []
    expect(arrContainsDeep(arr, 1)).toBe(false)
  })

  it('finds a nested array', () => {
    const arr = [1, [2, 3], 4]
    expect(arrContainsDeep(arr, [2, 3])).toBe(true)
    expect(arrContainsDeep(arr, [3, 2])).toBe(false) // Order matters
  })

  it('finds a value within a nested array', () => {
    const arr = [1, [2, 3], 4]
    expect(arrContainsDeep(arr, 2)).toBe(true)
    expect(arrContainsDeep(arr, 5)).toBe(false)
  })

  it('finds a deeply nested array', () => {
    const arr = [1, [2, [3, 4]], 5]
    expect(arrContainsDeep(arr, [3, 4])).toBe(true)
    expect(arrContainsDeep(arr, [4, 3])).toBe(false)
  })

  it('finds a value in a deeply nested array', () => {
    const arr = [1, [2, [3, 4]], 5]
    expect(arrContainsDeep(arr, 3)).toBe(true)
    expect(arrContainsDeep(arr, 6)).toBe(false)
  })

  it('works with mixed types', () => {
    const arr: (string | number | (string | number)[])[] = ['a', [1, 'b'], 2]
    expect(arrContainsDeep(arr, 'a')).toBe(true)
    expect(arrContainsDeep(arr, [1, 'b'])).toBe(true)
    expect(arrContainsDeep(arr, 1)).toBe(true)
    expect(arrContainsDeep(arr, 'c')).toBe(false)
  })

  it('handles duplicate values', () => {
    const arr = [1, 1, [1, 2]]
    expect(arrContainsDeep(arr, 1)).toBe(true)
    expect(arrContainsDeep(arr, [1, 2])).toBe(true)
    expect(arrContainsDeep(arr, [2, 1])).toBe(false)
  })

  it('preserves object identity', () => {
    const obj = { id: 1 }
    const arr = [obj, [2, obj], 3]
    expect(arrContainsDeep(arr, obj)).toBe(true)
    expect(arrContainsDeep(arr, { id: 1 })).toBe(false) // Different reference
  })
})
