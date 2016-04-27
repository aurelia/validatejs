define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EqualityRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EqualityRule = exports.EqualityRule = function EqualityRule(config) {
    _classCallCheck(this, EqualityRule);

    return new _validationRule.ValidationRule('equality', config);
  };
});