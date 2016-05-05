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
  static date() {
    return new ValidationRule('date', true)
  }
  static datetime() {
    return new ValidationRule('datetime', true)
  }
  static email() {
    return new ValidationRule('email', true)
  }
  static exclusion(config) {
    return new ValidationRule('exclusion', config)
  }
  static format(config) {
    return new ValidationRule('format', config)
  }
  static inclusion(config) {
    return new ValidationRule('inclusion', config)
  }
  static lengthRule(config) {
    return new ValidationRule('length', config)
  }
  static numericality(config = true) {
    return new ValidationRule('numericality', config)
  }
  static presence() {
    return new ValidationRule('presence', true);
  }
  static required() {
    return new ValidationRule('presence', true);
  }
  static url() {
    return new ValidationRule('url', true);
  }
}
