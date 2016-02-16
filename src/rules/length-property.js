import * as validate from 'validate.js';

export function length(targetOrConfig, key, descriptor) {
  let deco = function(target, key2, descriptor2) {
    // use a convention to compute the inner property name and the callback
    // function name.
    let innerPropertyName = `_${key2}`;

    // set the initial value of the property.
    if (descriptor2.initializer) {
      target[innerPropertyName] = descriptor2.initializer();
    }

    // we're adding a getter and setter which means the property descriptor2
    // cannot have a "value" or "writable" attribute
    delete descriptor2.writable;
    delete descriptor2.initializer;

    // add the getter and setter to the property descriptor2.
    descriptor2.get = function() { return this[innerPropertyName]; };
    descriptor2.set = function(newValue) {
      let oldValue = this[innerPropertyName];
      let result;
      let validator;
      if (!targetOrConfig) {
        console.error('no config');
      }
      validator = { [innerPropertyName]: { length: targetOrConfig } };
      this[innerPropertyName] = newValue;
      result = validate(this, validator);
      console.log(result)
    };

    // make sure Aurelia doesn't use dirty-checking by declaring the property's
    // dependencies. This is the equivalent of "@computedFrom(...)".
    descriptor2.get.dependencies = [innerPropertyName];
  }

  if(key) {
    let target = targetOrConfig;
    targetOrConfig = null;
    return deco(target, key, descriptor);
  }

  return deco;
}
