/**
 *  Converts an array of Promises into an AsyncIterable.
 *
 *  @param arr - An array of Promises to be converted
 *  @returns An AsyncIterable that yields resolved values sequentially
 */
export default function toAsyncIterable<T>(arr: Promise<T>[]): AsyncIterable<T> {
  return {
    async *[Symbol.asyncIterator](): AsyncGenerator<T> {
      const len = arr.length
      for (let i = 0; i < len; i++) {
        yield await arr[i]
      }
    }
  }
}
