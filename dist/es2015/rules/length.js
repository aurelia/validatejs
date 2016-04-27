import { ValidationRule } from '../validation-rule';

export let LengthRule = class LengthRule {
  constructor(config) {
    return new ValidationRule('length', config);
  }
};