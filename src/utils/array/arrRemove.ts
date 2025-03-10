/**
 *  Removes a given element from a given array.
 *
 *  @param arr - target array.
 *  @param element - target element.
 */
export default function arrRemove<T>(arr: T[], element: T): void {
  const index = arr.indexOf(element)
  if (index !== -1) arr.splice(index, 1)
}
