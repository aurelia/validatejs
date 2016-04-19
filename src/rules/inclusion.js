import {ValidationRule} from '../validation-rule';

export class InclusionRule {
  constructor(config) {
    return new ValidationRule('inclusion', config);
  }
}
