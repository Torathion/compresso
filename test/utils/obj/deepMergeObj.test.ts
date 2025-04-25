import { deepMergeObj } from "src";
import { describe, expect, it } from "vitest";

describe('deepMergeObj', () => {
  it('should return an empty object when no sources are provided', () => {
    const result = deepMergeObj();
    expect(result).toEqual({});
  });

  it('should skip non-object sources', () => {
    const result = deepMergeObj(null as any, undefined, 42, 'string', [], { a: 1 });
    expect(result).toEqual({ a: 1 });
  });

  it('should merge single object correctly', () => {
    const source = { a: 1, b: 'hello' };
    const result = deepMergeObj(source);
    expect(result).toEqual({ a: 1, b: 'hello' });
    expect(result).not.toBe(source); // Ensure a new object is returned
  });

  it('should merge multiple flat objects', () => {
    const source1 = { a: 1, b: 'hello' };
    const source2 = { b: 'world', c: true };
    const result = deepMergeObj(source1, source2);
    expect(result).toEqual({ a: 1, b: 'world', c: true });
  });

  it('should deeply merge nested objects', () => {
    const source1 = { a: { x: 1, y: 2 }, b: 3 };
    const source2 = { a: { y: 3, z: 4 }, c: 5 };
    const result = deepMergeObj(source1, source2);
    expect(result).toEqual({ a: { x: 1, y: 3, z: 4 }, b: 3, c: 5 });
  });

  it('should overwrite non-object values in nested objects', () => {
    const source1 = { a: { x: { deep: 1 } } };
    const source2 = { a: { x: 42 } };
    const result = deepMergeObj(source1, source2);
    expect(result).toEqual({ a: { x: 42 } });
  });

  it('should handle deeply nested objects', () => {
    const source1 = { a: { b: { c: 1 } } };
    const source2 = { a: { b: { d: 2 } } };
    const result = deepMergeObj(source1, source2);
    expect(result).toEqual({ a: { b: { c: 1, d: 2 } } });
  });

  it('should not modify source objects', () => {
    const source1 = { a: { x: 1 } };
    const source2 = { a: { y: 2 } };
    const source1Copy = JSON.parse(JSON.stringify(source1));
    const source2Copy = JSON.parse(JSON.stringify(source2));
    deepMergeObj(source1, source2);
    expect(source1).toEqual(source1Copy);
    expect(source2).toEqual(source2Copy);
  });

  it('should handle arrays as non-object values', () => {
    const source1 = { a: [1, 2] };
    const source2 = { a: [3, 4] };
    const result = deepMergeObj(source1, source2);
    expect(result).toEqual({ a: [3, 4] });
  });

  it('should handle null values as non-object values', () => {
    const source1 = { a: { x: 1 } };
    const source2 = { a: null };
    const result = deepMergeObj(source1, source2);
    expect(result).toEqual({ a: null });
  });
});
