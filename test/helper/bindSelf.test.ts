import { bindSelf } from 'src'
import { describe, it, expect } from 'vitest'

describe('bindSelf', () => {
  it('binds function to maintain context', () => {
    const obj = {
      value: 42,
      getValue() {
        return this.value
      }
    }

    const boundFn = bindSelf(obj, 'getValue')
    expect(boundFn()).toBe(42)
  })

  it('preserves function arguments', () => {
    const obj = {
      value: 10,
      add(this: typeof obj, x: number) {
        return this.value + x
      }
    }

    const boundFn = bindSelf(obj, 'add')
    expect(boundFn(5)).toBe(15)
  })

  it('maintains context when passed around', () => {
    const obj = {
      name: 'test',
      getName() {
        return this.name
      }
    }

    const boundFn = bindSelf(obj, 'getName')
    const executor = (fn: () => string) => fn()
    expect(executor(boundFn)).toBe('test')
  })

  it('throws error for non-function properties', () => {
    const obj = {
      value: 42,
      numberProp: 123,
      stringProp: 'test',
      objectProp: {}
    }

    expect(() => bindSelf(obj, 'numberProp')).toThrow('Can not bind context to property type number')
    expect(() => bindSelf(obj, 'stringProp')).toThrow('Can not bind context to property type string')
    expect(() => bindSelf(obj, 'objectProp')).toThrow('Can not bind context to property type object')
    expect(() => bindSelf(obj, 'value')).toThrow('Can not bind context to property type number')
  })

  it('works with different function types', () => {
    const obj = {
      value: 100,
      noArgs: function () {
        return this.value
      },
      withArgs: function (x: number) {
        return this.value + x
      },
      arrow: () => 42 // Note: arrow functions already have lexical binding
    }

    const boundNoArgs = bindSelf(obj, 'noArgs')
    const boundWithArgs = bindSelf(obj, 'withArgs')
    const boundArrow = bindSelf(obj, 'arrow')

    expect(boundNoArgs()).toBe(100)
    expect(boundWithArgs(5)).toBe(105)
    expect(boundArrow()).toBe(42)
  })

  it('preserves function identity when bound', () => {
    const obj = {
      value: 1,
      fn() {
        return this.value
      }
    }

    const bound1 = bindSelf(obj, 'fn')
    const bound2 = bindSelf(obj, 'fn')
    expect(bound1).not.toBe(bound2) // Different bound instances
    expect(bound1()).toBe(1)
    expect(bound2()).toBe(1)
  })
})
