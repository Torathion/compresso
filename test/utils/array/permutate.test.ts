import { describe, it, expect } from 'vitest'
import { permutate } from '../../../src'

// Helper to sort arrays of arrays for consistent comparison
const sortPermutations = <T>(perms: AnyArray<T>[]): AnyArray<T>[] => perms.sort((a, b) => a.join(',').localeCompare(b.join(',')))

describe('permutate', () => {
  it('returns single permutation for empty array', () => {
    const input: number[] = []
    const result = permutate(input)
    expect(result).toEqual([[]])
    expect(result.length).toBe(1) // 0! = 1
  })

  it('returns single permutation for single-element array', () => {
    const input = [1]
    const result = permutate(input)
    expect(result).toEqual([[1]])
    expect(result.length).toBe(1) // 1! = 1
  })

  it('returns all permutations for two-element array', () => {
    const input = [1, 2]
    const result = sortPermutations(permutate(input))
    const expected = sortPermutations([
      [1, 2],
      [2, 1]
    ])
    expect(result).toEqual(expected)
    expect(result.length).toBe(2) // 2! = 2
  })

  it('returns handles duplicates correctly', () => {
    const input = [1, 1]
    const result = sortPermutations(permutate(input))
    const expected = sortPermutations([[1, 1]])
    expect(result).toEqual(expected)
    expect(result.length).toBe(1)
  })

  it('returns all permutations for three-element array', () => {
    const input = [1, 2, 3]
    const result = sortPermutations(permutate(input))
    const expected = sortPermutations([
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1]
    ])
    expect(result).toEqual(expected)
    expect(result.length).toBe(6) // 3! = 6
  })

  it('works with strings', () => {
    const input = ['a', 'b', 'c']
    const result = sortPermutations(permutate(input))
    const expected = sortPermutations([
      ['a', 'b', 'c'],
      ['b', 'a', 'c'],
      ['c', 'a', 'b'],
      ['a', 'c', 'b'],
      ['b', 'c', 'a'],
      ['c', 'b', 'a']
    ])
    expect(result).toEqual(expected)
    expect(result.length).toBe(6) // 3! = 6
  })

  it('returns all permutations for four-element array', () => {
    const input = [1, 2, 3, 4]
    const result = permutate(input)
    expect(result.length).toBe(24) // 4! = 24
    // Verify a few permutations to ensure correctness
    const sortedResult = sortPermutations(result)
    expect(sortedResult).toContainEqual([1, 2, 3, 4])
    expect(sortedResult).toContainEqual([4, 3, 2, 1])
    expect(sortedResult).toContainEqual([2, 1, 4, 3])
  })

  it('preserves element identity in permutations', () => {
    const obj = { id: 1 }
    const input = [obj, 2]
    const result = permutate(input)
    const sortedResult = sortPermutations(result)
    const expected = sortPermutations([
      [obj, 2],
      [2, obj]
    ])
    expect(sortedResult).toEqual(expected)
    // Check that the object reference is preserved
    expect(sortedResult[0][0]).toBe(obj)
    expect(sortedResult[1][1]).toBe(obj)
  })
})
