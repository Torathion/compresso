import { objDiff } from 'src/utils'
import { describe, expect, it } from 'vitest'

describe('objDiff', () => {
  it('returns empty object when values are identical', () => {
    const obj = { active: true, age: 30, name: 'John' }
    const deepObj = { a: { b: { c: 1, d: 2 } } }

    expect(objDiff(obj, obj)).toEqual({})
    expect(objDiff(deepObj, deepObj)).toEqual({})
    expect(objDiff({}, {})).toEqual({})
  })

  it('returns new primitive value when changed', () => {
    expect(objDiff({ name: 'John' }, { name: 'Jane' })).toEqual({ name: 'Jane' })
    expect(objDiff({ age: 30 }, { age: 31 })).toEqual({ age: 31 })
  })

  it('marks deleted properties as undefined', () => {
    const before = { active: true, age: 30, name: 'John' }
    const after = { active: true, name: 'John' }

    expect(objDiff(before, after)).toEqual({ age: undefined })
  })

  it('includes new properties fully', () => {
    expect(objDiff({ name: 'John' }, { active: true, name: 'John', role: 'admin' })).toEqual({ active: true, role: 'admin' })
  })

  it('recursively diffs nested objects', () => {
    const before = {
      active: true,
      user: { address: { city: 'NY', zip: 10001 }, name: 'John' }
    }
    const after = {
      active: false,
      user: { address: { city: 'LA' }, name: 'John' }
    }

    expect(objDiff(before, after)).toEqual({
      active: false,
      user: { address: { city: 'LA', zip: undefined } }
    })
  })

  it('respects preserved keys when there are changes', () => {
    const before = { email: 'old@test.com', name: 'John', token: 'abc' }
    const after = { email: 'new@test.com', name: 'Jane', token: 'abc' }

    expect(objDiff(before, after, ['token'])).toEqual({
      email: 'new@test.com',
      name: 'Jane',
      token: 'abc' // preserved
    })
  })

  it('skips preserve keys that do not exist', () => {
    const before = { email: 'old@test.com', name: 'John', token: 'abc' }
    const after = { email: 'new@test.com', name: 'Jane', token: 'abc' }

    expect(objDiff(before, after, ['token', 'id'])).toEqual({
      email: 'new@test.com',
      name: 'Jane',
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
    expect(objDiff({ tags: ['a', 'b'] }, { tags: ['a', 'b', 'c'] })).toEqual({ tags: { 2: 'c' } })
  })
})
