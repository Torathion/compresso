import { describe, it, expect } from 'vitest'
import { mergeArr } from '../../../src'

describe('mergeArr', () => {
  it('merges two arrays of same type', () => {
    const target = [1, 2]
    const source = [3, 4]
    mergeArr(target, source)
    expect(target).toEqual([1, 2, 3, 4])
    expect(source).toEqual([3, 4]) // Source remains unchanged
  })

  it('appends empty source to non-empty target', () => {
    const target = [1, 2]
    const source: number[] = []
    mergeArr(target, source)
    expect(target).toEqual([1, 2])
  })

  it('appends non-empty source to empty target', () => {
    const target: number[] = []
    const source = [1, 2]
    mergeArr(target, source)
    expect(target).toEqual([1, 2])
  })

  it('merges two empty arrays', () => {
    const target: number[] = []
    const source: number[] = []
    mergeArr(target, source)
    expect(target).toEqual([])
  })

  it('works with readonly source array', () => {
    const target = [1]
    const source = [2, 3] as const
    mergeArr(target, source)
    expect(target).toEqual([1, 2, 3])
  })

  it('merges arrays of different but compatible types', () => {
    const target: (string | number)[] = ['a', 'b']
    const source = [1, 2]
    mergeArr(target, source)
    expect(target).toEqual(['a', 'b', 1, 2])
  })

  it('preserves object references', () => {
    const obj = { key: 'value' }
    const target = [obj]
    const source = [obj, 2]
    mergeArr(target, source)
    expect(target).toEqual([obj, obj, 2])
    expect(target[0]).toBe(obj) // Same reference at index 0
    expect(target[1]).toBe(obj) // Same reference at index 1
  })

  it('handles large source arrays efficiently', () => {
    const target = [0]
    const source = Array.from({ length: 1000 }, (_, i) => i + 1)
    mergeArr(target, source)
    expect(target.length).toBe(1001)
    expect(target[0]).toBe(0)
    expect(target[1000]).toBe(1000)
  })

  it('merges arrays with duplicate values', () => {
    const target = [1, 1]
    const source = [1, 2]
    mergeArr(target, source)
    expect(target).toEqual([1, 1, 1, 2])
  })
})
