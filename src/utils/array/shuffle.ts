import type { AnyArray } from 'typestar'

/**
 *  Shuffles an array in place using the Fisher-Yates (Knuth) shuffle algorithm
 *  and returns the shuffled array.
 *
 *  @param arr - The input array to be shuffled
 *  @returns The shuffled array (same reference as input)
 */
export default function shuffle<T>(arr: AnyArray<T>): AnyArray<T> {
  let counter = arr.length,
    index = 0,
    temp
  while (counter > 0) {
    index = (Math.random() * counter) | 0
    counter--
    temp = arr[counter]
    arr[counter] = arr[index]
    arr[index] = temp
  }
  return arr
}
