'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
  var DOM, ValidationRenderer;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('ValidationRenderer', ValidationRenderer = function () {
        function ValidationRenderer() {
          _classCallCheck(this, ValidationRenderer);
        }

        ValidationRenderer.prototype.renderErrors = function renderErrors(node, relevantErrors) {
          if (relevantErrors.length) {
            node.parentElement.classList.add('has-error');
            relevantErrors.forEach(function (error) {
              if (node.parentElement.textContent.indexOf(error.message) === -1) {
                var errorMessageHelper = DOM.createElement('span');
                var errorMessageNode = DOM.createTextNode(error.message);
                errorMessageHelper.appendChild(errorMessageNode);
                errorMessageHelper.classList.add('help-block');
                node.parentElement.appendChild(errorMessageHelper);
              }
            });
          } else {
            this.unrenderErrors(node);
          }
        };

        ValidationRenderer.prototype.unrenderErrors = function unrenderErrors(node) {
          var deleteThese = [];
          node.parentElement.classList.remove('has-error');
          var children = node.parentElement.children;
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.classList.contains('help-block')) {
              deleteThese.push(child);
            }
          }
          deleteThese.forEach(function (child) {
            node.parentElement.removeChild(child);
          });
        };

        return ValidationRenderer;
      }());

      _export('ValidationRenderer', ValidationRenderer);
    }
  };
});