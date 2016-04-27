define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DatetimeRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DatetimeRule = exports.DatetimeRule = function DatetimeRule() {
    _classCallCheck(this, DatetimeRule);

    return new _validationRule.ValidationRule('datetime', true);
  };
});