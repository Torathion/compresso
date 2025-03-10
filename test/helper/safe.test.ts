import { safe } from 'src'
import { describe, it, expect } from "vitest";

describe('safe', () => {
    it('returns function result when no error occurs', () => {
        const add = (a: number, b: number) => a + b;
        const safeAdd = safe(add);
        expect(safeAdd(2, 3)).toBe(5);
    });

    it('returns undefined when function throws', () => {
        const risky = (x: number) => {
            if (x < 0) throw new Error('Negative');
            return x * 2;
        };
        const safeRisky = safe(risky);

        expect(safeRisky(5)).toBe(10);
        expect(safeRisky(-1)).toBeUndefined();
    });

    it('preserves successful execution with various argument counts', () => {
        const noArgs = () => 42;
        const oneArg = (x: number) => x * 2;
        const multiArg = (x: number, y: string) => `${x}${y}`;

        expect(safe(noArgs)()).toBe(42);
        expect(safe(oneArg)(5)).toBe(10);
        expect(safe(multiArg)(1, 'test')).toBe('1test');
    });

    it('handles different error types by returning undefined', () => {
        const throwError = () => { throw new Error('Standard'); };
        const throwTypeError = () => { throw new TypeError('Type'); };
        const throwString = () => { throw 'String error'; };

        expect(safe(throwError)()).toBeUndefined();
        expect(safe(throwTypeError)()).toBeUndefined();
        expect(safe(throwString)()).toBeUndefined();
    });

    it('preserves function properties', () => {
        const fn = (x: number) => x * 2;
        fn.customProp = 'test';
        fn.customMethod = () => 'custom';

        const safeFn = safe(fn);
        expect(safeFn.customProp).toBe('test');
        expect(safeFn.customMethod()).toBe('custom');
    });

    it('maintains correct function signature', () => {
        const typedFn = (x: number, y: string): string => `${x}${y}`;
        const safeTyped = safe(typedFn);

        expect(safeTyped(1, 'test')).toBe('1test');
        // Simulate a potential error case
        const errorFn = (x: number) => { throw new Error('Fail'); };
        const safeError = safe(errorFn);
        expect(safeError(1)).toBeUndefined();
    });

    it('handles void functions', () => {
        const voidFn = () => { console.log('test'); };
        const safeVoid = safe(voidFn);

        expect(safeVoid()).toBeUndefined(); // Void returns undefined naturally
        const throwingVoid = () => { throw new Error('Fail'); };
        const safeThrowingVoid = safe(throwingVoid);
        expect(safeThrowingVoid()).toBeUndefined();
    });
});
