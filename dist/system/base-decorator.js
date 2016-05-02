'use strict';

System.register(['aurelia-metadata', './validation-config', './validation-engine', 'aurelia-validation'], function (_export, _context) {
  var metadata, ValidationConfig, ValidationEngine, validationMetadataKey;
  return {
    setters: [function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_validationConfig) {
      ValidationConfig = _validationConfig.ValidationConfig;
    }, function (_validationEngine) {
      ValidationEngine = _validationEngine.ValidationEngine;
    }, function (_aureliaValidation) {
      validationMetadataKey = _aureliaValidation.validationMetadataKey;
    }],
    execute: function () {
      function base(targetOrConfig, key, descriptor, Rule) {
        var deco = function deco(target, key2, descriptor2) {
          var config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
          config.addRule(key2, new Rule(targetOrConfig));

          var innerPropertyName = '_' + key2;

          if (descriptor2.initializer) {
            target[innerPropertyName] = descriptor2.initializer();
          }

          delete descriptor2.writable;
          delete descriptor2.initializer;

          descriptor2.get = function () {
            return this[innerPropertyName];
          };
          descriptor2.set = function (newValue) {
            var reporter = ValidationEngine.getValidationReporter(this);

            this[innerPropertyName] = newValue;

            config.validate(this, reporter);
          };

          descriptor2.get.dependencies = [innerPropertyName];
        };

        if (key) {
          var target = targetOrConfig;
          targetOrConfig = null;
          return deco(target, key, descriptor);
        }
        return deco;
      }

      _export('base', base);
    }
  };
});