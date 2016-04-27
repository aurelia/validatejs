define(['exports', 'aurelia-validation', './validation-config', './validation-engine', 'aurelia-metadata', './rules/required', './rules/length', './rules/numericality', './rules/email', './rules/inclusion', './rules/exclusion', './rules/equality', './rules/format', './rules/url', './rules/date', './rules/datetime'], function (exports, _aureliaValidation, _validationConfig, _validationEngine, _aureliaMetadata, _required, _length, _numericality, _email, _inclusion, _exclusion, _equality, _format, _url, _date, _datetime) {
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
    function Validator() {
      _classCallCheck(this, Validator);
    }

    Validator.prototype.validate = function validate(prop) {
      var reporter = _validationEngine.ValidationEngine.getValidationReporter(this.object);
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
      var config = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaValidation.validationMetadataKey, _validationConfig.ValidationConfig, this.object);
      this.config = config;
      this.currentProperty = prop;
      return this;
    };

    Validator.prototype.length = function length(configuration) {
      this.config.addRule(this.currentProperty, new _length.LengthRule(configuration));
      return this;
    };

    Validator.prototype.required = function required() {
      this.config.addRule(this.currentProperty, new _required.RequiredRule());
      return this;
    };

    Validator.prototype.numericality = function numericality() {
      this.config.addRule(this.currentProperty, new _numericality.NumericalityRule());
      return this;
    };

    Validator.prototype.date = function date() {
      this.config.addRule(this.currentProperty, new _date.DateRule());
      return this;
    };

    Validator.prototype.datetime = function datetime() {
      this.config.addRule(this.currentProperty, new _datetime.DatetimeRule());
      return this;
    };

    Validator.prototype.email = function email() {
      this.config.addRule(this.currentProperty, new _email.EmailRule());
      return this;
    };

    Validator.prototype.equality = function equality(configuration) {
      this.config.addRule(this.currentProperty, new _equality.EqualityRule(configuration));
      return this;
    };

    Validator.prototype.format = function format(configuration) {
      this.config.addRule(this.currentProperty, new _format.FormatRule(configuration));
      return this;
    };

    Validator.prototype.inclusion = function inclusion(configuration) {
      this.config.addRule(this.currentProperty, new _inclusion.InclusionRule(configuration));
      return this;
    };

    Validator.prototype.exclusion = function exclusion(configuration) {
      this.config.addRule(this.currentProperty, new _exclusion.ExclusionRule(configuration));
      return this;
    };

    Validator.prototype.url = function url() {
      this.config.addRule(this.currentProperty, new _url.UrlRule());
      return this;
    };

    return Validator;
  }();
});