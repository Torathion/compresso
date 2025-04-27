import { copyObj } from "src";
import { describe, it, expect, expectTypeOf } from "vitest";

describe('copyObj', () => {
  it('should create a shallow copy of a simple object', () => {
    const input = { a: 1, b: 'test' };
    const result = copyObj(input);
    expect(result).toEqual(input);
    expect(result).not.toBe(input); // Ensure it's a new object
  });

  it('should handle nested objects correctly', () => {
    const input = { a: 1, b: { c: 2 } };
    const result = copyObj(input);
    expect(result).toEqual(input);
    expect(result.b).toBe(input.b); // Shallow copy, nested objects are not cloned
  });

  it('should handle empty objects', () => {
    const input = {};
    const result = copyObj(input);
    expect(result).toEqual({});
    expect(result).not.toBe(input);
  });

  it('should preserve the type of the input object', () => {
    interface TestType { name: string; age: number }
    const input: TestType = { name: 'Alice', age: 30 };
    const result = copyObj(input);
    expect(result).toHaveProperty('name', 'Alice');
    expect(result).toHaveProperty('age', 30);
    expectTypeOf(result).toEqualTypeOf<TestType>();
  });
});
