import {ValidationRule} from '../validation-rule';

export class EqualityRule {
  constructor(config) {
    return new ValidationRule('equality', config);
  }
}
