import {ValidationReporter} from './validation-reporter';

export class ValidationEngine {
  // TODO: getReporter
  static getValidationReporter(instance) {
    return instance.__validationReporter__ || (instance.__validationReporter__ = new ValidationReporter());
  }
  // TODO: implement
  // static createValidator() {

  // }
}
