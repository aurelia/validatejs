import {validationMetadataKey} from './metadata-key';
import {ValidationConfig} from './validation-config';
import {ValidationEngine} from './validation-engine';
import {ValidationRule} from './validation-rule';
import {metadata} from 'aurelia-metadata';

export class Validator {
  object;
  config;
  constructor(object) {
    this.object = object;
  }
  validate(prop) {
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
    let reporter = ValidationEngine.getValidationReporter(this.object);
    if (prop) {
      config.validate(this.object, reporter, prop);
    } else {
      config.validate(this.object, reporter);
    }
  }
  getProperties() {
    console.error('Not yet implemented');
  }
  ensure(prop) {
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
    this.config = config;
    this.currentProperty = prop;
    return this;
  }
  length(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.lengthRule(configuration));
    return this;
  }
  presence(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  }
  required(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  }
  numericality(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.numericality(configuration));
    return this;
  }
  date(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.date(configuration));
    return this;
  }
  datetime(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.datetime(configuration));
    return this;
  }
  email(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.email(configuration));
    return this;
  }
  equality(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.equality(configuration));
    return this;
  }
  format(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.format(configuration));
    return this;
  }
  inclusion(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.inclusion(configuration));
    return this;
  }
  exclusion(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.exclusion(configuration));
    return this;
  }
  url(configuration) {
    this.config.addRule(this.currentProperty, ValidationRule.url(configuration));
    return this;
  }
}
