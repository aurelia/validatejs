import { ValidationRule } from '../validation-rule';

export let RequiredRule = class RequiredRule {
  constructor() {
    return new ValidationRule('presence', true);
  }
};