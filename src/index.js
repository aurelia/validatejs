export {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from './decorators';
export {ValidationEngine} from './validation-engine';
import {Validator} from 'aurelia-validation';
import {Validator as ValidateJSValidator} from './validator';
export {Validator} from './validator';
import {ValidationReporter} from 'aurelia-validation';
import {ValidationReporter as ValidateJSReporter} from './validation-reporter';
export {ValidationReporter} from './validation-reporter';

export function configure(aurelia) {
  aurelia.container.registerHandler(Validator, ValidateJSValidator);
  aurelia.container.registerHandler(ValidationReporter, ValidateJSReporter);
}
