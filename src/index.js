export {length, required, date, datetime, email, equality, url, numericality} from './decorators';
export {ValidationEngine} from './validation-engine';
import {Validator} from 'aurelia-validation';
import {Validator as ValidateJSValidator} from './validator';
import {Reporter} from 'aurelia-validation';
import {Reporter as ValidateJSReporter} from './validator';

export function configure(aurelia) {
  aurelia.container.registerHandler(Validator, ValidateJSValidator);
  aurelia.container.registerHandler(Reporter, ValidateJSReporter);
  aurelia.globalResources('./validate-custom-attribute');
}
