import {metadata} from 'aurelia-metadata';
import {ValidationRules} from './validation-rules';
import {metadataKey} from './metadata-key';

export function base(targetOrConfig, key, descriptor, rule) {
  if (key) {
    let target = targetOrConfig;
    targetOrConfig = null;
    return addRule(target, key, descriptor, targetOrConfig, rule);
  }
  return function(t, k, d) {
    return addRule(t, k, d, targetOrConfig, rule);
  };
}

export function addRule(target, key, descriptor, targetOrConfig, rule) {
  let rules = metadata.getOrCreateOwn(metadataKey, ValidationRules, target);
  if (targetOrConfig === null || targetOrConfig === undefined) {
    targetOrConfig = true;
  }
  rules.addRule(key, rule(targetOrConfig));

  // babel's decorator logic uses !!descriptor.configurable which creates read-only
  // properties that can't be observed with the SetterObserver.  Make sure the
  // property remains configurable.
  if (descriptor) {
    descriptor.configurable = true;
  }
}
