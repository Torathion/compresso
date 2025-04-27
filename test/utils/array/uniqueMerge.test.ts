import { uniqueMerge } from 'src';
import { describe, it, expect, expectTypeOf } from 'vitest';

describe('uniqueMerge', () => {
  it('should merge two arrays of numbers and remove duplicates', () => {
    const arr1 = [1, 2, 2];
    const arr2 = [2, 3, 3];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should merge two arrays of strings and remove duplicates', () => {
    const arr1 = ['a', 'b', 'b'];
    const arr2 = ['b', 'c', 'c'];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should handle objects with reference equality', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const arr1 = [obj1, obj1];
    const arr2 = [obj1, obj2];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual([obj1, obj2]);
    expect(result.length).toBe(2); // Objects are unique by reference
  });

  it('should handle when second array is undefined', () => {
    const arr1 = [1, 2, 2];
    const result = uniqueMerge(arr1);
    expect(result).toEqual([1, 2]);
  });

  it('should handle empty first array', () => {
    const arr1: number[] = [];
    const arr2 = [1, 2, 2];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual([1, 2]);
  });

  it('should handle both arrays empty', () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual([]);
  });

  it('should handle mixed primitive types', () => {
    const arr1 = [1, 'a', true];
    const arr2 = ['a', true, 2] as (number | string | boolean)[];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual([1, 'a', true, 2]);
  });

  it('should preserve the type of the array elements', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const result = uniqueMerge(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
    expectTypeOf(result).toEqualTypeOf<number[]>();
  });

  it('should not modify the original arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr1Copy = [...arr1];
    const arr2Copy = [...arr2];
    uniqueMerge(arr1, arr2);
    expect(arr1).toEqual(arr1Copy);
    expect(arr2).toEqual(arr2Copy);
  });
});
