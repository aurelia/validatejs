'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, LengthRule;

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
      _export('LengthRule', LengthRule = function LengthRule(config) {
        _classCallCheck(this, LengthRule);

        return new ValidationRule('length', config);
      });

      _export('LengthRule', LengthRule);
    }
  };
});