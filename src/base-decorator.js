import {metadata} from 'aurelia-metadata';
import {ValidationConfig} from './validation-config';
import {ValidationEngine} from './validation-engine';
import {validationMetadataKey} from './metadata-key';

export function base(targetOrConfig, key, descriptor, Rule) {
  let deco = function(target, key2, descriptor2) {
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
    config.addRule(key2, Rule(targetOrConfig));

    // TODO: REMOVE
    let innerPropertyName = `_${key2}`;

    // typescript or babel?
    let babel = descriptor2 !== undefined;

    if (babel) {
      // babel passes in the property descriptor with a method to get the initial value.

      // set the initial value of the property if it is defined.
      if (typeof descriptor2.initializer === 'function') {
        target[innerPropertyName] = descriptor2.initializer();
      }
    } else {
      descriptor2 = {};
    }

    delete descriptor2.writable;
    delete descriptor2.initializer;

    descriptor2.get = function() { return this[innerPropertyName]; };
    descriptor2.set = function(newValue) {
      let reporter = ValidationEngine.getValidationReporter(this);

      this[innerPropertyName] = newValue;

      config.validate(this, reporter);
    };

    descriptor2.get.dependencies = [innerPropertyName];
  };

  if (key) {
    let target = targetOrConfig;
    targetOrConfig = null;
    return deco(target, key, descriptor);
  }
  return deco;
}
