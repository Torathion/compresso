/**
 *  Determines if properties from one PropertyDescriptor can be copied to another.
 *
 * @param desc1 - The source property descriptor
 * @param desc2 - The target property descriptor
 * @returns `true` if the properties can be safely copied based on their descriptors, otherwise `false`.
 */
export default function canCopyProps(desc1: PropertyDescriptor, desc2: PropertyDescriptor): boolean {
  return (
    !!desc1.configurable ||
    (desc1.writable === desc2.writable &&
      desc1.enumerable === desc2.enumerable &&
      desc1.configurable === desc2.configurable &&
      (desc1.writable ? true : desc1.value === desc2.value) &&
      desc1.get === desc2.get &&
      desc1.set === desc2.set)
  )
}
