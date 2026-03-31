import { describe, it, expect } from 'vitest'
import { findByNested } from 'src/utils'

describe('findByNested', () => {
  const users = [
    { id: 1, profile: { name: 'Alice', role: 'admin' }, active: true },
    { id: 2, profile: { name: 'Bob', role: 'user' }, active: false },
    { id: 3, profile: { name: 'Alice', role: 'editor' }, active: true },
    { id: 4, profile: { name: 'Charlie' } }
  ]

  it('finds object by nested property', () => {
    expect(findByNested(users, 'profile.name', 'Alice')).toBe(users[0])
    expect(findByNested(users, 'profile.role', 'user')).toBe(users[1])
    expect(findByNested(users, 'active', true)).toBe(users[0])
  })

  it('returns undefined when no match', () => {
    expect(findByNested(users, 'profile.name', 'David')).toBeUndefined()
    expect(findByNested(users, 'profile.age', 30)).toBeUndefined()
    expect(findByNested([], 'any.key', 'value')).toBeUndefined()
  })

  it('returns first match only', () => {
    expect(findByNested(users, 'profile.name', 'Alice')).toBe(users[0]) // not the third one
  })

  it('handles null/undefined safely', () => {
    const data = [{ info: { val: null } }, { info: null }, { info: { val: 42 } }]

    expect(findByNested(data, 'info.val', null)).toBe(data[0])
    expect(findByNested(data, 'info.val', 42)).toBe(data[2])
  })
})
