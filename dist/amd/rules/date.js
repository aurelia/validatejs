define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateRule = exports.DateRule = function DateRule() {
    _classCallCheck(this, DateRule);

    return new _validationRule.ValidationRule('date', true);
  };
});