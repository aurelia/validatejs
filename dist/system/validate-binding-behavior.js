'use strict';

System.register(['./validation-renderer'], function (_export, _context) {
  var ValidationRenderer, _class, _temp, ValidateBindingBehavior;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_validationRenderer) {
      ValidationRenderer = _validationRenderer.ValidationRenderer;
    }],
    execute: function () {
      _export('ValidateBindingBehavior', ValidateBindingBehavior = (_temp = _class = function () {
        function ValidateBindingBehavior(renderer) {
          _classCallCheck(this, ValidateBindingBehavior);

          this.renderer = renderer;
        }

        ValidateBindingBehavior.prototype.bind = function bind(binding, source) {
          var _this = this;

          var targetProperty = void 0;

          var reporter = void 0;
          targetProperty = this.getTargetProperty(binding);

          reporter = this.getReporter(source);

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
          var target = getContextFor(source, targetProperty);
          return target;
        };

        ValidateBindingBehavior.prototype.getReporter = function getReporter(source) {
          var reporter = void 0;
          if (source.bindingContext.reporter) {
            reporter = source.bindingContext.reporter;
          } else {
            var parentContext = source.overrideContext.parentOverrideContext;
            reporter = parentContext.bindingContext.reporter;
          }
          return reporter;
        };

        return ValidateBindingBehavior;
      }(), _class.inject = [ValidationRenderer], _temp));

      _export('ValidateBindingBehavior', ValidateBindingBehavior);
    }
  };
});