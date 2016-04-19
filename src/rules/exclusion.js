import {ValidationRule} from '../validation-rule';

export class ExclusionRule {
  constructor(config) {
    return new ValidationRule('exclusion', config);
  }
}
