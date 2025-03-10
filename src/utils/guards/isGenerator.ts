/**
 *  Checks if a function is a generator function.
 *
 *  @param func - The function to check.
 *  @returns `true` if the function is a generator function, otherwise `false`.
 */
export default function isGenerator(func: unknown): func is GeneratorFunction {
  return func?.constructor.name === 'GeneratorFunction'
}
