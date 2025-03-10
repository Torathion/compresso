/**
 *  Checks if a property descriptor is editable.
 *
 *  @param descriptor - The property descriptor to check (optional).
 *  @returns `true` if the property descriptor is editable, otherwise `false`.
 */
export default function isEditable(descriptor?: PropertyDescriptor): boolean {
  return !!descriptor && !!descriptor.writable && !!descriptor.configurable
}
