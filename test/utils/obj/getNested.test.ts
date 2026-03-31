import { describe, it, expect } from 'vitest'
import { getNested } from 'src/utils'

describe('getNested', () => {
  const user = {
    id: 1,
    profile: {
      name: 'Alice',
      address: { city: 'Berlin', zip: 10115 },
      active: true
    },
    tags: ['admin', 'editor']
  }

  it('gets top-level property', () => {
    expect(getNested(user, 'id')).toBe(1)
    expect(getNested(user, 'tags')).toEqual(['admin', 'editor'])
  })

  it('gets nested properties with dot notation', () => {
    expect(getNested(user, 'profile.name')).toBe('Alice')
    expect(getNested(user, 'profile.address.city')).toBe('Berlin')
    expect(getNested(user, 'profile.address.zip')).toBe(10115)
  })

  it('returns undefined for missing paths', () => {
    expect(getNested(user, 'profile.phone')).toBeUndefined()
    expect(getNested(user, 'invalid.path.here')).toBeUndefined()
    expect(getNested({}, 'anything')).toBeUndefined()
  })

  it('stops at null or undefined', () => {
    const obj = { a: { b: null }, c: undefined }
    expect(getNested(obj, 'a.b.anything')).not.toBeDefined()
    expect(getNested(obj, 'c.d')).toBeUndefined()
  })
})
