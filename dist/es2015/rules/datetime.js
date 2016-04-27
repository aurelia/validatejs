import { ValidationRule } from '../validation-rule';

export let DatetimeRule = class DatetimeRule {
  constructor() {
    return new ValidationRule('datetime', true);
  }
};