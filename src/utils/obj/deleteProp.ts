import type { Table } from "typestar";

/**
 *  Deletes a specified property from an object.
 *
 *  @param o - The object from which to delete the property (can be partial)
 *  @param prop - The key of the property to delete
 */
export default function deleteProp<T extends Table<any>>(o: Partial<T>, prop: keyof T): void {
  delete o[prop]
}
