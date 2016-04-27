import { ValidationRule } from '../validation-rule';

export let UrlRule = class UrlRule {
  constructor() {
    return new ValidationRule('url', true);
  }
};