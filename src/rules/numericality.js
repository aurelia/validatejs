import {ValidationRule} from '../validation-rule';

export class NumericalityRule {
  constructor(config = true) {
    return new ValidationRule('numericality', config);
  }
}
