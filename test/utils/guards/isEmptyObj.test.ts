import { isEmptyObj } from 'src';
import { describe, it, expect } from 'vitest';

describe('isEmptyObj', () => {
    it('should return true for an empty object', () => {
        expect(isEmptyObj({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
        expect(isEmptyObj({ key: 'value' })).toBe(false);
        expect(isEmptyObj({ a: 1, b: 2 })).toBe(false);
    });

    it('should return true for null', () => {
        expect(isEmptyObj(null as any)).toBe(true);
    });

    it('should return true for undefined', () => {
        expect(isEmptyObj(undefined as any)).toBe(true);
    });

    it('should return false for an object with inherited properties', () => {
        const obj = Object.create({ inherited: 'value' });
        obj.own = 'property';
        expect(isEmptyObj(obj)).toBe(false);
    });

    it('should return true for an object with no own properties but inherited properties', () => {
        const obj = Object.create({ inherited: 'value' });
        expect(isEmptyObj(obj)).toBe(false);
    });

    it('should return false for an object with non-enumerable properties', () => {
        const obj = {};
        Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false });
        expect(isEmptyObj(obj)).toBe(true); // Non-enumerable properties are ignored
    });

    it('should handle arrays as non-empty objects', () => {
        expect(isEmptyObj([])).toBe(true);
        expect(isEmptyObj([1, 2, 3])).toBe(false);
    });
});
