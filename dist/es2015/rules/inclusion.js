import { ValidationRule } from '../validation-rule';

export let InclusionRule = class InclusionRule {
  constructor(config) {
    return new ValidationRule('inclusion', config);
  }
};