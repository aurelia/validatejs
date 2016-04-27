'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, EmailRule;

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
      _export('EmailRule', EmailRule = function EmailRule() {
        _classCallCheck(this, EmailRule);

        return new ValidationRule('email', true);
      });

      _export('EmailRule', EmailRule);
    }
  };
});