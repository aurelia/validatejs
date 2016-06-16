

import { metadata } from 'aurelia-metadata';
import { ValidationError, Validator as ValidatorInterface } from 'aurelia-validation';

export var metadataKey = 'aurelia-validatejs:rules';

export var ValidationRule = function () {
  function ValidationRule(name, config) {
    

    this.name = '';

    this.name = name;
    this.config = config;
  }

  ValidationRule.date = function date() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return new ValidationRule('date', config);
  };

  ValidationRule.datetime = function datetime() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return new ValidationRule('datetime', config);
  };

  ValidationRule.email = function email() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return new ValidationRule('email', config);
  };

  ValidationRule.equality = function equality(config) {
    return new ValidationRule('equality', config);
  };

  ValidationRule.exclusion = function exclusion(config) {
    return new ValidationRule('exclusion', config);
  };

  ValidationRule.format = function format(config) {
    return new ValidationRule('format', config);
  };

  ValidationRule.inclusion = function inclusion(config) {
    return new ValidationRule('inclusion', config);
  };

  ValidationRule.lengthRule = function lengthRule(config) {
    return new ValidationRule('length', config);
  };

  ValidationRule.numericality = function numericality() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return new ValidationRule('numericality', config);
  };

  ValidationRule.presence = function presence() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return new ValidationRule('presence', config);
  };

  ValidationRule.url = function url() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return new ValidationRule('url', config);
  };

  return ValidationRule;
}();

export function cleanResult(data) {
  var result = {};
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      result = {
        propertyName: prop,
        message: data[prop][0]
      };
    }
  }
  return result;
}

export var ValidationRules = function () {
  function ValidationRules() {
    

    this.rules = [];
  }

  ValidationRules.ensure = function ensure(prop) {
    var rules = new ValidationRules();
    return rules.ensure(prop);
  };

  ValidationRules.prototype.on = function on(target) {
    if (target instanceof Function) {
      target = target.prototype;
    }
    metadata.define(metadataKey, this, target);
    return this;
  };

  ValidationRules.prototype.decorate = function decorate() {
    throw new Error('not implemented');
  };

  ValidationRules.prototype.addRule = function addRule(key, rule) {
    this.rules.push({ key: key, rule: rule });
  };

  ValidationRules.prototype.ensure = function ensure(prop) {
    this.currentProperty = prop;
    return this;
  };

  ValidationRules.prototype.length = function length(configuration) {
    this.addRule(this.currentProperty, ValidationRule.lengthRule(configuration));
    return this;
  };

  ValidationRules.prototype.presence = function presence(configuration) {
    this.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  };

  ValidationRules.prototype.required = function required(configuration) {
    this.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  };

  ValidationRules.prototype.numericality = function numericality(configuration) {
    this.addRule(this.currentProperty, ValidationRule.numericality(configuration));
    return this;
  };

  ValidationRules.prototype.date = function date(configuration) {
    this.addRule(this.currentProperty, ValidationRule.date(configuration));
    return this;
  };

  ValidationRules.prototype.datetime = function datetime(configuration) {
    this.addRule(this.currentProperty, ValidationRule.datetime(configuration));
    return this;
  };

  ValidationRules.prototype.email = function email(configuration) {
    this.addRule(this.currentProperty, ValidationRule.email(configuration));
    return this;
  };

  ValidationRules.prototype.equality = function equality(configuration) {
    this.addRule(this.currentProperty, ValidationRule.equality(configuration));
    return this;
  };

  ValidationRules.prototype.format = function format(configuration) {
    this.addRule(this.currentProperty, ValidationRule.format(configuration));
    return this;
  };

  ValidationRules.prototype.inclusion = function inclusion(configuration) {
    this.addRule(this.currentProperty, ValidationRule.inclusion(configuration));
    return this;
  };

  ValidationRules.prototype.exclusion = function exclusion(configuration) {
    this.addRule(this.currentProperty, ValidationRule.exclusion(configuration));
    return this;
  };

  ValidationRules.prototype.url = function url(configuration) {
    this.addRule(this.currentProperty, ValidationRule.url(configuration));
    return this;
  };

  return ValidationRules;
}();

export function base(targetOrConfig, key, descriptor, rule) {
  if (key) {
    var target = targetOrConfig;
    targetOrConfig = null;
    return addRule(target, key, descriptor, targetOrConfig, rule);
  }
  return function (t, k, d) {
    return addRule(t, k, d, targetOrConfig, rule);
  };
}

export function addRule(target, key, descriptor, targetOrConfig, rule) {
  var rules = metadata.getOrCreateOwn(metadataKey, ValidationRules, target);
  if (targetOrConfig === null || targetOrConfig === undefined) {
    targetOrConfig = true;
  }
  rules.addRule(key, rule(targetOrConfig));

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

export var Validator = function () {
  function Validator() {
    
  }

  Validator.prototype._validate = function _validate(object) {
    var propertyName = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var rules = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    var errors = [];
    if (!rules) {
      rules = metadata.get(metadataKey, object);
    }
    if (!rules) {
      return errors;
    }
    rules = rules.rules;
    for (var i = 0, ii = rules.length; i < ii; i++) {
      var _propertyName, _validator;

      var ruleInfo = rules[i];
      if (propertyName !== null && ruleInfo.key !== propertyName) {
        continue;
      }
      var _ruleInfo$rule = ruleInfo.rule;
      var name = _ruleInfo$rule.name;
      var config = _ruleInfo$rule.config;

      var validator = (_validator = {}, _validator[propertyName] = (_propertyName = {}, _propertyName[name] = config, _propertyName), _validator);
      var result = validate(object, validator);
      if (result) {
        errors.push(new ValidationError(ruleInfo.rule, result[propertyName][0], object, propertyName));
      }
    }
    return errors;
  };

  Validator.prototype.validateProperty = function validateProperty(object, propertyName) {
    var rules = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    return this._validate(object, propertyName, rules);
  };

  Validator.prototype.validateObject = function validateObject(object) {
    var rules = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    return this._validate(object, null, rules);
  };

  return Validator;
}();

export function configure(config) {
  config.container.registerInstance(ValidatorInterface, new Validator());
}