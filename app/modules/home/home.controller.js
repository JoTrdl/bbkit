(function(Home) {
  
  'use strict';

  var ModuleSubRouter = Backbone.SubRoute.extend({

    routes: {
      "": "root",
      "b": "subRoute"
    },

    initialize: function ($el) {
      this.$el = $el;
      this.on('route', this.logRoute, this);
    },

    loadView : function(view) {
      this.view && this.view.remove();
      this.view = view;
      this.view.render();
      this.$el.html(this.view.$el);
    },

    root: function () {
      this.loadView(new Home.ViewA());
    },

    subRoute: function() {
      this.loadView(new Home.ViewB());
    },

    logRoute: function(route) {
      this.dispatcher.trigger('log', 'Home controller: matched route [' + Backbone.history.getFragment() + '].');
    }

  }); // Router


  Home.Controller = Backbone.View.extend({
    
    initialize: function(options) {
      this.dispatcher.trigger('log', 'Home controller initialized with base [' + options.route + ']');
      this.router = new ModuleSubRouter(options.route, this.$el);
    },

    remove: function() {
      this.dispatcher.trigger('log', 'Home controller removed.');
      Backbone.View.prototype.remove.apply(this);
    }
  });


})(app.module('home'));
