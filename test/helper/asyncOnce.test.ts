import { describe, it, expect, vi } from "vitest";
import { onceAsync } from 'src';

describe("onceAsync", () => {
    it("should call the async function only once and cache the result", async () => {
        const mockAsyncFn = vi.fn(async () => 42);
        const wrappedFn = onceAsync(mockAsyncFn);

        const result1 = await wrappedFn();
        const result2 = await wrappedFn();

        expect(mockAsyncFn).toHaveBeenCalledTimes(1);
        expect(result1).toBe(42);
        expect(result2).toBe(42);
    });

    it("should handle async functions that return different results", async () => {
        let counter = 0;
        const mockAsyncFn = vi.fn(async () => {
            counter++;
            return counter;
        });

        const wrappedFn = onceAsync(mockAsyncFn);

        const result1 = await wrappedFn();
        const result2 = await wrappedFn();

        expect(mockAsyncFn).toHaveBeenCalledTimes(1);
        expect(result1).toBe(1);
        expect(result2).toBe(1);
    });

    it("should copy properties from the original function", async () => {
        const mockAsyncFn = vi.fn(async () => 42);
        mockAsyncFn.someProperty = "test";

        const wrappedFn = onceAsync(mockAsyncFn);

        expect(wrappedFn.someProperty).toBe("test");
    });
});
