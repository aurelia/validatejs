define(['exports', './validation-renderer', 'aurelia-dependency-injection', './validation-engine', 'aurelia-binding'], function (exports, _validationRenderer, _aureliaDependencyInjection, _validationEngine, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidateBindingBehavior = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var ValidateBindingBehavior = exports.ValidateBindingBehavior = (_dec = (0, _aureliaDependencyInjection.inject)(_validationRenderer.ValidationRenderer), _dec(_class = function () {
    function ValidateBindingBehavior(renderer) {
      _classCallCheck(this, ValidateBindingBehavior);

      this.renderer = renderer;
    }

    ValidateBindingBehavior.prototype.bind = function bind(binding, source) {
      var _this = this;

      var targetProperty = void 0;
      var target = void 0;
      var reporter = void 0;
      targetProperty = this.getTargetProperty(binding);
      target = this.getPropertyContext(source, targetProperty);
      reporter = this.getReporter(target);
      reporter.subscribe(function (errors) {
        var relevantErrors = errors.filter(function (error) {
          return error.propertyName === targetProperty;
        });
        _this.renderer.renderErrors(binding.target, relevantErrors);
      });
    };

    ValidateBindingBehavior.prototype.unbind = function unbind(binding, source) {};

    ValidateBindingBehavior.prototype.getTargetProperty = function getTargetProperty(binding) {
      var targetProperty = void 0;
      if (binding.sourceExpression && binding.sourceExpression.expression && binding.sourceExpression.expression.name) {
        targetProperty = binding.sourceExpression.expression.name;
      }
      return targetProperty;
    };

    ValidateBindingBehavior.prototype.getPropertyContext = function getPropertyContext(source, targetProperty) {
      var target = (0, _aureliaBinding.getContextFor)(targetProperty, source, 0);
      return target;
    };

    ValidateBindingBehavior.prototype.getReporter = function getReporter(target) {
      return _validationEngine.ValidationEngine.getValidationReporter(target);
    };

    return ValidateBindingBehavior;
  }()) || _class);
});