import {EventManager} from 'aurelia-binding';
import {DOM} from 'aurelia-pal';

export class BootstrapFormGroupRendererBindingBehavior {
  static inject = [EventManager];

  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  bind(binding, source, reporter) {
    let targetProperty;
    if (binding.sourceExpression && binding.sourceExpression.expression && binding.sourceExpression.expression.name) {
      targetProperty = binding.sourceExpression.expression.name;
    }
    reporter.subscribe(errors => {
      let relevantErrors = errors.filter(error => {
        return error.propertyName === targetProperty;
      });
      if (relevantErrors.length) {
        // TODO: Switch to the view slot
        binding.target.parentElement.classList.add('has-error');
        relevantErrors.forEach(error => {
          if (binding.target.parentElement.textContent.indexOf(error.message) === -1) {
            // TODO: Switch to the view slot
            let errorMessageHelper = DOM.createElement('span');
            let errorMessageNode = DOM.createTextNode(error.message);
            errorMessageHelper.appendChild(errorMessageNode); //add the text node to the newly created div.
            errorMessageHelper.classList.add('help-block');
            binding.target.parentElement.appendChild(errorMessageHelper);
          }
        });
      } else {
        let deleteThese = [];
        binding.target.parentElement.classList.remove('has-error');
        let children = binding.target.parentElement.children;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          if (child.classList.contains('help-block')) {
            deleteThese.push(child);
          }
        }
        deleteThese.forEach(child => {
          binding.target.parentElement.removeChild(child);
        });
      }
    });
  }

  unbind(binding, source) {
    // TODO: restore the state of the binding.
  }
}
