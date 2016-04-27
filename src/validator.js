import {validationMetadataKey} from 'aurelia-validation';
import {ValidationConfig} from './validation-config';
import {ValidationEngine} from './validation-engine';
import {metadata} from 'aurelia-metadata';
import {RequiredRule} from './rules/required';
import {LengthRule} from './rules/length';
import {NumericalityRule} from './rules/numericality';
import {EmailRule} from './rules/email';
import {InclusionRule} from './rules/inclusion';
import {ExclusionRule} from './rules/exclusion';
import {EqualityRule} from './rules/equality';
import {FormatRule} from './rules/format';
import {UrlRule} from './rules/url';
import {DateRule} from './rules/date';
import {DatetimeRule} from './rules/datetime';

export class Validator {
  object;
  config;
  validate(prop) {
    let reporter = ValidationEngine.getValidationReporter(this.object);
    if (prop) {
      this.config.validate(this.object, reporter, prop);
    } else {
      this.config.validate(this.object, reporter);
    }
  }
  getProperties() {
    console.error('Not yet implemented');
  }
  ensure(object, prop) {
    if (this.object && this.object !== object) {
      throw new Error('Validator cannot handle multiple objects');
    }
    this.object = object;
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
    this.config = config;
    this.currentProperty = prop;
    return this;
  }
  length(configuration) {
    this.config.addRule(this.currentProperty, new LengthRule(configuration));
    return this;
  }
  required() {
    this.config.addRule(this.currentProperty, new RequiredRule());
    return this;
  }
  numericality() {
    this.config.addRule(this.currentProperty, new NumericalityRule());
    return this;
  }
  date() {
    this.config.addRule(this.currentProperty, new DateRule());
    return this;
  }
  datetime() {
    this.config.addRule(this.currentProperty, new DatetimeRule());
    return this;
  }
  email() {
    this.config.addRule(this.currentProperty, new EmailRule());
    return this;
  }
  equality(configuration) {
    this.config.addRule(this.currentProperty, new EqualityRule(configuration));
    return this;
  }
  format(configuration) {
    this.config.addRule(this.currentProperty, new FormatRule(configuration));
    return this;
  }
  inclusion(configuration) {
    this.config.addRule(this.currentProperty, new InclusionRule(configuration));
    return this;
  }
  exclusion(configuration) {
    this.config.addRule(this.currentProperty, new ExclusionRule(configuration));
    return this;
  }
  url() {
    this.config.addRule(this.currentProperty, new UrlRule());
    return this;
  }
}
