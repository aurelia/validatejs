var _dec, _class;

import { ValidationRenderer } from './validation-renderer';
import { inject } from 'aurelia-dependency-injection';
import { ValidationEngine } from './validation-engine';
import { getContextFor } from 'aurelia-binding';

export let ValidateBindingBehavior = (_dec = inject(ValidationRenderer), _dec(_class = class ValidateBindingBehavior {
  constructor(renderer) {
    this.renderer = renderer;
  }
  bind(binding, source) {
    let targetProperty;
    let target;
    let reporter;
    targetProperty = this.getTargetProperty(binding);
    target = this.getPropertyContext(source, targetProperty);
    reporter = this.getReporter(target);
    reporter.subscribe(errors => {
      let relevantErrors = errors.filter(error => {
        return error.propertyName === targetProperty;
      });
      this.renderer.renderErrors(binding.target, relevantErrors);
    });
  }
  unbind(binding, source) {}
  getTargetProperty(binding) {
    let targetProperty;
    if (binding.sourceExpression && binding.sourceExpression.expression && binding.sourceExpression.expression.name) {
      targetProperty = binding.sourceExpression.expression.name;
    }
    return targetProperty;
  }
  getPropertyContext(source, targetProperty) {
    let target = getContextFor(targetProperty, source, 0);
    return target;
  }
  getReporter(target) {
    return ValidationEngine.getValidationReporter(target);
  }
}) || _class);