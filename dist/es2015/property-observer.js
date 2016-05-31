import { metadata } from 'aurelia-metadata';
import { ValidationConfig } from './validation-config';
import { ValidationEngine } from './validation-engine';
import { validationMetadataKey } from './metadata-key';

export function observeProperty(target, key, descriptor) {
  let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);

  let innerPropertyName = `_${ key }`;

  let babel = descriptor !== undefined;

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
    let reporter = ValidationEngine.getValidationReporter(this);

    this[innerPropertyName] = newValue;

    config.validate(this, reporter);
  };

  descriptor.get.dependencies = [innerPropertyName];

  if (!babel) {
    Reflect.defineProperty(target, key, descriptor);
  }
}