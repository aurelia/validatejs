import {metadata} from 'aurelia-metadata';
import {ValidationError,Validator as ValidatorInterface} from 'aurelia-validation';

export const metadataKey = 'aurelia-validatejs:rules';

export class ValidationRule {
  name = '';
  config;
  constructor(name, config) {
    this.name = name;
    this.config = config;
  }
  static date(config = true) {
    return new ValidationRule('date', config);
  }
  static datetime(config = true) {
    return new ValidationRule('datetime', config);
  }
  static email(config = true) {
    return new ValidationRule('email', config);
  }
  static equality(config) {
    return new ValidationRule('equality', config);
  }
  static exclusion(config) {
    return new ValidationRule('exclusion', config);
  }
  static format(config) {
    return new ValidationRule('format', config);
  }
  static inclusion(config) {
    return new ValidationRule('inclusion', config);
  }
  static lengthRule(config) {
    return new ValidationRule('length', config);
  }
  static numericality(config = true) {
    return new ValidationRule('numericality', config);
  }
  static presence(config = true) {
    return new ValidationRule('presence', config);
  }
  static url(config = true) {
    return new ValidationRule('url', config);
  }
}

export function cleanResult(data) {
  let result = {};
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      result = {
        propertyName: prop,
        message: data[prop][0]
      };
    }
  }
  return result;
}

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

export function length(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.lengthRule);
}

export function presence(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.presence, true);
}

export function required(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.presence, true);
}

export function date(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.date);
}

export function datetime(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.datetime);
}

export function email(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.email);
}

export function equality(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.equality);
}

export function exclusion(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.exclusion);
}

export function inclusion(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.inclusion);
}

export function format(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.format);
}

export function url(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.url);
}

export function numericality(targetOrConfig, key, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.numericality);
}

import validate from 'validate.js';

export class Validator {
  _validate(object, propertyName = null, rules = null) {
    const errors = [];
    if (!rules) {
      rules = metadata.get(metadataKey, object);
    }
    if (!rules) {
      // no rules defined for propertyName.
      return errors;
    }
    rules = rules.rules;
    for (let i = 0, ii = rules.length; i < ii; i++) {
      const ruleInfo = rules[i];
      if (propertyName !== null && ruleInfo.key !== propertyName) {
        continue;
      }
      const { name, config } = ruleInfo.rule;
      const validator = { [propertyName]: { [name]: config } };
      const result = validate(object, validator);
      if (result) {
        errors.push(new ValidationError(ruleInfo.rule, result[propertyName][0], object, propertyName));
      }
    }
    return errors;
  }

  validateProperty(object, propertyName, rules = null) {
    return this._validate(object, propertyName, rules);
  }

  validateObject(object, rules = null) {
    return this._validate(object, null, rules);
  }
}

export function configure(config) {
  config.container.registerInstance(ValidatorInterface, new Validator());
}
