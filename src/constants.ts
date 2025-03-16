export const { parse: parseJson, stringify } = JSON
export const { freeze, isExtensible, isFrozen, isSealed, preventExtensions, seal } = Object
export const {
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
  E,
  exp,
  expm1,
  floor,
  fround,
  imul,
  LN2,
  LN10,
  log,
  log1p,
  log2,
  LOG2E,
  log10,
  LOG10E,
  max,
  min,
  PI,
  pow,
  random,
  sign,
  sin,
  sinh,
  sqrt,
  SQRT1_2,
  SQRT2,
  tan,
  tanh,
  trunc
} = Math
export const { EPSILON, isInteger, isSafeInteger, MAX_SAFE_INTEGER } = Number
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
