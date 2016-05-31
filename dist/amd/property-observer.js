define(['exports', 'aurelia-metadata', './validation-config', './validation-engine', './metadata-key'], function (exports, _aureliaMetadata, _validationConfig, _validationEngine, _metadataKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.observeProperty = observeProperty;
  function observeProperty(target, key, descriptor) {
    var config = _aureliaMetadata.metadata.getOrCreateOwn(_metadataKey.validationMetadataKey, _validationConfig.ValidationConfig, target);

    var innerPropertyName = '_' + key;

    var babel = descriptor !== undefined;

    if (babel) {
      if (typeof descriptor.initializer === 'function') {
        target[innerPropertyName] = descriptor.initializer();
      }
    } else {
      descriptor = {};
    }

    delete descriptor.writable;
    delete descriptor.initializer;

    descriptor.get = function () {
      return this[innerPropertyName];
    };
    descriptor.set = function (newValue) {
      var reporter = _validationEngine.ValidationEngine.getValidationReporter(this);

      this[innerPropertyName] = newValue;

      config.validate(this, reporter);
    };

    descriptor.get.dependencies = [innerPropertyName];

    if (!babel) {
      Reflect.defineProperty(target, key, descriptor);
    }
  }
});