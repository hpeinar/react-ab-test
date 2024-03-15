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

var _react = _interopRequireWildcard(require('react'));

var _reactDom = _interopRequireDefault(require('react-dom'));

var _emitter = _interopRequireDefault(require('./emitter'));

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var isDebuggerAvailable = process.env.NODE_ENV !== 'production';
var style = null;

function attachStyleSheet() {
  style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);

  function addCSSRule(selector, rules) {
    if ('insertRule' in style.sheet) {
      style.sheet.insertRule(selector + '{' + rules + '}', 0);
    } else if ('addRule' in style.sheet) {
      style.sheet.addRule(selector, rules, 0);
    }
  }

  addCSSRule('#pushtell-debugger', 'z-index: 25000');
  addCSSRule('#pushtell-debugger', 'position: fixed');
  addCSSRule('#pushtell-debugger', 'transform: translateX(-50%)');
  addCSSRule('#pushtell-debugger', 'bottom: 0');
  addCSSRule('#pushtell-debugger', 'left: 50%');
  addCSSRule('#pushtell-debugger ul', 'margin: 0');
  addCSSRule('#pushtell-debugger ul', 'padding: 0 0 0 20px');
  addCSSRule('#pushtell-debugger li', 'margin: 0');
  addCSSRule('#pushtell-debugger li', 'padding: 0');
  addCSSRule('#pushtell-debugger li', 'font-size: 14px');
  addCSSRule('#pushtell-debugger li', 'line-height: 14px');
  addCSSRule('#pushtell-debugger input', 'float: left');
  addCSSRule('#pushtell-debugger input', 'margin: 0 10px 0 0');
  addCSSRule('#pushtell-debugger input', 'padding: 0');
  addCSSRule('#pushtell-debugger input', 'cursor: pointer');
  addCSSRule('#pushtell-debugger label', 'color: #999999');
  addCSSRule('#pushtell-debugger label', 'margin: 0 0 10px 0');
  addCSSRule('#pushtell-debugger label', 'cursor: pointer');
  addCSSRule('#pushtell-debugger label', 'font-weight: normal');
  addCSSRule('#pushtell-debugger label.active', 'color: #000000');
  addCSSRule('#pushtell-debugger .pushtell-experiment-name', 'font-size: 16px');
  addCSSRule('#pushtell-debugger .pushtell-experiment-name', 'color: #000000');
  addCSSRule(
    '#pushtell-debugger .pushtell-experiment-name',
    'margin: 0 0 10px 0'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-production-build-note',
    'font-size: 10px'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-production-build-note',
    'color: #999999'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-production-build-note',
    'text-align: center'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-production-build-note',
    'margin: 10px -40px 0 -10px'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-production-build-note',
    'border-top: 1px solid #b3b3b3'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-production-build-note',
    'padding: 10px 10px 5px 10px'
  );
  addCSSRule('#pushtell-debugger .pushtell-handle', 'cursor: pointer');
  addCSSRule(
    '#pushtell-debugger .pushtell-handle',
    'padding: 5px 10px 5px 10px'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-panel',
    'padding: 15px 40px 5px 10px'
  );
  addCSSRule('#pushtell-debugger .pushtell-container', 'font-size: 11px');
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'background-color: #ebebeb'
  );
  addCSSRule('#pushtell-debugger .pushtell-container', 'color: #000000');
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'box-shadow: 0px 0 5px rgba(0, 0, 0, 0.1)'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'border-top: 1px solid #b3b3b3'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'border-left: 1px solid #b3b3b3'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'border-right: 1px solid #b3b3b3'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'border-top-left-radius: 2px'
  );
  addCSSRule(
    '#pushtell-debugger .pushtell-container',
    'border-top-right-radius: 2px'
  );
  addCSSRule('#pushtell-debugger .pushtell-close', 'cursor: pointer');
  addCSSRule('#pushtell-debugger .pushtell-close', 'font-size: 16px');
  addCSSRule('#pushtell-debugger .pushtell-close', 'font-weight: bold');
  addCSSRule('#pushtell-debugger .pushtell-close', 'color: #CC0000');
  addCSSRule('#pushtell-debugger .pushtell-close', 'position: absolute');
  addCSSRule('#pushtell-debugger .pushtell-close', 'top: 0px');
  addCSSRule('#pushtell-debugger .pushtell-close', 'right: 7px');
  addCSSRule('#pushtell-debugger .pushtell-close:hover', 'color: #FF0000');
  addCSSRule(
    '#pushtell-debugger .pushtell-close, #pushtell-debugger label',
    'transition: all .25s'
  );
}

function removeStyleSheet() {
  if (style !== null) {
    document.head.removeChild(style);
    style = null;
  }
}

var Debugger = /*#__PURE__*/ (function (_Component) {
  _inherits(Debugger, _Component);

  var _super = _createSuper(Debugger);

  function Debugger() {
    var _this;

    _classCallCheck(this, Debugger);

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), 'state', {
      experiments: _emitter['default'].getActiveExperiments(),
      visible: false,
    });

    _defineProperty(
      _assertThisInitialized(_this),
      'toggleVisibility',
      function () {
        _this.setState({
          visible: !_this.state.visible,
        });
      }
    );

    _defineProperty(
      _assertThisInitialized(_this),
      'updateExperiments',
      function () {
        _this.setState({
          experiments: _emitter['default'].getActiveExperiments(),
        });
      }
    );

    return _this;
  }

  _createClass(Debugger, [
    {
      key: 'setActiveVariant',
      value: function setActiveVariant(experimentName, variantName) {
        _emitter['default'].setActiveVariant(experimentName, variantName);
      },
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.activeSubscription = _emitter['default'].addListener(
          'active',
          this.updateExperiments
        );
        this.inactiveSubscription = _emitter['default'].addListener(
          'inactive',
          this.updateExperiments
        );
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.activeSubscription.remove();
        this.inactiveSubscription.remove();
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var experimentNames = Object.keys(this.state.experiments);

        if (this.state.visible) {
          return /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
              className: 'pushtell-container pushtell-panel',
            },
            /*#__PURE__*/ _react['default'].createElement(
              'div',
              {
                className: 'pushtell-close',
                onClick: this.toggleVisibility,
              },
              '\xD7'
            ),
            experimentNames.map(function (experimentName) {
              var variantNames = Object.keys(
                _this2.state.experiments[experimentName]
              );

              if (variantNames.length === 0) {
                return;
              }

              return /*#__PURE__*/ _react['default'].createElement(
                'div',
                {
                  className: 'pushtell-experiment',
                  key: experimentName,
                },
                /*#__PURE__*/ _react['default'].createElement(
                  'div',
                  {
                    className: 'pushtell-experiment-name',
                  },
                  experimentName
                ),
                /*#__PURE__*/ _react['default'].createElement(
                  'ul',
                  null,
                  variantNames.map(function (variantName) {
                    return /*#__PURE__*/ _react['default'].createElement(
                      'li',
                      {
                        key: variantName,
                      },
                      /*#__PURE__*/ _react['default'].createElement(
                        'label',
                        {
                          className: _this2.state.experiments[experimentName][
                            variantName
                          ]
                            ? 'active'
                            : null,
                          onClick: _this2.setActiveVariant.bind(
                            _this2,
                            experimentName,
                            variantName
                          ),
                        },
                        /*#__PURE__*/ _react['default'].createElement('input', {
                          type: 'radio',
                          name: experimentName,
                          value: variantName,
                          defaultChecked:
                            _this2.state.experiments[experimentName][
                              variantName
                            ],
                        }),
                        variantName
                      )
                    );
                  })
                )
              );
            }),
            /*#__PURE__*/ _react['default'].createElement(
              'div',
              {
                className: 'pushtell-production-build-note',
              },
              'This panel is hidden on production builds.'
            )
          );
        } else if (experimentNames.length > 0) {
          return /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
              className: 'pushtell-container pushtell-handle',
              onClick: this.toggleVisibility,
            },
            experimentNames.length,
            ' Active Experiment',
            experimentNames.length > 1 ? 's' : ''
          );
        } else {
          return null;
        }
      },
    },
  ]);

  return Debugger;
})(_react.Component);

module.exports = {
  setDebuggerAvailable: function setDebuggerAvailable(value) {
    isDebuggerAvailable = value;
  },
  enable: function enable() {
    if (!isDebuggerAvailable || !_ExecutionEnvironment.canUseDOM) {
      return;
    }

    attachStyleSheet();
    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.id = 'pushtell-debugger';
    body.appendChild(container);

    _reactDom['default'].render(
      /*#__PURE__*/ _react['default'].createElement(Debugger, null),
      container
    );
  },
  disable: function disable() {
    if (!isDebuggerAvailable || !_ExecutionEnvironment.canUseDOM) {
      return;
    }

    removeStyleSheet();
    var body = document.getElementsByTagName('body')[0];
    var container = document.getElementById('pushtell-debugger');

    if (container) {
      _reactDom['default'].unmountComponentAtNode(container);

      body.removeChild(container);
    }
  },
};
