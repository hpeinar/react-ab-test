'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _emitter = _interopRequireDefault(require('../emitter'));

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var playSubscription, winSubscription;
var _default = {
  enable: function enable() {
    if (_ExecutionEnvironment.canUseDOM) {
      if (typeof mixpanel === 'undefined') {
        var error = new Error(
          "React A/B Test Mixpanel Helper: 'mixpanel' global is not defined."
        );
        error.type = 'PUSHTELL_HELPER_MISSING_GLOBAL';
        throw error;
      }

      playSubscription = _emitter['default'].addPlayListener(function (
        experimentName,
        variantName
      ) {
        mixpanel.track(
          'Experiment Play',
          {
            Experiment: experimentName,
            Variant: variantName,
          },
          function () {
            _emitter['default'].emit(
              'mixpanel-play',
              experimentName,
              variantName
            );
          }
        );
      });
      winSubscription = _emitter['default'].addWinListener(function (
        experimentName,
        variantName
      ) {
        mixpanel.track(
          'Experiment Win',
          {
            Experiment: experimentName,
            Variant: variantName,
          },
          function () {
            _emitter['default'].emit(
              'mixpanel-win',
              experimentName,
              variantName
            );
          }
        );
      });
    }
  },
  disable: function disable() {
    if (_ExecutionEnvironment.canUseDOM) {
      if (!playSubscription || !winSubscription) {
        var error = new Error(
          'React A/B Test Mixpanel Helper: Helper was not enabled.'
        );
        error.type = 'PUSHTELL_HELPER_INVALID_DISABLE';
        throw error;
      }

      playSubscription.remove();
      winSubscription.remove();
    }
  },
};
exports['default'] = _default;
