import { describe, it, expect } from 'vitest'
import { objDiff } from 'src/utils'

describe('objDiff', () => {
  it('returns empty object when values are identical', () => {
    const obj = { name: 'John', age: 30, active: true }
    const deepObj = { a: { b: { c: 1, d: 2 }}}

    expect(objDiff(obj, obj)).toEqual({})
    expect(objDiff(deepObj, deepObj)).toEqual({})
    expect(objDiff({}, {})).toEqual({})
  })

  it('returns new primitive value when changed', () => {
    expect(objDiff({ name: 'John' }, { name: 'Jane' })).toEqual({ name: 'Jane' })
    expect(objDiff({ age: 30 }, { age: 31 })).toEqual({ age: 31 })
  })

  it('marks deleted properties as undefined', () => {
    const before = { name: 'John', age: 30, active: true }
    const after = { name: 'John', active: true }

    expect(objDiff(before, after)).toEqual({ age: undefined })
  })

  it('includes new properties fully', () => {
    expect(objDiff({ name: 'John' }, { name: 'John', role: 'admin', active: true })).toEqual({ role: 'admin', active: true })
  })

  it('recursively diffs nested objects', () => {
    const before = {
      user: { name: 'John', address: { city: 'NY', zip: 10001 } },
      active: true
    }
    const after = {
      user: { name: 'John', address: { city: 'LA' } },
      active: false
    }

    expect(objDiff(before, after)).toEqual({
      user: { address: { city: 'LA', zip: undefined } },
      active: false
    })
  })

  it('respects preserved keys when there are changes', () => {
    const before = { name: 'John', email: 'old@test.com', token: 'abc' }
    const after = { name: 'Jane', email: 'new@test.com', token: 'abc' }

    expect(objDiff(before, after, ['token'])).toEqual({
      name: 'Jane',
      email: 'new@test.com',
      token: 'abc' // preserved
    })
  })

  it('skips preserve keys that do not exist', () => {
    const before = { name: 'John', email: 'old@test.com', token: 'abc' }
    const after = { name: 'Jane', email: 'new@test.com', token: 'abc' }

    expect(objDiff(before, after, ['token', 'id'])).toEqual({
      name: 'Jane',
      email: 'new@test.com',
      token: 'abc' // preserved
    })
  })

  it('does not preserve keys when no changes occurred', () => {
    const obj = { name: 'John', token: 'abc' }
    expect(objDiff(obj, obj, ['token'])).toEqual({})
  })

  it('handles primitives and null/undefined correctly', () => {
    expect(objDiff(42, 99)).toBe(99)
    expect(objDiff(null, { a: 1 })).toEqual({ a: 1 })
    expect(objDiff({ a: 1 }, null)).toBe(null)
    expect(objDiff({ a: undefined }, { a: 5 })).toEqual({ a: 5 })
  })

  it('handles arrays as objects (shallow)', () => {
    expect(objDiff({ tags: ['a', 'b'] }, { tags: ['a', 'b', 'c'] })).toEqual({ tags: { '2': 'c' } })
  })
})
