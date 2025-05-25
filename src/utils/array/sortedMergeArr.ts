/**
 *	Merges two sorted arrays. It's a binary merge algorithm that is faster than `mergeArr` of `compactor`.
 *  Both arrays have to be sorted for it to work.
 *
 *  @param arr1 - array to merge
 *  @param arr2 - array to merge, can be of different type, but has to be handled in the comparator
 *  @param comparator - function to compare the both array values with.
 *                      Works in the way of: negative number or 0 = first array, positive number = second array
 *  @param outputArr - the merged array. By passing it as a parameter, you can save extra time.
 *  @returns the merged array.
 */
export default function sortedMergeArr<T, U = T>(
  arr1: T[],
  arr2: U[],
  comparator: (a: T, b: U) => number = (a, b): number => (a as any) - (b as any),
  outputArr?: (T | U)[]
): (T | U)[] {
  const len1 = arr1.length
  const len2 = arr2.length
  outputArr ??= new Array(len1 + len2)
  // indexes
  let i1 = 0,
    i2 = 0,
    oi = 0
  while (i1 < len1 && i2 < len2) outputArr[oi++] = comparator(arr1[i1], arr2[i2]) <= 0 ? arr1[i1++] : arr2[i2++]
  // get the rest of each array, if the have different sizes.
  while (i1 < len1) outputArr[oi++] = arr1[i1++]
  while (i2 < len2) outputArr[oi++] = arr2[i2++]
  return outputArr
}
