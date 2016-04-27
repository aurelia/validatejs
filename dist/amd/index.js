define(['exports', './decorators', './validation-engine', './validator', './validation-reporter', 'aurelia-validation'], function (exports, _decorators, _validationEngine, _validator, _validationReporter, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationReporter = exports.Validator = exports.ValidationEngine = exports.numericality = exports.url = exports.format = exports.inclusion = exports.exclusion = exports.equality = exports.email = exports.datetime = exports.date = exports.required = exports.length = undefined;
  Object.defineProperty(exports, 'length', {
    enumerable: true,
    get: function () {
      return _decorators.length;
    }
  });
  Object.defineProperty(exports, 'required', {
    enumerable: true,
    get: function () {
      return _decorators.required;
    }
  });
  Object.defineProperty(exports, 'date', {
    enumerable: true,
    get: function () {
      return _decorators.date;
    }
  });
  Object.defineProperty(exports, 'datetime', {
    enumerable: true,
    get: function () {
      return _decorators.datetime;
    }
  });
  Object.defineProperty(exports, 'email', {
    enumerable: true,
    get: function () {
      return _decorators.email;
    }
  });
  Object.defineProperty(exports, 'equality', {
    enumerable: true,
    get: function () {
      return _decorators.equality;
    }
  });
  Object.defineProperty(exports, 'exclusion', {
    enumerable: true,
    get: function () {
      return _decorators.exclusion;
    }
  });
  Object.defineProperty(exports, 'inclusion', {
    enumerable: true,
    get: function () {
      return _decorators.inclusion;
    }
  });
  Object.defineProperty(exports, 'format', {
    enumerable: true,
    get: function () {
      return _decorators.format;
    }
  });
  Object.defineProperty(exports, 'url', {
    enumerable: true,
    get: function () {
      return _decorators.url;
    }
  });
  Object.defineProperty(exports, 'numericality', {
    enumerable: true,
    get: function () {
      return _decorators.numericality;
    }
  });
  Object.defineProperty(exports, 'ValidationEngine', {
    enumerable: true,
    get: function () {
      return _validationEngine.ValidationEngine;
    }
  });
  Object.defineProperty(exports, 'Validator', {
    enumerable: true,
    get: function () {
      return _validator.Validator;
    }
  });
  Object.defineProperty(exports, 'ValidationReporter', {
    enumerable: true,
    get: function () {
      return _validationReporter.ValidationReporter;
    }
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.container.registerHandler(_aureliaValidation.Validator, _validator.Validator);
    aurelia.container.registerHandler(_aureliaValidation.ValidationReporter, _validationReporter.ValidationReporter);
  }
});