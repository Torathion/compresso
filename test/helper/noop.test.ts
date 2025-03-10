import { noop } from "src";
import { describe, it, expect } from "vitest";

describe('noop', () => {
    it('returns undefined', () => {
        expect(noop()).toBeUndefined();
    });

    it('has no side effects', () => {
        const obj = { value: 42 };
        const before = { ...obj };

        noop();

        expect(obj).toEqual(before);
        expect(obj.value).toBe(42);
    });

    it('accepts arguments but ignores them', () => {
        expect(() => noop(1, 'test', {})).not.toThrow();
        expect(noop(1, 'test', {})).toBeUndefined();
    });

    it('can be called multiple times safely', () => {
        const callNoop = () => {
            noop();
            noop();
            noop();
        };

        expect(callNoop).not.toThrow();
        expect(callNoop()).toBeUndefined();
    });

    it('works as a callback', () => {
        const executor = (cb: () => void) => cb();
        expect(() => executor(noop)).not.toThrow();
        expect(executor(noop)).toBeUndefined();
    });

    it('has correct function properties', () => {
        expect(typeof noop).toBe('function');
        expect(noop.length).toBe(0); // No expected parameters
        expect(noop.name).toBe('noop');
    });

    it('can be used in conditional assignments', () => {
        const fn = false ? () => 42 : noop;
        expect(fn()).toBeUndefined();

        const undefFn = undefined || noop;
        expect(undefFn()).toBeUndefined();
    });
});
