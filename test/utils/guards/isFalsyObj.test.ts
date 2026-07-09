import { isFalsyObj } from 'src'
import { describe, expect, it } from 'vitest'

describe('isFalsyObj', () => {
  it('returns true for empty object or null/undefined', () => {
    expect(isFalsyObj({})).toBe(true)
    expect(isFalsyObj(undefined)).toBe(true)
  })

  it('returns true for objects containing only falsy values', () => {
    expect(isFalsyObj({ a: 0, b: '', c: false, d: null, e: undefined })).toBe(true)
  })

  it('returns false if even one value is truthy', () => {
    expect(isFalsyObj({ a: 0, b: 'hello' })).toBe(false)
    expect(isFalsyObj({ a: 1 })).toBe(false)
  })
})
