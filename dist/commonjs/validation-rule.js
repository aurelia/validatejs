'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationRule = undefined;

var _validate2 = require('validate.js');

var _validate3 = _interopRequireDefault(_validate2);

var _validationError = require('./validation-error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationRule = exports.ValidationRule = function () {
  function ValidationRule(name, config) {
    _classCallCheck(this, ValidationRule);

    this.name = '';

    this.name = name;
    this.config = config;
  }

  ValidationRule.prototype.validate = function validate(target, propName) {
    if (target && propName) {
      var _propName, _validator;

      var validator = (_validator = {}, _validator[propName] = (_propName = {}, _propName[this.name] = this.config, _propName), _validator);
      var result = (0, _validate3.default)(target, validator);
      if (result) {
        result = new _validationError.ValidationError(result);
      }
      return result;
    }
    throw new Error('Invalid target or property name.');
  };

  return ValidationRule;
}();