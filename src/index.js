export {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from './decorators';
export {ValidationEngine} from './validation-engine';
import {Validator} from 'aurelia-validation';
import {Validator as ValidateJSValidator} from './validator';
export {Validator} from './validator';
import {ValidationReporter} from 'aurelia-validation';
import {ValidationReporter as ValidateJSReporter} from './validation-reporter';
export {ValidationReporter} from './validation-reporter';
export {ValidationRenderer} from './validation-renderer';

export function configure(config) {
  config.container.registerHandler(Validator, ValidateJSValidator);
  config.container.registerHandler(ValidationReporter, ValidateJSReporter);
  config.globalResources('./validate-binding-behavior');
}
