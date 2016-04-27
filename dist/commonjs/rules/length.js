'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LengthRule = undefined;

var _validationRule = require('../validation-rule');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LengthRule = exports.LengthRule = function LengthRule(config) {
  _classCallCheck(this, LengthRule);

  return new _validationRule.ValidationRule('length', config);
};