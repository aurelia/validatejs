import validate from 'validate.js';
import {ValidationError} from './validation-error';

export class ValidationRule {
  name = '';
  config;
  constructor(name, config) {
    this.name = name;
    this.config = config;
  }
  validate(target, propName) {
    if (target && propName) {
      let validator = { [propName]: { [this.name]: this.config } };
      let result = validate(target, validator);
      if (result) {
        result = new ValidationError(result);
      }
      return result;
    }
    throw new Error('Invalid target or property name.');
  }
}
