define(['exports', './aurelia-validatejs'], function (exports, _aureliaValidatejs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaValidatejs).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaValidatejs[key];
      }
    });
  });
});