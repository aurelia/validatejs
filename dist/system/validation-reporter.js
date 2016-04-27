"use strict";

System.register([], function (_export, _context) {
  var ValidationObserver, ValidationReporter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function getRandomId() {
    var rand = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    var id = new Date().getTime() + rand;
    return id;
  }

  return {
    setters: [],
    execute: function () {
      _export("ValidationObserver", ValidationObserver = function () {
        function ValidationObserver(reporter, callback) {
          _classCallCheck(this, ValidationObserver);

          this.id = getRandomId();

          this.reporter = reporter;
          this.callback = callback;
        }

        ValidationObserver.prototype.dispose = function dispose() {
          this.reporter.destroyObserver(this);
        };

        return ValidationObserver;
      }());

      _export("ValidationObserver", ValidationObserver);

      _export("ValidationReporter", ValidationReporter = function () {
        function ValidationReporter() {
          _classCallCheck(this, ValidationReporter);

          this.__callbacks__ = {};
        }

        ValidationReporter.prototype.subscribe = function subscribe(callback) {
          var observer = new ValidationObserver(this, callback);
          this.__callbacks__[observer.id] = observer;
          return observer;
        };

        ValidationReporter.prototype.publish = function publish(errors) {
          for (var _iterator = Object.keys(this.__callbacks__), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var key = _ref;

            var observer = this.__callbacks__[key];
            observer.callback(errors);
          }
        };

        ValidationReporter.prototype.destroyObserver = function destroyObserver(observer) {
          delete this.__callbacks__[observer.id];
          return true;
        };

        return ValidationReporter;
      }());

      _export("ValidationReporter", ValidationReporter);
    }
  };
});