import { describe, it, expect } from "vitest";
import { mergeObj } from "src";

describe('mergeObj', () => {
  it('should return an empty object when no sources are provided', () => {
    const result = mergeObj();
    expect(result).toEqual({});
    expect(result).toBeInstanceOf(Object);
  });

  it('should mergeObj a single object correctly', () => {
    const source = { a: 1, b: 'hello' };
    const result = mergeObj(source);
    expect(result).toEqual({ a: 1, b: 'hello' });
    expect(result).not.toBe(source); // Ensure a new object is returned
  });

  it('should mergeObj multiple objects with overwriting keys', () => {
    const source1 = { a: 1, b: 'hello', c: true };
    const source2 = { b: 'world', d: 42 };
    const source3 = { a: 100, d: 99 };
    const result = mergeObj(source1, source2, source3);
    expect(result).toEqual({ a: 100, b: 'world', c: true, d: 99 });
  });

  it('should perform a shallow mergeObj, copying nested objects by reference', () => {
    const nested = { x: 1, y: 2 };
    const source1 = { a: nested, b: [1, 2] };
    const source2 = { b: [3, 4], c: { z: 3 } };
    const result = mergeObj(source1, source2);
    expect(result).toEqual({ a: { x: 1, y: 2 }, b: [3, 4], c: { z: 3 } });
    expect(result.a).toBe(nested); // Nested object copied by reference
    expect(result.b).toBe(source2.b); // Array copied by reference
  });

  it('should not modify source objects', () => {
    const source1 = { a: 1, b: { x: 1 } };
    const source2 = { b: { y: 2 }, c: 3 };
    const source1Copy = JSON.parse(JSON.stringify(source1));
    const source2Copy = JSON.parse(JSON.stringify(source2));
    mergeObj(source1, source2);
    expect(source1).toEqual(source1Copy);
    expect(source2).toEqual(source2Copy);
  });

  it('should handle arrays as object sources', () => {
    const source1 = { a: 1 };
    const source2 = ['x', 'y'] as any; // Arrays are objects in JS
    const result = mergeObj(source1, source2);
    expect(result).toEqual({ a: 1, '0': 'x', '1': 'y' });
  });

  it('should create a new object instance', () => {
    const source1 = { a: 1 };
    const source2 = { b: 2 };
    const result = mergeObj(source1, source2);
    expect(result).not.toBe(source1);
    expect(result).not.toBe(source2);
    expect(result).toBeInstanceOf(Object);
  });
});
