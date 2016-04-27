import { ValidationRule } from '../validation-rule';

export let EqualityRule = class EqualityRule {
  constructor(config) {
    return new ValidationRule('equality', config);
  }
};