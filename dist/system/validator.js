'use strict';

System.register(['aurelia-validation', './validation-config', './validation-engine', 'aurelia-metadata', './rules/required', './rules/length', './rules/numericality', './rules/email', './rules/inclusion', './rules/exclusion', './rules/equality', './rules/format', './rules/url', './rules/date', './rules/datetime'], function (_export, _context) {
  var validationMetadataKey, ValidationConfig, ValidationEngine, metadata, RequiredRule, LengthRule, NumericalityRule, EmailRule, InclusionRule, ExclusionRule, EqualityRule, FormatRule, UrlRule, DateRule, DatetimeRule, Validator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaValidation) {
      validationMetadataKey = _aureliaValidation.validationMetadataKey;
    }, function (_validationConfig) {
      ValidationConfig = _validationConfig.ValidationConfig;
    }, function (_validationEngine) {
      ValidationEngine = _validationEngine.ValidationEngine;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_rulesRequired) {
      RequiredRule = _rulesRequired.RequiredRule;
    }, function (_rulesLength) {
      LengthRule = _rulesLength.LengthRule;
    }, function (_rulesNumericality) {
      NumericalityRule = _rulesNumericality.NumericalityRule;
    }, function (_rulesEmail) {
      EmailRule = _rulesEmail.EmailRule;
    }, function (_rulesInclusion) {
      InclusionRule = _rulesInclusion.InclusionRule;
    }, function (_rulesExclusion) {
      ExclusionRule = _rulesExclusion.ExclusionRule;
    }, function (_rulesEquality) {
      EqualityRule = _rulesEquality.EqualityRule;
    }, function (_rulesFormat) {
      FormatRule = _rulesFormat.FormatRule;
    }, function (_rulesUrl) {
      UrlRule = _rulesUrl.UrlRule;
    }, function (_rulesDate) {
      DateRule = _rulesDate.DateRule;
    }, function (_rulesDatetime) {
      DatetimeRule = _rulesDatetime.DatetimeRule;
    }],
    execute: function () {
      _export('Validator', Validator = function () {
        function Validator() {
          _classCallCheck(this, Validator);
        }

        Validator.prototype.validate = function validate(prop) {
          var reporter = ValidationEngine.getValidationReporter(this.object);
          if (prop) {
            this.config.validate(this.object, reporter, prop);
          } else {
            this.config.validate(this.object, reporter);
          }
        };

        Validator.prototype.getProperties = function getProperties() {
          console.error('Not yet implemented');
        };

        Validator.prototype.ensure = function ensure(object, prop) {
          if (this.object && this.object !== object) {
            throw new Error('Validator cannot handle multiple objects');
          }
          this.object = object;
          var config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
          this.config = config;
          this.currentProperty = prop;
          return this;
        };

        Validator.prototype.length = function length(configuration) {
          this.config.addRule(this.currentProperty, new LengthRule(configuration));
          return this;
        };

        Validator.prototype.required = function required() {
          this.config.addRule(this.currentProperty, new RequiredRule());
          return this;
        };

        Validator.prototype.numericality = function numericality() {
          this.config.addRule(this.currentProperty, new NumericalityRule());
          return this;
        };

        Validator.prototype.date = function date() {
          this.config.addRule(this.currentProperty, new DateRule());
          return this;
        };

        Validator.prototype.datetime = function datetime() {
          this.config.addRule(this.currentProperty, new DatetimeRule());
          return this;
        };

        Validator.prototype.email = function email() {
          this.config.addRule(this.currentProperty, new EmailRule());
          return this;
        };

        Validator.prototype.equality = function equality(configuration) {
          this.config.addRule(this.currentProperty, new EqualityRule(configuration));
          return this;
        };

        Validator.prototype.format = function format(configuration) {
          this.config.addRule(this.currentProperty, new FormatRule(configuration));
          return this;
        };

        Validator.prototype.inclusion = function inclusion(configuration) {
          this.config.addRule(this.currentProperty, new InclusionRule(configuration));
          return this;
        };

        Validator.prototype.exclusion = function exclusion(configuration) {
          this.config.addRule(this.currentProperty, new ExclusionRule(configuration));
          return this;
        };

        Validator.prototype.url = function url() {
          this.config.addRule(this.currentProperty, new UrlRule());
          return this;
        };

        return Validator;
      }());

      _export('Validator', Validator);
    }
  };
});