define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LengthRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LengthRule = exports.LengthRule = function LengthRule(config) {
    _classCallCheck(this, LengthRule);

    return new _validationRule.ValidationRule('length', config);
  };
});