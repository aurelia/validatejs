'use strict';

System.register(['./property-observer', 'aurelia-metadata', './validation-config', './metadata-key'], function (_export, _context) {
  var observeProperty, metadata, ValidationConfig, validationMetadataKey;
  return {
    setters: [function (_propertyObserver) {
      observeProperty = _propertyObserver.observeProperty;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_validationConfig) {
      ValidationConfig = _validationConfig.ValidationConfig;
    }, function (_metadataKey) {
      validationMetadataKey = _metadataKey.validationMetadataKey;
    }],
    execute: function () {
      function base(targetOrConfig, key, descriptor, rule) {
        if (key) {
          var target = targetOrConfig;
          targetOrConfig = null;
          return addRule(target, key, descriptor, targetOrConfig, rule);
        }
        return function (t, k, d) {
          return addRule(t, k, d, targetOrConfig, rule);
        };
      }

      _export('base', base);

      function addRule(target, key, descriptor, targetOrConfig, rule) {
        var config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
        config.addRule(key, rule(targetOrConfig));
        return observeProperty(target, key, descriptor, targetOrConfig, rule);
      }

      _export('addRule', addRule);
    }
  };
});