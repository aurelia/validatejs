'use strict';

System.register(['../validation-rule'], function (_export, _context) {
  var ValidationRule, UrlRule;

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
      _export('UrlRule', UrlRule = function UrlRule() {
        _classCallCheck(this, UrlRule);

        return new ValidationRule('url', true);
      });

      _export('UrlRule', UrlRule);
    }
  };
});