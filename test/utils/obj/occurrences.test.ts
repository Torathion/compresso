import { describe, it, expect } from 'vitest'
import { occurrences } from 'src/utils'

describe('occurrences', () => {
  it('counts occurrences of each property value', () => {
    const arr = [{ color: 'red' }, { color: 'blue' }, { color: 'red' }, { color: 'green' }, { color: 'red' }, { color: 'blue' }]

    const result = occurrences(arr, 'color')

    expect(result.get('red')).toBe(3)
    expect(result.get('blue')).toBe(2)
    expect(result.get('green')).toBe(1)
    expect(result.size).toBe(3)
  })

  it('returns empty Map for empty array', () => {
    const result = occurrences([], 'any' as any)
    expect(result).toBeInstanceOf(Map)
    expect(result.size).toBe(0)
  })

  it('handles numbers, booleans, null, and undefined', () => {
    const arr = [{ val: 42 }, { val: null }, { val: true }, { val: 42 }, { val: undefined }, { val: null }]

    const map = occurrences(arr, 'val')

    expect(map.get(42)).toBe(2)
    expect(map.get(null)).toBe(2)
    expect(map.get(true)).toBe(1)
    expect(map.get(undefined)).toBe(1)
    expect(map.size).toBe(4)
  })

  it('preserves object references as keys', () => {
    const objA = { id: 1 }
    const objB = { id: 2 }

    const arr = [{ tag: objA }, { tag: objB }, { tag: objA }]

    const map = occurrences(arr, 'tag')

    expect(map.get(objA)).toBe(2)
    expect(map.get(objB)).toBe(1)
    expect(map.size).toBe(2)
  })

  it('works with mixed types and duplicate values', () => {
    const arr = [{ x: 'a' }, { x: 1 }, { x: 'a' }, { x: true }, { x: 1 }]

    const map = occurrences(arr, 'x')

    expect(map.get('a')).toBe(2)
    expect(map.get(1)).toBe(2)
    expect(map.get(true)).toBe(1)
  })
})
