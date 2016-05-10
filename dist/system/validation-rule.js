'use strict';

System.register(['validate.js', 'aurelia-validation'], function (_export, _context) {
  var _validate, ValidationError, ValidationRule;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_validateJs) {
      _validate = _validateJs.default;
    }, function (_aureliaValidation) {
      ValidationError = _aureliaValidation.ValidationError;
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
              var error = cleanResult(result);
              result = new ValidationError(error);
            }
            return result;
          }
          throw new Error('Invalid target or property name.');
        };

        ValidationRule.date = function date() {
          var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

          return new ValidationRule('date', config);
        };

        ValidationRule.datetime = function datetime() {
          var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

          return new ValidationRule('datetime', config);
        };

        ValidationRule.email = function email() {
          var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

          return new ValidationRule('email', config);
        };

        ValidationRule.equality = function equality(config) {
          return new ValidationRule('equality', config);
        };

        ValidationRule.exclusion = function exclusion(config) {
          return new ValidationRule('exclusion', config);
        };

        ValidationRule.format = function format(config) {
          return new ValidationRule('format', config);
        };

        ValidationRule.inclusion = function inclusion(config) {
          return new ValidationRule('inclusion', config);
        };

        ValidationRule.lengthRule = function lengthRule(config) {
          return new ValidationRule('length', config);
        };

        ValidationRule.numericality = function numericality() {
          var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

          return new ValidationRule('numericality', config);
        };

        ValidationRule.presence = function presence() {
          var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

          return new ValidationRule('presence', config);
        };

        ValidationRule.url = function url() {
          var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

          return new ValidationRule('url', config);
        };

        return ValidationRule;
      }());

      _export('ValidationRule', ValidationRule);

      function cleanResult(data) {
        var result = {};
        for (var prop in data) {
          if (data.hasOwnProperty(prop)) {
            result = {
              propertyName: prop,
              message: data[prop][0]
            };
          }
        }
        return result;
      }

      _export('cleanResult', cleanResult);
    }
  };
});