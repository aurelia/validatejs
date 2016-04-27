import { ValidationRule } from '../validation-rule';

export let ExclusionRule = class ExclusionRule {
  constructor(config) {
    return new ValidationRule('exclusion', config);
  }
};