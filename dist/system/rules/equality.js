'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, EqualityRule;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_validationRule) {
      ValidationRule = _validationRule.ValidationRule;
    }],
    execute: function () {
      _export('EqualityRule', EqualityRule = function EqualityRule(config) {
        _classCallCheck(this, EqualityRule);

        return new ValidationRule('equality', config);
      });

      _export('EqualityRule', EqualityRule);
    }
  };
});