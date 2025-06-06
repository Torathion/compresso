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
  round,
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
export const { EPSILON, isInteger, isSafeInteger, MAX_SAFE_INTEGER, MAX_VALUE: MAX_NUM, MIN_VALUE: MIN_NUM } = Number
export const {
  assign: refMergeObj,
  defineProperty: defineProp,
  entries: entriesOf,
  getOwnPropertyDescriptor: getPropDescriptor,
  getPrototypeOf: getProto,
  hasOwn: hasProp,
  keys: keysOf,
  setPrototypeOf: setProto,
  values: valuesOf
} = Object

// String
export const { fromCharCode, fromCodePoint } = String

// Error
export const { captureStackTrace: createStackTrace, prepareStackTrace } = Error

// Array
export const { from: arrFrom, isArray } = Array
