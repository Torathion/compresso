import { describe, it, expect } from 'vitest'
import { arrRemove } from '../../../src'

describe('arrRemove', () => {
  it('removes an element from the middle of the array', () => {
    const arr = [1, 2, 3, 4]
    arrRemove(arr, 3)
    expect(arr).toEqual([1, 2, 4])
  })

  it('removes an element from the start of the array', () => {
    const arr = [1, 2, 3]
    arrRemove(arr, 1)
    expect(arr).toEqual([2, 3])
  })

  it('removes an element from the end of the array', () => {
    const arr = [1, 2, 3]
    arrRemove(arr, 3)
    expect(arr).toEqual([1, 2])
  })

  it('does nothing if the element is not found', () => {
    const arr = [1, 2, 3]
    arrRemove(arr, 4)
    expect(arr).toEqual([1, 2, 3])
  })

  it('does nothing on an empty array', () => {
    const arr: number[] = []
    arrRemove(arr, 1)
    expect(arr).toEqual([])
  })

  it('removes only the first occurrence of the element', () => {
    const arr = [1, 2, 2, 3]
    arrRemove(arr, 2)
    expect(arr).toEqual([1, 2, 3])
  })

  it('works with strings', () => {
    const arr = ['a', 'b', 'c']
    arrRemove(arr, 'b')
    expect(arr).toEqual(['a', 'c'])
  })

  it('works with objects by reference', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const arr = [obj1, obj2]
    arrRemove(arr, obj1)
    expect(arr).toEqual([obj2])
  })

  it('does not remove similar but distinct objects', () => {
    const arr = [{ id: 1 }, { id: 1 }]
    arrRemove(arr, { id: 1 })
    expect(arr).toEqual([{ id: 1 }, { id: 1 }])
  })
})
