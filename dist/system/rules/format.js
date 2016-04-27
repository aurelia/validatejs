'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, FormatRule;

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
      _export('FormatRule', FormatRule = function FormatRule(config) {
        _classCallCheck(this, FormatRule);

        return new ValidationRule('format', config);
      });

      _export('FormatRule', FormatRule);
    }
  };
});