'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumericalityRule = undefined;

var _validationRule = require('../validation-rule');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumericalityRule = exports.NumericalityRule = function NumericalityRule() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

  _classCallCheck(this, NumericalityRule);

  return new _validationRule.ValidationRule('numericality', config);
};