import { isGenerator } from 'src'
import { describe, it, expect } from 'vitest'

describe('isGenerator', () => {
  it('returns true for a generator function', () => {
    function* generatorFunc() {
      yield 42
    }
    expect(isGenerator(generatorFunc)).toBe(true)
  })

  it('returns false for a regular function', () => {
    function regularFunc() {}
    expect(isGenerator(regularFunc)).toBe(false)
  })

  it('returns false for an arrow function', () => {
    const arrowFunc = () => {}
    expect(isGenerator(arrowFunc)).toBe(false)
  })

  it('returns false for an async function', () => {
    const asyncFunc = async () => {}
    expect(isGenerator(asyncFunc)).toBe(false)
  })

  it('returns false for a class constructor', () => {
    class TestClass {}
    expect(isGenerator(TestClass)).toBe(false)
  })

  it('returns false for non-function values', () => {
    expect(isGenerator(42)).toBe(false)
    expect(isGenerator('not a function')).toBe(false)
    expect(isGenerator(null)).toBe(false)
    expect(isGenerator(undefined)).toBe(false)
    expect(isGenerator({})).toBe(false)
    expect(isGenerator([])).toBe(false)
    expect(isGenerator(true)).toBe(false)
  })
})
