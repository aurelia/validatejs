import {
  metadata
} from 'aurelia-metadata';
import {
  ValidationError,
  Validator as ValidatorInterface
} from 'aurelia-validation';
import validate from 'validate.js';
export declare const metadataKey: any;
export declare class ValidationRule {
  name: any;
  config: any;
  constructor(name?: any, config?: any);
  static date(config?: any): any;
  static datetime(config?: any): any;
  static email(config?: any): any;
  static equality(config?: any): any;
  static exclusion(config?: any): any;
  static format(config?: any): any;
  static inclusion(config?: any): any;
  static lengthRule(config?: any): any;
  static numericality(config?: any): any;
  static presence(config?: any): any;
  static url(config?: any): any;
}
export declare function cleanResult(data?: any): any;
export declare class ValidationRules {
  rules: any;
  static ensure(prop?: any): any;
  on(target?: any): any;
  decorate(): any;
  addRule(key?: any, rule?: any): any;
  ensure(prop?: any): any;
  length(configuration?: any): any;
  presence(configuration?: any): any;
  required(configuration?: any): any;
  numericality(configuration?: any): any;
  date(configuration?: any): any;
  datetime(configuration?: any): any;
  email(configuration?: any): any;
  equality(configuration?: any): any;
  format(configuration?: any): any;
  inclusion(configuration?: any): any;
  exclusion(configuration?: any): any;
  url(configuration?: any): any;
}
export declare function base(targetOrConfig?: any, key?: any, descriptor?: any, rule?: any): any;
export declare function addRule(target?: any, key?: any, descriptor?: any, targetOrConfig?: any, rule?: any): any;
export declare function length(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function presence(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function required(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function date(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function datetime(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function email(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function equality(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function exclusion(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function inclusion(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function format(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function url(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare function numericality(targetOrConfig?: any, key?: any, descriptor?: any): any;
export declare class Validator {
  validateProperty(object?: any, propertyName?: any, rules?: any): any;
  validateObject(object?: any, rules?: any): any;
}
export declare function configure(config?: any): any;