'use strict';

System.register(['./validation-rule', './base-decorator'], function (_export, _context) {
  var ValidationRule, base;
  return {
    setters: [function (_validationRule) {
      ValidationRule = _validationRule.ValidationRule;
    }, function (_baseDecorator) {
      base = _baseDecorator.base;
    }],
    execute: function () {
      function length(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.lengthRule);
      }

      _export('length', length);

      function presence(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.presence);
      }

      _export('presence', presence);

      function required(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.presence);
      }

      _export('required', required);

      function date(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.date);
      }

      _export('date', date);

      function datetime(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.datetime);
      }

      _export('datetime', datetime);

      function email(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.email);
      }

      _export('email', email);

      function equality(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.equality);
      }

      _export('equality', equality);

      function exclusion(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.exclusion);
      }

      _export('exclusion', exclusion);

      function inclusion(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.inclusion);
      }

      _export('inclusion', inclusion);

      function format(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.format);
      }

      _export('format', format);

      function url(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.url);
      }

      _export('url', url);

      function numericality(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ValidationRule.numericality);
      }

      _export('numericality', numericality);
    }
  };
});