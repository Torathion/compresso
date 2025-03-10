import { isIterable } from 'src'
import { describe, it, expect } from 'vitest'

describe('isIterable', () => {
  it('should return true for arrays', () => {
    expect(isIterable([1, 2, 3])).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isIterable('hello')).toBe(false)
  })

  it('should return true for sets', () => {
    expect(isIterable(new Set())).toBe(true)
  })

  it('should return true for maps', () => {
    expect(isIterable(new Map())).toBe(true)
  })

  it('should return true for custom iterable objects', () => {
    const customIterable = {
      [Symbol.iterator]: function* () {
        yield 1
        yield 2
        yield 3
      }
    }
    expect(isIterable(customIterable)).toBe(true)
  })

  it('should return false for non-iterable objects', () => {
    expect(isIterable({})).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isIterable(42)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isIterable(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isIterable(undefined)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isIterable(true)).toBe(false)
    expect(isIterable(false)).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isIterable(() => {})).toBe(false)
  })
})
