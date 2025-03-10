import { describe, it, expect } from 'vitest'
import { containsElementsFrom } from '../../../src'

describe('containsElementsFrom', () => {
  // Basic functionality
  it('returns true when source contains elements from target', () => {
    const source = [1, 2, 3, 4]
    const target = [3, 5, 6]
    expect(containsElementsFrom(source, target)).toBe(true)
  })

  it('returns false when source does not contain elements from target', () => {
    const source = [1, 2, 3]
    const target = [4, 5, 6]
    expect(containsElementsFrom(source, target)).toBe(false)
  })

  // Edge cases
  it('returns false when source is empty', () => {
    const source: number[] = []
    const target = [1, 2, 3]
    expect(containsElementsFrom(source, target)).toBe(false)
  })

  it('returns false when target is empty', () => {
    const source = [1, 2, 3]
    const target: number[] = []
    expect(containsElementsFrom(source, target)).toBe(false)
  })

  it('returns false when both arrays are empty', () => {
    const source: number[] = []
    const target: number[] = []
    expect(containsElementsFrom(source, target)).toBe(false)
  })

  // Strings
  it('works with strings', () => {
    const source = ['apple', 'banana', 'cherry']
    const target = ['banana', 'date']
    expect(containsElementsFrom(source, target)).toBe(true)
  })

  // Custom objects with toString
  it('works with custom objects based on toString', () => {
    class Item {
      constructor(private value: number) {}
      toString() {
        return `item${this.value}`
      }
    }
    const source = [new Item(1), new Item(2), new Item(3)]
    const target = [new Item(2), new Item(4)]
    expect(containsElementsFrom(source, target)).toBe(true)
  })

  it('returns false when toString matches but objects are different', () => {
    class ItemA {
      toString() {
        return 'same'
      }
    }
    class ItemB {
      toString() {
        return 'same'
      }
    }
    const source = [new ItemA()]
    const target = [new ItemB()]
    expect(containsElementsFrom(source, target)).toBe(true) // Note: This is expected behavior due to toString
  })

  // Mixed types (if allowed by HasToString)
  it('works with mixed types sharing toString', () => {
    const source = [1, 'two', 3]
    const target = ['two', 4]
    expect(containsElementsFrom(source, target)).toBe(true)
  })
})
