'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _crc = _interopRequireDefault(require('fbjs/lib/crc32'));

var _emitter = _interopRequireDefault(require('./emitter'));

var _store = _interopRequireDefault(require('./store'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var calculateVariant = function calculateVariant(
  experimentName,
  userIdentifier
) {
  /*
     Choosing a weighted variant:
      For C, A, B with weights 2, 4, 8
       variants = A, B, C
      weights = 4, 8, 2
      weightSum = 14
      weightedIndex = 9
       AAAABBBBBBBBCC
      ========^
      Select B
     */
  // Sorted array of the variant names, example: ["A", "B", "C"]
  var variants = _emitter['default'].getSortedVariants(experimentName); // Array of the variant weights, also sorted by variant name. For example, if
  // variant C had weight 2, variant A had weight 4, and variant B had weight 8
  // return [4, 8, 2] to correspond with ["A", "B", "C"]

  var weights = _emitter['default'].getSortedVariantWeights(experimentName); // Sum the weights

  var weightSum = weights.reduce(function (a, b) {
    return a + b;
  }, 0); // A random number between 0 and weightSum

  var weightedIndex =
    typeof userIdentifier === 'string'
      ? Math.abs((0, _crc['default'])(userIdentifier) % weightSum)
      : Math.floor(Math.random() * weightSum); // Iterate through the sorted weights, and deduct each from the weightedIndex.
  // If weightedIndex drops < 0, select the variant. If weightedIndex does not
  // drop < 0, default to the last variant in the array that is initially assigned.

  var selectedVariant = variants[variants.length - 1];

  for (var index = 0; index < weights.length; index++) {
    weightedIndex -= weights[index];

    if (weightedIndex < 0) {
      selectedVariant = variants[index];
      break;
    }
  }

  _emitter['default'].setActiveVariant(experimentName, selectedVariant);

  return selectedVariant;
};

var _default = function _default(
  experimentName,
  userIdentifier,
  defaultVariantName
) {
  if (typeof userIdentifier === 'string') {
    return calculateVariant(experimentName, userIdentifier);
  }

  var activeValue = _emitter['default'].getActiveVariant(experimentName);

  if (typeof activeValue === 'string') {
    return activeValue;
  }

  var storedValue = _store['default'].getItem('PUSHTELL-' + experimentName);

  if (typeof storedValue === 'string') {
    _emitter['default'].setActiveVariant(experimentName, storedValue, true);

    return storedValue;
  }

  if (typeof defaultVariantName === 'string') {
    _emitter['default'].setActiveVariant(experimentName, defaultVariantName);

    return defaultVariantName;
  }

  return calculateVariant(experimentName);
};

exports['default'] = _default;
