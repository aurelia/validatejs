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

var _baseDecorator = require('./base-decorator');

var _length = require('./rules/length');

var _required = require('./rules/required');

var _date = require('./rules/date');

var _datetime = require('./rules/datetime');

var _email = require('./rules/email');

var _equality = require('./rules/equality');

var _exclusion = require('./rules/exclusion');

var _inclusion = require('./rules/inclusion');

var _format = require('./rules/format');

var _url = require('./rules/url');

var _numericality = require('./rules/numericality');

function length(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _length.LengthRule);
}

function required(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _required.RequiredRule);
}

function date(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _date.DateRule);
}

function datetime(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _datetime.DatetimeRule);
}

function email(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _email.EmailRule);
}

function equality(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _equality.EqualityRule);
}

function exclusion(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _exclusion.ExclusionRule);
}

function inclusion(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _inclusion.InclusionRule);
}

function format(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _format.FormatRule);
}

function url(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _url.UrlRule);
}

function numericality(targetOrConfig, key, descriptor) {
  return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _numericality.NumericalityRule);
}