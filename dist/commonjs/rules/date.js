'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRule = undefined;

var _validationRule = require('../validation-rule');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateRule = exports.DateRule = function DateRule() {
  _classCallCheck(this, DateRule);

  return new _validationRule.ValidationRule('date', true);
};