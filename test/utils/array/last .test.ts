import { describe, it, expect } from 'vitest'
import { last } from 'src'

describe('last', () => {
  it('should return the last element of a non-empty array', () => {
    expect(last([1, 2, 3])).toBe(3)
    expect(last(['a', 'b', 'c'])).toBe('c')
    expect(last([true, false, true])).toBe(true)
  })

  it('should return the last element when a fallback is provided but array is non-empty', () => {
    expect(last([1, 2, 3], 0)).toBe(3)
    expect(last(['a', 'b', 'c'], 'd')).toBe('c')
    expect(last([true, false, true], false)).toBe(true)
  })

  it('should return the fallback value for an empty array when fallback is provided', () => {
    expect(last([], 0)).toBe(0)
    expect(last([], 'default')).toBe('default')
    expect(last([], false)).toBe(false)
    expect(last([], null)).toBe(null)
  })

  it('should return undefined for an empty array when no fallback is provided', () => {
    expect(last([])).toBeUndefined()
  })

  it('should handle single-element arrays', () => {
    expect(last([42])).toBe(42)
    expect(last(['single'])).toBe('single')
    expect(last([true])).toBe(true)
    expect(last([42], 0)).toBe(42)
  })

  it('should handle arrays with mixed types when type allows', () => {
    const mixed: Array<number | string> = [1, 'two', 3]
    expect(last(mixed)).toBe(3)
    expect(last(mixed, 'fallback')).toBe(3)
  })

  it('should handle arrays of objects', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const arr = [obj1, obj2]
    expect(last(arr)).toBe(obj2)
    expect(last(arr, { id: 0 })).toBe(obj2)
    expect(last([], { id: 0 })).toEqual({ id: 0 })
  })

  it('should handle arrays of arrays', () => {
    const arr = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    expect(last(arr)).toEqual([5, 6])
    expect(last(arr, [])).toEqual([5, 6])
    expect(last([], [])).toEqual([])
  })

  it('should handle large arrays', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i)
    expect(last(largeArray)).toBe(999)
    expect(last(largeArray, 0)).toBe(999)
  })

  it('should work with readonly arrays', () => {
    const readonlyArr: ReadonlyArray<number> = [1, 2, 3]
    expect(last(readonlyArr)).toBe(3)
    expect(last(readonlyArr, 0)).toBe(3)
  })
})
