import {DOM} from 'aurelia-pal';

export class ValidationRenderer {
  renderErrors(node, relevantErrors) {
    this.unrenderErrors(node);
    if (relevantErrors.length) {
      node.parentElement.classList.add('has-error');
      relevantErrors.forEach(error => {
        if (node.parentElement.textContent.indexOf(error.message) === -1) {
          let errorMessageHelper = DOM.createElement('span');
          let errorMessageNode = DOM.createTextNode(error.message);
          errorMessageHelper.appendChild(errorMessageNode);
          errorMessageHelper.classList.add('help-block', 'au-validation');
          node.parentElement.appendChild(errorMessageHelper);
        }
      });
    }
  }
  unrenderErrors(node) {
    let deleteThese = [];
    node.parentElement.classList.remove('has-error');
    let children = node.parentElement.children;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child.classList.contains('help-block') && child.classList.contains('au-validation')) {
        deleteThese.push(child);
      }
    }
    deleteThese.forEach(child => {
      node.parentElement.removeChild(child);
    });
  }
}
