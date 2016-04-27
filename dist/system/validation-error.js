'use strict';

System.register([], function (_export, _context) {
  var ValidationError;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('ValidationError', ValidationError = function ValidationError(data) {
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
      });

      _export('ValidationError', ValidationError);
    }
  };
});