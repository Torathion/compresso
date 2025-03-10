/**
 * Checks if a value is a Blob.
 *
 *  @param value - The value to check.
 *  @returns `true` if the value is a Blob instance, otherwise `false`.
 */
export default function isBlob(value: unknown): value is Blob {
  return !!value && value instanceof Blob
}
