define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UrlRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var UrlRule = exports.UrlRule = function UrlRule() {
    _classCallCheck(this, UrlRule);

    return new _validationRule.ValidationRule('url', true);
  };
});