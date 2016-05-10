define(['exports', './metadata-key', './validation-config', './validation-engine', './validation-rule', 'aurelia-metadata'], function (exports, _metadataKey, _validationConfig, _validationEngine, _validationRule, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Validator = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Validator = exports.Validator = function () {
    function Validator(object) {
      _classCallCheck(this, Validator);

      this.object = object;
    }

    Validator.prototype.validate = function validate(prop) {
      var config = _aureliaMetadata.metadata.getOrCreateOwn(_metadataKey.validationMetadataKey, _validationConfig.ValidationConfig, this.object);
      var reporter = _validationEngine.ValidationEngine.getValidationReporter(this.object);
      if (prop) {
        config.validate(this.object, reporter, prop);
      } else {
        config.validate(this.object, reporter);
      }
    };

    Validator.prototype.getProperties = function getProperties() {
      console.error('Not yet implemented');
    };

    Validator.prototype.ensure = function ensure(prop) {
      var config = _aureliaMetadata.metadata.getOrCreateOwn(_metadataKey.validationMetadataKey, _validationConfig.ValidationConfig, this.object);
      this.config = config;
      this.currentProperty = prop;
      return this;
    };

    Validator.prototype.length = function length(configuration) {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.lengthRule(configuration));
      return this;
    };

    Validator.prototype.presence = function presence() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.presence());
      return this;
    };

    Validator.prototype.required = function required() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.presence());
      return this;
    };

    Validator.prototype.numericality = function numericality() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.numericality());
      return this;
    };

    Validator.prototype.date = function date() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.date());
      return this;
    };

    Validator.prototype.datetime = function datetime() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.datetime());
      return this;
    };

    Validator.prototype.email = function email() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.email());
      return this;
    };

    Validator.prototype.equality = function equality(configuration) {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.equality(configuration));
      return this;
    };

    Validator.prototype.format = function format(configuration) {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.format(configuration));
      return this;
    };

    Validator.prototype.inclusion = function inclusion(configuration) {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.inclusion(configuration));
      return this;
    };

    Validator.prototype.exclusion = function exclusion(configuration) {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.exclusion(configuration));
      return this;
    };

    Validator.prototype.url = function url() {
      this.config.addRule(this.currentProperty, _validationRule.ValidationRule.url());
      return this;
    };

    return Validator;
  }();
});