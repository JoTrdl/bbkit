(function(document, Root) {
  
  'use strict';

  var startup = function() {

    // Initialize the main controller
    new Root.Controller();

    // Start history
    Backbone.history.start(); //{pushState: true, hashChange: true}
  };

  $(document).ready(startup);

})(document, app.module('root'));
