'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaValidatejs = require('./aurelia-validatejs');

Object.keys(_aureliaValidatejs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaValidatejs[key];
    }
  });
});