define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationError = exports.ValidationError = function ValidationError(data) {
    _classCallCheck(this, ValidationError);

    this.message = '';
    this.propertyName = '';

    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        var properties = {
          propertyName: prop,
          message: data[prop][0]
        };
        Object.assign(this, properties);
      }
    }
  };
});