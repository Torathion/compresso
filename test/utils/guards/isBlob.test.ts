import { isBlob } from 'src'
import { describe, it, expect } from 'vitest'

describe('isBlob', () => {
  it('should return true for Blob instances', () => {
    const blob = new Blob(['test'], { type: 'text/plain' })
    expect(isBlob(blob)).toBe(true)
  })

  it('should return true for empty Blob', () => {
    const emptyBlob = new Blob()
    expect(isBlob(emptyBlob)).toBe(true)
  })

  it('should return false for null and undefined', () => {
    expect(isBlob(null)).toBe(false)
    expect(isBlob(undefined)).toBe(false)
  })

  it('should return false for primitive types', () => {
    expect(isBlob(42)).toBe(false)
    expect(isBlob('string')).toBe(false)
    expect(isBlob(true)).toBe(false)
    expect(isBlob(42n)).toBe(false)
    expect(isBlob(Symbol('test'))).toBe(false)
  })

  it('should return false for plain objects', () => {
    expect(isBlob({})).toBe(false)
    expect(isBlob({ size: 0, type: '' })).toBe(false) // Mimicking Blob properties
  })

  it('should return false for arrays', () => {
    expect(isBlob([])).toBe(false)
    expect(isBlob(['test'])).toBe(false)
  })

  it('should return false for other object types', () => {
    expect(isBlob(new Date())).toBe(false)
    expect(isBlob(new Map())).toBe(false)
    expect(isBlob(new Set())).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isBlob(() => {})).toBe(false)
    expect(isBlob(async () => {})).toBe(false)
  })

  it('should return true for File instances (subclass of Blob)', () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' })
    expect(isBlob(file)).toBe(true)
  })

  it('should work with TypeScript type narrowing', () => {
    const value: unknown = new Blob(['test'])
    if (isBlob(value)) {
      // TypeScript knows value is Blob here
      expect(value.size).toBeGreaterThanOrEqual(0)
      expect(typeof value.type).toBe('string')
    }
  })
})
