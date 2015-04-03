
(function() {
  
  'use strict';

  var dispatcher = _.extend({}, Backbone.Events, {cid: "dispatcher"});

  _.each([
      Backbone.Collection.prototype, 
      Backbone.Model.prototype, 
      Backbone.View.prototype, 
      Backbone.Router.prototype
    ], function(proto) {
      return _.extend(proto, {dispatcher: dispatcher});
  });

})();