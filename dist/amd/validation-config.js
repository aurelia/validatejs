define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationConfig = exports.ValidationConfig = function () {
    function ValidationConfig() {
      _classCallCheck(this, ValidationConfig);

      this.__validationRules__ = [];
    }

    ValidationConfig.prototype.addRule = function addRule(key, rule) {
      this.__validationRules__.push({ key: key, rule: rule });
    };

    ValidationConfig.prototype.validate = function validate(instance, reporter, key) {
      var errors = [];
      this.__validationRules__.forEach(function (rule) {
        if (!key || key === rule.key) {
          var result = rule.rule.validate(instance, rule.key);
          if (result) {
            errors.push(result);
          }
        }
      });
      reporter.publish(errors);
      return errors;
    };

    ValidationConfig.prototype.getValidationRules = function getValidationRules() {
      return this.__validationRules__ || (this.__validationRules__ = aggregateValidationRules(this));
    };

    ValidationConfig.prototype.aggregateValidationRules = function aggregateValidationRules() {
      console.error('not yet implemented');
    };

    return ValidationConfig;
  }();
});