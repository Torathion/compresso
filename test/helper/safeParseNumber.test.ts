import { safeParseNumber } from "src";
import { describe, it, expect } from "vitest";

describe('safeParseNumber', () => {
  it('should parse valid numeric strings', () => {
    expect(safeParseNumber('123')).toBe(123);
    expect(safeParseNumber('-45')).toBe(-45);
    expect(safeParseNumber('0')).toBe(0);
    expect(safeParseNumber('42.56')).toBe(42.56);
  });

  it('should parse valid numbers', () => {
    expect(safeParseNumber(123)).toBe(123);
    expect(safeParseNumber(-45)).toBe(-45);
    expect(safeParseNumber(0)).toBe(0);
    expect(safeParseNumber(42.56)).toBe(42.56);
  });

  it('should return 0 for non-numeric strings', () => {
    expect(safeParseNumber('abc')).toBe(0);
    expect(safeParseNumber('12abc')).toBe(0);
    expect(safeParseNumber('')).toBe(0);
    expect(safeParseNumber(' ')).toBe(0);
  });

  it('should return 0 for null and undefined', () => {
    expect(safeParseNumber(null)).toBe(0);
    expect(safeParseNumber(undefined)).toBe(0);
  });

  it('should return 0 for NaN', () => {
    expect(safeParseNumber(NaN)).toBe(0);
  });

  it('should handle boolean values', () => {
    expect(safeParseNumber(true)).toBe(1);
    expect(safeParseNumber(false)).toBe(0);
  });

  it('should handle objects', () => {
    expect(safeParseNumber({})).toBe(0);
    expect(safeParseNumber({ toString: () => '123' })).toBe(123);
    expect(safeParseNumber({ toString: () => 'abc' })).toBe(0);
  });

  it('should handle arrays', () => {
    expect(safeParseNumber([])).toBe(0);
    expect(safeParseNumber([123])).toBe(123);
    expect(safeParseNumber(['123'])).toBe(123);
    expect(safeParseNumber(['abc'])).toBe(0);
    expect(safeParseNumber([1, 2])).toBe(0);
  });

  it('should handle edge cases', () => {
    expect(safeParseNumber(Infinity)).toBe(Infinity);
    expect(safeParseNumber(-Infinity)).toBe(-Infinity);
    expect(safeParseNumber('Infinity')).toBe(Infinity);
    expect(safeParseNumber('-Infinity')).toBe(-Infinity);
  });

  it('should handle scientific notation', () => {
    expect(safeParseNumber('1e3')).toBe(1000);
    expect(safeParseNumber('-2.5e-2')).toBe(-0.025);
    expect(safeParseNumber('1e-abc')).toBe(0);
  });

  it('should handle whitespace in strings', () => {
    expect(safeParseNumber(' 123 ')).toBe(123);
    expect(safeParseNumber(' -45.67 ')).toBe(-45.67);
  });
});
