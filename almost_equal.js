"use strict"

var abs = Math.abs
  , min = Math.min

function almostEqual(a, b, absoluteError, relativeError) {
  var d = abs(a - b)
  if(d <= absoluteError) {
    return true
  }
  if(d <= relativeError * min(abs(a), abs(b))) {
    return true
  }
  return a === b
}

function curry(absoluteError, relativeError) {
  return function(a, b) {
    return almostEqual(a, b, absoluteError, relativeError)
  }
}

almostEqual.FLT_EPSILON = 1.19209290e-7
almostEqual.DBL_EPSILON = 2.2204460492503131e-16
almostEqual.curry = curry

module.exports = almostEqual
