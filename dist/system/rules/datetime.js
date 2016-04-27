'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, DatetimeRule;

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
      _export('DatetimeRule', DatetimeRule = function DatetimeRule() {
        _classCallCheck(this, DatetimeRule);

        return new ValidationRule('datetime', true);
      });

      _export('DatetimeRule', DatetimeRule);
    }
  };
});