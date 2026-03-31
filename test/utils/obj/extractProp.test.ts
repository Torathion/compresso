import { extractProp } from 'src/utils'
import { describe, it, expect } from 'vitest'

describe('extractProp', () => {
  it('extracts existing property and mutates original object', () => {
    const obj = { name: 'Alice', age: 30, active: true }

    const result = extractProp(obj, 'name')

    expect(result).toBe('Alice')
    expect(obj).toEqual({ age: 30, active: true }) // 'name' was deleted
    expect('name' in obj).toBe(false)
  })

  it('returns undefined for non-existent property', () => {
    const obj = { name: 'Bob' }

    const result = extractProp(obj, 'age' as any)

    expect(result).toBeUndefined()
    expect(obj).toEqual({ name: 'Bob' }) // unchanged
  })

  it('handles nullish values correctly (null/undefined)', () => {
    const obj1 = { a: null }
    const obj2 = { b: undefined }

    expect(extractProp(obj1, 'a')).toBeNull()
    expect(extractProp(obj2, 'b')).toBeUndefined()

    expect(obj1).toEqual({})
    expect(obj2).toEqual({})
  })

  it('works with different types and nested objects', () => {
    const obj = {
      id: 123,
      user: { name: 'John' },
      tags: ['a', 'b']
    }

    const id = extractProp(obj, 'id')
    const user = extractProp(obj, 'user')

    expect(id).toBe(123)
    expect(user).toEqual({ name: 'John' })
    expect(obj).toEqual({ tags: ['a', 'b'] })
  })

  it('does not throw on primitive values or non-objects', () => {
    // Note: TypeScript prevents this at compile time, but runtime behavior:
    expect(() => extractProp(42 as any, 'foo' as any)).not.toThrow()
    expect(() => extractProp(null as any, 'foo' as any)).toThrow()
    expect(() => extractProp(undefined as any, 'foo' as any)).toThrow()
  })
})
