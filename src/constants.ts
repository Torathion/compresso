export const { parse: parseJson, stringify } = JSON
export const { freeze, isExtensible, isFrozen, isSealed, seal, preventExtensions } = Object
export const {
  E,
  LN10,
  LN2,
  LOG10E,
  LOG2E,
  PI,
  SQRT1_2,
  SQRT2,
  max,
  min,
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  imul,
  log,
  log10,
  log1p,
  log2,
  pow,
  random,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc
} = Math
export const { EPSILON, MAX_SAFE_INTEGER, isInteger, isSafeInteger } = Number
export const MAX_NUM = Number.MAX_VALUE
export const MIN_NUM = Number.MIN_VALUE
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
