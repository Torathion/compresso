import { canCopyProps } from 'src'
import { describe, it, expect } from 'vitest'

describe('canCopyProps', () => {
  it('returns true when source is configurable', () => {
    const desc1: PropertyDescriptor = { configurable: true, value: 42 }
    const desc2: PropertyDescriptor = { configurable: false, value: 123 }
    expect(canCopyProps(desc1, desc2)).toBe(true)
  })

  it('returns true when descriptors match exactly', () => {
    const desc1: PropertyDescriptor = {
      configurable: false,
      writable: true,
      enumerable: true,
      value: 42
    }
    const desc2: PropertyDescriptor = {
      configurable: false,
      writable: true,
      enumerable: true,
      value: 42
    }
    expect(canCopyProps(desc1, desc2)).toBe(true)
  })

  it('returns false when writable differs', () => {
    const desc1: PropertyDescriptor = {
      configurable: false,
      writable: false,
      value: 42
    }
    const desc2: PropertyDescriptor = {
      configurable: false,
      writable: true,
      value: 42
    }
    expect(canCopyProps(desc1, desc2)).toBe(false)
  })

  it('returns false when enumerable differs', () => {
    const desc1: PropertyDescriptor = {
      configurable: false,
      writable: true,
      enumerable: false,
      value: 42
    }
    const desc2: PropertyDescriptor = {
      configurable: false,
      writable: true,
      enumerable: true,
      value: 42
    }
    expect(canCopyProps(desc1, desc2)).toBe(false)
  })

  it('returns false when values differ and not writable', () => {
    const desc1: PropertyDescriptor = {
      configurable: false,
      writable: false,
      value: 42
    }
    const desc2: PropertyDescriptor = {
      configurable: false,
      writable: false,
      value: 123
    }
    expect(canCopyProps(desc1, desc2)).toBe(false)
  })

  it('returns true when values differ but writable', () => {
    const desc1: PropertyDescriptor = {
      configurable: false,
      writable: true,
      value: 42
    }
    const desc2: PropertyDescriptor = {
      configurable: false,
      writable: true,
      value: 123
    }
    expect(canCopyProps(desc1, desc2)).toBe(true)
  })

  it('handles undefined properties', () => {
    const desc1: PropertyDescriptor = { value: 42 }
    const desc2: PropertyDescriptor = { value: 42 }
    expect(canCopyProps(desc1, desc2)).toBe(true)
  })

  it('handles getter/setter descriptors', () => {
    const desc1: PropertyDescriptor = {
      configurable: false,
      get: () => 42
    }
    const desc2: PropertyDescriptor = {
      configurable: false,
      get: () => 123
    }
    expect(canCopyProps(desc1, desc2)).toBe(false)
  })
})
