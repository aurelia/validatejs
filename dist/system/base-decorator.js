'use strict';

System.register(['./property-observer'], function (_export, _context) {
  var observeProperty;
  return {
    setters: [function (_propertyObserver) {
      observeProperty = _propertyObserver.observeProperty;
    }],
    execute: function () {
      function base(targetOrConfig, key, descriptor, rule) {
        if (key) {
          var target = targetOrConfig;
          targetOrConfig = null;
          return observeProperty(target, key, descriptor, targetOrConfig, rule);
        }
        return function (t, k, d) {
          return observeProperty(t, k, d, targetOrConfig, rule);
        };
      }

      _export('base', base);
    }
  };
});