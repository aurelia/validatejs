import { ValidationRule } from '../validation-rule';

export let EmailRule = class EmailRule {
  constructor() {
    return new ValidationRule('email', true);
  }
};