import { deleteProp } from 'src/utils'
import { describe, it, expect } from 'vitest'

describe('deleteProp', () => {
  it('should delete an existing property from an object', () => {
    const obj = { a: 1, b: 2 }
    deleteProp(obj, 'a')
    expect(obj).toEqual({ b: 2 })
    expect('a' in obj).toBe(false)
  })

  it('should handle deleting a non-existent property', () => {
    const obj = { x: 10 }
    // @ts-ignore - testing with invalid key for robustness
    deleteProp(obj, 'y')
    expect(obj).toEqual({ x: 10 })
  })

  it('should work with partial objects', () => {
    interface TestType {
      name: string
      age?: number
    }
    const partialObj: Partial<TestType> = { name: 'John' }
    deleteProp(partialObj, 'name')
    expect(partialObj).toEqual({})
  })

  it('should maintain object reference', () => {
    const obj = { foo: 'bar', baz: 42 }
    const reference = obj
    deleteProp(obj, 'foo')
    expect(reference).toBe(obj)
    expect(reference).toEqual({ baz: 42 })
  })

  it('should work with different value types', () => {
    const obj = {
      num: 42,
      str: 'hello',
      bool: true,
      arr: [1, 2, 3],
      obj: { nested: true }
    }
    deleteProp(obj, 'str')
    expect(obj).toEqual({
      num: 42,
      bool: true,
      arr: [1, 2, 3],
      obj: { nested: true }
    })
  })
})
