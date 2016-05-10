var _dec, _class;

import { ValidationRenderer } from './validation-renderer';
import { inject } from 'aurelia-dependency-injection';

export let ValidateBindingBehavior = (_dec = inject(ValidationRenderer), _dec(_class = class ValidateBindingBehavior {
  constructor(renderer) {
    this.renderer = renderer;
  }
  bind(binding, source) {
    let targetProperty;

    let reporter;
    targetProperty = this.getTargetProperty(binding);

    reporter = this.getReporter(source);

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
    let target = getContextFor(source, targetProperty);
    return target;
  }
  getReporter(source) {
    let reporter;
    if (source.bindingContext.reporter) {
      reporter = source.bindingContext.reporter;
    } else {
      let parentContext = source.overrideContext.parentOverrideContext;
      reporter = parentContext.bindingContext.reporter;
    }
    return reporter;
  }
}) || _class);