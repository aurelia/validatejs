import { ValidationRule } from '../validation-rule';

export let DateRule = class DateRule {
  constructor() {
    return new ValidationRule('date', true);
  }
};