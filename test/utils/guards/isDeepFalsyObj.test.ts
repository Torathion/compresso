import { isDeepFalsyObj } from 'src'
import { describe, expect, it } from 'vitest'

describe('isDeepFalsyObj', () => {
  it('returns true for simple falsy or empty', () => {
    expect(isDeepFalsyObj(undefined)).toBe(true)
    expect(isDeepFalsyObj({})).toBe(true)
  })

  it('returns true for deeply nested falsy values', () => {
    expect(isDeepFalsyObj({ a: { b: 0 }, c: [undefined] })).toBe(true)
  })

  it('returns false if nested value is truthy', () => {
    expect(isDeepFalsyObj({ a: { b: 1 } })).toBe(false)
  })
})
