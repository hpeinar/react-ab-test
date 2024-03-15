'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var store;
var noopStore = {
  getItem: function getItem() {},
  setItem: function setItem() {},
};

if (typeof window !== 'undefined' && 'localStorage' in window) {
  try {
    var key = '__pushtell_react__';
    window.localStorage.setItem(key, key);

    if (window.localStorage.getItem(key) !== key) {
      store = noopStore;
    } else {
      window.localStorage.removeItem(key);
      store = window.localStorage;
    }
  } catch (e) {
    store = noopStore;
  }
} else {
  store = noopStore;
}

var _default = store;
exports['default'] = _default;
