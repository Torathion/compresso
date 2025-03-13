import { describe, it, expect } from 'vitest'
import { safeConstruct } from 'src'

// Test classes for various scenarios
class SimpleClass {
  value: number
  constructor(value: number) {
    this.value = value
  }
}

class ThrowingClass {
  constructor(value: number) {
    if (value < 0) throw new Error('Negative value')
  }
}

class MultipleArgsClass {
  constructor(
    public a: number,
    public b: string,
    public c: boolean
  ) {}
}

class NoArgsClass {
  static instanceCount = 0
  constructor() {
    NoArgsClass.instanceCount++
  }
}

describe('safeConstruct', () => {
  it('should successfully construct with valid arguments', () => {
    const SafeSimpleClass = safeConstruct(SimpleClass)
    const instance = SafeSimpleClass(42)

    expect(instance).toBeInstanceOf(SimpleClass)
    expect(instance?.value).toBe(42)
  })

  it('should return undefined when construction throws', () => {
    const SafeThrowingClass = safeConstruct(ThrowingClass)
    const instance = SafeThrowingClass(-1)

    expect(instance).toBeUndefined()
  })

  it('should handle multiple constructor arguments', () => {
    const SafeMultipleArgsClass = safeConstruct(MultipleArgsClass)
    const instance = SafeMultipleArgsClass(42, 'test', true)

    expect(instance).toBeInstanceOf(MultipleArgsClass)
    expect(instance?.a).toBe(42)
    expect(instance?.b).toBe('test')
    expect(instance?.c).toBe(true)
  })

  it('should handle constructors with no arguments', () => {
    const SafeNoArgsClass = safeConstruct(NoArgsClass)
    const instance = SafeNoArgsClass()

    expect(instance).toBeInstanceOf(NoArgsClass)
    expect(NoArgsClass.instanceCount).toBe(1)
  })

  it('should handle different types of errors', () => {
    const errors = [new Error('Standard error'), new TypeError('Type error'), 'string error', 123]

    for (const error of errors) {
      class ErrorClass {
        constructor() {
          throw error
        }
      }
      const SafeErrorClass = safeConstruct(ErrorClass)
      const instance = SafeErrorClass()
      expect(instance).toBeUndefined()
    }
  })

  it('should maintain instanceof relationship', () => {
    const SafeSimpleClass = safeConstruct(SimpleClass)
    const instance = SafeSimpleClass(42)

    expect(instance instanceof SimpleClass).toBe(true)
    expect(instance instanceof Object).toBe(true)
  })

  it('should handle classes with methods', () => {
    class MethodClass {
      constructor(private value: number) {}
      getValue() {
        return this.value
      }
    }

    const SafeMethodClass = safeConstruct(MethodClass)
    const instance = SafeMethodClass(42)

    expect(instance?.getValue()).toBe(42)
  })

  it('should handle classes with static properties', () => {
    class StaticClass {
      static counter = 0
      constructor() {
        StaticClass.counter++
      }
    }

    const SafeStaticClass = safeConstruct(StaticClass)
    const instance1 = SafeStaticClass()
    const instance2 = SafeStaticClass()

    expect(instance1).toBeInstanceOf(StaticClass)
    expect(instance2).toBeInstanceOf(StaticClass)
    expect(StaticClass.counter).toBe(2)
  })

  it('should handle inheritance', () => {
    class BaseClass {
      constructor(public baseValue: string) {}
    }
    class DerivedClass extends BaseClass {
      constructor(
        baseValue: string,
        public derivedValue: number
      ) {
        super(baseValue)
      }
    }

    const SafeDerivedClass = safeConstruct(DerivedClass)
    const instance = SafeDerivedClass('base', 42)

    expect(instance).toBeInstanceOf(DerivedClass)
    expect(instance).toBeInstanceOf(BaseClass)
    expect(instance?.baseValue).toBe('base')
    expect(instance?.derivedValue).toBe(42)
  })

  it('should handle throwing inherited constructors', () => {
    class BaseClass {
      constructor(value: number) {
        if (value < 0) throw new Error('Negative value')
      }
    }
    class DerivedClass extends BaseClass {}

    const SafeDerivedClass = safeConstruct(DerivedClass)
    const success = SafeDerivedClass(42)
    const failure = SafeDerivedClass(-1)

    expect(success).toBeInstanceOf(DerivedClass)
    expect(failure).toBeUndefined()
  })
})
