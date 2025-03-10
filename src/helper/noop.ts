/**
 *  A no-operation function that performs no action and returns undefined.
 *
 *  Useful as a default callback, placeholder, or when an empty function is required.
 *  This function intentionally does nothing and has no side effects.
 */
export default function noop(..._args: unknown[]): void {
    return undefined;
}
