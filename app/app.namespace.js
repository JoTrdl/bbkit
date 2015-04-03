/**
 * Handle module separation.
 * 
 * @type {Object} Application namespace.
 */
(function(window) {

  'use strict';

  var app = {

    // Generic data
    data: {},

    // Module spec.
    module: (function() {
      // Internal module cache.
      var modules = {};

      return function(name) {
        name = name.toLowerCase();

        if (modules[name]) {
          return modules[name];
        }
   
        return modules[name] = {};
      };
    })()
  };

  window.app = app;

})(window);