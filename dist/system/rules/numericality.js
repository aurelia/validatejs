'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, NumericalityRule;

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
      _export('NumericalityRule', NumericalityRule = function NumericalityRule() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        _classCallCheck(this, NumericalityRule);

        return new ValidationRule('numericality', config);
      });

      _export('NumericalityRule', NumericalityRule);
    }
  };
});