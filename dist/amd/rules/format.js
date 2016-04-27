define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FormatRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var FormatRule = exports.FormatRule = function FormatRule(config) {
    _classCallCheck(this, FormatRule);

    return new _validationRule.ValidationRule('format', config);
  };
});