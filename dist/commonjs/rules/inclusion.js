'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InclusionRule = undefined;

var _validationRule = require('../validation-rule');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InclusionRule = exports.InclusionRule = function InclusionRule(config) {
  _classCallCheck(this, InclusionRule);

  return new _validationRule.ValidationRule('inclusion', config);
};