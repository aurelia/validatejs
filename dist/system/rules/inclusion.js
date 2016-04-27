'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, InclusionRule;

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
      _export('InclusionRule', InclusionRule = function InclusionRule(config) {
        _classCallCheck(this, InclusionRule);

        return new ValidationRule('inclusion', config);
      });

      _export('InclusionRule', InclusionRule);
    }
  };
});