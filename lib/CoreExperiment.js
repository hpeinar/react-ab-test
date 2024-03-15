'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _hook = _interopRequireDefault(require('./hook'));

var _emitter = _interopRequireDefault(require('./emitter'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var filterVariants = function filterVariants(name, children) {
  var variants = {};

  _react['default'].Children.forEach(children, function (element) {
    if (
      !(/*#__PURE__*/ _react['default'].isValidElement(element)) ||
      element.type.displayName !== 'Pushtell.Variant'
    ) {
      var error = new Error(
        'Pushtell Experiment children must be Pushtell Variant components.'
      );
      error.type = 'PUSHTELL_INVALID_CHILD';
      throw error;
    }

    variants[element.props.name] = element;

    _emitter['default'].addExperimentVariant(name, element.props.name);
  });

  _emitter['default'].emit('variants-loaded', name);

  return variants;
};

var CoreExperiment = function CoreExperiment(props) {
  var variants = (0, _react.useMemo)(
    function () {
      return filterVariants(props.name, props.children);
    },
    [props.name, props.children]
  );

  var _useExperiment = (0, _hook['default'])(
      props.name,
      props.userIdentifier,
      props.defaultVariantName
    ),
    selectVariant = _useExperiment.selectVariant;

  return selectVariant(variants, []);
};

CoreExperiment.propTypes = {
  name: _propTypes['default'].string.isRequired,
  userIdentifier: _propTypes['default'].string,
  defaultVariantName: _propTypes['default'].string,
  children: _propTypes['default'].node,
};
var _default = CoreExperiment;
exports['default'] = _default;
