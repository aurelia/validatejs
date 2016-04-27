'use strict';

System.register(['validate.js', './validation-error'], function (_export, _context) {
  var _validate, ValidationError, ValidationRule;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_validateJs) {
      _validate = _validateJs.default;
    }, function (_validationError) {
      ValidationError = _validationError.ValidationError;
    }],
    execute: function () {
      _export('ValidationRule', ValidationRule = function () {
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
            var result = _validate(target, validator);
            if (result) {
              result = new ValidationError(result);
            }
            return result;
          }
          throw new Error('Invalid target or property name.');
        };

        return ValidationRule;
      }());

      _export('ValidationRule', ValidationRule);
    }
  };
});