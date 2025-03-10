export const { parse: parseJson, stringify } = JSON

// Object
export const { freeze, isExtensible, isFrozen, isSealed, seal, preventExtensions } = Object
export const refMergeObj = Object.assign
export const defineProp = Object.defineProperty
export const getProto = Object.getPrototypeOf
export const getPropDescriptor = Object.getOwnPropertyDescriptor
export const setProto = Object.setPrototypeOf
export const entriesOf = Object.entries
export const hasProp = Object.hasOwn

// String
export const { fromCharCode, fromCodePoint } = String

// Error
export const createStackTrace = Error.captureStackTrace
export const { prepareStackTrace } = Error
