import { ValidationRule } from '../validation-rule';

export let FormatRule = class FormatRule {
  constructor(config) {
    return new ValidationRule('format', config);
  }
};