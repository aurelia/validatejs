import * as validate from 'validate.js';
import {initializeValidation} from './base';

export function required(target, propertyName, descriptor) {
  // use a convention to compute the inner property name and the callback
  // function name.
  let innerPropertyName = `_${propertyName}`;

  // set the initial value of the property.
  target[innerPropertyName] = descriptor.initializer();

  // we're adding a getter and setter which means the property descriptor
  // cannot have a "value" or "writable" attribute
  delete descriptor.writable;
  delete descriptor.initializer;

  // add the getter and setter to the property descriptor.
  descriptor.get = function() { return this[innerPropertyName]; };
  descriptor.set = function(newValue) {
    let oldValue = this[innerPropertyName];
    let result;
    let validator = { [innerPropertyName]: { presence: true } };
    this[innerPropertyName] = newValue;
    result = validate(this, validator);
    console.log(result);
  };

  // make sure Aurelia doesn't use dirty-checking by declaring the property's
  // dependencies. This is the equivalent of "@computedFrom(...)".
  descriptor.get.dependencies = [innerPropertyName];
}
