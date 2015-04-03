(function(Root) {
  
  'use strict';

  var ModuleRouter = Backbone.Router.extend({

    routes: {
      "": "invokeRoot",
      ":module(/*subroute)" : "invoke"
    },

    initialize: function($el) {
      this.$el = $el;
      this.controllers = {};
    },

    invokeRoot: function () {
      this.navigate('/home', {trigger: true, replace: true});
    },

    invoke: function(route, subroute) {
      route = route.toLowerCase();

      var module = app.module(route);
      if (!module) return;

      if (!this.controllers[route]) {
        this.controllers[route] = new module.Controller({route: route, el: this.$el});
      }
    }

  }); // ModuleRouter - private

  Root.Controller = Backbone.View.extend({

    initialize: function() {

      this.view = new Root.View();
      this.view.render();

      this.router = new ModuleRouter($('.content'));
      this.dispatcher.trigger('log', 'Root controller initialized.');
    }

  });

})(app.module('root'));
