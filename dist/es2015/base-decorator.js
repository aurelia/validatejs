import { observeProperty } from './property-observer';
import { metadata } from 'aurelia-metadata';
import { ValidationConfig } from './validation-config';
import { validationMetadataKey } from './metadata-key';

export function base(targetOrConfig, key, descriptor, rule) {
  if (key) {
    let target = targetOrConfig;
    targetOrConfig = null;
    return addRule(target, key, descriptor, targetOrConfig, rule);
  }
  return function (t, k, d) {
    return addRule(t, k, d, targetOrConfig, rule);
  };
}

export function addRule(target, key, descriptor, targetOrConfig, rule) {
  let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
  config.addRule(key, rule(targetOrConfig));
  return observeProperty(target, key, descriptor, targetOrConfig, rule);
}