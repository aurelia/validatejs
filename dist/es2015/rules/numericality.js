import { ValidationRule } from '../validation-rule';

export let NumericalityRule = class NumericalityRule {
  constructor(config = true) {
    return new ValidationRule('numericality', config);
  }
};