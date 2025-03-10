export default class IndexOutOfBoundsError extends RangeError {
  constructor(index: number, arrayLength: number) {
    super(`Index ${index} is out of bounds in array with length of ${arrayLength}.`)
    this.name = 'IndexOutOfBoundsError'
  }
}
