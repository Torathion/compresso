import { toObjString } from 'src'
import { describe, it, expect } from 'vitest'

describe('toObjString', () => {
  it('returns "[object Number]" for a number', () => {
    expect(toObjString(42)).toBe('[object Number]')
  })

  it('returns "[object String]" for a string', () => {
    expect(toObjString('hello')).toBe('[object String]')
  })

  it('returns "[object Null]" for null', () => {
    expect(toObjString(null)).toBe('[object Null]')
  })

  it('returns "[object Undefined]" for undefined', () => {
    expect(toObjString(undefined)).toBe('[object Undefined]')
  })

  it('returns "[object Object]" for an object', () => {
    expect(toObjString({})).toBe('[object Object]')
  })

  it('returns "[object Array]" for an array', () => {
    expect(toObjString([1, 2, 3])).toBe('[object Array]')
  })

  it('returns "[object Function]" for a function', () => {
    expect(toObjString(() => {})).toBe('[object Function]')
  })

  it('returns "[object Boolean]" for a boolean', () => {
    expect(toObjString(true)).toBe('[object Boolean]')
  })

  it('returns "[object Date]" for a Date object', () => {
    expect(toObjString(new Date())).toBe('[object Date]')
  })

  it('returns "[object RegExp]" for a RegExp object', () => {
    expect(toObjString(/abc/)).toBe('[object RegExp]')
  })
})
