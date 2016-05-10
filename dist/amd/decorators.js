define(['exports', './validation-rule', './base-decorator'], function (exports, _validationRule, _baseDecorator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.length = length;
  exports.presence = presence;
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
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.lengthRule);
  }

  function presence(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.presence);
  }

  function required(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.presence);
  }

  function date(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.date);
  }

  function datetime(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.datetime);
  }

  function email(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.email);
  }

  function equality(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.equality);
  }

  function exclusion(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.exclusion);
  }

  function inclusion(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.inclusion);
  }

  function format(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.format);
  }

  function url(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.url);
  }

  function numericality(targetOrConfig, key, descriptor) {
    return (0, _baseDecorator.base)(targetOrConfig, key, descriptor, _validationRule.ValidationRule.numericality);
  }
});