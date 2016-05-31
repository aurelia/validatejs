'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeProperty = observeProperty;

var _aureliaMetadata = require('aurelia-metadata');

var _validationConfig = require('./validation-config');

var _validationEngine = require('./validation-engine');

var _metadataKey = require('./metadata-key');

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