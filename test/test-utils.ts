import type { ClassConstructor } from 'typestar'
import { expect } from 'vitest'

export function expectErrorInstance<T extends Error>(error: Error, errorType: ClassConstructor<T>): void {
  expect(error.constructor.name).toBe(errorType.name)
}

export function expectError<T extends Error>(fn: () => void, errorType: ClassConstructor<T>, expectedMessage: string, failMessage: string) {
  try {
    fn()
    expect.fail(failMessage)
  } catch (error) {
    expectErrorInstance(error, errorType)
    expect(error.message).toBe(expectedMessage)
  }
}
