import { describe, it, expect, vi } from 'vitest'
import { safeAsync } from 'src'

describe('safeAsync', () => {
  it('should return result for successful async function', async () => {
    const asyncFn = async (x: number) => x * 2
    const safeFn = safeAsync(asyncFn)

    const result = await safeFn(5)
    expect(result).toBeDefined()
    expect(result).toBe(10)
  })

  it('should pass arguments correctly', async () => {
    const asyncFn = vi.fn(async (a: number, b: string) => `${a}${b}`)
    const safeFn = safeAsync(asyncFn)

    const result = await safeFn(42, 'test')
    expect(result).toBe('42test')
    expect(asyncFn).toHaveBeenCalledWith(42, 'test')
  })

  it('should preserve function properties', async () => {
    const asyncFn = async () => 'result'
    asyncFn.customProp = 'test'
    asyncFn.customMethod = () => 'method'

    const safeFn = safeAsync(asyncFn)

    expect((safeFn as any).customProp).toBe('test')
    expect((safeFn as any).customMethod()).toBe('method')
  })

  it('should handle async functions with multiple await expressions', async () => {
    const asyncFn = async (x: number) => {
      await Promise.resolve()
      const intermediate = x * 2
      await Promise.resolve()
      return intermediate + 1
    }
    const safeFn = safeAsync(asyncFn)

    const result = await safeFn(5)
    expect(result).toBe(11)
  })

  it('should handle different types of errors', async () => {
    const errors = [
      new Error('Standard error'),
      new TypeError('Type error'),
      'string error',
      null,
      undefined,
      123
    ]

    for (const error of errors) {
      const asyncFn = async () => { throw error }
      const safeFn = safeAsync(asyncFn)

      const result = await safeFn()
      expect(result).toBeUndefined()
    }
  })

  it('should handle void async functions', async () => {
    const asyncFn = async () => {}
    const safeFn = safeAsync(asyncFn)

    const result = await safeFn()
    expect(result).toBeUndefined()
  })

  it('should handle Promise rejection', async () => {
    const asyncFn = async () => Promise.reject(new Error('Rejected'))
    const safeFn = safeAsync(asyncFn)

    const result = await safeFn()
    expect(result).toBeUndefined()
  })
})
