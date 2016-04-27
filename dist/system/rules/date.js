'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, DateRule;

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
      _export('DateRule', DateRule = function DateRule() {
        _classCallCheck(this, DateRule);

        return new ValidationRule('date', true);
      });

      _export('DateRule', DateRule);
    }
  };
});