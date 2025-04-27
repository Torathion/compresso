import { unique } from 'src';
import { describe, it, expect } from 'vitest';

describe('unique', () => {
  it('should remove duplicates from an array of numbers', () => {
    const input = [1, 2, 2, 3, 1];
    const result = unique(input);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should remove duplicates from an array of strings', () => {
    const input = ['a', 'b', 'a', 'c', 'b'];
    const result = unique(input);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should handle an empty array', () => {
    const input: number[] = [];
    const result = unique(input);
    expect(result).toEqual([]);
  });

  it('should handle an array with no duplicates', () => {
    const input = [1, 2, 3];
    const result = unique(input);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle mixed types if allowed by the type constraint', () => {
    const input = [1, 'a', 1, 'a', true, true] as (number | string | boolean)[];
    const result = unique(input);
    expect(result).toEqual([1, 'a', true]);
  });
});
