import { isError } from 'src'
import { describe, it, expect } from 'vitest'

describe('isError', () => {
  it('returns true for an Error instance', () => {
    expect(isError(new Error('Test error'))).toBe(true)
  })

  it('returns true for a DOMException instance', () => {
    expect(isError(new DOMException('Test DOMException'))).toBe(true)
  })

  it('returns false for a non-error value', () => {
    expect(isError('Not an error')).toBe(false)
    expect(isError(42)).toBe(false)
    expect(isError(null)).toBe(false)
    expect(isError(undefined)).toBe(false)
    expect(isError({})).toBe(false)
    expect(isError([])).toBe(false)
    expect(isError(() => {})).toBe(false)
  })

  it('returns false for an object with an error-like string representation', () => {
    const fakeError = { toString: () => '[object Error]' }
    expect(isError(fakeError)).toBe(false)
  })

  it('returns false for an object with a non-error string representation', () => {
    const fakeObject = { toString: () => '[object Object]' }
    expect(isError(fakeObject)).toBe(false)
  })
})
