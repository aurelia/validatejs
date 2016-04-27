'use strict';

System.register(['./decorators', './validation-engine', 'aurelia-validation', './validator', './validation-reporter'], function (_export, _context) {
  var Validator, ValidateJSValidator, ValidationReporter, ValidateJSReporter;
  return {
    setters: [function (_decorators) {
      var _exportObj = {};
      _exportObj.length = _decorators.length;
      _exportObj.required = _decorators.required;
      _exportObj.date = _decorators.date;
      _exportObj.datetime = _decorators.datetime;
      _exportObj.email = _decorators.email;
      _exportObj.equality = _decorators.equality;
      _exportObj.exclusion = _decorators.exclusion;
      _exportObj.inclusion = _decorators.inclusion;
      _exportObj.format = _decorators.format;
      _exportObj.url = _decorators.url;
      _exportObj.numericality = _decorators.numericality;

      _export(_exportObj);
    }, function (_validationEngine) {
      var _exportObj2 = {};
      _exportObj2.ValidationEngine = _validationEngine.ValidationEngine;

      _export(_exportObj2);
    }, function (_aureliaValidation) {
      Validator = _aureliaValidation.Validator;
      ValidationReporter = _aureliaValidation.ValidationReporter;
    }, function (_validator) {
      ValidateJSValidator = _validator.Validator;
      var _exportObj3 = {};
      _exportObj3.Validator = _validator.Validator;

      _export(_exportObj3);
    }, function (_validationReporter) {
      ValidateJSReporter = _validationReporter.ValidationReporter;
      var _exportObj4 = {};
      _exportObj4.ValidationReporter = _validationReporter.ValidationReporter;

      _export(_exportObj4);
    }],
    execute: function () {
      function configure(aurelia) {
        aurelia.container.registerHandler(Validator, ValidateJSValidator);
        aurelia.container.registerHandler(ValidationReporter, ValidateJSReporter);
      }

      _export('configure', configure);
    }
  };
});