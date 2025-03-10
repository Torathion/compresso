import { ensureArr } from 'src'
import { describe, it, expect } from 'vitest'

describe('ensureArr', () => {
  // Test with an existing array
  it('returns the same array when input is already an array', () => {
    const input = [1, 2, 3]
    const result = ensureArr(input)
    expect(result).toBe(input) // Should be the same reference
    expect(result).toEqual([1, 2, 3])
  })

  // Test with a single number
  it('wraps a number in an array', () => {
    const input = 42
    const result = ensureArr(input)
    expect(result).toEqual([42])
    expect(Array.isArray(result)).toBe(true)
  })

  // Test with a string
  it('wraps a string in an array', () => {
    expect(ensureArr('hello')).toEqual(['hello'])
  })

  // Test with an object
  it('wraps an object in an array', () => {
    const input = { key: 'value' }
    const result = ensureArr(input)
    expect(result).toEqual([{ key: 'value' }])
    expect(result[0]).toBe(input) // Should maintain reference
  })

  // Test with null
  it('wraps null in an array', () => {
    expect(ensureArr(null)).toEqual([])
  })

  // Test with undefined
  it('wraps undefined in an array', () => {
    expect(ensureArr(undefined)).toEqual([])
  })

  // Test with empty array
  it('returns empty array unchanged', () => {
    const input: any[] = []
    const result = ensureArr(input)
    expect(result).toBe(input)
    expect(result).toEqual([])
  })

  // Test with array of mixed types
  it('handles array of mixed types', () => {
    const input = [1, 'hello', { x: 1 }]
    const result = ensureArr(input)
    expect(result).toBe(input)
    expect(result).toEqual([1, 'hello', { x: 1 }])
  })

  // Test with nested array
  it('handles nested array without flattening', () => {
    const input = [[1, 2], 3]
    const result = ensureArr(input)
    expect(result).toBe(input)
    expect(result).toEqual([[1, 2], 3])
  })
})
