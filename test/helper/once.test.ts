import { once } from 'src'
import { describe, it, vi, expect } from 'vitest'

describe('once', () => {
  it('executes function only on first call', () => {
    const spy = vi.fn((x: number) => x * 2)
    const onceFn = once(spy)

    expect(onceFn(5)).toBe(10)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(onceFn(10)).toBe(10)
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('caches and returns the same result', () => {
    const fn = () => Math.random()
    const onceFn = once(fn)

    const firstResult = onceFn()
    expect(onceFn()).toBe(firstResult)
    expect(onceFn()).toBe(firstResult)
  })

  it('sets called flag after first execution', () => {
    const fn = (x: number) => x
    const onceFn = once(fn)

    expect(onceFn.called).toBe(false)
    onceFn(42)
    expect(onceFn.called).toBe(true)
    onceFn(43)
    expect(onceFn.called).toBe(true)
  })

  it('stores result in value property', () => {
    const fn = (x: number) => x * 3
    const onceFn = once(fn)

    expect(onceFn.value).toBeUndefined()
    onceFn(5)
    expect(onceFn.value).toBe(15)
    expect(onceFn(10)).toBe(15)
    expect(onceFn.value).toBe(15)
  })

  it('preserves function properties', () => {
    const fn = (x: number) => x
    fn.customProp = 'test'
    fn.customMethod = () => 'custom'

    const onceFn = once(fn)

    expect(onceFn.customProp).toBe('test')
    expect(onceFn.customMethod()).toBe('custom')
  })

  it('works with different argument counts', () => {
    const noArgs = () => 42
    const oneArg = (x: number) => x
    const multiArg = (x: number, y: string) => `${x}${y}`

    const onceNoArgs = once(noArgs)
    const onceOneArg = once(oneArg)
    const onceMultiArg = once(multiArg)

    expect(onceNoArgs()).toBe(42)
    expect(onceNoArgs()).toBe(42)
    expect(onceOneArg(5)).toBe(5)
    expect(onceOneArg(10)).toBe(5)
    expect(onceMultiArg(1, 'test')).toBe('1test')
    expect(onceMultiArg(2, 'other')).toBe('1test')
  })

  it('handles throwing functions', () => {
    const fn = (x: number) => {
      if (x < 0) throw new Error('Negative')
      return x
    }
    const onceFn = once(fn)

    expect(onceFn(5)).toBe(5)
    expect(onceFn(-1)).toBe(5) // Cached, no throw
    expect(onceFn.called).toBe(true)

    const onceFn2 = once(fn)
    expect(() => onceFn2(-1)).toThrow('Negative')
    expect(onceFn2.called).toBe(true)
    expect(onceFn2.value).toBeUndefined()
  })
})
