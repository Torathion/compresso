import { isEditable } from 'src'
import { describe, it, expect } from 'vitest'

describe('isEditable', () => {
  it('should return true for writable and configurable descriptor', () => {
    const descriptor: PropertyDescriptor = { writable: true, configurable: true }
    expect(isEditable(descriptor)).toBe(true)
  })

  it('should return false for non-writable descriptor', () => {
    const descriptor: PropertyDescriptor = { writable: false, configurable: true }
    expect(isEditable(descriptor)).toBe(false)
  })

  it('should return false for non-configurable descriptor', () => {
    const descriptor: PropertyDescriptor = { writable: true, configurable: false }
    expect(isEditable(descriptor)).toBe(false)
  })

  it('should return false for non-writable and non-configurable descriptor', () => {
    const descriptor: PropertyDescriptor = { writable: false, configurable: false }
    expect(isEditable(descriptor)).toBe(false)
  })

  it('should return false for undefined descriptor', () => {
    expect(isEditable(undefined)).toBe(false)
    expect(isEditable()).toBe(false) // No argument
  })

  it('should return false for descriptor missing writable', () => {
    const descriptor: PropertyDescriptor = { configurable: true, value: 42 }
    expect(isEditable(descriptor)).toBe(false)
  })

  it('should return false for descriptor missing configurable', () => {
    const descriptor: PropertyDescriptor = { writable: true, value: 42 }
    expect(isEditable(descriptor)).toBe(false)
  })

  it('should return false for descriptor missing both writable and configurable', () => {
    const descriptor: PropertyDescriptor = { value: 42 }
    expect(isEditable(descriptor)).toBe(false)
  })

  it('should handle full descriptor with all conditions met', () => {
    const descriptor: PropertyDescriptor = {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 42
    }
    expect(isEditable(descriptor)).toBe(true)
  })

  it('should handle getter/setter descriptor', () => {
    const descriptor: PropertyDescriptor = {
      configurable: true,
      get: () => 42,
      set: (_: number) => {}
    }
    expect(isEditable(descriptor)).toBe(false) // No writable property
  })

  it('should handle invalid inputs gracefully', () => {
    expect(isEditable(null as any)).toBe(false)
    expect(isEditable(42 as any)).toBe(false)
    expect(isEditable('string' as any)).toBe(false)
  })
})
