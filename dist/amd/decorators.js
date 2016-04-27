define(['exports', './rules/base', './rules/length', './rules/required', './rules/date', './rules/datetime', './rules/email', './rules/equality', './rules/exclusion', './rules/inclusion', './rules/format', './rules/url', './rules/numericality'], function (exports, _base, _length, _required, _date, _datetime, _email, _equality, _exclusion, _inclusion, _format, _url, _numericality) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.length = length;
  exports.required = required;
  exports.date = date;
  exports.datetime = datetime;
  exports.email = email;
  exports.equality = equality;
  exports.exclusion = exclusion;
  exports.inclusion = inclusion;
  exports.format = format;
  exports.url = url;
  exports.numericality = numericality;
  function length(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _length.LengthRule);
  }

  function required(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _required.RequiredRule);
  }

  function date(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _date.DateRule);
  }

  function datetime(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _datetime.DatetimeRule);
  }

  function email(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _email.EmailRule);
  }

  function equality(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _equality.EqualityRule);
  }

  function exclusion(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _exclusion.ExclusionRule);
  }

  function inclusion(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _inclusion.InclusionRule);
  }

  function format(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _format.FormatRule);
  }

  function url(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _url.UrlRule);
  }

  function numericality(targetOrConfig, key, descriptor) {
    return (0, _base.base)(targetOrConfig, key, descriptor, _numericality.NumericalityRule);
  }
});