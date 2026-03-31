import { tiedMostCommon } from 'src/utils'
import { describe, it, expect } from 'vitest'

describe('deleteProp', () => {
  it('returns all values tied for the highest frequency, in first-appearance order', () => {
    const arr = [{ color: 'red' }, { color: 'blue' }, { color: 'red' }, { color: 'green' }, { color: 'blue' }]

    expect(tiedMostCommon(arr, 'color')).toEqual(['red', 'blue'])
  })

  it('returns empty array for empty input', () => {
    expect(tiedMostCommon([], 'any' as any)).toEqual([])
  })

  it('returns single value when there is a clear winner', () => {
    const arr = [{ status: 'active' }, { status: 'pending' }, { status: 'active' }, { status: 'active' }]

    expect(tiedMostCommon(arr, 'status')).toEqual(['active'])
  })

  it('returns all tied values in order of first appearance', () => {
    const arr = [
      { type: 'A' }, // first A
      { type: 'B' }, // first B
      { type: 'C' },
      { type: 'A' },
      { type: 'B' },
      { type: 'C' }
    ]

    expect(tiedMostCommon(arr, 'type')).toEqual(['A', 'B', 'C']) // all appear twice
  })

  it('works with numbers, booleans, null, and undefined', () => {
    const arr = [{ val: 10 }, { val: null }, { val: 20 }, { val: null }, { val: 10 }, { val: undefined }]

    expect(tiedMostCommon(arr, 'val')).toEqual([10, null]) // both appear twice
  })

  it('preserves correct order with complex values', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }

    const arr = [{ tag: obj2 }, { tag: obj1 }, { tag: obj2 }, { tag: obj1 }]

    expect(tiedMostCommon(arr, 'tag')).toEqual([obj2, obj1])
  })
})
