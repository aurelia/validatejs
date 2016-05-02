'use strict';

System.register(['./base-decorator', './rules/length', './rules/required', './rules/date', './rules/datetime', './rules/email', './rules/equality', './rules/exclusion', './rules/inclusion', './rules/format', './rules/url', './rules/numericality'], function (_export, _context) {
  var base, LengthRule, RequiredRule, DateRule, DatetimeRule, EmailRule, EqualityRule, ExclusionRule, InclusionRule, FormatRule, UrlRule, NumericalityRule;
  return {
    setters: [function (_baseDecorator) {
      base = _baseDecorator.base;
    }, function (_rulesLength) {
      LengthRule = _rulesLength.LengthRule;
    }, function (_rulesRequired) {
      RequiredRule = _rulesRequired.RequiredRule;
    }, function (_rulesDate) {
      DateRule = _rulesDate.DateRule;
    }, function (_rulesDatetime) {
      DatetimeRule = _rulesDatetime.DatetimeRule;
    }, function (_rulesEmail) {
      EmailRule = _rulesEmail.EmailRule;
    }, function (_rulesEquality) {
      EqualityRule = _rulesEquality.EqualityRule;
    }, function (_rulesExclusion) {
      ExclusionRule = _rulesExclusion.ExclusionRule;
    }, function (_rulesInclusion) {
      InclusionRule = _rulesInclusion.InclusionRule;
    }, function (_rulesFormat) {
      FormatRule = _rulesFormat.FormatRule;
    }, function (_rulesUrl) {
      UrlRule = _rulesUrl.UrlRule;
    }, function (_rulesNumericality) {
      NumericalityRule = _rulesNumericality.NumericalityRule;
    }],
    execute: function () {
      function length(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, LengthRule);
      }

      _export('length', length);

      function required(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, RequiredRule);
      }

      _export('required', required);

      function date(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, DateRule);
      }

      _export('date', date);

      function datetime(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, DatetimeRule);
      }

      _export('datetime', datetime);

      function email(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, EmailRule);
      }

      _export('email', email);

      function equality(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, EqualityRule);
      }

      _export('equality', equality);

      function exclusion(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, ExclusionRule);
      }

      _export('exclusion', exclusion);

      function inclusion(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, InclusionRule);
      }

      _export('inclusion', inclusion);

      function format(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, FormatRule);
      }

      _export('format', format);

      function url(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, UrlRule);
      }

      _export('url', url);

      function numericality(targetOrConfig, key, descriptor) {
        return base(targetOrConfig, key, descriptor, NumericalityRule);
      }

      _export('numericality', numericality);
    }
  };
});