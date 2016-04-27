define(['exports', '../validation-rule'], function (exports, _validationRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.InclusionRule = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var InclusionRule = exports.InclusionRule = function InclusionRule(config) {
    _classCallCheck(this, InclusionRule);

    return new _validationRule.ValidationRule('inclusion', config);
  };
});