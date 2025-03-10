import { describe, it, expect } from 'vitest'
import { arrSwap, IndexOutOfBoundsError } from '../../../src'
import { expectError } from '../../test-utils'

describe('arrSwap', () => {
  it('swaps two elements in an array correctly', () => {
    const arr = [1, 2, 3, 4]
    arrSwap(arr, 1, 2)
    expect(arr).toEqual([1, 3, 2, 4])
  })

  it('works with first and last elements', () => {
    const arr = ['a', 'b', 'c']
    arrSwap(arr, 0, 2)
    expect(arr).toEqual(['c', 'b', 'a'])
  })

  it('works with same array type elements', () => {
    const arr = [{ id: 1 }, { id: 2 }]
    arrSwap(arr, 0, 1)
    expect(arr).toEqual([{ id: 2 }, { id: 1 }])
  })

  it('does nothing when indices are the same', () => {
    const arr = [1, 2, 3]
    arrSwap(arr, 1, 1)
    expect(arr).toEqual([1, 2, 3])
  })

  it('handles array with two elements', () => {
    const arr = [true, false]
    arrSwap(arr, 0, 1)
    expect(arr).toEqual([false, true])
  })

  // Edge cases
  it('throws IndexOutOfBoundsError instance when index is too large', () => {
    const arr = [1, 2, 3]
    expectError(
      () => arrSwap(arr, 0, 5),
      IndexOutOfBoundsError,
      'Index 5 is out of bounds in array with length of 3.',
      'Should have thrown an error for index too large'
    )
  })

  it('throws IndexOutOfBoundsError instance when index is negative', () => {
    const arr = [1, 2, 3]
    expectError(
      () => arrSwap(arr, -1, 1),
      IndexOutOfBoundsError,
      'Index -1 is out of bounds in array with length of 3.',
      'Should have thrown an error for negative index'
    )
  })
})
