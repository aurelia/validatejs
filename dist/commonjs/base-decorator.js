'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = base;

var _propertyObserver = require('./property-observer');

function base(targetOrConfig, key, descriptor, rule) {
  if (key) {
    var target = targetOrConfig;
    targetOrConfig = null;
    return (0, _propertyObserver.observeProperty)(target, key, descriptor, targetOrConfig, rule);
  }
  return function (t, k, d) {
    return (0, _propertyObserver.observeProperty)(t, k, d, targetOrConfig, rule);
  };
}