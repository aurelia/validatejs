'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, RequiredRule;

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
      _export('RequiredRule', RequiredRule = function RequiredRule() {
        _classCallCheck(this, RequiredRule);

        return new ValidationRule('presence', true);
      });

      _export('RequiredRule', RequiredRule);
    }
  };
});