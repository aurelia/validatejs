import {ValidationRule} from '../validation-rule';

export class FormatRule {
  constructor(config) {
    return new ValidationRule('format', config);
  }
}
