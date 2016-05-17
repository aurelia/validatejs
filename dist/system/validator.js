'use strict';

System.register(['./metadata-key', './validation-config', './validation-engine', './validation-rule', 'aurelia-metadata'], function (_export, _context) {
  var validationMetadataKey, ValidationConfig, ValidationEngine, ValidationRule, metadata, Validator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_metadataKey) {
      validationMetadataKey = _metadataKey.validationMetadataKey;
    }, function (_validationConfig) {
      ValidationConfig = _validationConfig.ValidationConfig;
    }, function (_validationEngine) {
      ValidationEngine = _validationEngine.ValidationEngine;
    }, function (_validationRule) {
      ValidationRule = _validationRule.ValidationRule;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }],
    execute: function () {
      _export('Validator', Validator = function () {
        function Validator(object) {
          _classCallCheck(this, Validator);

          this.object = object;
        }

        Validator.prototype.validate = function validate(prop) {
          var config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
          var reporter = ValidationEngine.getValidationReporter(this.object);
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
          var config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
          this.config = config;
          this.currentProperty = prop;
          return this;
        };

        Validator.prototype.length = function length(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.lengthRule(configuration));
          return this;
        };

        Validator.prototype.presence = function presence(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.presence(configuration));
          return this;
        };

        Validator.prototype.required = function required(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.presence(configuration));
          return this;
        };

        Validator.prototype.numericality = function numericality(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.numericality(configuration));
          return this;
        };

        Validator.prototype.date = function date(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.date(configuration));
          return this;
        };

        Validator.prototype.datetime = function datetime(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.datetime(configuration));
          return this;
        };

        Validator.prototype.email = function email(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.email(configuration));
          return this;
        };

        Validator.prototype.equality = function equality(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.equality(configuration));
          return this;
        };

        Validator.prototype.format = function format(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.format(configuration));
          return this;
        };

        Validator.prototype.inclusion = function inclusion(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.inclusion(configuration));
          return this;
        };

        Validator.prototype.exclusion = function exclusion(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.exclusion(configuration));
          return this;
        };

        Validator.prototype.url = function url(configuration) {
          this.config.addRule(this.currentProperty, ValidationRule.url(configuration));
          return this;
        };

        return Validator;
      }());

      _export('Validator', Validator);
    }
  };
});