'use strict';

System.register(['aurelia-metadata', './validation-config', './validation-engine', './metadata-key'], function (_export, _context) {
  var metadata, ValidationConfig, ValidationEngine, validationMetadataKey;
  return {
    setters: [function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_validationConfig) {
      ValidationConfig = _validationConfig.ValidationConfig;
    }, function (_validationEngine) {
      ValidationEngine = _validationEngine.ValidationEngine;
    }, function (_metadataKey) {
      validationMetadataKey = _metadataKey.validationMetadataKey;
    }],
    execute: function () {
      function observeProperty(target, key, descriptor) {
        var config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);

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
          var reporter = ValidationEngine.getValidationReporter(this);

          this[innerPropertyName] = newValue;

          config.validate(this, reporter);
        };

        descriptor.get.dependencies = [innerPropertyName];

        if (!babel) {
          Reflect.defineProperty(target, key, descriptor);
        }
      }

      _export('observeProperty', observeProperty);
    }
  };
});