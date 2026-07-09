import { isDeepEmptyObj } from 'src'
import { describe, expect, it } from 'vitest'

describe('isEmptyObj', () => {
  it('returns true for an empty object', () => {
    expect(isDeepEmptyObj(undefined)).toBe(true)
    expect(isDeepEmptyObj({})).toBe(true)
    expect(isDeepEmptyObj({ a: 1 })).toBe(false)
  })

  it('returns true for an object with only empty props', () => {
    expect(isDeepEmptyObj({ a: null })).toBe(true)
    expect(isDeepEmptyObj({ a: undefined })).toBe(true)

    expect(isDeepEmptyObj({ a: '' })).toBe(false)
    expect(isDeepEmptyObj({ a: 0 })).toBe(false)
    expect(isDeepEmptyObj({ a: false })).toBe(false)
  })

  it('returns true for deeply empty objects', () => {
    expect(isDeepEmptyObj({ a: {} })).toBe(true)
    expect(isDeepEmptyObj({ a: [] })).toBe(true)

    expect(isDeepEmptyObj({ a: { b: undefined } })).toBe(true)
    expect(isDeepEmptyObj({ a: { b: null } })).toBe(true)

    expect(isDeepEmptyObj({ a: { b: { c: {} } } })).toBe(true)
    expect(isDeepEmptyObj({ a: { b: { c: [] } } })).toBe(true)

    expect(isDeepEmptyObj({ a: { b: { c: true } } })).toBe(false)
    expect(isDeepEmptyObj({ a: { b: [{ d: 5 }] } })).toBe(false)
  })

  it('should also work with arrays', () => {
    expect(isDeepEmptyObj([])).toBe(true)
    expect(isDeepEmptyObj([[[[[]]]]])).toBe(true)

    expect(isDeepEmptyObj([[[[[[5]]]]]])).toBe(false)
    expect(isDeepEmptyObj([[2, [[]]]])).toBe(false)

    expect(isDeepEmptyObj([[[[undefined]]]])).toBe(true)
    expect(isDeepEmptyObj([[[[{ a: null }]]]])).toBe(true)
    expect(isDeepEmptyObj([[undefined, [null]]])).toBe(true)

    expect(isDeepEmptyObj([[[[[{ a: 5 }]]]]])).toBe(false)
    expect(isDeepEmptyObj([[[false, [[{}]]]]])).toBe(false)
  })
})
