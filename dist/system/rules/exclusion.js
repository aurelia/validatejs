'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, ExclusionRule;

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
      _export('ExclusionRule', ExclusionRule = function ExclusionRule(config) {
        _classCallCheck(this, ExclusionRule);

        return new ValidationRule('exclusion', config);
      });

      _export('ExclusionRule', ExclusionRule);
    }
  };
});