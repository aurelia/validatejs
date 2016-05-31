'use strict';

System.register(['./validation-renderer', 'aurelia-dependency-injection', './validation-engine', 'aurelia-binding'], function (_export, _context) {
  var ValidationRenderer, inject, ValidationEngine, getContextFor, _dec, _class, ValidateBindingBehavior;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_validationRenderer) {
      ValidationRenderer = _validationRenderer.ValidationRenderer;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_validationEngine) {
      ValidationEngine = _validationEngine.ValidationEngine;
    }, function (_aureliaBinding) {
      getContextFor = _aureliaBinding.getContextFor;
    }],
    execute: function () {
      _export('ValidateBindingBehavior', ValidateBindingBehavior = (_dec = inject(ValidationRenderer), _dec(_class = function () {
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
          var target = getContextFor(targetProperty, source, 0);
          return target;
        };

        ValidateBindingBehavior.prototype.getReporter = function getReporter(target) {
          return ValidationEngine.getValidationReporter(target);
        };

        return ValidateBindingBehavior;
      }()) || _class));

      _export('ValidateBindingBehavior', ValidateBindingBehavior);
    }
  };
});