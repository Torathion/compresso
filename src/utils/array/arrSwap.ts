import IndexOutOfBoundsError from 'src/errors/IndexOutOfBoundsError'

/**
 *  Swaps two values of given indices inside an array.
 *
 * @param arr - target array.
 * @param i1 - index of the first element to switch.
 * @param i2 - index of the second element to switch with.
 */
export default function arrSwap(arr: unknown[], i1: number, i2: number): void {
  const len = arr.length
  if (i1 < 0 || i1 > len) throw new IndexOutOfBoundsError(i1, len)
  if (i2 < 0 || i2 > len) throw new IndexOutOfBoundsError(i2, len)
  const temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}
