import { shuffle } from 'src'
import { describe, it, expect, vi } from 'vitest'

// Mock Math.random for deterministic testing
const mockMath = Object.create(global.Math)
mockMath.random = vi.fn()
global.Math = mockMath

describe('shuffle', () => {
  it('should maintain array length', () => {
    const arr = [1, 2, 3, 4, 5]
    const originalLength = arr.length
    shuffle(arr)
    expect(arr).toHaveLength(originalLength)
  })

  it('should preserve all elements', () => {
    const arr = [1, 2, 3, 4, 5]
    const original = [...arr]
    shuffle(arr)
    expect(arr).toHaveLength(original.length)
    original.forEach(item => {
      expect(arr).toContain(item)
    })
  })

  it('should handle empty array', () => {
    const arr: number[] = []
    shuffle(arr)
    expect(arr).toEqual([])
  })

  it('should handle single element', () => {
    const arr = ['a']
    shuffle(arr)
    expect(arr).toEqual(['a'])
  })

  it('should work with different types', () => {
    const arr = [1, 'hello', true, { x: 1 }]
    const original = [...arr]
    shuffle(arr)
    expect(arr).toHaveLength(original.length)
    original.forEach(item => {
      expect(arr).toContain(item)
    })
  })

  it('should actually shuffle when random numbers vary', () => {
    // Mock a specific sequence of random numbers
    mockMath.random.mockReturnValueOnce(0.8).mockReturnValueOnce(0.25).mockReturnValueOnce(0.6)

    const arr = [1, 2, 3, 4, 5]
    const result = shuffle([...arr])

    // With these random values, we expect a specific shuffle pattern
    // Original: [1, 2, 3, 4, 5]
    // After first swap:  [5, 2, 3, 4, 1]
    // After second swap: [5, 4, 3, 2, 1]
    // After third swap:  [5, 4, 2, 3, 1]
    expect(result).toEqual([3, 1, 4, 2, 5])
  })

  it('should return the same array reference', () => {
    const arr = [1, 2, 3]
    const result = shuffle(arr)
    expect(result).toBe(arr)
  })
})
