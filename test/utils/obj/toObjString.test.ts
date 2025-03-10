import { toObjString } from 'src'
import { describe, it, expect } from 'vitest'

describe('toObjString', () => {
  it('should return "[object Number]" for a number', () => {
    expect(toObjString(42)).toBe('[object Number]')
  })

  it('should return "[object String]" for a string', () => {
    expect(toObjString('hello')).toBe('[object String]')
  })

  it('should return "[object Null]" for null', () => {
    expect(toObjString(null)).toBe('[object Null]')
  })

  it('should return "[object Undefined]" for undefined', () => {
    expect(toObjString(undefined)).toBe('[object Undefined]')
  })

  it('should return "[object Object]" for an object', () => {
    expect(toObjString({})).toBe('[object Object]')
  })

  it('should return "[object Array]" for an array', () => {
    expect(toObjString([1, 2, 3])).toBe('[object Array]')
  })

  it('should return "[object Function]" for a function', () => {
    expect(toObjString(() => {})).toBe('[object Function]')
  })

  it('should return "[object Boolean]" for a boolean', () => {
    expect(toObjString(true)).toBe('[object Boolean]')
  })

  it('should return "[object Date]" for a Date object', () => {
    expect(toObjString(new Date())).toBe('[object Date]')
  })

  it('should return "[object RegExp]" for a RegExp object', () => {
    expect(toObjString(/abc/)).toBe('[object RegExp]')
  })
})
