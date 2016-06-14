import {metadata} from 'aurelia-metadata';
import {ValidationRule} from './validation-rule';
import {metadataKey} from './metadata-key';

export class ValidationRules {
  rules = [];

  static ensure(prop) {
    const rules = new ValidationRules();
    return rules.ensure(prop);
  }

  on(target) {
    if (target instanceof Function) {
      target = target.prototype;
    }
    metadata.define(metadataKey, this, target);
    return this;
  }

  decorate() {
    throw new Error('not implemented');
  }

  addRule(key, rule) {
    this.rules.push({ key: key, rule: rule });
  }
  ensure(prop) {
    this.currentProperty = prop;
    return this;
  }
  length(configuration) {
    this.addRule(this.currentProperty, ValidationRule.lengthRule(configuration));
    return this;
  }
  presence(configuration) {
    this.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  }
  required(configuration) {
    this.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  }
  numericality(configuration) {
    this.addRule(this.currentProperty, ValidationRule.numericality(configuration));
    return this;
  }
  date(configuration) {
    this.addRule(this.currentProperty, ValidationRule.date(configuration));
    return this;
  }
  datetime(configuration) {
    this.addRule(this.currentProperty, ValidationRule.datetime(configuration));
    return this;
  }
  email(configuration) {
    this.addRule(this.currentProperty, ValidationRule.email(configuration));
    return this;
  }
  equality(configuration) {
    this.addRule(this.currentProperty, ValidationRule.equality(configuration));
    return this;
  }
  format(configuration) {
    this.addRule(this.currentProperty, ValidationRule.format(configuration));
    return this;
  }
  inclusion(configuration) {
    this.addRule(this.currentProperty, ValidationRule.inclusion(configuration));
    return this;
  }
  exclusion(configuration) {
    this.addRule(this.currentProperty, ValidationRule.exclusion(configuration));
    return this;
  }
  url(configuration) {
    this.addRule(this.currentProperty, ValidationRule.url(configuration));
    return this;
  }
}
