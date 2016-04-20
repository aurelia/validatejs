import {validationMetadataKey} from 'aurelia-validation';
import {ValidationConfig} from './validation-config';
import {ValidationEngine} from './validation-engine';
import {metadata} from 'aurelia-metadata';
import {RequiredRule} from './rules/required';
import {LengthRule} from './rules/length';

export class Validator {
  object;
  config;
  validate(prop) {
    let reporter = ValidationEngine.getValidationReporter(this.object);
    if (prop) {
      this.config.validate(this.object, reporter, prop)
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
}
